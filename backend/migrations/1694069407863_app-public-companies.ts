/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
    create table app_public.companies (
      id uuid primary key default gen_random_uuid(),
      name text not null,
      user_id uuid not null,
      is_verified boolean not null default false,
      description text,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );

    alter table app_public.companies
    add constraint companies_user_id_fkey
    foreign key ("user_id") references app_public.users on delete cascade;

    create index on app_public.companies (user_id);

    grant select on app_public.companies to ${process.env.DATABASE_VISITOR};

    grant insert(name, user_id, is_verified, description) on app_public.companies to ${process.env.DATABASE_VISITOR};

    grant update(name, user_id, is_verified, description) on app_public.companies to ${process.env.DATABASE_VISITOR};

    grant delete on app_public.companies to ${process.env.DATABASE_VISITOR};
    `
  );

  // pgm.createIndex({ schema: 'app_public', name: 'companies' }, ['user_id', 'address_id']);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint(
    { schema: 'app_public', name: 'companies' },
    'companies_user_id_fkey'
  );
  pgm.dropTable({ schema: 'app_public', name: 'companies' });
}
