const { add, sub, getTodo, mul } = require("../index");
describe(" Test case for index.js file", () => {
  test("test case for add function", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  test("test case for sub function", () => {
    const result = sub(2, 1);
    expect(result).toBe(1);
  });

  test("test case for axios call of success", async () => {
    const response = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const result = await getTodo(url);
    expect(result).toStrictEqual(response);
  });

  test("test case for axios call of failure", async () => {
    const response = {
      message: "getaddrinfo ENOTFOUND jsonplaceholde.typicode.com",
      code: "ENOTFOUND",
      succeded: false,
    };
    const url = "https://jsonplaceholde.typicode.com/todos/1";
    try {
      await getTodo(url);
    } catch (error) {
      expect(error).toStrictEqual(response);
    }
  });
  test(" test case for mul function ", () => {
    const result = mul(1, 2);
    expect(result).toBe(2);
  });
});
