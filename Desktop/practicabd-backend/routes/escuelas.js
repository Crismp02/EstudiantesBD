const estudiantesController = require('../controllers/escuelas')

const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => estudiantesController.readEscuelas(req, res))

router.post("/", (req, res) => estudiantesController.createEscuela(req, res))

router.put("/:id", (req, res) => estudiantesController.updateEscuela(req, res))

router.delete("/:id", (req, res) => estudiantesController.deleteEscuela(req, res))

module.exports = router