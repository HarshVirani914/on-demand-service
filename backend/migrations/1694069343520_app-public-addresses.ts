/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(`
    create table app_public.addresses (
      id uuid primary key default gen_random_uuid(),
      address text,
      contact_number text check (contact_number ~ '^[0-9]{10}$'),
      user_id uuid not null,
      is_primary boolean not null default false,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
  );

  alter table app_public.addresses
  add constraint addresses_user_id_fkey
  foreign key ("user_id") references app_public.users on delete cascade;

  grant select on app_public.addresses to ${process.env.DATABASE_VISITOR};

  grant insert(address, contact_number, user_id, is_primary) on app_public.addresses to ${process.env.DATABASE_VISITOR};

  grant update(address, contact_number, user_id, is_primary) on app_public.addresses to ${process.env.DATABASE_VISITOR};

  grant delete on app_public.addresses to ${process.env.DATABASE_VISITOR};

`);

  pgm.createIndex({ schema: 'app_public', name: 'addresses' }, 'user_id');
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint(
    { schema: 'app_public', name: 'addresses' },
    'addresses_user_id_fkey'
  );
  pgm.dropTable({ schema: 'app_public', name: 'addresses' });
}
