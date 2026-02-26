const pool = require("../config/db");

// 글등록(createMember)
async function createMember(loginId, name, password, role) {
  const sql = `INSERT INTO tbl_member(login_id, name, password, role)
              values (?, ?, ?, ?)`;
  return await pool.query(sql, [loginId, name, password, role]);
}

// 조회.
async function findMemberById(loginId) {
  const sql = `SELECT * FROM tbl_member WHERE login_id = ?`;
  return pool.query(sql, [loginId]);
}

// 모듈 exprot
module.exports = { createMember, findMemberById };
