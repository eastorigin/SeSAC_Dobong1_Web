// [DB 연결 전]
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "sdw", comment: "좋은 하루입니다" },
//     { id: 2, name: "홍길동", comment: "안녕하세요" },
//   ];
// };

const mysql = require("mysql");
// mysql 연결 설정
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "dobong",
});
// 전체 데이터 조회
// GET /visitor
exports.getVisitors = (cb) => {
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js 전체목록::", rows);
    cb(rows);
  });
};

exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js 데이터 하나 조회", rows); // [{}]

    // 하나의 데이터를 찾아도 배열형태로 넘어옴
    cb(rows[0]);
  });
};

// 데이터 등록
// POST /visitor
exports.postVisitor = (data, cb) => {
  //   data = { name: "동원", comment: "화장실 가고 싶어요" };
  conn.query(
    `INSERT INTO visitor VALUE(null, '${data.name}','${data.comment}')`
  ),
    (err, rows) => {
      if (err) throw err;
      console.log("Visitor.js post", rows);

      cb(rows.insertId);
    };
};

exports.deleteVisitor = (id, cb) => {
  console.log(id);
  conn.query(`DELETE FROM VISITOR WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js delete", rows);
    cb(rows);
  });
};

exports.patchVisitor = (data, cb) => {
  console.log(data);
  conn.query(
    `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`,
    (err, rows) => {
      if (err) throw err;
      console.log("Visitor.js patch", rows);
      cb(rows);
    }
  );
};
