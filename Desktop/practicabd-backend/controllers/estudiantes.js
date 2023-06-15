const pool = require("../database/connection");

async function readEstudiantes(req, res) {
  const estudiantes = await pool.query("SELECT * FROM estudiantes");
  return res.send(estudiantes.rows);
}

async function createEstudiantes(req, res) {
  try {
    const {
      idestudiante,
      cedula,
      nombreest,
      codescuela,
      direccionest,
      telefonoest,
      fechanac,
      statusest,
    } = req.body;

    const query = {
      text: "INSERT INTO estudiantes(idestudiante, cedula, nombreest, codescuela, direccionest, telefonoest, fechanac, statusest) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
      values: [
        idestudiante,
        cedula,
        nombreest,
        codescuela,
        direccionest,
        telefonoest,
        fechanac,
        statusest,
      ],
    };

    const queryResult = await pool.query(query);

    return res.send(queryResult);
  } catch (error) {
    console.log(error);
    return res.send("Error creando al usuario!");
  }
}

async function updateEstudiante(req, res) {
  try {
    const { id } = req.params;
    const {
      cedula,
      nombreest,
      codescuela,
      direccionest,
      telefonoest,
      fechanac,
      statusest,
    } = req.body;

    const query = {
      text: "UPDATE estudiantes SET cedula=$1, nombreest=$2, codescuela=$3, direccionest=$4, telefonoest=$5, fechanac=$6, statusest=$7 WHERE idestudiante=$8",
      values: [
        cedula,
        nombreest,
        codescuela,
        direccionest,
        telefonoest,
        fechanac,
        statusest,
        id,
      ],
    };

    const queryResult = await pool.query(query);

    return res.send(queryResult);
  } catch (error) {
    console.log(error);
    return res.send("Error actualizando al estudiante!");
  }
}

async function deleteEstudiante(req, res) {
  try {
    const { id } = req.params;

    const query = {
      text: "DELETE FROM estudiantes WHERE idestudiante=$1",
      values: [id],
    };

    const queryResult = await pool.query(query);

    return res.send(queryResult);
  } catch (error) {
    console.log(error);
    return res.send("Error eliminando al estudiante!");
  }
}

module.exports = {
  readEstudiantes,
  createEstudiantes,
  updateEstudiante,
  deleteEstudiante,
};
