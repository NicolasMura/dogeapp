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
npm i && npm start
```

## Building

To build the project run:

```bash
npm build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
npm test
```

## Running end-to-end tests with Cypress

For end-to-end (e2e) testing, run:

```bash
npm e2e
```

## Cheat sheet

This project was generated with the help of below command:

```bash
ng new dogeapp --ai-config=copilot --package-manager=npm --prefix=doge --routing --ssr=false --standalone --style=tailwind
```

ESLint added with:

```bash
ng add @angular-eslint/schematics
```
