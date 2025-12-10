module.exports = {
  // Use a JavaScript-style single quote
  singleQuote: true,
  // Do not add semicolons at the end of statements
  semi: false,
  // Print trailing commas wherever valid in ES5 (objects, arrays, etc.)
  trailingComma: 'es5',
  // Use 2 spaces for indentation
  tabWidth: 2,
  // Use spaces instead of tabs
  useTabs: false,
  // Line width beyond which Prettier will wrap code
  printWidth: 100,
  // Specify the end of line sequence
  endOfLine: 'lf',
  // Configure Prettier to use Astro plugin for Astro files
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
