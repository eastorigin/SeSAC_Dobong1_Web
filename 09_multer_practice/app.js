const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/public", express.static(__dirname + "/static"));

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/register", upload.single("profile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  //   {
  //     fieldname: 'profile',
  //     originalname: '230px-ì\x8B ì§±êµ¬.png',
  //     encoding: '7bit',
  //     mimetype: 'image/png',
  //     destination: 'uploads/',
  //     filename: '230px-ì\x8B ì§±êµ¬1706837241592.png',
  //     path: 'uploads\\230px-ì\x8B ì§±êµ¬1706837241592.png',
  //     size: 35405
  //   }

  res.render("result", {
    src: req.file.path,
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!!`);
  console.log(`http://localhost:${PORT}`);
});
