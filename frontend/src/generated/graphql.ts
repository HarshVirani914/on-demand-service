import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Cursor: { input: any; output: any };
  Datetime: { input: any; output: any };
  Time: { input: any; output: any };
  UUID: { input: any; output: any };
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Availability`. */
  availabilitiesByBookingAddressIdAndAvailabilityId: AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** Reads a single `Company` that is related to this `Address`. */
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['UUID']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  isPrimary: Scalars['Boolean']['output'];
  /** Reads and enables pagination through a set of `Service`. */
  servicesByBookingAddressIdAndServiceId: AddressServicesByBookingAddressIdAndServiceIdManyToManyConnection;
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Address`. */
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `User`. */
  usersByBookingAddressIdAndUserId: AddressUsersByBookingAddressIdAndUserIdManyToManyConnection;
};

export type AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  filter?: InputMaybe<AvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

export type AddressBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  filter?: InputMaybe<BookingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

export type AddressServicesByBookingAddressIdAndServiceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  filter?: InputMaybe<ServiceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

export type AddressUsersByBookingAddressIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** The fields on `address` to look up the row to connect. */
export type AddressAddressesCompanyIdKeyConnect = {
  companyId: Scalars['UUID']['input'];
};

/** The fields on `address` to look up the row to delete. */
export type AddressAddressesCompanyIdKeyDelete = {
  companyId: Scalars['UUID']['input'];
};

/** The fields on `address` to look up the row to connect. */
export type AddressAddressesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `address` to look up the row to delete. */
export type AddressAddressesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A connection to a list of `Availability` values, with data from `Booking`. */
export type AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyConnection =
  {
    __typename?: 'AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyConnection';
    /** A list of edges which contains the `Availability`, info from the `Booking`, and the cursor to aid in pagination. */
    edges: Array<AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyEdge>;
    /** A list of `Availability` objects. */
    nodes: Array<Availability>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Availability` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Availability` edge in the connection, with data from `Booking`. */
export type AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyEdge =
  {
    __typename?: 'AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyEdge';
    /** Reads and enables pagination through a set of `Booking`. */
    bookings: BookingsConnection;
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']['output']>;
    /** The `Availability` at the end of the edge. */
    node: Availability;
  };

/** A `Availability` edge in the connection, with data from `Booking`. */
export type AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `Address` object types. All fields are combined with a logical ‘and.’ */
export type AddressFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AddressFilter>>;
  /** Filter by the object’s `bookings` relation. */
  bookings?: InputMaybe<AddressToManyBookingFilter>;
  /** Some related `bookings` exist. */
  bookingsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `company` relation. */
  company?: InputMaybe<CompanyFilter>;
  /** A related `company` exists. */
  companyExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `companyId` field. */
  companyId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AddressFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AddressFilter>>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `Address` */
export type AddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** The fields on `address` to look up the row to update. */
export type AddressOnAddressForAddressesCompanyIdFkeyUsingAddressesCompanyIdKeyUpdate =
  {
    companyId: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `address` being updated. */
    patch: UpdateAddressOnAddressForAddressesCompanyIdFkeyPatch;
  };

/** The fields on `address` to look up the row to update. */
export type AddressOnAddressForAddressesCompanyIdFkeyUsingAddressesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `address` being updated. */
    patch: UpdateAddressOnAddressForAddressesCompanyIdFkeyPatch;
  };

/** The fields on `address` to look up the row to update. */
export type AddressOnAddressForAddressesUserIdFkeyUsingAddressesCompanyIdKeyUpdate =
  {
    companyId: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `address` being updated. */
    patch: UpdateAddressOnAddressForAddressesUserIdFkeyPatch;
  };

/** The fields on `address` to look up the row to update. */
export type AddressOnAddressForAddressesUserIdFkeyUsingAddressesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `address` being updated. */
  patch: UpdateAddressOnAddressForAddressesUserIdFkeyPatch;
};

/** The fields on `address` to look up the row to update. */
export type AddressOnBookingForBookingsAddressIdFkeyUsingAddressesCompanyIdKeyUpdate =
  {
    companyId: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `address` being updated. */
    patch: UpdateAddressOnBookingForBookingsAddressIdFkeyPatch;
  };

