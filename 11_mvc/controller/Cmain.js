const Comment = require("../model/Comment");
/*
controller에서는 model에서 받은 데이터를 가공해서 view에 전달할 수 있어요
*/

// localhost:8080/
exports.main = (req, res) => {
  res.render("index");
};

// GET /comments
exports.comments = (req, res) => {
  console.log(Comment.commentsInfo());
  res.render("comments", { commentInfo: Comment.commentsInfo() });
};

// GET /comment/:id (params 사용) >> comment.ejs
exports.comment = (req, res) => {
  console.log(req.params);
  const commentId = req.params.id; //1,2,3,4
  const comments = Comment.commentsInfo(); // [{},{},{},{}]
  //   if (commentId < 1 || commentId > comments.length) {
  //     return res.render("404");
  //   }
  //   if (isNaN(commentId)) {
  //     return res.render("404");
  //   }
  if (!Comment.commentsInfo()[commentId - 1]) return res.render("404");
  res.render("comment", { commentInfo: Comment.commentsInfo()[commentId - 1] });
};
