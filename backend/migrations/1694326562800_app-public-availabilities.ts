/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
    create table app_public.availabilities (
      id uuid primary key default gen_random_uuid(),
      company_id uuid not null,
      start_time time not null,
      end_time time not null,
      created_at timestamptz not null default now()
    );

    alter table app_public.availabilities
    add constraint availabilities_company_id_fkey
    foreign key (company_id) references app_public.companies on delete cascade;

    create index on app_public.availabilities (company_id);

    grant select on app_public.availabilities to ${process.env.DATABASE_VISITOR};

    grant insert(company_id, start_time, end_time) on app_public.availabilities to ${process.env.DATABASE_VISITOR};

    grant update(company_id, start_time, end_time) on app_public.availabilities to ${process.env.DATABASE_VISITOR};

    grant delete on app_public.availabilities to ${process.env.DATABASE_VISITOR};
    `
  );
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint(
    { schema: 'app_public', name: 'availabilities' },
    'availabilities_company_id_fkey'
  );
  pgm.dropTable({ schema: 'app_public', name: 'availabilities' });
}