/** The fields on `address` to look up the row to update. */
export type AddressOnBookingForBookingsAddressIdFkeyUsingAddressesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `address` being updated. */
  patch: UpdateAddressOnBookingForBookingsAddressIdFkeyPatch;
};

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** A connection to a list of `Service` values, with data from `Booking`. */
export type AddressServicesByBookingAddressIdAndServiceIdManyToManyConnection =
  {
    __typename?: 'AddressServicesByBookingAddressIdAndServiceIdManyToManyConnection';
    /** A list of edges which contains the `Service`, info from the `Booking`, and the cursor to aid in pagination. */
    edges: Array<AddressServicesByBookingAddressIdAndServiceIdManyToManyEdge>;
    /** A list of `Service` objects. */
    nodes: Array<Service>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Service` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Service` edge in the connection, with data from `Booking`. */
export type AddressServicesByBookingAddressIdAndServiceIdManyToManyEdge = {
  __typename?: 'AddressServicesByBookingAddressIdAndServiceIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Service` at the end of the edge. */
  node: Service;
};

/** A `Service` edge in the connection, with data from `Booking`. */
export type AddressServicesByBookingAddressIdAndServiceIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** A filter to be used against many `Booking` object types. All fields are combined with a logical ‘and.’ */
export type AddressToManyBookingFilter = {
  /** Every related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BookingFilter>;
  /** No related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BookingFilter>;
  /** Some related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BookingFilter>;
};

/** A connection to a list of `User` values, with data from `Booking`. */
export type AddressUsersByBookingAddressIdAndUserIdManyToManyConnection = {
  __typename?: 'AddressUsersByBookingAddressIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<AddressUsersByBookingAddressIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection, with data from `Booking`. */
export type AddressUsersByBookingAddressIdAndUserIdManyToManyEdge = {
  __typename?: 'AddressUsersByBookingAddressIdAndUserIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** A `User` edge in the connection, with data from `Booking`. */
export type AddressUsersByBookingAddressIdAndUserIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** The `address` to be created by this mutation. */
export type AddressesCompanyIdFkeyAddressesCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** The `company` to be created by this mutation. */
export type AddressesCompanyIdFkeyCompaniesCreateInput = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** Input for the nested mutation of `company` in the `AddressInput` mutation. */
export type AddressesCompanyIdFkeyInput = {
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCompaniesPkeyConnect>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectByUserId?: InputMaybe<CompanyCompaniesUserIdUniqueConnect>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<AddressesCompanyIdFkeyCompaniesCreateInput>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteByUserId?: InputMaybe<CompanyCompaniesUserIdUniqueDelete>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnAddressForAddressesCompanyIdFkeyUsingCompaniesPkeyUpdate>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateByUserId?: InputMaybe<CompanyOnAddressForAddressesCompanyIdFkeyUsingCompaniesUserIdUniqueUpdate>;
};

/** Input for the nested mutation of `address` in the `CompanyInput` mutation. */
export type AddressesCompanyIdFkeyInverseInput = {
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectByCompanyId?: InputMaybe<AddressAddressesCompanyIdKeyConnect>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectById?: InputMaybe<AddressAddressesPkeyConnect>;
  /** A `AddressInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<AddressesCompanyIdFkeyAddressesCreateInput>>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteByCompanyId?: InputMaybe<AddressAddressesCompanyIdKeyDelete>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteById?: InputMaybe<AddressAddressesPkeyDelete>;
  /** Flag indicating whether all other `address` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateByCompanyId?: InputMaybe<AddressOnAddressForAddressesCompanyIdFkeyUsingAddressesCompanyIdKeyUpdate>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateById?: InputMaybe<AddressOnAddressForAddressesCompanyIdFkeyUsingAddressesPkeyUpdate>;
};

/** A connection to a list of `Address` values. */
export type AddressesConnection = {
  __typename?: 'AddressesConnection';
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressesEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Address>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Address` edge in the connection. */
export type AddressesEdge = {
  __typename?: 'AddressesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Address` at the end of the edge. */
  node: Address;
};

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
}

/** The `address` to be created by this mutation. */
export type AddressesUserIdFkeyAddressesCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** Input for the nested mutation of `user` in the `AddressInput` mutation. */
export type AddressesUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<AddressesUserIdFkeyUsersCreateInput>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<UserUsersPkeyDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnAddressForAddressesUserIdFkeyUsingUsersPkeyUpdate>;
};

/** Input for the nested mutation of `address` in the `UserInput` mutation. */
export type AddressesUserIdFkeyInverseInput = {
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectByCompanyId?: InputMaybe<Array<AddressAddressesCompanyIdKeyConnect>>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectById?: InputMaybe<Array<AddressAddressesPkeyConnect>>;
  /** A `AddressInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<AddressesUserIdFkeyAddressesCreateInput>>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteByCompanyId?: InputMaybe<Array<AddressAddressesCompanyIdKeyDelete>>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<AddressAddressesPkeyDelete>>;
  /** Flag indicating whether all other `address` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateByCompanyId?: InputMaybe<
    Array<AddressOnAddressForAddressesUserIdFkeyUsingAddressesCompanyIdKeyUpdate>
  >;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<AddressOnAddressForAddressesUserIdFkeyUsingAddressesPkeyUpdate>
  >;
};

/** The `user` to be created by this mutation. */
export type AddressesUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** The `availability` to be created by this mutation. */
export type AvailabilitiesCompanyIdFkeyAvailabilitiesCreateInput = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime: Scalars['Time']['input'];
  startTime: Scalars['Time']['input'];
};

/** The `company` to be created by this mutation. */
export type AvailabilitiesCompanyIdFkeyCompaniesCreateInput = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** Input for the nested mutation of `company` in the `AvailabilityInput` mutation. */
export type AvailabilitiesCompanyIdFkeyInput = {
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCompaniesPkeyConnect>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectByUserId?: InputMaybe<CompanyCompaniesUserIdUniqueConnect>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<AvailabilitiesCompanyIdFkeyCompaniesCreateInput>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteByUserId?: InputMaybe<CompanyCompaniesUserIdUniqueDelete>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingCompaniesPkeyUpdate>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateByUserId?: InputMaybe<CompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingCompaniesUserIdUniqueUpdate>;
};

/** Input for the nested mutation of `availability` in the `CompanyInput` mutation. */
export type AvailabilitiesCompanyIdFkeyInverseInput = {
  /** The primary key(s) for `availability` for the far side of the relationship. */
  connectByCompanyId?: InputMaybe<AvailabilityAvailabilitiesCompanyIdUniqueConnect>;
  /** The primary key(s) for `availability` for the far side of the relationship. */
  connectById?: InputMaybe<AvailabilityAvailabilitiesPkeyConnect>;
  /** A `AvailabilityInput` object that will be created and connected to this object. */
  create?: InputMaybe<
    Array<AvailabilitiesCompanyIdFkeyAvailabilitiesCreateInput>
  >;
  /** The primary key(s) for `availability` for the far side of the relationship. */
  deleteByCompanyId?: InputMaybe<AvailabilityAvailabilitiesCompanyIdUniqueDelete>;
  /** The primary key(s) for `availability` for the far side of the relationship. */
  deleteById?: InputMaybe<AvailabilityAvailabilitiesPkeyDelete>;
  /** Flag indicating whether all other `availability` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `availability` for the far side of the relationship. */
  updateByCompanyId?: InputMaybe<AvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingAvailabilitiesCompanyIdUniqueUpdate>;
  /** The primary key(s) and patch data for `availability` for the far side of the relationship. */
  updateById?: InputMaybe<AvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingAvailabilitiesPkeyUpdate>;
};

/** A connection to a list of `Availability` values. */
export type AvailabilitiesConnection = {
  __typename?: 'AvailabilitiesConnection';
  /** A list of edges which contains the `Availability` and cursor to aid in pagination. */
  edges: Array<AvailabilitiesEdge>;
  /** A list of `Availability` objects. */
  nodes: Array<Availability>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Availability` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Availability` edge in the connection. */
export type AvailabilitiesEdge = {
  __typename?: 'AvailabilitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Availability` at the end of the edge. */
  node: Availability;
};

/** Methods to use when ordering `Availability`. */
export enum AvailabilitiesOrderBy {
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

export type Availability = {
  __typename?: 'Availability';
  /** Reads and enables pagination through a set of `Address`. */
  addressesByBookingAvailabilityIdAndAddressId: AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** Reads a single `Company` that is related to this `Availability`. */
  company?: Maybe<Company>;
  companyId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  endTime: Scalars['Time']['output'];
  id: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Service`. */
  servicesByBookingAvailabilityIdAndServiceId: AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyConnection;
  startTime: Scalars['Time']['output'];
  /** Reads and enables pagination through a set of `User`. */
  usersByBookingAvailabilityIdAndUserId: AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyConnection;
};

export type AvailabilityAddressesByBookingAvailabilityIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type AvailabilityBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  filter?: InputMaybe<BookingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

export type AvailabilityServicesByBookingAvailabilityIdAndServiceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  filter?: InputMaybe<ServiceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

export type AvailabilityUsersByBookingAvailabilityIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A connection to a list of `Address` values, with data from `Booking`. */
export type AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyConnection =
  {
    __typename?: 'AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyConnection';
    /** A list of edges which contains the `Address`, info from the `Booking`, and the cursor to aid in pagination. */
    edges: Array<AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyEdge>;
    /** A list of `Address` objects. */
    nodes: Array<Address>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Address` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Address` edge in the connection, with data from `Booking`. */
export type AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyEdge =
  {
    __typename?: 'AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyEdge';
    /** Reads and enables pagination through a set of `Booking`. */
    bookings: BookingsConnection;
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']['output']>;
    /** The `Address` at the end of the edge. */
    node: Address;
  };

/** A `Address` edge in the connection, with data from `Booking`. */
export type AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** The fields on `availability` to look up the row to connect. */
export type AvailabilityAvailabilitiesCompanyIdUniqueConnect = {
  companyId: Scalars['UUID']['input'];
};

/** The fields on `availability` to look up the row to delete. */
export type AvailabilityAvailabilitiesCompanyIdUniqueDelete = {
  companyId: Scalars['UUID']['input'];
};

/** The fields on `availability` to look up the row to connect. */
export type AvailabilityAvailabilitiesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `availability` to look up the row to delete. */
export type AvailabilityAvailabilitiesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/**
 * A condition to be used against `Availability` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AvailabilityCondition = {
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `Availability` object types. All fields are combined with a logical ‘and.’ */
export type AvailabilityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AvailabilityFilter>>;
  /** Filter by the object’s `bookings` relation. */
  bookings?: InputMaybe<AvailabilityToManyBookingFilter>;
  /** Some related `bookings` exist. */
  bookingsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `company` relation. */
  company?: InputMaybe<CompanyFilter>;
  /** Filter by the object’s `companyId` field. */
  companyId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AvailabilityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AvailabilityFilter>>;
};

/** An input for mutations affecting `Availability` */
export type AvailabilityInput = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime: Scalars['Time']['input'];
  startTime: Scalars['Time']['input'];
};

/** The fields on `availability` to look up the row to update. */
export type AvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingAvailabilitiesCompanyIdUniqueUpdate =
  {
    companyId: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `availability` being updated. */
    patch: UpdateAvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyPatch;
  };

/** The fields on `availability` to look up the row to update. */
export type AvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingAvailabilitiesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `availability` being updated. */
    patch: UpdateAvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyPatch;
  };

/** The fields on `availability` to look up the row to update. */
export type AvailabilityOnBookingForBookingsAvailabilityIdFkeyUsingAvailabilitiesCompanyIdUniqueUpdate =
  {
    companyId: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `availability` being updated. */
    patch: UpdateAvailabilityOnBookingForBookingsAvailabilityIdFkeyPatch;
  };

/** The fields on `availability` to look up the row to update. */
export type AvailabilityOnBookingForBookingsAvailabilityIdFkeyUsingAvailabilitiesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `availability` being updated. */
    patch: UpdateAvailabilityOnBookingForBookingsAvailabilityIdFkeyPatch;
  };

/** Represents an update to a `Availability`. Fields that are set will be updated. */
export type AvailabilityPatch = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
};

/** A connection to a list of `Service` values, with data from `Booking`. */
export type AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyConnection =
  {
    __typename?: 'AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyConnection';
    /** A list of edges which contains the `Service`, info from the `Booking`, and the cursor to aid in pagination. */
    edges: Array<AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyEdge>;
    /** A list of `Service` objects. */
    nodes: Array<Service>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Service` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Service` edge in the connection, with data from `Booking`. */
export type AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyEdge =
  {
    __typename?: 'AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyEdge';
    /** Reads and enables pagination through a set of `Booking`. */
    bookings: BookingsConnection;
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']['output']>;
    /** The `Service` at the end of the edge. */
    node: Service;
  };

/** A `Service` edge in the connection, with data from `Booking`. */
export type AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** A filter to be used against many `Booking` object types. All fields are combined with a logical ‘and.’ */
export type AvailabilityToManyBookingFilter = {
  /** Every related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BookingFilter>;
  /** No related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BookingFilter>;
  /** Some related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BookingFilter>;
};

/** A connection to a list of `User` values, with data from `Booking`. */
export type AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyConnection =
  {
    __typename?: 'AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyConnection';
    /** A list of edges which contains the `User`, info from the `Booking`, and the cursor to aid in pagination. */
    edges: Array<AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyEdge>;
    /** A list of `User` objects. */
    nodes: Array<User>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `User` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `User` edge in the connection, with data from `Booking`. */
export type AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyEdge = {
  __typename?: 'AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** A `User` edge in the connection, with data from `Booking`. */
export type AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

export type Booking = {
  __typename?: 'Booking';
  /** Reads a single `Address` that is related to this `Booking`. */
  address?: Maybe<Address>;
  addressId: Scalars['UUID']['output'];
  /** Reads a single `Availability` that is related to this `Booking`. */
  availability?: Maybe<Availability>;
  availabilityId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Reads a single `Service` that is related to this `Booking`. */
  service?: Maybe<Service>;
  serviceId: Scalars['UUID']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

/** The fields on `booking` to look up the row to connect. */
export type BookingBookingsPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `booking` to look up the row to delete. */
export type BookingBookingsPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A condition to be used against `Booking` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BookingCondition = {
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `availabilityId` field. */
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `serviceId` field. */
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `Booking` object types. All fields are combined with a logical ‘and.’ */
export type BookingFilter = {
  /** Filter by the object’s `address` relation. */
  address?: InputMaybe<AddressFilter>;
  /** Filter by the object’s `addressId` field. */
  addressId?: InputMaybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BookingFilter>>;
  /** Filter by the object’s `availability` relation. */
  availability?: InputMaybe<AvailabilityFilter>;
  /** Filter by the object’s `availabilityId` field. */
  availabilityId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BookingFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BookingFilter>>;
  /** Filter by the object’s `service` relation. */
  service?: InputMaybe<ServiceFilter>;
  /** Filter by the object’s `serviceId` field. */
  serviceId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `Booking` */
export type BookingInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** The fields on `booking` to look up the row to update. */
export type BookingOnBookingForBookingsAddressIdFkeyUsingBookingsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `booking` being updated. */
  patch: UpdateBookingOnBookingForBookingsAddressIdFkeyPatch;
};

/** The fields on `booking` to look up the row to update. */
export type BookingOnBookingForBookingsAvailabilityIdFkeyUsingBookingsPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `booking` being updated. */
    patch: UpdateBookingOnBookingForBookingsAvailabilityIdFkeyPatch;
  };

/** The fields on `booking` to look up the row to update. */
export type BookingOnBookingForBookingsServiceIdFkeyUsingBookingsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `booking` being updated. */
  patch: UpdateBookingOnBookingForBookingsServiceIdFkeyPatch;
};

/** The fields on `booking` to look up the row to update. */
export type BookingOnBookingForBookingsUserIdFkeyUsingBookingsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `booking` being updated. */
  patch: UpdateBookingOnBookingForBookingsUserIdFkeyPatch;
};

/** Represents an update to a `Booking`. Fields that are set will be updated. */
export type BookingPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** The `address` to be created by this mutation. */
export type BookingsAddressIdFkeyAddressesCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** The `booking` to be created by this mutation. */
export type BookingsAddressIdFkeyBookingsCreateInput = {
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** Input for the nested mutation of `address` in the `BookingInput` mutation. */
export type BookingsAddressIdFkeyInput = {
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectByCompanyId?: InputMaybe<AddressAddressesCompanyIdKeyConnect>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectById?: InputMaybe<AddressAddressesPkeyConnect>;
  /** A `AddressInput` object that will be created and connected to this object. */
  create?: InputMaybe<BookingsAddressIdFkeyAddressesCreateInput>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteByCompanyId?: InputMaybe<AddressAddressesCompanyIdKeyDelete>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteById?: InputMaybe<AddressAddressesPkeyDelete>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateByCompanyId?: InputMaybe<AddressOnBookingForBookingsAddressIdFkeyUsingAddressesCompanyIdKeyUpdate>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateById?: InputMaybe<AddressOnBookingForBookingsAddressIdFkeyUsingAddressesPkeyUpdate>;
};

/** Input for the nested mutation of `booking` in the `AddressInput` mutation. */
export type BookingsAddressIdFkeyInverseInput = {
  /** The primary key(s) for `booking` for the far side of the relationship. */
  connectById?: InputMaybe<Array<BookingBookingsPkeyConnect>>;
  /** A `BookingInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<BookingsAddressIdFkeyBookingsCreateInput>>;
  /** The primary key(s) for `booking` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<BookingBookingsPkeyDelete>>;
  /** Flag indicating whether all other `booking` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `booking` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<BookingOnBookingForBookingsAddressIdFkeyUsingBookingsPkeyUpdate>
  >;
};

/** The `availability` to be created by this mutation. */
export type BookingsAvailabilityIdFkeyAvailabilitiesCreateInput = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime: Scalars['Time']['input'];
  startTime: Scalars['Time']['input'];
};

/** The `booking` to be created by this mutation. */
export type BookingsAvailabilityIdFkeyBookingsCreateInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** Input for the nested mutation of `availability` in the `BookingInput` mutation. */
export type BookingsAvailabilityIdFkeyInput = {
  /** The primary key(s) for `availability` for the far side of the relationship. */
  connectByCompanyId?: InputMaybe<AvailabilityAvailabilitiesCompanyIdUniqueConnect>;
  /** The primary key(s) for `availability` for the far side of the relationship. */
  connectById?: InputMaybe<AvailabilityAvailabilitiesPkeyConnect>;
  /** A `AvailabilityInput` object that will be created and connected to this object. */
  create?: InputMaybe<BookingsAvailabilityIdFkeyAvailabilitiesCreateInput>;
  /** The primary key(s) for `availability` for the far side of the relationship. */
  deleteByCompanyId?: InputMaybe<AvailabilityAvailabilitiesCompanyIdUniqueDelete>;
  /** The primary key(s) for `availability` for the far side of the relationship. */
  deleteById?: InputMaybe<AvailabilityAvailabilitiesPkeyDelete>;
  /** The primary key(s) and patch data for `availability` for the far side of the relationship. */
  updateByCompanyId?: InputMaybe<AvailabilityOnBookingForBookingsAvailabilityIdFkeyUsingAvailabilitiesCompanyIdUniqueUpdate>;
  /** The primary key(s) and patch data for `availability` for the far side of the relationship. */
  updateById?: InputMaybe<AvailabilityOnBookingForBookingsAvailabilityIdFkeyUsingAvailabilitiesPkeyUpdate>;
};

/** Input for the nested mutation of `booking` in the `AvailabilityInput` mutation. */
export type BookingsAvailabilityIdFkeyInverseInput = {
  /** The primary key(s) for `booking` for the far side of the relationship. */
  connectById?: InputMaybe<Array<BookingBookingsPkeyConnect>>;
  /** A `BookingInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<BookingsAvailabilityIdFkeyBookingsCreateInput>>;
  /** The primary key(s) for `booking` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<BookingBookingsPkeyDelete>>;
  /** Flag indicating whether all other `booking` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `booking` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<BookingOnBookingForBookingsAvailabilityIdFkeyUsingBookingsPkeyUpdate>
  >;
};

/** A connection to a list of `Booking` values. */
export type BookingsConnection = {
  __typename?: 'BookingsConnection';
  /** A list of edges which contains the `Booking` and cursor to aid in pagination. */
  edges: Array<BookingsEdge>;
  /** A list of `Booking` objects. */
  nodes: Array<Booking>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Booking` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Booking` edge in the connection. */
export type BookingsEdge = {
  __typename?: 'BookingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Booking` at the end of the edge. */
  node: Booking;
};

/** Methods to use when ordering `Booking`. */
export enum BookingsOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  AvailabilityIdAsc = 'AVAILABILITY_ID_ASC',
  AvailabilityIdDesc = 'AVAILABILITY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ServiceIdAsc = 'SERVICE_ID_ASC',
  ServiceIdDesc = 'SERVICE_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
}

/** The `booking` to be created by this mutation. */
export type BookingsServiceIdFkeyBookingsCreateInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** Input for the nested mutation of `service` in the `BookingInput` mutation. */
export type BookingsServiceIdFkeyInput = {
  /** The primary key(s) for `service` for the far side of the relationship. */
  connectById?: InputMaybe<ServiceServicesPkeyConnect>;
  /** A `ServiceInput` object that will be created and connected to this object. */
  create?: InputMaybe<BookingsServiceIdFkeyServicesCreateInput>;
  /** The primary key(s) for `service` for the far side of the relationship. */
  deleteById?: InputMaybe<ServiceServicesPkeyDelete>;
  /** The primary key(s) and patch data for `service` for the far side of the relationship. */
  updateById?: InputMaybe<ServiceOnBookingForBookingsServiceIdFkeyUsingServicesPkeyUpdate>;
};

/** Input for the nested mutation of `booking` in the `ServiceInput` mutation. */
export type BookingsServiceIdFkeyInverseInput = {
  /** The primary key(s) for `booking` for the far side of the relationship. */
  connectById?: InputMaybe<Array<BookingBookingsPkeyConnect>>;
  /** A `BookingInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<BookingsServiceIdFkeyBookingsCreateInput>>;
  /** The primary key(s) for `booking` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<BookingBookingsPkeyDelete>>;
  /** Flag indicating whether all other `booking` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `booking` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<BookingOnBookingForBookingsServiceIdFkeyUsingBookingsPkeyUpdate>
  >;
};

/** The `service` to be created by this mutation. */
export type BookingsServiceIdFkeyServicesCreateInput = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ServicesCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

/** The `booking` to be created by this mutation. */
export type BookingsUserIdFkeyBookingsCreateInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** Input for the nested mutation of `user` in the `BookingInput` mutation. */
export type BookingsUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<BookingsUserIdFkeyUsersCreateInput>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<UserUsersPkeyDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnBookingForBookingsUserIdFkeyUsingUsersPkeyUpdate>;
};

/** Input for the nested mutation of `booking` in the `UserInput` mutation. */
export type BookingsUserIdFkeyInverseInput = {
  /** The primary key(s) for `booking` for the far side of the relationship. */
  connectById?: InputMaybe<Array<BookingBookingsPkeyConnect>>;
  /** A `BookingInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<BookingsUserIdFkeyBookingsCreateInput>>;
  /** The primary key(s) for `booking` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<BookingBookingsPkeyDelete>>;
  /** Flag indicating whether all other `booking` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `booking` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<BookingOnBookingForBookingsUserIdFkeyUsingBookingsPkeyUpdate>
  >;
};

/** The `user` to be created by this mutation. */
export type BookingsUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>;
  /** A list of `Category` objects. */
  nodes: Array<Category>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  __typename?: 'CategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Category` at the end of the edge. */
  node: Category;
};

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  ParentIdAsc = 'PARENT_ID_ASC',
  ParentIdDesc = 'PARENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
}

/** The `category` to be created by this mutation. */
export type CategoriesParentIdFkeyCategoriesCreateInput = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  companyCategoriesUsingId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInverseInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCategoryIdFkeyInverseInput>;
  slug: Scalars['String']['input'];
};

/** Input for the nested mutation of `category` in the `CategoryInput` mutation. */
export type CategoriesParentIdFkeyInput = {
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: InputMaybe<CategoryCategoriesPkeyConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectByName?: InputMaybe<CategoryCategoriesNameKeyConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectBySlug?: InputMaybe<CategoryCategoriesSlugKeyConnect>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<CategoriesParentIdFkeyCategoriesCreateInput>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: InputMaybe<CategoryCategoriesPkeyDelete>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteByName?: InputMaybe<CategoryCategoriesNameKeyDelete>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteBySlug?: InputMaybe<CategoryCategoriesSlugKeyDelete>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: InputMaybe<CategoryOnCategoryForCategoriesParentIdFkeyUsingCategoriesPkeyUpdate>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateByName?: InputMaybe<CategoryOnCategoryForCategoriesParentIdFkeyUsingCategoriesNameKeyUpdate>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateBySlug?: InputMaybe<CategoryOnCategoryForCategoriesParentIdFkeyUsingCategoriesSlugKeyUpdate>;
};

export type Category = {
  __typename?: 'Category';
  /** Reads and enables pagination through a set of `Category`. */
  childCategories: CategoriesConnection;
  /** Reads and enables pagination through a set of `Company`. */
  companiesByServiceCategoryIdAndCompanyId: CategoryCompaniesByServiceCategoryIdAndCompanyIdManyToManyConnection;
  /** Reads and enables pagination through a set of `CompanyCategory`. */
  companyCategories: CompanyCategoriesConnection;
  createdAt: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Reads a single `Category` that is related to this `Category`. */
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['UUID']['output']>;
  /** Reads and enables pagination through a set of `Service`. */
  services: ServicesConnection;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

export type CategoryChildCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

export type CategoryCompaniesByServiceCategoryIdAndCompanyIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CompanyCondition>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

export type CategoryCompanyCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CompanyCategoryCondition>;
  filter?: InputMaybe<CompanyCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompanyCategoriesOrderBy>>;
};

export type CategoryServicesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  filter?: InputMaybe<ServiceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

/** The fields on `category` to look up the row to connect. */
export type CategoryCategoriesNameKeyConnect = {
  name: Scalars['String']['input'];
};

/** The fields on `category` to look up the row to delete. */
export type CategoryCategoriesNameKeyDelete = {
  name: Scalars['String']['input'];
};

/** The fields on `category` to look up the row to connect. */
export type CategoryCategoriesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `category` to look up the row to delete. */
export type CategoryCategoriesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** The fields on `category` to look up the row to connect. */
export type CategoryCategoriesSlugKeyConnect = {
  slug: Scalars['String']['input'];
};

/** The fields on `category` to look up the row to delete. */
export type CategoryCategoriesSlugKeyDelete = {
  slug: Scalars['String']['input'];
};

/** A connection to a list of `Company` values, with data from `Service`. */
export type CategoryCompaniesByServiceCategoryIdAndCompanyIdManyToManyConnection =
  {
    __typename?: 'CategoryCompaniesByServiceCategoryIdAndCompanyIdManyToManyConnection';
    /** A list of edges which contains the `Company`, info from the `Service`, and the cursor to aid in pagination. */
    edges: Array<CategoryCompaniesByServiceCategoryIdAndCompanyIdManyToManyEdge>;
    /** A list of `Company` objects. */
    nodes: Array<Company>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Company` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Company` edge in the connection, with data from `Service`. */
export type CategoryCompaniesByServiceCategoryIdAndCompanyIdManyToManyEdge = {
  __typename?: 'CategoryCompaniesByServiceCategoryIdAndCompanyIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Company` at the end of the edge. */
  node: Company;
  /** Reads and enables pagination through a set of `Service`. */
  services: ServicesConnection;
};

/** A `Company` edge in the connection, with data from `Service`. */
export type CategoryCompaniesByServiceCategoryIdAndCompanyIdManyToManyEdgeServicesArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<ServiceCondition>;
    filter?: InputMaybe<ServiceFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<ServicesOrderBy>>;
  };

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `parentId` field. */
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `childCategories` relation. */
  childCategories?: InputMaybe<CategoryToManyCategoryFilter>;
  /** Some related `childCategories` exist. */
  childCategoriesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `companyCategories` relation. */
  companyCategories?: InputMaybe<CategoryToManyCompanyCategoryFilter>;
  /** Some related `companyCategories` exist. */
  companyCategoriesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `parent` relation. */
  parent?: InputMaybe<CategoryFilter>;
  /** A related `parent` exists. */
  parentExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `parentId` field. */
  parentId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `services` relation. */
  services?: InputMaybe<CategoryToManyServiceFilter>;
  /** Some related `services` exist. */
  servicesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  companyCategoriesUsingId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInverseInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  servicesUsingId?: InputMaybe<ServicesCategoryIdFkeyInverseInput>;
  slug: Scalars['String']['input'];
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnCategoryForCategoriesParentIdFkeyUsingCategoriesNameKeyUpdate =
  {
    name: Scalars['String']['input'];
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnCategoryForCategoriesParentIdFkeyPatch;
  };

/** The fields on `category` to look up the row to update. */
export type CategoryOnCategoryForCategoriesParentIdFkeyUsingCategoriesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnCategoryForCategoriesParentIdFkeyPatch;
  };

/** The fields on `category` to look up the row to update. */
export type CategoryOnCategoryForCategoriesParentIdFkeyUsingCategoriesSlugKeyUpdate =
  {
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnCategoryForCategoriesParentIdFkeyPatch;
    slug: Scalars['String']['input'];
  };

/** The fields on `category` to look up the row to update. */
export type CategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyUsingCategoriesNameKeyUpdate =
  {
    name: Scalars['String']['input'];
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyPatch;
  };

/** The fields on `category` to look up the row to update. */
export type CategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyUsingCategoriesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyPatch;
  };

/** The fields on `category` to look up the row to update. */
export type CategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyUsingCategoriesSlugKeyUpdate =
  {
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyPatch;
    slug: Scalars['String']['input'];
  };

/** The fields on `category` to look up the row to update. */
export type CategoryOnServiceForServicesCategoryIdFkeyUsingCategoriesNameKeyUpdate =
  {
    name: Scalars['String']['input'];
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnServiceForServicesCategoryIdFkeyPatch;
  };

/** The fields on `category` to look up the row to update. */
export type CategoryOnServiceForServicesCategoryIdFkeyUsingCategoriesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnServiceForServicesCategoryIdFkeyPatch;
  };

/** The fields on `category` to look up the row to update. */
export type CategoryOnServiceForServicesCategoryIdFkeyUsingCategoriesSlugKeyUpdate =
  {
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnServiceForServicesCategoryIdFkeyPatch;
    slug: Scalars['String']['input'];
  };

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  companyCategoriesUsingId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  servicesUsingId?: InputMaybe<ServicesCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryToManyCategoryFilter = {
  /** Every related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<CategoryFilter>;
  /** No related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<CategoryFilter>;
  /** Some related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<CategoryFilter>;
};

/** A filter to be used against many `CompanyCategory` object types. All fields are combined with a logical ‘and.’ */
export type CategoryToManyCompanyCategoryFilter = {
  /** Every related `CompanyCategory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<CompanyCategoryFilter>;
  /** No related `CompanyCategory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<CompanyCategoryFilter>;
  /** Some related `CompanyCategory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<CompanyCategoryFilter>;
};

/** A filter to be used against many `Service` object types. All fields are combined with a logical ‘and.’ */
export type CategoryToManyServiceFilter = {
  /** Every related `Service` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ServiceFilter>;
  /** No related `Service` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ServiceFilter>;
  /** Some related `Service` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ServiceFilter>;
};

/** A connection to a list of `Company` values. */
export type CompaniesConnection = {
  __typename?: 'CompaniesConnection';
  /** A list of edges which contains the `Company` and cursor to aid in pagination. */
  edges: Array<CompaniesEdge>;
  /** A list of `Company` objects. */
  nodes: Array<Company>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Company` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Company` edge in the connection. */
export type CompaniesEdge = {
  __typename?: 'CompaniesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Company` at the end of the edge. */
  node: Company;
};

/** Methods to use when ordering `Company`. */
export enum CompaniesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
}

/** The `company` to be created by this mutation. */
export type CompaniesUserIdFkeyCompaniesCreateInput = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** Input for the nested mutation of `user` in the `CompanyInput` mutation. */
export type CompaniesUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<CompaniesUserIdFkeyUsersCreateInput>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<UserUsersPkeyDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnCompanyForCompaniesUserIdFkeyUsingUsersPkeyUpdate>;
};

/** Input for the nested mutation of `company` in the `UserInput` mutation. */
export type CompaniesUserIdFkeyInverseInput = {
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCompaniesPkeyConnect>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectByUserId?: InputMaybe<CompanyCompaniesUserIdUniqueConnect>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<CompaniesUserIdFkeyCompaniesCreateInput>>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteByUserId?: InputMaybe<CompanyCompaniesUserIdUniqueDelete>;
  /** Flag indicating whether all other `company` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesPkeyUpdate>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateByUserId?: InputMaybe<CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesUserIdUniqueUpdate>;
};

/** The `user` to be created by this mutation. */
export type CompaniesUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Company = {
  __typename?: 'Company';
  /** Reads a single `Address` that is related to this `Company`. */
  address?: Maybe<Address>;
  /**
   * Reads and enables pagination through a set of `Address`.
   * @deprecated Please use address instead
   */
  addresses: AddressesConnection;
  /**
   * Reads and enables pagination through a set of `Availability`.
   * @deprecated Please use availability instead
   */
  availabilities: AvailabilitiesConnection;
  /** Reads a single `Availability` that is related to this `Company`. */
  availability?: Maybe<Availability>;
  /** Reads and enables pagination through a set of `Category`. */
  categoriesByServiceCompanyIdAndCategoryId: CompanyCategoriesByServiceCompanyIdAndCategoryIdManyToManyConnection;
  /**
   * Reads and enables pagination through a set of `CompanyCategory`.
   * @deprecated Please use companyCategory instead
   */
  companyCategories: CompanyCategoriesConnection;
  /** Reads a single `CompanyCategory` that is related to this `Company`. */
  companyCategory?: Maybe<CompanyCategory>;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isVerified: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Service`. */
  services: ServicesConnection;
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Company`. */
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

export type CompanyAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type CompanyAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  filter?: InputMaybe<AvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

export type CompanyCategoriesByServiceCompanyIdAndCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

export type CompanyCompanyCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CompanyCategoryCondition>;
  filter?: InputMaybe<CompanyCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompanyCategoriesOrderBy>>;
};

export type CompanyServicesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  filter?: InputMaybe<ServiceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

/** A connection to a list of `Category` values, with data from `Service`. */
export type CompanyCategoriesByServiceCompanyIdAndCategoryIdManyToManyConnection =
  {
    __typename?: 'CompanyCategoriesByServiceCompanyIdAndCategoryIdManyToManyConnection';
    /** A list of edges which contains the `Category`, info from the `Service`, and the cursor to aid in pagination. */
    edges: Array<CompanyCategoriesByServiceCompanyIdAndCategoryIdManyToManyEdge>;
    /** A list of `Category` objects. */
    nodes: Array<Category>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Category` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Category` edge in the connection, with data from `Service`. */
export type CompanyCategoriesByServiceCompanyIdAndCategoryIdManyToManyEdge = {
  __typename?: 'CompanyCategoriesByServiceCompanyIdAndCategoryIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Category` at the end of the edge. */
  node: Category;
  /** Reads and enables pagination through a set of `Service`. */
  services: ServicesConnection;
};

/** A `Category` edge in the connection, with data from `Service`. */
export type CompanyCategoriesByServiceCompanyIdAndCategoryIdManyToManyEdgeServicesArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<ServiceCondition>;
    filter?: InputMaybe<ServiceFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<ServicesOrderBy>>;
  };

/** The `category` to be created by this mutation. */
export type CompanyCategoriesCategoryIdFkeyCategoriesCreateInput = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  companyCategoriesUsingId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInverseInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  servicesUsingId?: InputMaybe<ServicesCategoryIdFkeyInverseInput>;
  slug: Scalars['String']['input'];
};

/** The `companyCategory` to be created by this mutation. */
export type CompanyCategoriesCategoryIdFkeyCompanyCategoriesCreateInput = {
  categoryToCategoryId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInput>;
};

/** Input for the nested mutation of `category` in the `CompanyCategoryInput` mutation. */
export type CompanyCategoriesCategoryIdFkeyInput = {
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: InputMaybe<CategoryCategoriesPkeyConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectByName?: InputMaybe<CategoryCategoriesNameKeyConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectBySlug?: InputMaybe<CategoryCategoriesSlugKeyConnect>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<CompanyCategoriesCategoryIdFkeyCategoriesCreateInput>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: InputMaybe<CategoryCategoriesPkeyDelete>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteByName?: InputMaybe<CategoryCategoriesNameKeyDelete>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteBySlug?: InputMaybe<CategoryCategoriesSlugKeyDelete>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: InputMaybe<CategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyUsingCategoriesPkeyUpdate>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateByName?: InputMaybe<CategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyUsingCategoriesNameKeyUpdate>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateBySlug?: InputMaybe<CategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyUsingCategoriesSlugKeyUpdate>;
};

/** Input for the nested mutation of `companyCategory` in the `CategoryInput` mutation. */
export type CompanyCategoriesCategoryIdFkeyInverseInput = {
  /** The primary key(s) for `companyCategory` for the far side of the relationship. */
  connectByCompanyId?: InputMaybe<
    Array<CompanyCategoryCompanyCategoriesCompanyIdUniqueConnect>
  >;
  /** The primary key(s) for `companyCategory` for the far side of the relationship. */
  connectById?: InputMaybe<Array<CompanyCategoryCompanyCategoriesPkeyConnect>>;
  /** A `CompanyCategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<
    Array<CompanyCategoriesCategoryIdFkeyCompanyCategoriesCreateInput>
  >;
  /** The primary key(s) for `companyCategory` for the far side of the relationship. */
  deleteByCompanyId?: InputMaybe<
    Array<CompanyCategoryCompanyCategoriesCompanyIdUniqueDelete>
  >;
  /** The primary key(s) for `companyCategory` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<CompanyCategoryCompanyCategoriesPkeyDelete>>;
  /** Flag indicating whether all other `companyCategory` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `companyCategory` for the far side of the relationship. */
  updateByCompanyId?: InputMaybe<
    Array<CompanyCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyUsingCompanyCategoriesCompanyIdUniqueUpdate>
  >;
  /** The primary key(s) and patch data for `companyCategory` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<CompanyCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyUsingCompanyCategoriesPkeyUpdate>
  >;
};

/** The `company` to be created by this mutation. */
export type CompanyCategoriesCompanyIdFkeyCompaniesCreateInput = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** The `companyCategory` to be created by this mutation. */
export type CompanyCategoriesCompanyIdFkeyCompanyCategoriesCreateInput = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInput>;
  companyToCompanyId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInput>;
};

/** Input for the nested mutation of `company` in the `CompanyCategoryInput` mutation. */
export type CompanyCategoriesCompanyIdFkeyInput = {
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCompaniesPkeyConnect>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectByUserId?: InputMaybe<CompanyCompaniesUserIdUniqueConnect>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<CompanyCategoriesCompanyIdFkeyCompaniesCreateInput>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteByUserId?: InputMaybe<CompanyCompaniesUserIdUniqueDelete>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyUsingCompaniesPkeyUpdate>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateByUserId?: InputMaybe<CompanyOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyUsingCompaniesUserIdUniqueUpdate>;
};

/** Input for the nested mutation of `companyCategory` in the `CompanyInput` mutation. */
export type CompanyCategoriesCompanyIdFkeyInverseInput = {
  /** The primary key(s) for `companyCategory` for the far side of the relationship. */
  connectByCompanyId?: InputMaybe<CompanyCategoryCompanyCategoriesCompanyIdUniqueConnect>;
  /** The primary key(s) for `companyCategory` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCategoryCompanyCategoriesPkeyConnect>;
  /** A `CompanyCategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<
    Array<CompanyCategoriesCompanyIdFkeyCompanyCategoriesCreateInput>
  >;
  /** The primary key(s) for `companyCategory` for the far side of the relationship. */
  deleteByCompanyId?: InputMaybe<CompanyCategoryCompanyCategoriesCompanyIdUniqueDelete>;
  /** The primary key(s) for `companyCategory` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCategoryCompanyCategoriesPkeyDelete>;
  /** Flag indicating whether all other `companyCategory` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `companyCategory` for the far side of the relationship. */
  updateByCompanyId?: InputMaybe<CompanyCategoryOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyUsingCompanyCategoriesCompanyIdUniqueUpdate>;
  /** The primary key(s) and patch data for `companyCategory` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyCategoryOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyUsingCompanyCategoriesPkeyUpdate>;
};

/** A connection to a list of `CompanyCategory` values. */
export type CompanyCategoriesConnection = {
  __typename?: 'CompanyCategoriesConnection';
  /** A list of edges which contains the `CompanyCategory` and cursor to aid in pagination. */
  edges: Array<CompanyCategoriesEdge>;
  /** A list of `CompanyCategory` objects. */
  nodes: Array<CompanyCategory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CompanyCategory` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CompanyCategory` edge in the connection. */
export type CompanyCategoriesEdge = {
  __typename?: 'CompanyCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CompanyCategory` at the end of the edge. */
  node: CompanyCategory;
};

/** Methods to use when ordering `CompanyCategory`. */
export enum CompanyCategoriesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

export type CompanyCategory = {
  __typename?: 'CompanyCategory';
  /** Reads a single `Category` that is related to this `CompanyCategory`. */
  category?: Maybe<Category>;
  categoryId: Scalars['UUID']['output'];
  /** Reads a single `Company` that is related to this `CompanyCategory`. */
  company?: Maybe<Company>;
  companyId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
};

/** The fields on `companyCategory` to look up the row to connect. */
export type CompanyCategoryCompanyCategoriesCompanyIdUniqueConnect = {
  companyId: Scalars['UUID']['input'];
};

/** The fields on `companyCategory` to look up the row to delete. */
export type CompanyCategoryCompanyCategoriesCompanyIdUniqueDelete = {
  companyId: Scalars['UUID']['input'];
};

/** The fields on `companyCategory` to look up the row to connect. */
export type CompanyCategoryCompanyCategoriesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `companyCategory` to look up the row to delete. */
export type CompanyCategoryCompanyCategoriesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/**
 * A condition to be used against `CompanyCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CompanyCategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `CompanyCategory` object types. All fields are combined with a logical ‘and.’ */
export type CompanyCategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CompanyCategoryFilter>>;
  /** Filter by the object’s `category` relation. */
  category?: InputMaybe<CategoryFilter>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `company` relation. */
  company?: InputMaybe<CompanyFilter>;
  /** Filter by the object’s `companyId` field. */
  companyId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CompanyCategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CompanyCategoryFilter>>;
};

/** An input for mutations affecting `CompanyCategory` */
export type CompanyCategoryInput = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInput>;
};

/** The fields on `companyCategory` to look up the row to update. */
export type CompanyCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyUsingCompanyCategoriesCompanyIdUniqueUpdate =
  {
    companyId: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `companyCategory` being updated. */
    patch: UpdateCompanyCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyPatch;
  };

/** The fields on `companyCategory` to look up the row to update. */
export type CompanyCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyUsingCompanyCategoriesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `companyCategory` being updated. */
    patch: UpdateCompanyCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyPatch;
  };

/** The fields on `companyCategory` to look up the row to update. */
export type CompanyCategoryOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyUsingCompanyCategoriesCompanyIdUniqueUpdate =
  {
    companyId: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `companyCategory` being updated. */
    patch: UpdateCompanyCategoryOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyPatch;
  };

/** The fields on `companyCategory` to look up the row to update. */
export type CompanyCategoryOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyUsingCompanyCategoriesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `companyCategory` being updated. */
    patch: UpdateCompanyCategoryOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyPatch;
  };

/** Represents an update to a `CompanyCategory`. Fields that are set will be updated. */
export type CompanyCategoryPatch = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInput>;
};

