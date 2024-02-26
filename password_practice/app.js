const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("/views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
