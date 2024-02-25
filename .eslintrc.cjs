module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["node_modules", "dist", "build"],
  parserOptions: { ecmaVersion: 12, sourceType: "module" },
  plugins: ["react-refresh"],
  rules: {
    indent: ["error", 2],
    "prettier/prettier": "error",
    "linebreak-style": [0, "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "import/no-unresolved": [2, { caseSensitive: false }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/order": [
      2,
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
  settings: {
    react: {
      version: "18.2",
    },
  },

};
