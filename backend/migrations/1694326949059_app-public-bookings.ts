/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
    create table app_public.bookings (
      id uuid primary key default gen_random_uuid(),
      user_id uuid not null,
      service_id uuid not null,
      availability_id uuid not null,
      address_id uuid not null,
      status text not null default 'pending',
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );

    alter table app_public.bookings
    add constraint bookings_user_id_fkey
    foreign key (user_id) references app_public.users on delete set null;

    alter table app_public.bookings
    add constraint bookings_service_id_fkey
    foreign key (service_id) references app_public.services on delete set null;

    alter table app_public.bookings
    add constraint bookings_availability_id_fkey
    foreign key (availability_id) references app_public.availabilities on delete set null;

    alter table app_public.bookings
    add constraint bookings_address_id_fkey
    foreign key (address_id) references app_public.addresses on delete set null;

    create index on app_public.bookings (user_id);

    create index on app_public.bookings (service_id);

    create index on app_public.bookings (availability_id);

    create index on app_public.bookings (address_id);

    grant select on app_public.bookings to ${process.env.DATABASE_VISITOR};

    grant insert(user_id, service_id, availability_id, address_id) on app_public.bookings to ${process.env.DATABASE_VISITOR};

    grant update(status) on app_public.bookings to ${process.env.DATABASE_VISITOR};

    grant delete on app_public.bookings to ${process.env.DATABASE_VISITOR};
    `
  );
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint(
    { schema: 'app_public', name: 'bookings' },
    'bookings_user_id_fkey'
  );

  pgm.dropConstraint(
    { schema: 'app_public', name: 'bookings' },
    'bookings_service_id_fkey'
  );

  pgm.dropConstraint(
    { schema: 'app_public', name: 'bookings' },
    'bookings_availability_id_fkey'
  );

  pgm.dropConstraint(
    { schema: 'app_public', name: 'bookings' },
    'bookings_address_id_fkey'
  );

  pgm.dropTable({ schema: 'app_public', name: 'bookings' });
}
