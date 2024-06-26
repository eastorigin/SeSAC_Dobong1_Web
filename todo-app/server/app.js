const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
const { sequelize } = require("./models");
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const serverPrefix = "/api-server";
const dotenv = require("dotenv");
dotenv.config();

// body-parser 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// route 설정
app.use(serverPrefix, indexRouter);
app.use(serverPrefix + "/user", userRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log("server is open!!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
