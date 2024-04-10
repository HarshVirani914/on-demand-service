/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
      create index on app_public.categories (slug);
    `
  )
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropIndex({ schema: 'app_public', name: 'categories' }, 'slug');
}
