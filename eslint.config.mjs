import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // Next.js 17+ pakai new JSX transform — React tidak perlu diimport
      "react/react-in-jsx-scope": "off",
      // Matikan rule bawaan agar tidak konflik dengan plugin unused-imports
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      // Hapus otomatis import yang tidak dipakai
      "unused-imports/no-unused-imports": "error",
      // Peringatan untuk variabel tidak terpakai (kecuali prefix _)
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
]);

export default eslintConfig;
