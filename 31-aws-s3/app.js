const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const app = express();
dotenv.config();
const PORT = process.env.PORT;

// 미들웨어 설정
app.set("view engine", "ejs");

// aws 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

// s3 관련 멀터 설정
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", // 파일 접근 권한
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

// GET / index.ejs 렌더링
app.get("/", (req, res) => {
  res.render("index", { imageUrl: "" });
});

// POST /upload
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  /*
    {
        fieldname: 'image',
        originalname: 'ì§±êµ¬ë\x8A\x94ëª»ë§\x90ë ¤.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        size: 26396,
        bucket: 'bucket-eastorigin',
        key: '1712555863523-ì§±êµ¬ë\x8A\x94ëª»ë§\x90ë ¤.jpg',
        acl: 'public-read',
        contentType: 'application/octet-stream',
        contentDisposition: null,
        contentEncoding: null,
        storageClass: 'STANDARD',
        serverSideEncryption: null,
        metadata: null,
        location: 'https://bucket-eastorigin.s3.ap-northeast-2.amazonaws.com/1712555863523-%C3%AC%C2%A7%C2%B1%C3%AA%C2%B5%C2%AC%C3%AB%C2%8A%C2%94%C3%AB%C2%AA%C2%BB%C3%AB%C2%A7%C2%90%C3%AB%C2%A0%C2%A4.jpg',     
        etag: '"35978105055677fa84c179aac35e4620"',
        versionId: undefined    } 
  */
  //   res.send("이미지 업로드 중...");
  res.render("index", { imageUrl: req.file.location });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
