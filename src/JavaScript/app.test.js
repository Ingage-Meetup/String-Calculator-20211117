const { doAllTheThings, add } = require('./app');

// This is a Jest unit test - see https://jestjs.io/docs/en/getting-started for more information
test('doAllTheThings should be true', () => {
    expect(doAllTheThings()).toBeTruthy();
});

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('single argument returns the passed in value', () => {
    expect(add(8)).toBe(8);
});

test('arbitrary number of arguments supported', () => {
    
});