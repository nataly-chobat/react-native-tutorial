module.exports = {
    preset: 'react-native',
    verbose: true,
    collectCoverage: true,
    coverageReporters: ['cobertura', 'html'],
    coverageDirectory: 'jest',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/assetsTransformer.js',
        '\\.(css|less)$': '<rootDir>/test/assetsTransformer.js',
    },
    // setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [
        'node_modules/(?!(static-container|react-native|react-native-.+|react-navigation-fluid-transitions|react-navigation)/)',
    ],
    testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>setupTests.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    // reporters: [
    //     'default',
    //     [
    //         './node_modules/jest-html-reporter',
    //         {
    //             pageTitle: 'Unit Test Report',
    //             outputPath: 'jest/unit-test-report.html',
    //             includeFailureMsg: true,
    //             includeConsoleLog: true,
    //         },
    //     ],
    // ],
};
