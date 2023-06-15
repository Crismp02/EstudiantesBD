const estudiantesController = require('./controllers/estudiantes')

const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello, world!");
});

router.get("/ping", (req, res) => {
  res.send("pong");
});

router.get("/estudiantes", (req, res) => estudiantesController.readEstudiantes(req, res))

router.post("/estudiantes", (req, res) => estudiantesController.createEstudiantes(req, res))

router.put("/estudiantes/:id", (req, res) => estudiantesController.updateEstudiante(req, res))

router.delete("/estudiantes/:id", (req, res) => estudiantesController.deleteEstudiante(req, res))

module.exports = router