/** The fields on `company` to look up the row to connect. */
export type CompanyCompaniesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `company` to look up the row to delete. */
export type CompanyCompaniesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** The fields on `company` to look up the row to connect. */
export type CompanyCompaniesUserIdUniqueConnect = {
  userId: Scalars['UUID']['input'];
};

/** The fields on `company` to look up the row to delete. */
export type CompanyCompaniesUserIdUniqueDelete = {
  userId: Scalars['UUID']['input'];
};

/** A condition to be used against `Company` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CompanyCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `Company` object types. All fields are combined with a logical ‘and.’ */
export type CompanyFilter = {
  /** Filter by the object’s `address` relation. */
  address?: InputMaybe<AddressFilter>;
  /** A related `address` exists. */
  addressExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CompanyFilter>>;
  /** Filter by the object’s `availability` relation. */
  availability?: InputMaybe<AvailabilityFilter>;
  /** A related `availability` exists. */
  availabilityExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `companyCategory` relation. */
  companyCategory?: InputMaybe<CompanyCategoryFilter>;
  /** A related `companyCategory` exists. */
  companyCategoryExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CompanyFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CompanyFilter>>;
  /** Filter by the object’s `services` relation. */
  services?: InputMaybe<CompanyToManyServiceFilter>;
  /** Some related `services` exist. */
  servicesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `Company` */
export type CompanyInput = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnAddressForAddressesCompanyIdFkeyUsingCompaniesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnAddressForAddressesCompanyIdFkeyPatch;
  };

