/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
    grant delete on app_public.services to ${process.env.DATABASE_VISITOR};
    `
  )
}

export async function down(pgm: MigrationBuilder): Promise<void> {
}
