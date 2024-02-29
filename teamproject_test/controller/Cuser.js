// TODO: 컨트롤러 코드
const User = require("../model/User");
// GET /user
exports.main = (req, res) => {
  res.render("index");
};

// GET /user/signin
exports.getSignin = (req, res) => {
  res.render("signin");
};

// GET /user/signup
exports.getSignup = (req, res) => {
  res.render("signup");
};

// POST /user/signup
// 회원가입 요청
exports.postSignup = (req, res) => {
  User.postSignup(req.body, () => {
    res.end();
  });
};

// POST /user/signin
// 로그인 요청
exports.postSignin = (req, res) => {
  User.postSignin(req.body, (result) => {
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};
exports.postProfile = (req, res) => {
  User.postProfile(req.body.userid, (result) => {
    res.render("profile", { data: result });
  });
};

// POST /user/profile/edit
// 회원 정보 수정
exports.editProfile = (req, res) => {
  console.log(req.body);
  User.editProfile(req.body, () => {
    res.end();
  });
};

// POST /user/profile/delete
// 회원 정보 삭제
exports.deleteProfile = (req, res) => {
  User.delete_profile(req.body.id, () => {
    res.end();
  });
};
