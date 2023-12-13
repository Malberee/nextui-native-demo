module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/recommended',
    'airbnb-typescript',
    'prettier',
  ],
  parserOptions: { project: ['tsconfig.json'] },
  settings: {
    'import/ignore': ['react-native'],
  },
  ignorePatterns: ['.eslintrc.js'],
}
