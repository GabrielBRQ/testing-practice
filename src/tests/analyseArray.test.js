import { analyseArray } from "../analyseArray.js";

test("use array with numbers", () => {
    expect(analyseArray([1,8,3,4,2,6])).toMatchObject({ average: 4, min: 1, max: 8, length:6 });
});

test("use array with numbers and letter", () => {
    expect(analyseArray([1,8,3,4,2,6,'k','j'])).toMatchObject({ average: 4, min: 1, max: 8, length:8 });
});