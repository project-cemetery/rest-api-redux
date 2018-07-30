module.exports = {
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testRegex: "\\.spec\\.ts$",
    moduleFileExtensions: [ "ts", "js" ],
    collectCoverage: true,
    collectCoverageFrom: [
        "lib/**/*.ts",
        "!lib/index.ts",
    ],
    coverageDirectory: "./coverage",
    moduleDirectories: ["node_modules", "front"],
    "verbose": true,
    "testURL": "http://localhost/",
}
