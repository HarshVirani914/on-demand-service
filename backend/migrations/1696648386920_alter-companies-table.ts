/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
      alter table app_public.companies
      add constraint companies_user_id_unique unique (user_id);
    `
  );
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
      alter table app_public.companies
      drop constraint companies_user_id_unique;
    `
  );
}
