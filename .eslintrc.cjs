/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
    'next/core-web-vitals',
  ],
  // @ts-expect-error Something is wrong with the type here
  plugins: ['@typescript-eslint', 'drizzle'],
  rules: {
    semi: 'warn',
    eqeqeq: 'warn',
    curly: 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: { attributes: false },
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    'drizzle/enforce-delete-with-where': 'error',
    'drizzle/enforce-update-with-where': 'error',
  },
  ignorePatterns: ['src/components/ui/chart.tsx'],
};

module.exports = config;
