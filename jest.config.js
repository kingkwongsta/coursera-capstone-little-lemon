module.exports = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/", "^.+\\.css$"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
