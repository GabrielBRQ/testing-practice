import { caesarCipher } from "../caesar.js";

test("transform simple word", () => {
  expect(caesarCipher("apple", 3)).toBe("dssoh");
});

test("transform a word going z to a", () => {
    expect(caesarCipher("zebra", 4)).toBe("difve");
});

test("transform a phrase", () => {
    expect(caesarCipher("It is just a phrase", 2)).toBe("Kv ku lwuv c rjtcug");
});

test("transform a phrase with numbers and special characters", () => {
    expect(caesarCipher("It's just a phrase 22", 2)).toBe("Kv'u lwuv c rjtcug 22");
});