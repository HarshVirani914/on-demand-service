import { Build } from 'graphile-build';
import { GraphileHelpers } from 'graphile-utils/node8plus/fieldHelpers';
import { GraphQLResolveInfo } from 'graphql';
import { OurGraphQLContext } from '../middleware/installPostGraphile';

export const register = async (
  args: any,
  context: OurGraphQLContext,
  resolveInfo: GraphQLResolveInfo & {
    graphile: GraphileHelpers<any>;
  },
  build: Build
) => {
  const { selectGraphQLResultFromTable } = resolveInfo.graphile;
  const { name, password, email } = args.input;
  const { rootPgPool, login, pgClient } = context;

  try {
    // Create a user and create a session for it in the proccess
    const {
      rows: [details],
    } = await rootPgPool.query(
      `
            with new_user as (
              select users.* from app_private.create_user(
                name => $1,
                email => $2,
                password => $3
              ) users where not (users is null)
            ), new_session as (
              insert into app_private.sessions (user_id)
              select id from new_user
              returning *
            )
            select new_user.id as user_id, new_session.id as session_id
            from new_user, new_session`,
      [name, email, password]
    );

    if (!details || !details.user_id) {
      const e: any = new Error('Registration failed');
      e['code'] = 'FFFFF';
      throw e;
    }

    if (details.session_id) {
      // Store into transaction
      await pgClient.query(
        `select set_config('jwt.claims.session_id', $1, true)`,
        [details.session_id]
      );
    }
    // Tell Passport.js we're logged in
    const token = await login({ session_id: details.session_id });

    // Fetch the data that was requested from GraphQL, and return it
    const sql = build.pgSql;
    const [row] = await selectGraphQLResultFromTable(
      sql.fragment`app_public.users`,
      (tableAlias, sqlBuilder) => {
        sqlBuilder.where(
          sql.fragment`${tableAlias}.id = ${sql.value(details.user_id)}`
        );
      }
    );
    return {
      token,
      data: row,
    };
  } catch (e: any) {
    const { code } = e;
    const safeErrorCodes = ['WEAKP', 'LOCKD', 'EMTKN'];
    if (safeErrorCodes.includes(code)) {
      throw e;
    } else {
      console.error(
        'Unrecognised error in PassportLoginPlugin; replacing with sanitized version'
      );
      console.error(e);
      const error: any = new Error('Registration failed');
      error['code'] = code;
      throw error;
    }
  }
};

export const registerCompany = async (
  args: any,
  context: OurGraphQLContext,
  resolveInfo: GraphQLResolveInfo & {
    graphile: GraphileHelpers<any>;
  },
  build: Build
) => {
  const { selectGraphQLResultFromTable } = resolveInfo.graphile;
  const {
    name,
    password,
    email,
    companyName,
    contactNumber,
    address,
    categoryId,
    shopOpen,
    shopClose,
    description
  } = args.input;
  const { rootPgPool, login, pgClient } = context;

  try {
    // Create a user and create a session for it in the proccess
    const {
      rows: [details],
    } = await rootPgPool.query(
      `
            with new_user as (
              select users.* from app_private.create_user(
                name => $1,
                email => $2,
                password => $3
              ) users where not (users is null)
            ), new_session as (
              insert into app_private.sessions (user_id)
              select id from new_user
              returning *
            ), new_company as (
              insert into app_public.companies (name, user_id, is_verified, description) values
                ($6, (select id from new_user), false, $7)
                returning *
            ), new_address as (
              insert into app_public.addresses (address, contact_number, user_id, company_id, is_primary) values
                ($4, $5, (select id from new_user), (select id from new_company), true)
                returning *
            ), 
            new_company_category as (
              insert into app_public.company_categories (company_id, category_id) values
                ((select id from new_company), $8)
                returning *
            ), new_company_availability as (
              insert into app_public.availabilities (company_id, start_time, end_time) values
                ((select id from new_company), $9, $10)
                returning *
            )
            select new_user.id as user_id, new_session.id as session_id, new_address.id as address_id, new_company.id as company_id, new_company_category.id as company_category_id, new_company_availability.id as company_availability_id
            from new_user, new_session, new_address, new_company, new_company_category, new_company_availability`,
      [name, email, password, address, contactNumber, companyName, description, categoryId, shopOpen, shopClose]
    );
    if (!details || !details.user_id) {
      const e: any = new Error('Registration failed');
      e['code'] = 'FFFFF';
      throw e;
    }

    if (details.session_id) {
      // Store into transaction
      await pgClient.query(
        `select set_config('jwt.claims.session_id', $1, true)`,
        [details.session_id]
      );
    }
    // Tell Passport.js we're logged in
    const token = await login({ session_id: details.session_id });

    // Fetch the data that was requested from GraphQL, and return it
    const sql = build.pgSql;
    const [row] = await selectGraphQLResultFromTable(
      sql.fragment`app_public.companies`,
      (tableAlias, sqlBuilder) => {
        sqlBuilder.where(
          sql.fragment`${tableAlias}.id = ${sql.value(details.company_id)}`
        );
      }
    );
    return {
      token,
      data: row,
    };
  } catch (e: any) {
    const { code } = e;
    const safeErrorCodes = ['WEAKP', 'LOCKD', 'EMTKN'];
    if (safeErrorCodes.includes(code)) {
      throw e;
    } else {
      console.error(
        'Unrecognised error in PassportLoginPlugin; replacing with sanitized version'
      );
      console.error(e);
      const error: any = new Error('Registration failed');
      error['code'] = code;
      throw error;
    }
  }
};
