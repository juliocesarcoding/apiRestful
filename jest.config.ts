import { Config } from "jest";

const config: Config = {
 preset: "ts-jest",
 testEnvironment: "node",
 transform: {
  "^.+\\.tsx?$": "ts-jest",
 },
 moduleFileExtensions: ["ts", "js", "json"],
 transformIgnorePatterns: ["/node_modules/"],
 roots: ["<rootDir>/src", "<rootDir>/tests"],
};

export default config;
