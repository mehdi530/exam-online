const express = require("express");
const app = express();
const http = require("http");
http.createServer(app);
const router = require("./routes/home");

app.use(express.json());
require("dotenv").config();

app.get("/", router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`connect to port ${port}`);
});
