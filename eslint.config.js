// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import pluginPrettier from "eslint-plugin-prettier";
import pluginImport from "eslint-plugin-import";
import pluginUx from "eslint-plugin-ux";

export default [
  {
    ignores: ["dist/", "build/", "output/", "node_modules/"],
  },
  {
    files: ["src/**/*.{js,ux}"], // Apply this config to these files
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
           presets: ["@babel/preset-env"]
        }
      }
    },
    plugins: {},
    rules: {
      ...pluginJs.configs.recommended.rules,
    }
  },
];
