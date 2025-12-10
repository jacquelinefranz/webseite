module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:vue/recommended',
    'plugin:jsx-a11y/recommended', // Add this
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // Extra options for Vue parsing in Astro components if needed
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.astro', '.vue'],
  },
  plugins: [
    '@typescript-eslint',
    'vue',
    'jsx-a11y', // Add this
  ],
  rules: {
    // Add custom rules here if needed
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // Astro-specific rules
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        // Vue-specific rules
      },
    },
    // Optional: Add specific rules for Astro scripts (frontmatter)
    {
      files: ['*.js', '*.ts'],
      rules: {
        // e.g., 'no-unused-vars': 'off',
      },
    },
  ],
};