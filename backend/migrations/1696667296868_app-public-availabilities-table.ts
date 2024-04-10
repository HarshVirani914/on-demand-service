/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
      alter table app_public.availabilities
      add constraint availabilities_company_id_unique unique (company_id);
    `
  );
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint(
    { schema: 'app_public', name: 'availabilities' },
    'availabilities_company_id_unique'
  );
}