/** The fields on `company` to look up the row to update. */
export type CompanyOnAddressForAddressesCompanyIdFkeyUsingCompaniesUserIdUniqueUpdate =
  {
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnAddressForAddressesCompanyIdFkeyPatch;
    userId: Scalars['UUID']['input'];
  };

/** The fields on `company` to look up the row to update. */
export type CompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingCompaniesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyPatch;
  };

/** The fields on `company` to look up the row to update. */
export type CompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingCompaniesUserIdUniqueUpdate =
  {
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyPatch;
    userId: Scalars['UUID']['input'];
  };

/** The fields on `company` to look up the row to update. */
export type CompanyOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyUsingCompaniesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyPatch;
  };

/** The fields on `company` to look up the row to update. */
export type CompanyOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyUsingCompaniesUserIdUniqueUpdate =
  {
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyPatch;
    userId: Scalars['UUID']['input'];
  };

/** The fields on `company` to look up the row to update. */
export type CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `company` being updated. */
  patch: UpdateCompanyOnCompanyForCompaniesUserIdFkeyPatch;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesUserIdUniqueUpdate =
  {
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnCompanyForCompaniesUserIdFkeyPatch;
    userId: Scalars['UUID']['input'];
  };

/** The fields on `company` to look up the row to update. */
export type CompanyOnServiceForServicesCompanyIdFkeyUsingCompaniesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `company` being updated. */
  patch: UpdateCompanyOnServiceForServicesCompanyIdFkeyPatch;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnServiceForServicesCompanyIdFkeyUsingCompaniesUserIdUniqueUpdate =
  {
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnServiceForServicesCompanyIdFkeyPatch;
    userId: Scalars['UUID']['input'];
  };

/** Represents an update to a `Company`. Fields that are set will be updated. */
export type CompanyPatch = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** A filter to be used against many `Service` object types. All fields are combined with a logical ‘and.’ */
export type CompanyToManyServiceFilter = {
  /** Every related `Service` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ServiceFilter>;
  /** No related `Service` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ServiceFilter>;
  /** Some related `Service` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ServiceFilter>;
};

/** All input for the create `Address` mutation. */
export type CreateAddressInput = {
  /** The `Address` to be created by this mutation. */
  address: AddressInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Address` mutation. */
export type CreateAddressPayload = {
  __typename?: 'CreateAddressPayload';
  /** The `Address` that was created by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Address`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Address`. */
  user?: Maybe<User>;
};

/** The output of our create `Address` mutation. */
export type CreateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the create `Availability` mutation. */
export type CreateAvailabilityInput = {
  /** The `Availability` to be created by this mutation. */
  availability: AvailabilityInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Availability` mutation. */
export type CreateAvailabilityPayload = {
  __typename?: 'CreateAvailabilityPayload';
  /** The `Availability` that was created by this mutation. */
  availability?: Maybe<Availability>;
  /** An edge for our `Availability`. May be used by Relay 1. */
  availabilityEdge?: Maybe<AvailabilitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Availability`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Availability` mutation. */
export type CreateAvailabilityPayloadAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** All input for the create `Booking` mutation. */
export type CreateBookingInput = {
  /** The `Booking` to be created by this mutation. */
  booking: BookingInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Booking` mutation. */
export type CreateBookingPayload = {
  __typename?: 'CreateBookingPayload';
  /** Reads a single `Address` that is related to this `Booking`. */
  address?: Maybe<Address>;
  /** Reads a single `Availability` that is related to this `Booking`. */
  availability?: Maybe<Availability>;
  /** The `Booking` that was created by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Service` that is related to this `Booking`. */
  service?: Maybe<Service>;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
};

/** The output of our create `Booking` mutation. */
export type CreateBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Category` that is related to this `Category`. */
  parent?: Maybe<Category>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the create `CompanyCategory` mutation. */
export type CreateCompanyCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `CompanyCategory` to be created by this mutation. */
  companyCategory: CompanyCategoryInput;
};

/** The output of our create `CompanyCategory` mutation. */
export type CreateCompanyCategoryPayload = {
  __typename?: 'CreateCompanyCategoryPayload';
  /** Reads a single `Category` that is related to this `CompanyCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `CompanyCategory`. */
  company?: Maybe<Company>;
  /** The `CompanyCategory` that was created by this mutation. */
  companyCategory?: Maybe<CompanyCategory>;
  /** An edge for our `CompanyCategory`. May be used by Relay 1. */
  companyCategoryEdge?: Maybe<CompanyCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `CompanyCategory` mutation. */
export type CreateCompanyCategoryPayloadCompanyCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CompanyCategoriesOrderBy>>;
};

/** All input for the create `Company` mutation. */
export type CreateCompanyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Company` to be created by this mutation. */
  company: CompanyInput;
};

/** The output of our create `Company` mutation. */
export type CreateCompanyPayload = {
  __typename?: 'CreateCompanyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Company` that was created by this mutation. */
  company?: Maybe<Company>;
  /** An edge for our `Company`. May be used by Relay 1. */
  companyEdge?: Maybe<CompaniesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Company`. */
  user?: Maybe<User>;
};

/** The output of our create `Company` mutation. */
export type CreateCompanyPayloadCompanyEdgeArgs = {
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** All input for the create `Service` mutation. */
export type CreateServiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Service` to be created by this mutation. */
  service: ServiceInput;
};

/** The output of our create `Service` mutation. */
export type CreateServicePayload = {
  __typename?: 'CreateServicePayload';
  /** Reads a single `Category` that is related to this `Service`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Service`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Service` that was created by this mutation. */
  service?: Maybe<Service>;
  /** An edge for our `Service`. May be used by Relay 1. */
  serviceEdge?: Maybe<ServicesEdge>;
};

/** The output of our create `Service` mutation. */
export type CreateServicePayloadServiceEdgeArgs = {
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteAddressByCompanyId` mutation. */
export type DeleteAddressByCompanyIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['UUID']['input'];
};

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  __typename?: 'DeleteAddressPayload';
  /** The `Address` that was deleted by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Address`. */
  company?: Maybe<Company>;
  deletedAddressNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Address`. */
  user?: Maybe<User>;
};

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the `deleteAvailabilityByCompanyId` mutation. */
export type DeleteAvailabilityByCompanyIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['UUID']['input'];
};

/** All input for the `deleteAvailability` mutation. */
export type DeleteAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Availability` mutation. */
export type DeleteAvailabilityPayload = {
  __typename?: 'DeleteAvailabilityPayload';
  /** The `Availability` that was deleted by this mutation. */
  availability?: Maybe<Availability>;
  /** An edge for our `Availability`. May be used by Relay 1. */
  availabilityEdge?: Maybe<AvailabilitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Availability`. */
  company?: Maybe<Company>;
  deletedAvailabilityNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Availability` mutation. */
export type DeleteAvailabilityPayloadAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** All input for the `deleteBooking` mutation. */
export type DeleteBookingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Booking` mutation. */
export type DeleteBookingPayload = {
  __typename?: 'DeleteBookingPayload';
  /** Reads a single `Address` that is related to this `Booking`. */
  address?: Maybe<Address>;
  /** Reads a single `Availability` that is related to this `Booking`. */
  availability?: Maybe<Availability>;
  /** The `Booking` that was deleted by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedBookingNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Service` that is related to this `Booking`. */
  service?: Maybe<Service>;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
};

/** The output of our delete `Booking` mutation. */
export type DeleteBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the `deleteCategoryByName` mutation. */
export type DeleteCategoryByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deleteCategoryBySlug` mutation. */
export type DeleteCategoryBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedCategoryNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Category` that is related to this `Category`. */
  parent?: Maybe<Category>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `deleteCompanyByUserId` mutation. */
export type DeleteCompanyByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['UUID']['input'];
};

/** All input for the `deleteCompanyCategoryByCompanyId` mutation. */
export type DeleteCompanyCategoryByCompanyIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['UUID']['input'];
};

/** All input for the `deleteCompanyCategory` mutation. */
export type DeleteCompanyCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `CompanyCategory` mutation. */
export type DeleteCompanyCategoryPayload = {
  __typename?: 'DeleteCompanyCategoryPayload';
  /** Reads a single `Category` that is related to this `CompanyCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `CompanyCategory`. */
  company?: Maybe<Company>;
  /** The `CompanyCategory` that was deleted by this mutation. */
  companyCategory?: Maybe<CompanyCategory>;
  /** An edge for our `CompanyCategory`. May be used by Relay 1. */
  companyCategoryEdge?: Maybe<CompanyCategoriesEdge>;
  deletedCompanyCategoryNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `CompanyCategory` mutation. */
export type DeleteCompanyCategoryPayloadCompanyCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CompanyCategoriesOrderBy>>;
};

