## Description

Api uniup foundation software management developed by nest js and postgresSQL.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# start docker in developement
$ npm run docker-compose:dev


# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## enviroment variables

to run the application with enviroments variable configuration you must create an env file for developement purpose named `stage.dev.env`, example of the structure of the files is in the file `stage.example.env`

#### variable example

```bash
PORT=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=
PGADMIN_PORT=
```

## Stay in touch

- Email - uniupfoundation@gmail.com

## License

API uniup is [MIT licensed](LICENSE).
