## Cheat sheet

This project was generated with the help of below command:

```bash
ng new dogeapp --ai-config=copilot --package-manager=npm --prefix=doge --routing --ssr=false --standalone --style=tailwind
```

Husky added with:

```bash
npm install --save-dev husky
npx husky init
echo "npm run lint" >> .husky/pre-commit
echo "npx --no -- commitlint --edit $1" > .husky/commit-msg
echo "npm test --ci" > .husky/pre-push
```

ESLint and Prettier added with:

```bash
ng add @angular-eslint/schematics
npm install --save-dev prettier
npm install --save-dev --legacy-peer-deps eslint-config-prettier prettier-plugin-organize-imports
```

Commitlint added with:

```bash
npm install --save-dev @commitlint/config-angular @commitlint/cli
echo "export default {extends: ['@commitlint/config-angular']};" > commitlint.config.js
```

Customize `commitlint.config.js` :

```js
export default {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'test'],
    ],
    'header-max-length': [2, 'always', 120],
  },
};
```

Angular Material added with:

```bash
ng add @angular/material
```

ng-mocks added with:

```bash
npm install --save-dev --legacy-peer-deps ng-mocks
```

CoincapService service added with:

```bash
ng g s core/services/coincap-service
```

UI components (like Header) added with:

```bash
ng g c ui/header
```

Feature (like market) added with:

```bash
ng g c features/market/pages/market-page
```