/** All input for the `deleteCompany` mutation. */
export type DeleteCompanyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Company` mutation. */
export type DeleteCompanyPayload = {
  __typename?: 'DeleteCompanyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Company` that was deleted by this mutation. */
  company?: Maybe<Company>;
  /** An edge for our `Company`. May be used by Relay 1. */
  companyEdge?: Maybe<CompaniesEdge>;
  deletedCompanyNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Company`. */
  user?: Maybe<User>;
};

/** The output of our delete `Company` mutation. */
export type DeleteCompanyPayloadCompanyEdgeArgs = {
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** All input for the `deleteService` mutation. */
export type DeleteServiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Service` mutation. */
export type DeleteServicePayload = {
  __typename?: 'DeleteServicePayload';
  /** Reads a single `Category` that is related to this `Service`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Service`. */
  company?: Maybe<Company>;
  deletedServiceNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Service` that was deleted by this mutation. */
  service?: Maybe<Service>;
  /** An edge for our `Service`. May be used by Relay 1. */
  serviceEdge?: Maybe<ServicesEdge>;
};

/** The output of our delete `Service` mutation. */
export type DeleteServicePayloadServiceEdgeArgs = {
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  token?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type LogoutPayload = {
  __typename?: 'LogoutPayload';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>;
  /** Creates a single `Availability`. */
  createAvailability?: Maybe<CreateAvailabilityPayload>;
  /** Creates a single `Booking`. */
  createBooking?: Maybe<CreateBookingPayload>;
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `Company`. */
  createCompany?: Maybe<CreateCompanyPayload>;
  /** Creates a single `CompanyCategory`. */
  createCompanyCategory?: Maybe<CreateCompanyCategoryPayload>;
  /** Creates a single `Service`. */
  createService?: Maybe<CreateServicePayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddress?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddressByCompanyId?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Availability` using a unique key. */
  deleteAvailability?: Maybe<DeleteAvailabilityPayload>;
  /** Deletes a single `Availability` using a unique key. */
  deleteAvailabilityByCompanyId?: Maybe<DeleteAvailabilityPayload>;
  /** Deletes a single `Booking` using a unique key. */
  deleteBooking?: Maybe<DeleteBookingPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryByName?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryBySlug?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Company` using a unique key. */
  deleteCompany?: Maybe<DeleteCompanyPayload>;
  /** Deletes a single `Company` using a unique key. */
  deleteCompanyByUserId?: Maybe<DeleteCompanyPayload>;
  /** Deletes a single `CompanyCategory` using a unique key. */
  deleteCompanyCategory?: Maybe<DeleteCompanyCategoryPayload>;
  /** Deletes a single `CompanyCategory` using a unique key. */
  deleteCompanyCategoryByCompanyId?: Maybe<DeleteCompanyCategoryPayload>;
  /** Deletes a single `Service` using a unique key. */
  deleteService?: Maybe<DeleteServicePayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Use this mutation to log in to your account; this login uses sessions so you do not need to take further action. */
  login?: Maybe<LoginPayload>;
  /** Use this mutation to logout from your account. Don't forget to clear the client state! */
  logout?: Maybe<LogoutPayload>;
  /** Use this mutation to create an account on our system. This may only be used if you are logged out. */
  register?: Maybe<RegisterPayload>;
  registerCompany?: Maybe<RegisterCompanyPayload>;
  /** After triggering forgotPassword, you'll be sent a reset token. Combine this with your user ID and a new password to reset your password. */
  resetPassword?: Maybe<ResetPasswordPayload>;
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddressByCompanyId?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Availability` using a unique key and a patch. */
  updateAvailability?: Maybe<UpdateAvailabilityPayload>;
  /** Updates a single `Availability` using a unique key and a patch. */
  updateAvailabilityByCompanyId?: Maybe<UpdateAvailabilityPayload>;
  /** Updates a single `Booking` using a unique key and a patch. */
  updateBooking?: Maybe<UpdateBookingPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryByName?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryBySlug?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Company` using a unique key and a patch. */
  updateCompany?: Maybe<UpdateCompanyPayload>;
  /** Updates a single `Company` using a unique key and a patch. */
  updateCompanyByUserId?: Maybe<UpdateCompanyPayload>;
  /** Updates a single `CompanyCategory` using a unique key and a patch. */
  updateCompanyCategory?: Maybe<UpdateCompanyCategoryPayload>;
  /** Updates a single `CompanyCategory` using a unique key and a patch. */
  updateCompanyCategoryByCompanyId?: Maybe<UpdateCompanyCategoryPayload>;
  /** Updates a single `Service` using a unique key and a patch. */
  updateService?: Maybe<UpdateServicePayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAvailabilityArgs = {
  input: CreateAvailabilityInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBookingArgs = {
  input: CreateBookingInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCompanyCategoryArgs = {
  input: CreateCompanyCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateServiceArgs = {
  input: CreateServiceInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByCompanyIdArgs = {
  input: DeleteAddressByCompanyIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAvailabilityArgs = {
  input: DeleteAvailabilityInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAvailabilityByCompanyIdArgs = {
  input: DeleteAvailabilityByCompanyIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookingArgs = {
  input: DeleteBookingInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByNameArgs = {
  input: DeleteCategoryByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryBySlugArgs = {
  input: DeleteCategoryBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyArgs = {
  input: DeleteCompanyInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyByUserIdArgs = {
  input: DeleteCompanyByUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyCategoryArgs = {
  input: DeleteCompanyCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyCategoryByCompanyIdArgs = {
  input: DeleteCompanyCategoryByCompanyIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteServiceArgs = {
  input: DeleteServiceInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationLoginArgs = {
  input: LoginInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterArgs = {
  input: RegisterInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterCompanyArgs = {
  input: RegisterCompanyInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByCompanyIdArgs = {
  input: UpdateAddressByCompanyIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAvailabilityArgs = {
  input: UpdateAvailabilityInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAvailabilityByCompanyIdArgs = {
  input: UpdateAvailabilityByCompanyIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookingArgs = {
  input: UpdateBookingInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByNameArgs = {
  input: UpdateCategoryByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryBySlugArgs = {
  input: UpdateCategoryBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyByUserIdArgs = {
  input: UpdateCompanyByUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyCategoryArgs = {
  input: UpdateCompanyCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyCategoryByCompanyIdArgs = {
  input: UpdateCompanyCategoryByCompanyIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateServiceArgs = {
  input: UpdateServiceInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addressByCompanyId?: Maybe<Address>;
  /** Reads and enables pagination through a set of `Address`. */
  addresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `Availability`. */
  availabilities?: Maybe<AvailabilitiesConnection>;
  availability?: Maybe<Availability>;
  availabilityByCompanyId?: Maybe<Availability>;
  booking?: Maybe<Booking>;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings?: Maybe<BookingsConnection>;
  /** Reads and enables pagination through a set of `Category`. */
  categories?: Maybe<CategoriesConnection>;
  category?: Maybe<Category>;
  categoryByName?: Maybe<Category>;
  categoryBySlug?: Maybe<Category>;
  /** Reads and enables pagination through a set of `Company`. */
  companies?: Maybe<CompaniesConnection>;
  company?: Maybe<Company>;
  companyByUserId?: Maybe<Company>;
  /** Reads and enables pagination through a set of `CompanyCategory`. */
  companyCategories?: Maybe<CompanyCategoriesConnection>;
  companyCategory?: Maybe<CompanyCategory>;
  companyCategoryByCompanyId?: Maybe<CompanyCategory>;
  currentSessionId?: Maybe<Scalars['UUID']['output']>;
  currentUser?: Maybe<User>;
  currentUserId?: Maybe<Scalars['UUID']['output']>;
  currentUserIsAdmin?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  service?: Maybe<Service>;
  /** Reads and enables pagination through a set of `Service`. */
  services?: Maybe<ServicesConnection>;
  user?: Maybe<User>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAddressByCompanyIdArgs = {
  companyId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  filter?: InputMaybe<AvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAvailabilityArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAvailabilityByCompanyIdArgs = {
  companyId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryBookingArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  filter?: InputMaybe<BookingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryByNameArgs = {
  name: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCompaniesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CompanyCondition>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCompanyArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCompanyByUserIdArgs = {
  userId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCompanyCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CompanyCategoryCondition>;
  filter?: InputMaybe<CompanyCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompanyCategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCompanyCategoryArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCompanyCategoryByCompanyIdArgs = {
  companyId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryServiceArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryServicesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  filter?: InputMaybe<ServiceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type RegisterCompanyInput = {
  address: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  contactNumber: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  shopClose: Scalars['String']['input'];
  shopOpen: Scalars['String']['input'];
};

export type RegisterCompanyPayload = {
  __typename?: 'RegisterCompanyPayload';
  company: Company;
  token: Scalars['String']['output'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type RegisterPayload = {
  __typename?: 'RegisterPayload';
  token: Scalars['String']['output'];
  user: User;
};

/** All input for the `resetPassword` mutation. */
export type ResetPasswordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};

/** The output of our `resetPassword` mutation. */
export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Service = {
  __typename?: 'Service';
  /** Reads and enables pagination through a set of `Address`. */
  addressesByBookingServiceIdAndAddressId: ServiceAddressesByBookingServiceIdAndAddressIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Availability`. */
  availabilitiesByBookingServiceIdAndAvailabilityId: ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** Reads a single `Category` that is related to this `Service`. */
  category?: Maybe<Category>;
  categoryId: Scalars['UUID']['output'];
  /** Reads a single `Company` that is related to this `Service`. */
  company?: Maybe<Company>;
  companyId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  updatedAt: Scalars['Datetime']['output'];
  /** Reads and enables pagination through a set of `User`. */
  usersByBookingServiceIdAndUserId: ServiceUsersByBookingServiceIdAndUserIdManyToManyConnection;
};

export type ServiceAddressesByBookingServiceIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  filter?: InputMaybe<AvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

export type ServiceBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  filter?: InputMaybe<BookingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

export type ServiceUsersByBookingServiceIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A connection to a list of `Address` values, with data from `Booking`. */
export type ServiceAddressesByBookingServiceIdAndAddressIdManyToManyConnection =
  {
    __typename?: 'ServiceAddressesByBookingServiceIdAndAddressIdManyToManyConnection';
    /** A list of edges which contains the `Address`, info from the `Booking`, and the cursor to aid in pagination. */
    edges: Array<ServiceAddressesByBookingServiceIdAndAddressIdManyToManyEdge>;
    /** A list of `Address` objects. */
    nodes: Array<Address>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Address` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Address` edge in the connection, with data from `Booking`. */
export type ServiceAddressesByBookingServiceIdAndAddressIdManyToManyEdge = {
  __typename?: 'ServiceAddressesByBookingServiceIdAndAddressIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Address` at the end of the edge. */
  node: Address;
};

/** A `Address` edge in the connection, with data from `Booking`. */
export type ServiceAddressesByBookingServiceIdAndAddressIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** A connection to a list of `Availability` values, with data from `Booking`. */
export type ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyConnection =
  {
    __typename?: 'ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyConnection';
    /** A list of edges which contains the `Availability`, info from the `Booking`, and the cursor to aid in pagination. */
    edges: Array<ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyEdge>;
    /** A list of `Availability` objects. */
    nodes: Array<Availability>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Availability` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Availability` edge in the connection, with data from `Booking`. */
export type ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyEdge =
  {
    __typename?: 'ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyEdge';
    /** Reads and enables pagination through a set of `Booking`. */
    bookings: BookingsConnection;
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']['output']>;
    /** The `Availability` at the end of the edge. */
    node: Availability;
  };

/** A `Availability` edge in the connection, with data from `Booking`. */
export type ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** A condition to be used against `Service` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ServiceCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Service` object types. All fields are combined with a logical ‘and.’ */
export type ServiceFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ServiceFilter>>;
  /** Filter by the object’s `bookings` relation. */
  bookings?: InputMaybe<ServiceToManyBookingFilter>;
  /** Some related `bookings` exist. */
  bookingsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `category` relation. */
  category?: InputMaybe<CategoryFilter>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `company` relation. */
  company?: InputMaybe<CompanyFilter>;
  /** Filter by the object’s `companyId` field. */
  companyId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ServiceFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ServiceFilter>>;
};

/** An input for mutations affecting `Service` */
export type ServiceInput = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ServicesCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

/** The fields on `service` to look up the row to update. */
export type ServiceOnBookingForBookingsServiceIdFkeyUsingServicesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `service` being updated. */
  patch: UpdateServiceOnBookingForBookingsServiceIdFkeyPatch;
};

/** The fields on `service` to look up the row to update. */
export type ServiceOnServiceForServicesCategoryIdFkeyUsingServicesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `service` being updated. */
  patch: UpdateServiceOnServiceForServicesCategoryIdFkeyPatch;
};

/** The fields on `service` to look up the row to update. */
export type ServiceOnServiceForServicesCompanyIdFkeyUsingServicesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `service` being updated. */
  patch: UpdateServiceOnServiceForServicesCompanyIdFkeyPatch;
};

/** Represents an update to a `Service`. Fields that are set will be updated. */
export type ServicePatch = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ServicesCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

/** The fields on `service` to look up the row to connect. */
export type ServiceServicesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `service` to look up the row to delete. */
export type ServiceServicesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A filter to be used against many `Booking` object types. All fields are combined with a logical ‘and.’ */
export type ServiceToManyBookingFilter = {
  /** Every related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BookingFilter>;
  /** No related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BookingFilter>;
  /** Some related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BookingFilter>;
};

/** A connection to a list of `User` values, with data from `Booking`. */
export type ServiceUsersByBookingServiceIdAndUserIdManyToManyConnection = {
  __typename?: 'ServiceUsersByBookingServiceIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<ServiceUsersByBookingServiceIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection, with data from `Booking`. */
export type ServiceUsersByBookingServiceIdAndUserIdManyToManyEdge = {
  __typename?: 'ServiceUsersByBookingServiceIdAndUserIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** A `User` edge in the connection, with data from `Booking`. */
export type ServiceUsersByBookingServiceIdAndUserIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** The `category` to be created by this mutation. */
export type ServicesCategoryIdFkeyCategoriesCreateInput = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  companyCategoriesUsingId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInverseInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  servicesUsingId?: InputMaybe<ServicesCategoryIdFkeyInverseInput>;
  slug: Scalars['String']['input'];
};

/** Input for the nested mutation of `category` in the `ServiceInput` mutation. */
export type ServicesCategoryIdFkeyInput = {
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: InputMaybe<CategoryCategoriesPkeyConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectByName?: InputMaybe<CategoryCategoriesNameKeyConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectBySlug?: InputMaybe<CategoryCategoriesSlugKeyConnect>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<ServicesCategoryIdFkeyCategoriesCreateInput>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: InputMaybe<CategoryCategoriesPkeyDelete>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteByName?: InputMaybe<CategoryCategoriesNameKeyDelete>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteBySlug?: InputMaybe<CategoryCategoriesSlugKeyDelete>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: InputMaybe<CategoryOnServiceForServicesCategoryIdFkeyUsingCategoriesPkeyUpdate>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateByName?: InputMaybe<CategoryOnServiceForServicesCategoryIdFkeyUsingCategoriesNameKeyUpdate>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateBySlug?: InputMaybe<CategoryOnServiceForServicesCategoryIdFkeyUsingCategoriesSlugKeyUpdate>;
};

/** Input for the nested mutation of `service` in the `CategoryInput` mutation. */
export type ServicesCategoryIdFkeyInverseInput = {
  /** The primary key(s) for `service` for the far side of the relationship. */
  connectById?: InputMaybe<Array<ServiceServicesPkeyConnect>>;
  /** A `ServiceInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<ServicesCategoryIdFkeyServicesCreateInput>>;
  /** The primary key(s) for `service` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<ServiceServicesPkeyDelete>>;
  /** Flag indicating whether all other `service` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `service` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<ServiceOnServiceForServicesCategoryIdFkeyUsingServicesPkeyUpdate>
  >;
};

/** The `service` to be created by this mutation. */
export type ServicesCategoryIdFkeyServicesCreateInput = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  categoryToCategoryId?: InputMaybe<ServicesCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

/** The `company` to be created by this mutation. */
export type ServicesCompanyIdFkeyCompaniesCreateInput = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** Input for the nested mutation of `company` in the `ServiceInput` mutation. */
export type ServicesCompanyIdFkeyInput = {
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCompaniesPkeyConnect>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectByUserId?: InputMaybe<CompanyCompaniesUserIdUniqueConnect>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<ServicesCompanyIdFkeyCompaniesCreateInput>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteByUserId?: InputMaybe<CompanyCompaniesUserIdUniqueDelete>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnServiceForServicesCompanyIdFkeyUsingCompaniesPkeyUpdate>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateByUserId?: InputMaybe<CompanyOnServiceForServicesCompanyIdFkeyUsingCompaniesUserIdUniqueUpdate>;
};

/** Input for the nested mutation of `service` in the `CompanyInput` mutation. */
export type ServicesCompanyIdFkeyInverseInput = {
  /** The primary key(s) for `service` for the far side of the relationship. */
  connectById?: InputMaybe<Array<ServiceServicesPkeyConnect>>;
  /** A `ServiceInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<ServicesCompanyIdFkeyServicesCreateInput>>;
  /** The primary key(s) for `service` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<ServiceServicesPkeyDelete>>;
  /** Flag indicating whether all other `service` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `service` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<ServiceOnServiceForServicesCompanyIdFkeyUsingServicesPkeyUpdate>
  >;
};

/** The `service` to be created by this mutation. */
export type ServicesCompanyIdFkeyServicesCreateInput = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ServicesCategoryIdFkeyInput>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

/** A connection to a list of `Service` values. */
export type ServicesConnection = {
  __typename?: 'ServicesConnection';
  /** A list of edges which contains the `Service` and cursor to aid in pagination. */
  edges: Array<ServicesEdge>;
  /** A list of `Service` objects. */
  nodes: Array<Service>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Service` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Service` edge in the connection. */
export type ServicesEdge = {
  __typename?: 'ServicesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Service` at the end of the edge. */
  node: Service;
};

/** Methods to use when ordering `Service`. */
export enum ServicesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']['input']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']['input']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** All input for the `updateAddressByCompanyId` mutation. */
export type UpdateAddressByCompanyIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Address` being updated. */
  patch: AddressPatch;
};

/** All input for the `updateAddress` mutation. */
export type UpdateAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Address` being updated. */
  patch: AddressPatch;
};

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  __typename?: 'UpdateAddressPayload';
  /** The `Address` that was updated by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Address`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Address`. */
  user?: Maybe<User>;
};

/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the `updateAvailabilityByCompanyId` mutation. */
export type UpdateAvailabilityByCompanyIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Availability` being updated. */
  patch: AvailabilityPatch;
};

/** All input for the `updateAvailability` mutation. */
export type UpdateAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Availability` being updated. */
  patch: AvailabilityPatch;
};

