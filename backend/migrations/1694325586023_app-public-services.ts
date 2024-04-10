/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
    create table app_public.services (
      id uuid primary key default gen_random_uuid(),
      name text not null,
      description text not null,
      price integer not null,
      company_id uuid not null,
      category_id uuid not null,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );

    alter table app_public.services 
    add constraint services_company_id_fkey 
    foreign key (company_id) references app_public.companies on delete cascade;

    alter table app_public.services
    add constraint services_category_id_fkey
    foreign key (category_id) references app_public.categories on delete cascade;

    create index on app_public.services (name);

    create index on app_public.services (company_id);

    create index on app_public.services (category_id);

    grant select on app_public.services to ${process.env.DATABASE_VISITOR};

    grant insert(name, description, price, company_id, category_id) on app_public.services to ${process.env.DATABASE_VISITOR};

    grant update(name, description, price, company_id, category_id) on app_public.services to ${process.env.DATABASE_VISITOR};
    `
  );
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint(
    { schema: 'app_public', name: 'services' },
    'services_company_id_fkey'
  );
  pgm.dropConstraint(
    { schema: 'app_public', name: 'services' },
    'services_category_id_fkey'
  );
  pgm.dropTable({ schema: 'app_public', name: 'services' });
}
