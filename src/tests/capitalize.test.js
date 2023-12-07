import { capitalize } from "../capitalize.js";

test('capitalize a word', () => {
    expect(capitalize('gabriel')).toBe('Gabriel');
});

test('giving numbers', () => {
    expect(capitalize(12)).toBe('Please give a word');
});

test('giving numbers as a text', () => {
    expect(capitalize('12')).toBe('12');
});

test('giving special characters as a text', () => {
    expect(capitalize('&!*@¨#*#')).toBe('&!*@¨#*#');
});