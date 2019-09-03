module.exports = {
  root: true,
  settings: {
    react: {
      pragma: 'React',
      version: '16.8'
    }
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    // Block rules from @typescript-eslint/recommended conflicted with prettier
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        semi: false,
        jsxSingleQuote: true,
        bracketSpacing: true,
        jsxBracketSameLine: false
      },
      {
        usePrettierrc: false
      }
    ],
    'react/prop-types': 0,
    // 'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'always' }],
    '@typescript-eslint/explicit-function-return-type': 0
  }
}
