/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(`
    create table app_public.categories (
      id uuid primary key default gen_random_uuid(),
      name text not null unique,
      slug text unique not null,
      parent_id uuid,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );

  alter table app_public.categories 
  add constraint categories_parent_id_fkey 
  foreign key (parent_id) references app_public.categories (id) on delete set null;

  create index on app_public.categories (name);

  create index on app_public.categories (parent_id);

  grant select on app_public.categories to ${process.env.DATABASE_VISITOR};

  grant insert(name, slug, parent_id) on app_public.categories to ${process.env.DATABASE_VISITOR};

  grant update(name, slug, parent_id) on app_public.categories to ${process.env.DATABASE_VISITOR};

  grant delete on app_public.categories to ${process.env.DATABASE_VISITOR};

`);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint(
    { schema: 'app_public', name: 'categories' },
    'categories_parent_id_fkey'
  );
  pgm.dropTable({ schema: 'app_public', name: 'categories' });
}
