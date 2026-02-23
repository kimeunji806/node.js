// exp.js
// 문자열 특정 패턴 찾기.
console.log("Hello, World".replace(/l/g, "L"));
console.log(/^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/.test("010-2345-9872"));
let result = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
  "test@co.kr",
);
console.log(result);