/** The output of our update `Availability` mutation. */
export type UpdateAvailabilityPayload = {
  __typename?: 'UpdateAvailabilityPayload';
  /** The `Availability` that was updated by this mutation. */
  availability?: Maybe<Availability>;
  /** An edge for our `Availability`. May be used by Relay 1. */
  availabilityEdge?: Maybe<AvailabilitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Availability`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Availability` mutation. */
export type UpdateAvailabilityPayloadAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** All input for the `updateBooking` mutation. */
export type UpdateBookingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Booking` being updated. */
  patch: BookingPatch;
};

/** The output of our update `Booking` mutation. */
export type UpdateBookingPayload = {
  __typename?: 'UpdateBookingPayload';
  /** Reads a single `Address` that is related to this `Booking`. */
  address?: Maybe<Address>;
  /** Reads a single `Availability` that is related to this `Booking`. */
  availability?: Maybe<Availability>;
  /** The `Booking` that was updated by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Service` that is related to this `Booking`. */
  service?: Maybe<Service>;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
};

/** The output of our update `Booking` mutation. */
export type UpdateBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the `updateCategoryByName` mutation. */
export type UpdateCategoryByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** All input for the `updateCategoryBySlug` mutation. */
export type UpdateCategoryBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
  slug: Scalars['String']['input'];
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Category` that is related to this `Category`. */
  parent?: Maybe<Category>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `updateCompanyByUserId` mutation. */
export type UpdateCompanyByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Company` being updated. */
  patch: CompanyPatch;
  userId: Scalars['UUID']['input'];
};

/** All input for the `updateCompanyCategoryByCompanyId` mutation. */
export type UpdateCompanyCategoryByCompanyIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `CompanyCategory` being updated. */
  patch: CompanyCategoryPatch;
};

/** All input for the `updateCompanyCategory` mutation. */
export type UpdateCompanyCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `CompanyCategory` being updated. */
  patch: CompanyCategoryPatch;
};

/** The output of our update `CompanyCategory` mutation. */
export type UpdateCompanyCategoryPayload = {
  __typename?: 'UpdateCompanyCategoryPayload';
  /** Reads a single `Category` that is related to this `CompanyCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `CompanyCategory`. */
  company?: Maybe<Company>;
  /** The `CompanyCategory` that was updated by this mutation. */
  companyCategory?: Maybe<CompanyCategory>;
  /** An edge for our `CompanyCategory`. May be used by Relay 1. */
  companyCategoryEdge?: Maybe<CompanyCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `CompanyCategory` mutation. */
export type UpdateCompanyCategoryPayloadCompanyCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CompanyCategoriesOrderBy>>;
};

/** All input for the `updateCompany` mutation. */
export type UpdateCompanyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Company` being updated. */
  patch: CompanyPatch;
};

/** The output of our update `Company` mutation. */
export type UpdateCompanyPayload = {
  __typename?: 'UpdateCompanyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Company` that was updated by this mutation. */
  company?: Maybe<Company>;
  /** An edge for our `Company`. May be used by Relay 1. */
  companyEdge?: Maybe<CompaniesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Company`. */
  user?: Maybe<User>;
};

/** The output of our update `Company` mutation. */
export type UpdateCompanyPayloadCompanyEdgeArgs = {
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** All input for the `updateService` mutation. */
export type UpdateServiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Service` being updated. */
  patch: ServicePatch;
};

/** The output of our update `Service` mutation. */
export type UpdateServicePayload = {
  __typename?: 'UpdateServicePayload';
  /** Reads a single `Category` that is related to this `Service`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Service`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Service` that was updated by this mutation. */
  service?: Maybe<Service>;
  /** An edge for our `Service`. May be used by Relay 1. */
  serviceEdge?: Maybe<ServicesEdge>;
};

/** The output of our update `Service` mutation. */
export type UpdateServicePayloadServiceEdgeArgs = {
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type User = {
  __typename?: 'User';
  /** Reads and enables pagination through a set of `Address`. */
  addresses: AddressesConnection;
  /** Reads and enables pagination through a set of `Address`. */
  addressesByBookingUserIdAndAddressId: UserAddressesByBookingUserIdAndAddressIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Availability`. */
  availabilitiesByBookingUserIdAndAvailabilityId: UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /**
   * Reads and enables pagination through a set of `Company`.
   * @deprecated Please use company instead
   */
  companies: CompaniesConnection;
  /** Reads a single `Company` that is related to this `User`. */
  company?: Maybe<Company>;
  createdAt: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Service`. */
  servicesByBookingUserIdAndServiceId: UserServicesByBookingUserIdAndServiceIdManyToManyConnection;
  type: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

export type UserAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type UserAddressesByBookingUserIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type UserAvailabilitiesByBookingUserIdAndAvailabilityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  filter?: InputMaybe<AvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

export type UserBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  filter?: InputMaybe<BookingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

export type UserCompaniesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CompanyCondition>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

export type UserServicesByBookingUserIdAndServiceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  filter?: InputMaybe<ServiceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

/** A connection to a list of `Address` values, with data from `Booking`. */
export type UserAddressesByBookingUserIdAndAddressIdManyToManyConnection = {
  __typename?: 'UserAddressesByBookingUserIdAndAddressIdManyToManyConnection';
  /** A list of edges which contains the `Address`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<UserAddressesByBookingUserIdAndAddressIdManyToManyEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Address>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Address` edge in the connection, with data from `Booking`. */
export type UserAddressesByBookingUserIdAndAddressIdManyToManyEdge = {
  __typename?: 'UserAddressesByBookingUserIdAndAddressIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Address` at the end of the edge. */
  node: Address;
};

/** A `Address` edge in the connection, with data from `Booking`. */
export type UserAddressesByBookingUserIdAndAddressIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** A connection to a list of `Availability` values, with data from `Booking`. */
export type UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyConnection =
  {
    __typename?: 'UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyConnection';
    /** A list of edges which contains the `Availability`, info from the `Booking`, and the cursor to aid in pagination. */
    edges: Array<UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyEdge>;
    /** A list of `Availability` objects. */
    nodes: Array<Availability>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Availability` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Availability` edge in the connection, with data from `Booking`. */
export type UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyEdge = {
  __typename?: 'UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Availability` at the end of the edge. */
  node: Availability;
};

/** A `Availability` edge in the connection, with data from `Booking`. */
export type UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Filter by the object’s `addresses` relation. */
  addresses?: InputMaybe<UserToManyAddressFilter>;
  /** Some related `addresses` exist. */
  addressesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `bookings` relation. */
  bookings?: InputMaybe<UserToManyBookingFilter>;
  /** Some related `bookings` exist. */
  bookingsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `company` relation. */
  company?: InputMaybe<CompanyFilter>;
  /** A related `company` exists. */
  companyExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** The fields on `user` to look up the row to update. */
export type UserOnAddressForAddressesUserIdFkeyUsingUsersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnAddressForAddressesUserIdFkeyPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnBookingForBookingsUserIdFkeyUsingUsersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnBookingForBookingsUserIdFkeyPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnCompanyForCompaniesUserIdFkeyUsingUsersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnCompanyForCompaniesUserIdFkeyPatch;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Service` values, with data from `Booking`. */
export type UserServicesByBookingUserIdAndServiceIdManyToManyConnection = {
  __typename?: 'UserServicesByBookingUserIdAndServiceIdManyToManyConnection';
  /** A list of edges which contains the `Service`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<UserServicesByBookingUserIdAndServiceIdManyToManyEdge>;
  /** A list of `Service` objects. */
  nodes: Array<Service>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Service` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Service` edge in the connection, with data from `Booking`. */
export type UserServicesByBookingUserIdAndServiceIdManyToManyEdge = {
  __typename?: 'UserServicesByBookingUserIdAndServiceIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Service` at the end of the edge. */
  node: Service;
};

/** A `Service` edge in the connection, with data from `Booking`. */
export type UserServicesByBookingUserIdAndServiceIdManyToManyEdgeBookingsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<BookingCondition>;
    filter?: InputMaybe<BookingFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BookingsOrderBy>>;
  };

/** A filter to be used against many `Address` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyAddressFilter = {
  /** Every related `Address` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<AddressFilter>;
  /** No related `Address` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<AddressFilter>;
  /** Some related `Address` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<AddressFilter>;
};

/** A filter to be used against many `Booking` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyBookingFilter = {
  /** Every related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BookingFilter>;
  /** No related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BookingFilter>;
  /** Some related `Booking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BookingFilter>;
};

/** The fields on `user` to look up the row to connect. */
export type UserUsersPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `user` to look up the row to delete. */
export type UserUsersPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** An object where the defined keys will be set on the `address` being updated. */
export type UpdateAddressOnAddressForAddressesCompanyIdFkeyPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `address` being updated. */
export type UpdateAddressOnAddressForAddressesUserIdFkeyPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `address` being updated. */
export type UpdateAddressOnBookingForBookingsAddressIdFkeyPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `availability` being updated. */
export type UpdateAvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyPatch =
  {
    bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
    companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
    endTime?: InputMaybe<Scalars['Time']['input']>;
    startTime?: InputMaybe<Scalars['Time']['input']>;
  };

/** An object where the defined keys will be set on the `availability` being updated. */
export type UpdateAvailabilityOnBookingForBookingsAvailabilityIdFkeyPatch = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
};

/** An object where the defined keys will be set on the `booking` being updated. */
export type UpdateBookingOnBookingForBookingsAddressIdFkeyPatch = {
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `booking` being updated. */
export type UpdateBookingOnBookingForBookingsAvailabilityIdFkeyPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `booking` being updated. */
export type UpdateBookingOnBookingForBookingsServiceIdFkeyPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `booking` being updated. */
export type UpdateBookingOnBookingForBookingsUserIdFkeyPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnCategoryForCategoriesParentIdFkeyPatch = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  companyCategoriesUsingId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  servicesUsingId?: InputMaybe<ServicesCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyPatch =
  {
    categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
    companyCategoriesUsingId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInverseInput>;
    description?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    parentId?: InputMaybe<Scalars['UUID']['input']>;
    servicesUsingId?: InputMaybe<ServicesCategoryIdFkeyInverseInput>;
    slug?: InputMaybe<Scalars['String']['input']>;
  };

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnServiceForServicesCategoryIdFkeyPatch = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  companyCategoriesUsingId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  servicesUsingId?: InputMaybe<ServicesCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `companyCategory` being updated. */
export type UpdateCompanyCategoryOnCompanyCategoryForCompanyCategoriesCategoryIdFkeyPatch =
  {
    categoryToCategoryId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInput>;
    companyId?: InputMaybe<Scalars['UUID']['input']>;
    companyToCompanyId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInput>;
  };

/** An object where the defined keys will be set on the `companyCategory` being updated. */
export type UpdateCompanyCategoryOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyPatch =
  {
    categoryId?: InputMaybe<Scalars['UUID']['input']>;
    categoryToCategoryId?: InputMaybe<CompanyCategoriesCategoryIdFkeyInput>;
    companyToCompanyId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInput>;
  };

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnAddressForAddressesCompanyIdFkeyPatch = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyPatch = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnCompanyCategoryForCompanyCategoriesCompanyIdFkeyPatch =
  {
    addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
    availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
    companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
    description?: InputMaybe<Scalars['String']['input']>;
    isVerified?: InputMaybe<Scalars['Boolean']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
    userId?: InputMaybe<Scalars['UUID']['input']>;
    userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
  };

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnCompanyForCompaniesUserIdFkeyPatch = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnServiceForServicesCompanyIdFkeyPatch = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  availabilityUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  companyCategoryUsingId?: InputMaybe<CompanyCategoriesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `service` being updated. */
export type UpdateServiceOnBookingForBookingsServiceIdFkeyPatch = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ServicesCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

/** An object where the defined keys will be set on the `service` being updated. */
export type UpdateServiceOnServiceForServicesCategoryIdFkeyPatch = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  categoryToCategoryId?: InputMaybe<ServicesCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

/** An object where the defined keys will be set on the `service` being updated. */
export type UpdateServiceOnServiceForServicesCompanyIdFkeyPatch = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ServicesCategoryIdFkeyInput>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnAddressForAddressesUserIdFkeyPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnBookingForBookingsUserIdFkeyPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnCompanyForCompaniesUserIdFkeyPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CategoriesQueryVariables = Exact<{
  condition?: InputMaybe<CategoryCondition>;
}>;

export type CategoriesQuery = {
  __typename?: 'Query';
  categories?: {
    __typename?: 'CategoriesConnection';
    nodes: Array<{
      __typename?: 'Category';
      id: any;
      name: string;
      slug: string;
      description: string;
      childCategories: {
        __typename?: 'CategoriesConnection';
        nodes: Array<{
          __typename?: 'Category';
          id: any;
          name: string;
          slug: string;
          description: string;
        }>;
      };
    }>;
  } | null;
};

export type CreateServiceMutationVariables = Exact<{
  service: ServiceInput;
}>;

export type CreateServiceMutation = {
  __typename?: 'Mutation';
  createService?: {
    __typename?: 'CreateServicePayload';
    service?: {
      __typename?: 'Service';
      id: any;
      name: string;
      price: number;
      description: string;
      companyId: any;
      categoryId: any;
      createdAt: any;
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
        user?: {
          __typename?: 'User';
          id: any;
          name?: string | null;
          email: string;
        } | null;
        availability?: {
          __typename?: 'Availability';
          id: any;
          endTime: any;
          startTime: any;
        } | null;
        address?: {
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        } | null;
      } | null;
      category?: { __typename?: 'Category'; id: any; name: string } | null;
    } | null;
  } | null;
};

export type DeleteServiceMutationVariables = Exact<{
  input: DeleteServiceInput;
}>;

export type DeleteServiceMutation = {
  __typename?: 'Mutation';
  deleteService?: {
    __typename?: 'DeleteServicePayload';
    clientMutationId?: string | null;
    deletedServiceNodeId?: string | null;
  } | null;
};

export type Lite_ServiceFragment = {
  __typename?: 'Service';
  id: any;
  name: string;
  price: number;
  description: string;
  companyId: any;
  categoryId: any;
  createdAt: any;
  company?: {
    __typename?: 'Company';
    id: any;
    name: string;
    description?: string | null;
    user?: {
      __typename?: 'User';
      id: any;
      name?: string | null;
      email: string;
    } | null;
    availability?: {
      __typename?: 'Availability';
      id: any;
      endTime: any;
      startTime: any;
    } | null;
    address?: {
      __typename?: 'Address';
      id: any;
      address?: string | null;
      contactNumber?: string | null;
    } | null;
  } | null;
  category?: { __typename?: 'Category'; id: any; name: string } | null;
};

export type ServiceQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;

export type ServiceQuery = {
  __typename?: 'Query';
  service?: {
    __typename?: 'Service';
    id: any;
    name: string;
    price: number;
    description: string;
    companyId: any;
    categoryId: any;
    createdAt: any;
    company?: {
      __typename?: 'Company';
      id: any;
      name: string;
      description?: string | null;
      user?: {
        __typename?: 'User';
        id: any;
        name?: string | null;
        email: string;
      } | null;
      availability?: {
        __typename?: 'Availability';
        id: any;
        endTime: any;
        startTime: any;
      } | null;
      address?: {
        __typename?: 'Address';
        id: any;
        address?: string | null;
        contactNumber?: string | null;
      } | null;
    } | null;
    category?: { __typename?: 'Category'; id: any; name: string } | null;
  } | null;
};

export type ServicesQueryVariables = Exact<{
  filter?: InputMaybe<ServiceFilter>;
}>;

export type ServicesQuery = {
  __typename?: 'Query';
  services?: {
    __typename?: 'ServicesConnection';
    nodes: Array<{
      __typename?: 'Service';
      id: any;
      name: string;
      price: number;
      description: string;
      companyId: any;
      categoryId: any;
      createdAt: any;
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
        user?: {
          __typename?: 'User';
          id: any;
          name?: string | null;
          email: string;
        } | null;
        availability?: {
          __typename?: 'Availability';
          id: any;
          endTime: any;
          startTime: any;
        } | null;
        address?: {
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        } | null;
      } | null;
      category?: { __typename?: 'Category'; id: any; name: string } | null;
    }>;
  } | null;
};

