// customer 와 관련된 라우팅 정보.
const router = require("express").Router();
const path = require("path"); // path 임포트.

// http 요청방식 + end point => CRUD 처리(REST 방식)
router.get(
  "/search",
  (req, res, next) => {
    console.log("middleware 요청");
    next(); // 다음 콜백 함수 요청.
  },
  (req, res) => {
    // res.redirect("/");
    // res.download(path.join(__dirname, "뽀야미.jpg"));
    console.log("응답처리중.");
    res.json({ retCode: "Success", retMsg: "Server Status 200" });
  },
);

router.post("/add", (req, res) => {
  res.send("Post방식 요청");
});

// Get요청(parameter로 처리.)
router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login page.");
});

router.get("/error", (req, res) => {
  throw new Error("에러발생");
});

module.exports = router; // 익스포트.
