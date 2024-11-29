module.exports = {
    testMatch: ['**/src/**/*.(test|spec).(ts|tsx|js|jsx)'],
    moduleNameMapper: {
        "^react-router-dom$": "<rootDir>/__mocks__/react-router-dom.js"
    }
}