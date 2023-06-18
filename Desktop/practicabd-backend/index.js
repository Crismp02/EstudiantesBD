const escuelasRouter = require("./routes/escuelas");
const estudiantesRouter = require("./routes/estudiantes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json())

app.use('/escuelas', escuelasRouter)
app.use('/estudiantes', estudiantesRouter)

app.listen(3002, () => {
  console.log("Server is listening...");
});
