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
npm install --save-dev eslint-config-prettier --legacy-peer-deps
```

Commitlint added with:

```bash
npm install --save-dev @commitlint/config-angular @commitlint/cli
echo "export default {extends: ['@commitlint/config-angular']};" > commitlint.config.js
```

Personnalisation `commitlint.config.js` :

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
npm install ng-mocks --save-dev --legacy-peer-deps
```
