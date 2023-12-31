module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
    overrides: [],
    parserOptions: {
      project: "**/tsconfig.json",
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  };