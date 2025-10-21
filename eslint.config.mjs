import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", 
    "next/typescript",
    "@typescript-eslint/recommended",
    "@typescript-eslint/recommended-requiring-type-checking"
  ),
  {
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-const": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-misused-promises": "error",
      
      // React specific rules
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/no-children-prop": "error",
      "react/no-danger-with-children": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-string-refs": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unknown-property": "error",
      "react/no-unsafe": "error",
      "react/require-render-return": "error",
      "react/self-closing-comp": "error",
      
      // General code quality rules
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "arrow-spacing": "error",
      "no-duplicate-imports": "error",
      "no-useless-rename": "error",
      "object-shorthand": "error",
      "prefer-template": "error",
      "template-curly-spacing": "error",
      "prefer-destructuring": ["error", { "object": true, "array": false }],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "no-trailing-spaces": "error",
      "eol-last": "error",
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["error", "always"],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "jsx-quotes": ["error", "prefer-double"],
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "max-len": ["warn", { "code": 100, "ignoreUrls": true, "ignoreStrings": true }],
      "complexity": ["warn", 10],
      "max-depth": ["warn", 4],
      "max-lines-per-function": ["warn", 50],
      "max-params": ["warn", 4],
      "no-nested-ternary": "warn",
      "no-unneeded-ternary": "error",
      "prefer-early-return": "warn",
      "no-else-return": "warn",
      "consistent-return": "error",
      "default-case": "error",
      "no-fallthrough": "error",
      "no-magic-numbers": ["warn", { "ignore": [0, 1, -1], "ignoreArrayIndexes": true }],
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-whitespace-before-property": "error",
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "computed-property-spacing": ["error", "never"],
      "func-call-spacing": ["error", "never"],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "spaced-comment": ["error", "always"],
      "switch-colon-spacing": "error",
      "template-tag-spacing": "error",
      "unicode-bom": "error",
      "wrap-regex": "error",
      "yield-star-spacing": "error"
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
];

export default eslintConfig;