export type UpdateServiceMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  service: ServicePatch;
}>;

export type UpdateServiceMutation = {
  __typename?: 'Mutation';
  updateService?: {
    __typename?: 'UpdateServicePayload';
    service?: {
      __typename?: 'Service';
      id: any;
      name: string;
      price: number;
      description: string;
      companyId: any;
      categoryId: any;
      createdAt: any;
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
        user?: {
          __typename?: 'User';
          id: any;
          name?: string | null;
          email: string;
        } | null;
        availability?: {
          __typename?: 'Availability';
          id: any;
          endTime: any;
          startTime: any;
        } | null;
        address?: {
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        } | null;
      } | null;
      category?: { __typename?: 'Category'; id: any; name: string } | null;
    } | null;
  } | null;
};

export type CompaniesQueryVariables = Exact<{ [key: string]: never }>;

export type CompaniesQuery = {
  __typename?: 'Query';
  companies?: {
    __typename?: 'CompaniesConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Company';
      id: any;
      name: string;
      createdAt: any;
      companyCategory?: {
        __typename?: 'CompanyCategory';
        id: any;
        category?: { __typename?: 'Category'; id: any; name: string } | null;
      } | null;
      user?: {
        __typename?: 'User';
        id: any;
        name?: string | null;
        email: string;
      } | null;
    }>;
  } | null;
};

export type DeleteCompanyMutationVariables = Exact<{
  input: DeleteCompanyInput;
}>;

export type DeleteCompanyMutation = {
  __typename?: 'Mutation';
  deleteCompany?: {
    __typename?: 'DeleteCompanyPayload';
    clientMutationId?: string | null;
    deletedCompanyNodeId?: string | null;
  } | null;
};

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput;
}>;

export type DeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUser?: {
    __typename?: 'DeleteUserPayload';
    clientMutationId?: string | null;
    deletedUserNodeId?: string | null;
  } | null;
};

export type UsersQueryVariables = Exact<{
  filter?: InputMaybe<UserFilter>;
}>;

export type UsersQuery = {
  __typename?: 'Query';
  users?: {
    __typename?: 'UsersConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'User';
      id: any;
      name?: string | null;
      email: string;
      createdAt: any;
    }>;
  } | null;
};

export type CompanyQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;

export type CompanyQuery = {
  __typename?: 'Query';
  company?: {
    __typename?: 'Company';
    id: any;
    name: string;
    description?: string | null;
    user?: {
      __typename?: 'User';
      id: any;
      name?: string | null;
      email: string;
      type: string;
      isVerified: boolean;
      isAdmin: boolean;
      addresses: {
        __typename?: 'AddressesConnection';
        nodes: Array<{
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        }>;
      };
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
        companyCategory?: {
          __typename?: 'CompanyCategory';
          categoryId: any;
          category?: {
            __typename?: 'Category';
            id: any;
            name: string;
            services: {
              __typename?: 'ServicesConnection';
              nodes: Array<{
                __typename?: 'Service';
                id: any;
                name: string;
                price: number;
                description: string;
                companyId: any;
                categoryId: any;
                createdAt: any;
                company?: {
                  __typename?: 'Company';
                  id: any;
                  name: string;
                  description?: string | null;
                  user?: {
                    __typename?: 'User';
                    id: any;
                    name?: string | null;
                    email: string;
                  } | null;
                  availability?: {
                    __typename?: 'Availability';
                    id: any;
                    endTime: any;
                    startTime: any;
                  } | null;
                  address?: {
                    __typename?: 'Address';
                    id: any;
                    address?: string | null;
                    contactNumber?: string | null;
                  } | null;
                } | null;
                category?: {
                  __typename?: 'Category';
                  id: any;
                  name: string;
                } | null;
              }>;
            };
          } | null;
        } | null;
        address?: {
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        } | null;
        availability?: {
          __typename?: 'Availability';
          id: any;
          endTime: any;
          startTime: any;
        } | null;
      } | null;
    } | null;
    address?: {
      __typename?: 'Address';
      id: any;
      address?: string | null;
      contactNumber?: string | null;
    } | null;
    availability?: {
      __typename?: 'Availability';
      id: any;
      endTime: any;
      startTime: any;
    } | null;
    companyCategory?: {
      __typename?: 'CompanyCategory';
      categoryId: any;
      category?: {
        __typename?: 'Category';
        id: any;
        name: string;
        services: {
          __typename?: 'ServicesConnection';
          nodes: Array<{
            __typename?: 'Service';
            id: any;
            name: string;
            price: number;
            description: string;
            companyId: any;
            categoryId: any;
            createdAt: any;
            company?: {
              __typename?: 'Company';
              id: any;
              name: string;
              description?: string | null;
              user?: {
                __typename?: 'User';
                id: any;
                name?: string | null;
                email: string;
              } | null;
              availability?: {
                __typename?: 'Availability';
                id: any;
                endTime: any;
                startTime: any;
              } | null;
              address?: {
                __typename?: 'Address';
                id: any;
                address?: string | null;
                contactNumber?: string | null;
              } | null;
            } | null;
            category?: {
              __typename?: 'Category';
              id: any;
              name: string;
            } | null;
          }>;
        };
      } | null;
    } | null;
  } | null;
};

export type UpdateCompanyMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  company: CompanyPatch;
}>;

export type UpdateCompanyMutation = {
  __typename?: 'Mutation';
  updateCompany?: {
    __typename?: 'UpdateCompanyPayload';
    company?: {
      __typename?: 'Company';
      id: any;
      name: string;
      description?: string | null;
      address?: {
        __typename?: 'Address';
        id: any;
        address?: string | null;
        contactNumber?: string | null;
      } | null;
      availability?: {
        __typename?: 'Availability';
        id: any;
        endTime: any;
        startTime: any;
      } | null;
      companyCategory?: {
        __typename?: 'CompanyCategory';
        categoryId: any;
        category?: {
          __typename?: 'Category';
          id: any;
          name: string;
          services: {
            __typename?: 'ServicesConnection';
            nodes: Array<{
              __typename?: 'Service';
              id: any;
              name: string;
              price: number;
              description: string;
              companyId: any;
              categoryId: any;
              createdAt: any;
              company?: {
                __typename?: 'Company';
                id: any;
                name: string;
                description?: string | null;
                user?: {
                  __typename?: 'User';
                  id: any;
                  name?: string | null;
                  email: string;
                } | null;
                availability?: {
                  __typename?: 'Availability';
                  id: any;
                  endTime: any;
                  startTime: any;
                } | null;
                address?: {
                  __typename?: 'Address';
                  id: any;
                  address?: string | null;
                  contactNumber?: string | null;
                } | null;
              } | null;
              category?: {
                __typename?: 'Category';
                id: any;
                name: string;
              } | null;
            }>;
          };
        } | null;
      } | null;
    } | null;
  } | null;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = {
  __typename?: 'Query';
  currentUser?: {
    __typename?: 'User';
    id: any;
    name?: string | null;
    email: string;
    type: string;
    isVerified: boolean;
    isAdmin: boolean;
    addresses: {
      __typename?: 'AddressesConnection';
      nodes: Array<{
        __typename?: 'Address';
        id: any;
        address?: string | null;
        contactNumber?: string | null;
      }>;
    };
    company?: {
      __typename?: 'Company';
      id: any;
      name: string;
      description?: string | null;
      companyCategory?: {
        __typename?: 'CompanyCategory';
        categoryId: any;
        category?: {
          __typename?: 'Category';
          id: any;
          name: string;
          services: {
            __typename?: 'ServicesConnection';
            nodes: Array<{
              __typename?: 'Service';
              id: any;
              name: string;
              price: number;
              description: string;
              companyId: any;
              categoryId: any;
              createdAt: any;
              company?: {
                __typename?: 'Company';
                id: any;
                name: string;
                description?: string | null;
                user?: {
                  __typename?: 'User';
                  id: any;
                  name?: string | null;
                  email: string;
                } | null;
                availability?: {
                  __typename?: 'Availability';
                  id: any;
                  endTime: any;
                  startTime: any;
                } | null;
                address?: {
                  __typename?: 'Address';
                  id: any;
                  address?: string | null;
                  contactNumber?: string | null;
                } | null;
              } | null;
              category?: {
                __typename?: 'Category';
                id: any;
                name: string;
              } | null;
            }>;
          };
        } | null;
      } | null;
      address?: {
        __typename?: 'Address';
        id: any;
        address?: string | null;
        contactNumber?: string | null;
      } | null;
      availability?: {
        __typename?: 'Availability';
        id: any;
        endTime: any;
        startTime: any;
      } | null;
    } | null;
  } | null;
};

export type Lite_CompanyFragment = {
  __typename?: 'Company';
  id: any;
  name: string;
  description?: string | null;
  address?: {
    __typename?: 'Address';
    id: any;
    address?: string | null;
    contactNumber?: string | null;
  } | null;
  availability?: {
    __typename?: 'Availability';
    id: any;
    endTime: any;
    startTime: any;
  } | null;
  companyCategory?: {
    __typename?: 'CompanyCategory';
    categoryId: any;
    category?: {
      __typename?: 'Category';
      id: any;
      name: string;
      services: {
        __typename?: 'ServicesConnection';
        nodes: Array<{
          __typename?: 'Service';
          id: any;
          name: string;
          price: number;
          description: string;
          companyId: any;
          categoryId: any;
          createdAt: any;
          company?: {
            __typename?: 'Company';
            id: any;
            name: string;
            description?: string | null;
            user?: {
              __typename?: 'User';
              id: any;
              name?: string | null;
              email: string;
            } | null;
            availability?: {
              __typename?: 'Availability';
              id: any;
              endTime: any;
              startTime: any;
            } | null;
            address?: {
              __typename?: 'Address';
              id: any;
              address?: string | null;
              contactNumber?: string | null;
            } | null;
          } | null;
          category?: { __typename?: 'Category'; id: any; name: string } | null;
        }>;
      };
    } | null;
  } | null;
};

export type Lite_UserFragment = {
  __typename?: 'User';
  id: any;
  name?: string | null;
  email: string;
  type: string;
  isVerified: boolean;
  isAdmin: boolean;
  addresses: {
    __typename?: 'AddressesConnection';
    nodes: Array<{
      __typename?: 'Address';
      id: any;
      address?: string | null;
      contactNumber?: string | null;
    }>;
  };
  company?: {
    __typename?: 'Company';
    id: any;
    name: string;
    description?: string | null;
    companyCategory?: {
      __typename?: 'CompanyCategory';
      categoryId: any;
      category?: {
        __typename?: 'Category';
        id: any;
        name: string;
        services: {
          __typename?: 'ServicesConnection';
          nodes: Array<{
            __typename?: 'Service';
            id: any;
            name: string;
            price: number;
            description: string;
            companyId: any;
            categoryId: any;
            createdAt: any;
            company?: {
              __typename?: 'Company';
              id: any;
              name: string;
              description?: string | null;
              user?: {
                __typename?: 'User';
                id: any;
                name?: string | null;
                email: string;
              } | null;
              availability?: {
                __typename?: 'Availability';
                id: any;
                endTime: any;
                startTime: any;
              } | null;
              address?: {
                __typename?: 'Address';
                id: any;
                address?: string | null;
                contactNumber?: string | null;
              } | null;
            } | null;
            category?: {
              __typename?: 'Category';
              id: any;
              name: string;
            } | null;
          }>;
        };
      } | null;
    } | null;
    address?: {
      __typename?: 'Address';
      id: any;
      address?: string | null;
      contactNumber?: string | null;
    } | null;
    availability?: {
      __typename?: 'Availability';
      id: any;
      endTime: any;
      startTime: any;
    } | null;
  } | null;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: {
    __typename?: 'LoginPayload';
    token?: string | null;
    user: {
      __typename?: 'User';
      id: any;
      name?: string | null;
      email: string;
      type: string;
      isVerified: boolean;
      isAdmin: boolean;
      companies: {
        __typename?: 'CompaniesConnection';
        nodes: Array<{
          __typename?: 'Company';
          id: any;
          name: string;
          description?: string | null;
          address?: {
            __typename?: 'Address';
            id: any;
            address?: string | null;
            contactNumber?: string | null;
          } | null;
          availability?: {
            __typename?: 'Availability';
            id: any;
            endTime: any;
            startTime: any;
          } | null;
          companyCategory?: {
            __typename?: 'CompanyCategory';
            categoryId: any;
            category?: {
              __typename?: 'Category';
              id: any;
              name: string;
              services: {
                __typename?: 'ServicesConnection';
                nodes: Array<{
                  __typename?: 'Service';
                  id: any;
                  name: string;
                  price: number;
                  description: string;
                  companyId: any;
                  categoryId: any;
                  createdAt: any;
                  company?: {
                    __typename?: 'Company';
                    id: any;
                    name: string;
                    description?: string | null;
                    user?: {
                      __typename?: 'User';
                      id: any;
                      name?: string | null;
                      email: string;
                    } | null;
                    availability?: {
                      __typename?: 'Availability';
                      id: any;
                      endTime: any;
                      startTime: any;
                    } | null;
                    address?: {
                      __typename?: 'Address';
                      id: any;
                      address?: string | null;
                      contactNumber?: string | null;
                    } | null;
                  } | null;
                  category?: {
                    __typename?: 'Category';
                    id: any;
                    name: string;
                  } | null;
                }>;
              };
            } | null;
          } | null;
        }>;
      };
      addresses: {
        __typename?: 'AddressesConnection';
        nodes: Array<{
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        }>;
      };
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
        companyCategory?: {
          __typename?: 'CompanyCategory';
          categoryId: any;
          category?: {
            __typename?: 'Category';
            id: any;
            name: string;
            services: {
              __typename?: 'ServicesConnection';
              nodes: Array<{
                __typename?: 'Service';
                id: any;
                name: string;
                price: number;
                description: string;
                companyId: any;
                categoryId: any;
                createdAt: any;
                company?: {
                  __typename?: 'Company';
                  id: any;
                  name: string;
                  description?: string | null;
                  user?: {
                    __typename?: 'User';
                    id: any;
                    name?: string | null;
                    email: string;
                  } | null;
                  availability?: {
                    __typename?: 'Availability';
                    id: any;
                    endTime: any;
                    startTime: any;
                  } | null;
                  address?: {
                    __typename?: 'Address';
                    id: any;
                    address?: string | null;
                    contactNumber?: string | null;
                  } | null;
                } | null;
                category?: {
                  __typename?: 'Category';
                  id: any;
                  name: string;
                } | null;
              }>;
            };
          } | null;
        } | null;
        address?: {
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        } | null;
        availability?: {
          __typename?: 'Availability';
          id: any;
          endTime: any;
          startTime: any;
        } | null;
      } | null;
    };
  } | null;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = {
  __typename?: 'Mutation';
  logout?: { __typename?: 'LogoutPayload'; success?: boolean | null } | null;
};

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  register?: {
    __typename?: 'RegisterPayload';
    token: string;
    user: {
      __typename?: 'User';
      id: any;
      name?: string | null;
      email: string;
      type: string;
      isVerified: boolean;
      isAdmin: boolean;
      addresses: {
        __typename?: 'AddressesConnection';
        nodes: Array<{
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        }>;
      };
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
        companyCategory?: {
          __typename?: 'CompanyCategory';
          categoryId: any;
          category?: {
            __typename?: 'Category';
            id: any;
            name: string;
            services: {
              __typename?: 'ServicesConnection';
              nodes: Array<{
                __typename?: 'Service';
                id: any;
                name: string;
                price: number;
                description: string;
                companyId: any;
                categoryId: any;
                createdAt: any;
                company?: {
                  __typename?: 'Company';
                  id: any;
                  name: string;
                  description?: string | null;
                  user?: {
                    __typename?: 'User';
                    id: any;
                    name?: string | null;
                    email: string;
                  } | null;
                  availability?: {
                    __typename?: 'Availability';
                    id: any;
                    endTime: any;
                    startTime: any;
                  } | null;
                  address?: {
                    __typename?: 'Address';
                    id: any;
                    address?: string | null;
                    contactNumber?: string | null;
                  } | null;
                } | null;
                category?: {
                  __typename?: 'Category';
                  id: any;
                  name: string;
                } | null;
              }>;
            };
          } | null;
        } | null;
        address?: {
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        } | null;
        availability?: {
          __typename?: 'Availability';
          id: any;
          endTime: any;
          startTime: any;
        } | null;
      } | null;
    };
  } | null;
};

