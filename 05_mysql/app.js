// app.js
const express = require("express");
// .env 환경변수.
require("dotenv").config();

const mysql = require("./index");
const encrypto = require("./crypto");

// express 인스턴스.
const app = express();

// body-parser.
app.use(express.json());

// 라우팅.
// 1. 전체 목록 조회. 리소스+요청방식=>CRUD(REST 방식).
app.get("/api/customer", async (req, res) => {
  const result = await mysql.query("customerList");
  console.log(result);

  // 결과응답. json 문자열로 반환.
  res.json(result);
});
// 2. 등록.
app.post("/api/customer", async (req, res) => {
  const { name, email, phone, passwd } = req.body;
  // 암호화 단계.
  const hashPasswd = encrypto.createPassword(passwd);

  const result = await mysql.query("customerInsert", [
    { name, email, phone, passwd: hashPasswd },
  ]);

  res.json(result);
});
// 3. 수정.
app.put("/api/customer", async (req, res) => {
  const { name, email, phone, id } = req.body;
  const result = await mysql.query("customerUpdate", [
    { name, email, phone },
    id,
  ]);

  res.json(result);
});
// 4. 삭제.
app.delete("/api/customer/:id", async (req, res) => {
  const { id } = req.params;
  const result = await mysql.query("customerDelete", [id]);

  res.json(result);
});

app.listen(3000, () => {
  console.log("server is running...");
});
