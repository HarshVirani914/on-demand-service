/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
      alter table app_public.categories
      add column description text not null;

      grant select on app_public.categories to ${process.env.DATABASE_VISITOR};

      grant insert(name, slug, parent_id, description) on app_public.categories to ${process.env.DATABASE_VISITOR};

      grant update(name, slug, parent_id, description) on app_public.categories to ${process.env.DATABASE_VISITOR};

      grant delete on app_public.categories to ${process.env.DATABASE_VISITOR};
    `
  )
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropColumn({ schema: 'app_public', name: 'categories' }, 'description');
}
