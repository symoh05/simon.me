import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Turn off unescaped quotes errors
      'react/no-unescaped-entities': 'off',
      // Turn off any type errors
      '@typescript-eslint/no-explicit-any': 'off',
      // Turn off setState in effect warnings
      'react-hooks/set-state-in-effect': 'off',
      // Turn off exhaustive deps warnings (make them warnings, not errors)
      'react-hooks/exhaustive-deps': 'warn',
      // Turn off comment text nodes errors
      'react/jsx-no-comment-textnodes': 'off',
      // Turn off unused vars warnings
      '@typescript-eslint/no-unused-vars': 'warn',
      // Turn off img element warnings (allow standard img tags)
      '@next/next/no-img-element': 'off',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;