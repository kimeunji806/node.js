//crypto.js
const crypto = require("crypto");
require("dotenv").config();

//평문을 암호화하는 함수
function createPassword(plainTxt) {
  const salt = process.env.MYSQL_SALT;
  const passwd = crypto.pbkdf2Sync(plainTxt, salt, 100000, 64, "sha512");
  // console.log(passwd.toString("base64"));
  return passwd.toString("base64"); //암호화된 값.
}

//입력한 비밀번호 vs 데이터베이스에 저장된 값과 비교.
function checkPassword(plainTxt, hashpasswd) {
  const hashpasswd1 = createPassword(plainTxt);
  return hashpasswd1 == hashpasswd;
}
// const dbPass = `kS679XPdmeZR3q9BcVwXg89Y+KEMLOuxNyQpZaefQeIgGc3LBlp4X8vasvayHrlKof5FonGRRZVI3Cl2HQpJJw==`;
// console.log(dbPass.length);
// console.log(checkPassword("test1231", dbPass));

module.exports = { createPassword, checkPassword };
