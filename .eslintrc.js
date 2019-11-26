module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest': true
  },
  'extends': [
    'plugin:react/recommended',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'parserOptions.ecmaVersion': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'prettier'
  ],
  'rules': {
    "global-require": 0,
    "rules": {
      "prettier/prettier": "error"
    },
    "import/no-dynamic-require": 0,
    "no-param-reassign": [0, {"props": false}],
    "react/no-did-mount-set-state": 0,
    "react/jsx-no-bind": 0,

    'id-blacklist': [2, 'err', 'callback'],
    'no-unused-vars': [1, {
      args: 'none'
    }],
    'no-underscore-dangle': 0,
    'no-restricted-∂ds': 0,
    'import/first': 1,
    'react/prop-types': [1, {
      ignore: ['children']
    }],
    // ignore a11y
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'jsx-a11y/aria-role': 0,
    'jsx-a11y/no-access-key': 0,
    'brace-style': 2,
    'camelcase': [2, {
      properties: 'never'
    }],
    'require-yield': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'array-callback-return': 2,
    'consistent-return': 2,
    'curly': [2, 'all'],
    'dot-notation': 2,
    'guard-for-in': 2,
    'radix': 2,
    'require-await': 2,
    'array-bracket-newline': 2,
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'never'],
    'computed-property-spacing': 2,
    'eol-last': 2,
    'func-call-spacing': 2,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'linebreak-style': 2,
    'new-cap': 2,
    'new-parens': 2,
    'newline-per-chained-call': 2,
    'no-const-assign': 2,
    'no-else-return': 2,
    'no-irregular-whitespace': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, {
      max: 2
    }],
    'no-redeclare': 2,
    'no-sync': 0,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 2,
    'no-var': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-unexpected-multiline': 2,
    'no-unsafe-finally': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-multi-str': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-self-assign': 2,
    'no-throw-literal': 2,
    'no-unused-labels': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-with': 2,
    'no-delete-var': 2,
    'no-new-require': 2,
    'no-array-constructor': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-tabs': 2,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'no-confusing-arrow': 0,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'one-var': [2, {
      var: 'never',
      let: 'never',
      const: 'never',
    }],
    'operator-linebreak': 2,
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'consistent'],
    'quotes': [2, 'single', {
      allowTemplateLiterals: true
    }],
    'semi': 0,
    'semi-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never',
    }],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'spaced-comment': [2, 'always'],
    'switch-colon-spacing': 2,
    'arrow-body-style': 2,
    'arrow-parens': [0, 'always'],
    'arrow-spacing': 2,
    'constructor-super': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'symbol-description': 2,
    'template-curly-spacing': 2,
    'yield-star-spacing': [2, 'after'],
    'generator-star-spacing': [2, 'after'],
  
    "max-len": [2, 300, 4, {"ignoreUrls": true}],
    'prettier/prettier': 2,
    "comma-dangle": 0,
  }
};