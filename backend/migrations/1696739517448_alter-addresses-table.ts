/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
      alter table app_public.addresses
      add column company_id uuid unique;

      alter table app_public.addresses
      add constraint addresses_company_id_fkey
      foreign key ("company_id") references app_public.companies on delete cascade;

      create index on app_public.addresses (company_id);

      grant select on app_public.addresses to ${process.env.DATABASE_VISITOR};

      grant insert(address, contact_number, user_id, is_primary, company_id) on app_public.addresses to ${process.env.DATABASE_VISITOR};

      grant update(address, contact_number, user_id, is_primary, company_id) on app_public.addresses to ${process.env.DATABASE_VISITOR};

      grant delete on app_public.addresses to ${process.env.DATABASE_VISITOR};
    `
  )
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint(
    { schema: 'app_public', name: 'addresses' },
    'addresses_company_id_fkey'
  );
  pgm.dropColumn({ schema: 'app_public', name: 'addresses' }, 'company_id');
}
