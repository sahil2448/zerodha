// jest.config.cjs
module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",

  // point to your setup file (must exist at src/setupTests.js)
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  moduleNameMapper: {
    // CSS modules or plain CSS
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    // image imports → your file mock
    "\\.(png|jpe?g|svg)$": "<rootDir>/__mocks__/fileMock.cjs",
  },

  moduleFileExtensions: ["js", "jsx", "json"],
};
