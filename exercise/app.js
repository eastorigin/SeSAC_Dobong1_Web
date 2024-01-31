const express = require("express");
const app = express();
const PORT = 8080;
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/views"));

app.get("/", function (req, res) {
  res.render("index");
});

const register = multer({
  dest: "uploads/",
});

const registerDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "uploads/");
    },
  }),
});

app.post("/register", registerDetail.single("profile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.render("result.ejs", {
    title: "POST",
    userInfo: req.body,
    profile: req.file,
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!!`);
  console.log(`http://localhost:${PORT}`);
});
