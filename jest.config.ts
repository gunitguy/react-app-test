import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    verbose: true,
    testRegex: "(src/(hooks|models|selectors|stores|utilities|views)/.*\\.(test|spec))\\.(ts|tsx)$",
    collectCoverage: process.env.NODE_ENV === "development",
    collectCoverageFrom: ["**/src/**/*.{ts,tsx}", "!**/assets/**"],
    coverageReporters: ["cobertura", "html", "text"],
    preset: "ts-jest",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    globals: {
        TEST_ENV: true
    },
    testEnvironment: "jsdom",
    testResultsProcessor: "./node_modules/jest-junit-reporter",
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    transformIgnorePatterns: ["<rootDir>/node_modules/@testing-library/jest-dom"],
    moduleNameMapper: {
        "\\.(s?css)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFilesAfterEnv: ["<rootDir>/test/setup/rtl-setup"],
    testURL: "http://localhost"
};

export default config;
