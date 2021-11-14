const { doAllTheThings, add } = require('./app');

// This is a Jest unit test - see https://jestjs.io/docs/en/getting-started for more information
test('doAllTheThings should be true', () => {
    expect(doAllTheThings()).toBeTruthy();
});

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('single argument returns the passed in value', () => {
    expect(add('8')).toBe(8);
});

test('add 2 values', () => {
    expect(add('2, 4')).toBe(6);
});

test('arbitrary number of arguments supported', () => {
    expect(add('1,2,3,4,5,6')).toBe(21);
});

test('comma AND newline delimeter', () => {
    expect(add('1\n2,3')).toBe(6)
});

test('reject negatives', () => { 
    expect(() => { add('-1, -2, -3'); }).toThrow("negatives not allowed");
});
