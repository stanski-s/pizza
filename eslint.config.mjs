import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  prettier,
];
