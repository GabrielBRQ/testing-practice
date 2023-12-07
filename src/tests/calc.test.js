import { calculator } from "../calc";

test("add 2 numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("add 2 float numbers", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("sub 2 numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("divide 2 numbers", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("multiply 2 numbers", () => {
  expect(calculator.multiply(6, 2)).toBe(12);
});

test("putting words", () => {
    expect(calculator.multiply(6, 'asdasd')).toBe("Please put a number");
  });
