module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "tsc --noEmit",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": () => [
    `npm run lint:write --fix`,
    `npm run format --write `,
    "npm run test:ci",
    "npm run check-cspell",
    "npm run build",
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": () => `npm run format --write`,
};
