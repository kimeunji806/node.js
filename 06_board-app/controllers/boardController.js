// 컨트롤(라우트 핸들러)
const boardService = require("../services/boardService");

const list = async (req, res) => {
  const [rows] = await boardService.getList();
  console.log("현재 로그인 정보:", req.session.user.login_id);
  res.json(rows); // 화면에 출력될 결과.
};

// 상세조회.
const detail = async (req, res) => {
  // req.params에서 id 값을 구조분해 할당으로 추출
  // 예: /board/3 이면 id는 3이 됨
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  res.json(rows);
};

// 등록(create)
const create = async (req, res) => {
  console.log(req.body);
  const result = await boardService.create(req.body);
  res.json(result);
};

module.exports = { list, detail, create };
