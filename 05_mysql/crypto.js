// crypto.js
const crypto = require("crypto");
require("dotenv").config();

// 평문을 암호화하는 함수.
function createPassword(plainTxt) {
  const salt = process.env.MYSQL_SALT;
  // pbkdf2Sync 함수로 비밀번호를 암호화
  // plainTxt  → 사용자가 입력한 원본 비밀번호
  // salt      → 암호화에 섞을 값
  // 100000    → 10만 번 반복 (보안 강화 목적)
  // 64        → 64바이트 길이로 해시 생성
  // "sha512"  → 해시 알고리즘 종류
  const passwd = crypto.pbkdf2Sync(plainTxt, salt, 100000, 64, "sha512");
  console.log(passwd.toString("base64"));
  return passwd.toString("base64"); // 암호화.
}

// 입력한 비밀번호 vs. 데이터베이스에 저장된 값과 비교.
function checkPassword(plainTxt, hashPasswd) {
  const hashPasswd1 = createPassword(plainTxt);
  return hashPasswd1 == hashPasswd;
}

// const dbPass = `ZnUiDRZQxYTd3dCTdbYQwnBsQ1yC8eM4S8xCLJEkd+Vk9lw21TPnAz/C//ifdbI/qncc2fgNm2y3K4u9LBSLiQ==`;
// console.log(dbPass.length);
// console.log(checkPassword("test1234", dbPass));

module.exports = { createPassword, checkPassword };
