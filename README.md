# Doge App - Technical test

Frontend (Angular) repo for a technical test.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Requirements

To contribute to this project and run it locally, you will need:

- [Node JS 20.19.0 || ^22.12.0 || ^24.0.0](https://nodejs.org/en)
- [Angular ^21.0.0](https://angular.dev/reference/releases#release-schedule)
- [Typescript >=5.9.0 <6.0.0](https://www.typescriptlang.org)
- [RXJS ^6.5.3 || ^7.4.0](https://rxjs.dev/)

https://angular.dev/reference/versions

## Dev Setup

```bash
yarn && yarn start
```

## Building

To build the project run:

```bash
yarn build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Run the project on Stackblitz

This can be a little tricky to achieve: for example, some dependencies can't be installed with yarn because of incompatible target architecture, and some errors can be raised :

```bash
[2/4] 🚚  Fetching packages...
error @tailwindcss/oxide@4.1.18: The CPU architecture "x64" is incompatible with this module.
error Found incompatible module.
```

Workaround: install dependencies with `npm`.

=> Open https://stackblitz.com/~/github.com/NicolasMura/dogeapp (in Chrome)

=> Once launched, wait for error and run in the Stackblitz integrated terminal:

```bash
npm install --legacy-peer-deps && npm start
```

Don't forget to replace the Coincap API key `<COINCAP_API_KEY>` in `src/index.html` file wih a valid key 🚀

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
yarn test
```

## Running end-to-end tests with Cypress

@TODO...
