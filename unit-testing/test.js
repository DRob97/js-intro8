import sum from './component';

test("Find sum of the element in array [1, 2, 3]", () => {
    expect(sum([1, 2, 3])).toBe(6);
})