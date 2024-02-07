const User = require("../model/User");
exports.main = (req, res) => {
  res.render("index");
};
exports.result = (req, res) => {
  console.log(req.body);
  // 서버의 계정정보와, 클라이언트의 계정정보가 일치하는지
  const { id: clientId, password: clientPw } = req.body;
  if (
    clientId === User.userInfo().id &&
    clientPw === User.userInfo().password
  ) {
    res.send({
      userInfo: req.body,
      // ...req.body,
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
};
