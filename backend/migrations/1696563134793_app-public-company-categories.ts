/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
    create table app_public.company_categories (
      id uuid primary key default gen_random_uuid(),
      company_id uuid not null,
      category_id uuid not null,
      created_at timestamptz not null default now()
    );

    alter table app_public.company_categories
    add constraint company_categories_company_id_fkey
    foreign key (company_id) references app_public.companies on delete cascade;

    alter table app_public.company_categories
    add constraint company_categories_category_id_fkey
    foreign key (category_id) references app_public.categories on delete set null;

    create index on app_public.company_categories (company_id);

    create index on app_public.company_categories (category_id);

    grant select on app_public.company_categories to ${process.env.DATABASE_VISITOR};

    grant insert(company_id, category_id) on app_public.company_categories to ${process.env.DATABASE_VISITOR};

    grant update(company_id, category_id) on app_public.company_categories to ${process.env.DATABASE_VISITOR};

    grant delete on app_public.company_categories to ${process.env.DATABASE_VISITOR};
    `
  )
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint(
    { schema: 'app_public', name: 'company_categories' },
    'company_categories_company_id_fkey'
  );
  pgm.dropConstraint(
    { schema: 'app_public', name: 'company_categories' },
    'company_categories_category_id_fkey'
  );
  pgm.dropTable({ schema: 'app_public', name: 'company_categories' });
}
