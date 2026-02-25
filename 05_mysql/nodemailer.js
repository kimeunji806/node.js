//nodemailer.js  터미널-npm install nodemailer 설치
const nodemailer = require("nodemailer");

const daumConfig = {
  host: "smtp.daum.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.nodemailer_user,
    pass: process.env.nodemailer_pass,
  },
};

const send = async (data) => {
  return new Promise((resolve, reject) => {
    //nodemailer 모듈의 createTransport 함수 = transport 객체 활용.
    const transport = nodemailer.createTransport(daumConfig);
    //메일발송.
    transport.sendMail(data, (err, result) => {
      if (err) {
        console.log(err);
        return err;
      }
      console.log(result);
      resolve(result);
    });
  });
};

// console.log("메일발송 호출.");
module.exports = { send };

// const daummmail = {
//       //transport라는 함수의 sendMail이라는 메소드 활용
//       from: "alswl25852@daum.net",
//       to: "koala579@daum.net",
//       cc: "alswl25852@daum.net",
//       subject: "메일발송 연습",
//       html: "<p><b>메일</b>이 잘 발송됐나요?</p>",
//     };
