-- 회원 테이블
CREATE TABLE tbl_member (
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    login_id VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('USER', 'ADMIN') DEFAULT 'USER',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 게시판 테이블
CREATE TABLE tbl_board (
    board_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    writer_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (writer_id) REFERENCES tbl_member(member_id)
);

-- 게시판, 회원
use dev;
select * from tbl_member;
insert into tbl_member(login_id, name, password)
values ('user11', '김일석', 'dsglskdgsjgklshg');
insert into tbl_member(login_id, name, password, role)
values ('user99', '김관리', 'dsglskdgsjgklshg', 'ADMIN');

select * from tbl_board;
insert into tbl_board(title, content, writer_id)
values ('1번째 공지사항', '1번째 공지사항을 잘지켜주세요', 2);

select b.*, m.login_id, m.name
from tbl_board b
join tbl_member m on b.writer_id = m.member_id;
-- where board_id=2;

delete from tbl_member
where member_id = 1;






