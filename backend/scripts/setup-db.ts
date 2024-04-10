import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const setupDB = async () => {
  const {
    DATABASE_AUTHENTICATOR,
    DATABASE_AUTHENTICATOR_PASSWORD,
    DATABASE_NAME,
    DATABASE_OWNER,
    DATABASE_OWNER_PASSWORD,
    DATABASE_VISITOR,
    ROOT_DATABASE_URL,
    CONFIRM_DROP,
  } = process.env;

  if (!CONFIRM_DROP) {
    const { default: inquirer } = await import('inquirer');
    const input = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        default: false,
        message: `
          We're going to drop (if necessary):

          - database ${DATABASE_NAME}
          - database ${DATABASE_NAME}_shadow
          - database role ${DATABASE_VISITOR} (cascade)
          - database role ${DATABASE_AUTHENTICATOR} (cascade)
          - database role ${DATABASE_OWNER}
        `,
      },
    ]);

    if (!input.confirm) {
      console.error('Confirmation failed; exiting');
      process.exit(1);
    }
  }

  console.log('Installing or reinstalling the roles and database...');

  const pgPool = new pg.Pool({
    connectionString: ROOT_DATABASE_URL,
  });

  pgPool.on('error', (err) => {
    console.log(
      'An error occurred whilst trying to talk to the database: ' + err.message
    );
  });

  try {
    await pgPool.query('select true as "Connection test";');
  } catch (e: any) {
    if (e.code === '28P01') {
      throw e;
    }
  }

  const client = await pgPool.connect();

  try {
    // RESET database
    await client.query(`DROP DATABASE IF EXISTS ${DATABASE_NAME};`);
    await client.query(`DROP DATABASE IF EXISTS ${DATABASE_NAME}_shadow;`);
    await client.query(`DROP DATABASE IF EXISTS ${DATABASE_NAME}_test;`);
    await client.query(`DROP ROLE IF EXISTS ${DATABASE_VISITOR};`);
    await client.query(`DROP ROLE IF EXISTS ${DATABASE_AUTHENTICATOR};`);
    await client.query(`DROP ROLE IF EXISTS ${DATABASE_OWNER};`);

    // Now to set up the database cleanly:

    // This is the root role for the database`);
    await client.query(
      // IMPORTANT: don't grant SUPERUSER in production, we only need this so we can load the watch fixtures!
      `CREATE ROLE ${DATABASE_OWNER} WITH LOGIN PASSWORD '${DATABASE_OWNER_PASSWORD}' SUPERUSER;`
    );

    // This is the no-access role that PostGraphile will run as by default`);
    await client.query(
      `CREATE ROLE ${DATABASE_AUTHENTICATOR} WITH LOGIN PASSWORD '${DATABASE_AUTHENTICATOR_PASSWORD}' NOINHERIT;`
    );

    // This is the role that PostGraphile will switch to (from ${DATABASE_AUTHENTICATOR}) during a GraphQL request
    await client.query(`CREATE ROLE ${DATABASE_VISITOR};`);

    // This enables PostGraphile to switch from ${DATABASE_AUTHENTICATOR} to ${DATABASE_VISITOR}
    await client.query(
      `GRANT ${DATABASE_VISITOR} TO ${DATABASE_AUTHENTICATOR};`
    );

    await client.query(
      `CREATE DATABASE ${DATABASE_NAME} OWNER ${DATABASE_OWNER}`
    );
  } finally {
    client.release();
  }
  await pgPool.end();

  console.log('\n\nRoles and database installed or reinstalled');
};

setupDB().catch((e) => {
  console.error(e);
  process.exit(1);
});