export type RegisterCompanyMutationVariables = Exact<{
  input: RegisterCompanyInput;
}>;

export type RegisterCompanyMutation = {
  __typename?: 'Mutation';
  registerCompany?: {
    __typename?: 'RegisterCompanyPayload';
    token: string;
    company: {
      __typename?: 'Company';
      userId: any;
      id: any;
      name: string;
      description?: string | null;
      address?: {
        __typename?: 'Address';
        id: any;
        address?: string | null;
        contactNumber?: string | null;
      } | null;
      availability?: {
        __typename?: 'Availability';
        id: any;
        endTime: any;
        startTime: any;
      } | null;
      companyCategory?: {
        __typename?: 'CompanyCategory';
        categoryId: any;
        category?: {
          __typename?: 'Category';
          id: any;
          name: string;
          services: {
            __typename?: 'ServicesConnection';
            nodes: Array<{
              __typename?: 'Service';
              id: any;
              name: string;
              price: number;
              description: string;
              companyId: any;
              categoryId: any;
              createdAt: any;
              company?: {
                __typename?: 'Company';
                id: any;
                name: string;
                description?: string | null;
                user?: {
                  __typename?: 'User';
                  id: any;
                  name?: string | null;
                  email: string;
                } | null;
                availability?: {
                  __typename?: 'Availability';
                  id: any;
                  endTime: any;
                  startTime: any;
                } | null;
                address?: {
                  __typename?: 'Address';
                  id: any;
                  address?: string | null;
                  contactNumber?: string | null;
                } | null;
              } | null;
              category?: {
                __typename?: 'Category';
                id: any;
                name: string;
              } | null;
            }>;
          };
        } | null;
      } | null;
    };
  } | null;
};

export const Lite_ServiceFragmentDoc = gql`
  fragment Lite_Service on Service {
    id
    name
    price
    description
    companyId
    categoryId
    company {
      id
      name
      description
      user {
        id
        name
        email
      }
      availability {
        id
        endTime
        startTime
      }
      address {
        id
        address
        contactNumber
      }
    }
    category {
      id
      name
    }
    createdAt
  }
`;
export const Lite_CompanyFragmentDoc = gql`
  fragment Lite_Company on Company {
    id
    name
    description
    address {
      id
      address
      contactNumber
    }
    availability {
      id
      endTime
      startTime
    }
    companyCategory {
      categoryId
      category {
        id
        name
        services {
          nodes {
            ...Lite_Service
          }
        }
      }
    }
  }
  ${Lite_ServiceFragmentDoc}
`;
export const Lite_UserFragmentDoc = gql`
  fragment Lite_User on User {
    id
    name
    email
    type
    isVerified
    isAdmin
    addresses {
      nodes {
        id
        address
        contactNumber
      }
    }
    company {
      ...Lite_Company
      companyCategory {
        categoryId
        category {
          id
          name
        }
      }
    }
  }
  ${Lite_CompanyFragmentDoc}
`;
export const CategoriesDocument = gql`
  query Categories($condition: CategoryCondition) {
    categories(condition: $condition) {
      nodes {
        id
        name
        slug
        description
        childCategories {
          nodes {
            id
            name
            slug
            description
          }
        }
      }
    }
  }
`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options
  );
}
export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options
  );
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<
  typeof useCategoriesLazyQuery
>;
export type CategoriesQueryResult = Apollo.QueryResult<
  CategoriesQuery,
  CategoriesQueryVariables
>;
export const CreateServiceDocument = gql`
  mutation CreateService($service: ServiceInput!) {
    createService(input: { service: $service }) {
      service {
        id
        ...Lite_Service
      }
    }
  }
  ${Lite_ServiceFragmentDoc}
`;
export type CreateServiceMutationFn = Apollo.MutationFunction<
  CreateServiceMutation,
  CreateServiceMutationVariables
>;

/**
 * __useCreateServiceMutation__
 *
 * To run a mutation, you first call `useCreateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createServiceMutation, { data, loading, error }] = useCreateServiceMutation({
 *   variables: {
 *      service: // value for 'service'
 *   },
 * });
 */
export function useCreateServiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateServiceMutation,
    CreateServiceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateServiceMutation,
    CreateServiceMutationVariables
  >(CreateServiceDocument, options);
}
export type CreateServiceMutationHookResult = ReturnType<
  typeof useCreateServiceMutation
>;
export type CreateServiceMutationResult =
  Apollo.MutationResult<CreateServiceMutation>;
export type CreateServiceMutationOptions = Apollo.BaseMutationOptions<
  CreateServiceMutation,
  CreateServiceMutationVariables
>;
export const DeleteServiceDocument = gql`
  mutation DeleteService($input: DeleteServiceInput!) {
    deleteService(input: $input) {
      clientMutationId
      deletedServiceNodeId
    }
  }
`;
export type DeleteServiceMutationFn = Apollo.MutationFunction<
  DeleteServiceMutation,
  DeleteServiceMutationVariables
>;

/**
 * __useDeleteServiceMutation__
 *
 * To run a mutation, you first call `useDeleteServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceMutation, { data, loading, error }] = useDeleteServiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteServiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteServiceMutation,
    DeleteServiceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteServiceMutation,
    DeleteServiceMutationVariables
  >(DeleteServiceDocument, options);
}
export type DeleteServiceMutationHookResult = ReturnType<
  typeof useDeleteServiceMutation
>;
export type DeleteServiceMutationResult =
  Apollo.MutationResult<DeleteServiceMutation>;
export type DeleteServiceMutationOptions = Apollo.BaseMutationOptions<
  DeleteServiceMutation,
  DeleteServiceMutationVariables
>;
export const ServiceDocument = gql`
  query Service($id: UUID!) {
    service(id: $id) {
      id
      ...Lite_Service
    }
  }
  ${Lite_ServiceFragmentDoc}
`;

/**
 * __useServiceQuery__
 *
 * To run a query within a React component, call `useServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useServiceQuery(
  baseOptions: Apollo.QueryHookOptions<ServiceQuery, ServiceQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ServiceQuery, ServiceQueryVariables>(
    ServiceDocument,
    options
  );
}
export function useServiceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ServiceQuery, ServiceQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ServiceQuery, ServiceQueryVariables>(
    ServiceDocument,
    options
  );
}
export type ServiceQueryHookResult = ReturnType<typeof useServiceQuery>;
export type ServiceLazyQueryHookResult = ReturnType<typeof useServiceLazyQuery>;
export type ServiceQueryResult = Apollo.QueryResult<
  ServiceQuery,
  ServiceQueryVariables
>;
export const ServicesDocument = gql`
  query Services($filter: ServiceFilter) {
    services(filter: $filter) {
      nodes {
        ...Lite_Service
      }
    }
  }
  ${Lite_ServiceFragmentDoc}
`;

/**
 * __useServicesQuery__
 *
 * To run a query within a React component, call `useServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useServicesQuery(
  baseOptions?: Apollo.QueryHookOptions<ServicesQuery, ServicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ServicesQuery, ServicesQueryVariables>(
    ServicesDocument,
    options
  );
}
export function useServicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ServicesQuery,
    ServicesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ServicesQuery, ServicesQueryVariables>(
    ServicesDocument,
    options
  );
}
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>;
export type ServicesLazyQueryHookResult = ReturnType<
  typeof useServicesLazyQuery
>;
export type ServicesQueryResult = Apollo.QueryResult<
  ServicesQuery,
  ServicesQueryVariables
>;
export const UpdateServiceDocument = gql`
  mutation UpdateService($id: UUID!, $service: ServicePatch!) {
    updateService(input: { patch: $service, id: $id }) {
      service {
        id
        ...Lite_Service
      }
    }
  }
  ${Lite_ServiceFragmentDoc}
`;
export type UpdateServiceMutationFn = Apollo.MutationFunction<
  UpdateServiceMutation,
  UpdateServiceMutationVariables
>;

/**
 * __useUpdateServiceMutation__
 *
 * To run a mutation, you first call `useUpdateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceMutation, { data, loading, error }] = useUpdateServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      service: // value for 'service'
 *   },
 * });
 */
export function useUpdateServiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateServiceMutation,
    UpdateServiceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateServiceMutation,
    UpdateServiceMutationVariables
  >(UpdateServiceDocument, options);
}
export type UpdateServiceMutationHookResult = ReturnType<
  typeof useUpdateServiceMutation
>;
export type UpdateServiceMutationResult =
  Apollo.MutationResult<UpdateServiceMutation>;
export type UpdateServiceMutationOptions = Apollo.BaseMutationOptions<
  UpdateServiceMutation,
  UpdateServiceMutationVariables
>;
export const CompaniesDocument = gql`
  query Companies {
    companies {
      totalCount
      nodes {
        id
        name
        companyCategory {
          id
          category {
            id
            name
          }
        }
        createdAt
        user {
          id
          name
          email
        }
      }
    }
  }
`;

/**
 * __useCompaniesQuery__
 *
 * To run a query within a React component, call `useCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompaniesQuery(
  baseOptions?: Apollo.QueryHookOptions<CompaniesQuery, CompaniesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CompaniesQuery, CompaniesQueryVariables>(
    CompaniesDocument,
    options
  );
}
export function useCompaniesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompaniesQuery,
    CompaniesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CompaniesQuery, CompaniesQueryVariables>(
    CompaniesDocument,
    options
  );
}
export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>;
export type CompaniesLazyQueryHookResult = ReturnType<
  typeof useCompaniesLazyQuery
>;
export type CompaniesQueryResult = Apollo.QueryResult<
  CompaniesQuery,
  CompaniesQueryVariables
>;
export const DeleteCompanyDocument = gql`
  mutation DeleteCompany($input: DeleteCompanyInput!) {
    deleteCompany(input: $input) {
      clientMutationId
      deletedCompanyNodeId
    }
  }
`;
export type DeleteCompanyMutationFn = Apollo.MutationFunction<
  DeleteCompanyMutation,
  DeleteCompanyMutationVariables
>;

/**
 * __useDeleteCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompanyMutation, { data, loading, error }] = useDeleteCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCompanyMutation,
    DeleteCompanyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCompanyMutation,
    DeleteCompanyMutationVariables
  >(DeleteCompanyDocument, options);
}
export type DeleteCompanyMutationHookResult = ReturnType<
  typeof useDeleteCompanyMutation
>;
export type DeleteCompanyMutationResult =
  Apollo.MutationResult<DeleteCompanyMutation>;
export type DeleteCompanyMutationOptions = Apollo.BaseMutationOptions<
  DeleteCompanyMutation,
  DeleteCompanyMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      clientMutationId
      deletedUserNodeId
    }
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult =
  Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const UsersDocument = gql`
  query Users($filter: UserFilter) {
    users(filter: $filter) {
      nodes {
        id
        name
        email
        createdAt
      }
      totalCount
    }
  }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const CompanyDocument = gql`
  query Company($id: UUID!) {
    company(id: $id) {
      id
      ...Lite_Company
      user {
        id
        ...Lite_User
      }
    }
  }
  ${Lite_CompanyFragmentDoc}
  ${Lite_UserFragmentDoc}
`;

/**
 * __useCompanyQuery__
 *
 * To run a query within a React component, call `useCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCompanyQuery(
  baseOptions: Apollo.QueryHookOptions<CompanyQuery, CompanyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CompanyQuery, CompanyQueryVariables>(
    CompanyDocument,
    options
  );
}
export function useCompanyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CompanyQuery, CompanyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CompanyQuery, CompanyQueryVariables>(
    CompanyDocument,
    options
  );
}
export type CompanyQueryHookResult = ReturnType<typeof useCompanyQuery>;
export type CompanyLazyQueryHookResult = ReturnType<typeof useCompanyLazyQuery>;
export type CompanyQueryResult = Apollo.QueryResult<
  CompanyQuery,
  CompanyQueryVariables
>;
export const UpdateCompanyDocument = gql`
  mutation UpdateCompany($id: UUID!, $company: CompanyPatch!) {
    updateCompany(input: { patch: $company, id: $id }) {
      company {
        id
        ...Lite_Company
      }
    }
  }
  ${Lite_CompanyFragmentDoc}
`;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      company: // value for 'company'
 *   },
 * });
 */
export function useUpdateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >(UpdateCompanyDocument, options);
}
export type UpdateCompanyMutationHookResult = ReturnType<
  typeof useUpdateCompanyMutation
>;
export type UpdateCompanyMutationResult =
  Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>;
export const CurrentUserDocument = gql`
  query CurrentUser {
    currentUser {
      id
      ...Lite_User
    }
  }
  ${Lite_UserFragmentDoc}
`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options
  );
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options
  );
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<
  typeof useCurrentUserLazyQuery
>;
export type CurrentUserQueryResult = Apollo.QueryResult<
  CurrentUserQuery,
  CurrentUserQueryVariables
>;
export const LoginDocument = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        ...Lite_User
        companies {
          nodes {
            ...Lite_Company
          }
        }
      }
    }
  }
  ${Lite_UserFragmentDoc}
  ${Lite_CompanyFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logout {
      success
    }
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        ...Lite_User
      }
    }
  }
  ${Lite_UserFragmentDoc}
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const RegisterCompanyDocument = gql`
  mutation RegisterCompany($input: RegisterCompanyInput!) {
    registerCompany(input: $input) {
      company {
        ...Lite_Company
        userId
      }
      token
    }
  }
  ${Lite_CompanyFragmentDoc}
`;
export type RegisterCompanyMutationFn = Apollo.MutationFunction<
  RegisterCompanyMutation,
  RegisterCompanyMutationVariables
>;

/**
 * __useRegisterCompanyMutation__
 *
 * To run a mutation, you first call `useRegisterCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerCompanyMutation, { data, loading, error }] = useRegisterCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterCompanyMutation,
    RegisterCompanyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterCompanyMutation,
    RegisterCompanyMutationVariables
  >(RegisterCompanyDocument, options);
}
export type RegisterCompanyMutationHookResult = ReturnType<
  typeof useRegisterCompanyMutation
>;
export type RegisterCompanyMutationResult =
  Apollo.MutationResult<RegisterCompanyMutation>;
export type RegisterCompanyMutationOptions = Apollo.BaseMutationOptions<
  RegisterCompanyMutation,
  RegisterCompanyMutationVariables
>;
