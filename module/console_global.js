const { logger } = require("./console_class");

console.log("hello world"); // 일반적인 로그
console.log("hello %s", "world"); // 일반적인 로그, %s를 사용해서 문자열 데이터를 파라미터로 전달

const world = "world";
console.log("hello ${world"); // 자바스크립트의 텝플릿 리터럴 문법을 사용

console.error(new Error("에러 메시지 출력")); // 에러 로그 출력

const arr = [
  { name: "John Doe", email: "john@mail.com" },
  { name: "Jeremy Go", email: "jeremy@mail.com" },
];
console.table(arr); // 테이블 형태로 배열/오브젝트 데이터 출력

const obj = {
  School: {
    // Depth 0
    Grade1: {
      // Depth 1
      ClassA: {
        // Depth 2
        Student1: {
          // Depth 3
          Name: "John Doe",
          Details: {
            // Depth 4
            Age: 17,
            Subject: ["Math", "Science"],
            Address: "Seoul, Korea", // Depth 5 (가장 깊은 데이터)
          },
        },
        Student2: {
          Name: "Jeremy Go",
          Details: {
            Age: 17,
            Subject: ["History", "Art"],
            Address: "Busan, Korea",
          },
        },
      },
    },
    Teachers: ["Mr. Kim", "Ms. Lee"],
  },
};

console.dir(obj, { depth: 3, colors: true }); // 오브젝트를 콘솔에 출력하는데, 출력할 오브젝트의 깊이와 콘솔 메시지 텍스트에 색상을 적용

console.time("for-loop"); // console.time에 파라미터로 전달한 레이블과 뒤에 나오는 console.timeEnd 중 일치하는 레이블을 가지고 있는 console.timeEnd 코드 사이의 실행시간 측정
for (let i = 1; i <= 10000; i++) {
  console.log(i);
}
console.timeEnd("for-loop"); // 앞에 나온 console.time 중 console.timeEnd와 레이블이 일치하는 코드 사이의 실행 시간 측정
