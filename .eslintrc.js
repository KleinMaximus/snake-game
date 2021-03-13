module.exports = {
  env: {
    browser: true,
  },

  extends: [
    'eslint:recommended',
    // "airbnb",
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:react/recommended',
    'react-app',
  ],

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },

    {
      files: ['*.html'],
      rules: {
        'react/jsx-filename-extension': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },

    {
      files: ['*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },

    {
      files: ['*.tsx'],
      rules: {
        'no-nested-ternary': 'off',
        'no-use-before-define': 'off',
      },
    },
  ],

  plugins: ['prettier', 'simple-import-sort', 'react', 'react-hooks'],

  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { bundledDependencies: true }],
    'import/no-unresolved': ['error', { ignore: ['.svg$', '^@/'] }],

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
        specialLink: ['hrefLeft', 'hrefRight'],
      },
    ],

    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        controlComponents: ['CustomInput'],
        depth: 3,
        labelAttributes: ['label'],
        labelComponents: ['CustomInputLabel'],
      },
    ],
    'jsx-a11y/label-has-for': ['error', { allowChildren: true }],
    'jsx-quotes': ['error', 'prefer-double'],

    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],

    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error', 'info', 'warn'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-use-before-define': ['error', { functions: false }],

    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
      },
    ],

    'prettier/prettier': 'error',

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: false,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'react/prop-types': 'off',

    'require-jsdoc': 'off',

    'simple-import-sort/imports': [
      'warn',
      {
        groups: [['^\\u0000'], ['^@?\\w'], ['^'], ['^@mobifarm?\\w'], ['^\\.'], ['\\.css$', '\\.scss$']],
      },
    ],

    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false }],
  },
};
