import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: [
      ".astro/",
      "dist/",
      "node_modules/",
      "bun.lock",
      "package-lock.json",
      "src/env.d.ts"
    ],
  },
  // JavaScript & TypeScript recommended
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  
  // JSX A11y recommended
  pluginJsxA11y.flatConfigs.recommended,
  
  // Astro recommended (includes parser setup for .astro files)
  ...pluginAstro.configs.recommended,

  // Global configuration overrides
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        'astro/astro': true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      }
    },
  },

  // TypeScript parser for .astro files (to support TS inside Astro)
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },

  // Specific configuration for scripts inside Astro files
  {
    files: ["**/*.astro/*.js", "*.astro/*.js", "**/*.astro/*.ts", "*.astro/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      "prettier/prettier": "off", // Often causes issues in embedded scripts
    }
  },

  // Prettier config to disable conflicting rules
  eslintConfigPrettier
);