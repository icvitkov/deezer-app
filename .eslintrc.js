module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 0,
    'semi': 0,
    'arrow-parens': [
      2,
      'always'
    ],
    'space-before-function-paren': 0,
    'vue/order-in-components': 0,
    'vue/html-self-closing': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'vue/max-attributes-per-line': [
      0,
      {
        'singleline': 2,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
