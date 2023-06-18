const estudiantesController = require('../controllers/estudiantes')

const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => estudiantesController.readEstudiantes(req, res))

router.post("/", (req, res) => estudiantesController.createEstudiantes(req, res))

router.put("/:id", (req, res) => estudiantesController.updateEstudiante(req, res))

router.delete("/:id", (req, res) => estudiantesController.deleteEstudiante(req, res))

module.exports = router