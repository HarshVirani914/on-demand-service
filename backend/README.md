# backend-starter

- postgresql
- graphql
- postGraphile
- graphile-migrate

## Setup

```bash
# install dependencies
$ yarn install

# start postgresql server on local system

# create .env file from .env.example
# change .env file with your details

# setup database
$ yarn setup

# start server
$ yarn dev

# go to http://localhost:5001/graphiql
```

## Migrations

```bash
# create migration
$ yarn pgm:create <name>

# migrate
$ yarn migrate up

# rollback
$ yarn migrate down
```
