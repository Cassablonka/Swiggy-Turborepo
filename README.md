# Turborepo Create React App starter

This is an starter pack for React based Turborepo.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [create-react-app](https://create-react-app.dev) app
- `ui`: a stub React component library shared by `web` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-react` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tailwind-config`: `tailwind.config.js`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [TailwindCSS](https://tailwindcss.com/) for styling the components
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Using this example

Run the following command:

```sh
npx degit https://github.com/Cassablonka/Turborepo.git monorepo-starter-pack
cd monorepo-starter-pack
pnpm install
git init . && git add . && git commit -m "Init"
```
