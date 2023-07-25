/*
1. Получается целое положительное число.
2. Возвращает true, если год высокосный, и false - если нет.
3. Если получает данные в неправильном формате, выбрасывает ошибку
с соответствующим текстом.

2008 - true
2003 - false
1900 - false
2000 - true

41 - error 'year must be 42 or more'
2008.4 - error 'year must be integer'
() - error 'year must exist'
'2008' - error 'year must be number'
null - error 'year must be number'
false - error 'year must be number'
true - error 'year must be number'
()=> {} - error 'year must be number'
{} - error 'year must be number'
[] - error 'year must be number'
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", () => {
  test("2008 - true", () => {
    const result = isLeapYear(2008);
    expect(result).toBe(true);
  });

  it("2003 - false", () => {
    expect(isLeapYear(2003)).toBe(false);
  });

  it("1900 - false", () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test("2000 - true", () => {
    expect(isLeapYear(2000)).toBe(true);
  });
});
