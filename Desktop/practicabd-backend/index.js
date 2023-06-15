const router = require("./routes");
const express = require("express");

const app = express();

app.use(express.json())

app.use(router)

app.listen(3002, () => {
  console.log("Server is listening...");
});
