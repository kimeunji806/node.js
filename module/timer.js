const { logger } = require("./console_class");

// timer.js
setTimeout(function () {
  console.log("1초후에 실행");
}, 1000);

const job = setInterval(function () {
  logger.log(new Date() + "실행");
}, 1000);

// 종료.
setTimeout(() => {
  clearInterval(job);
}, 10000);

module.exports = { job };
