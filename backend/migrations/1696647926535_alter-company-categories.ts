/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
      alter table app_public.company_categories
      add constraint company_categories_company_id_unique unique (company_id);
      `
  );
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
      alter table app_public.company_categories
      drop constraint company_categories_company_id_unique;
    `
  );
}
