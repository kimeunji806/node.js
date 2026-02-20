// password.js
// Node.js 내장 암호화 모듈 불러오기
const crypto = require("crypto");

// createHash("sha512")
// → SHA-512 알고리즘으로 해시 객체 생성
// update("test1234")
// → 해시할 원본 문자열(평문 비밀번호) 입력
// digest("base64")
// → 최종 해시값을 base64 형식 문자열로 반환
const pw = crypto.createHash("sha512").update("test1234").digest("base64");
console.log(pw);

async function createPassword() {
  // salt 생성(달라지는 시드값)
  // Promise로 감싸는 이유:
  // crypto.randomBytes는 콜백 기반 함수이기 때문
  const salt = await new Promise((resolve, reject) => {
    // 64바이트 길이의 랜덤 값 생성
    // → salt는 매번 달라지는 랜덤값
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        console.log("error=>", err);
        reject(err);
      }
      // console.log(buf.toString("base64"));
      // 생성된 랜덤 바이트(buf)를 base64 문자열로 변환
      // → 이 값이 salt로 사용됨
      resolve(buf.toString("base64")); // salt 변수에 저장.
    });
  });
  // console.log(`salt=> ${salt}`);

  // 암호화된 비밀번호.
  // pbkdf2(평문비밀번호, salt, 반복횟수, 결과길이, 해시알고리즘, 콜백)
  // 1)암호화 평문 2) salt 값. 3) 10만번 반복 해시. 4) 길이. 5) 해시 함수. 6) callback 함수.
  crypto.pbkdf2("test1234", salt, 100000, 64, "sha512", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data.toString("base64"));
  });
} // end of createPassword.
createPassword();
