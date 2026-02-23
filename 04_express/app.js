const express = require("express"); // 임포트.
const fs = require("fs");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const cors = require("cors");

const app = express(); // 인스턴스.
const customerRoute = require("./routes/customer"); // 라우트 추가.
const productRoute = require("./routes/product"); // 라우트 추가.
const compression = require("compression");

// 정적파일 폴더(html,css,js)
app.use(express.static("public"));

// body parser 셋업.
app.use(express.urlencoded()); // x-www-form-urlencoded -> html 폼의 기본 인코딩(key/value)
app.use(express.json()); // json
app.use("/customer/download", compression()); //  모든 라우팅에 적용.

// session 관리.
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // true => http, false => http
      maxAge: 60000,
    },
    // store: new fileStore(), // 추가.
  }),
);

// cors 셋업.
app.use(cors());

// 라우팅. 요청방식+URL(end point) => 실행할 함수.
app.get("/", (req, res) => {
  const json = JSON.stringify({ id: "user99", name: "홍길동" });
  // fs.readFile 메소드/ fs.readFileSync
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
      res.send("err");
      return;
    }
    res.send(data);
  });
});

// 외부 라우팅 정보.
app.use("/customer", customerRoute); // customer 라우트를 추가하고 기본 경로로 /customer 사용
app.use("/product", productRoute); // product 라우트를 추가하고 기본 경로로 /product 사용

app.get("/data", (req, res) => {
  res.json({ id: "1001", data: "sample" });
});

// session
app.get("/login", (req, res) => {
  req.session.user = { id: "user99", name: "홍길동" };
  console.log(req.session.user);
  res.send("session에 저장.");
});
app.get("/logout", (req, res) => {
  req.session.destroy(); // 세션삭제.
  res.send("로그아웃.");
});

app.get("/my_info", (req, res) => {
  console.log(req.session.user);
  if (!req.session.user) {
    res.json({ retCode: "NG", retMsg: "No user info" });
    return;
  }
  res.json(req.session.user);
});

// express 에서 에러처리.
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMsg: err.message });
});

// 서버 실행.
app.listen(3000, () => {
  console.log(`서버실행... http://localhost:3000`);
});
