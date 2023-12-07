import { reverseString } from "../reverse";

test('reverse a word', () => {
    expect(reverseString('gabriel')).toBe('leirbag');
});

test('reverse a phrase', () => {
    expect(reverseString('isso na verdade é uma frase')).toBe('esarf amu é edadrev an ossi');
});

test('number', () => {
    expect(reverseString(12312)).toBe('Please give a word');
});

test('number as a text', () => {
    expect(reverseString('12312')).toBe('21321');
})