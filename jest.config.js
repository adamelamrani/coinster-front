// jest.config.js
module.exports = {
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!.next/**/*",
    "!**/*.test.js",
    "!.next/**/*",
    "!coverage/**/*",
    "!jest.config.js",
    "!next.config.js",
    "!**/_app.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i": `<rootDir>/__mocks__/fileMock.js`,

    "^@/components/(.*)$": "<rootDir>/components/$1",
  },

  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});
