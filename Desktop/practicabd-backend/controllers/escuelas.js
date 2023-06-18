const pool = require("../database/connection");

async function readEscuelas(req, res) {
  try {
    const escuelas = await pool.query("SELECT * FROM escuelas");
    return res.send(escuelas.rows);
  } catch (e) {
    res.send("Error obteniendo las escuelas!");
  }
}

async function createEscuela(req, res) {
  try {
    const { codescuela, nombreescuela, fechacreacion } = req.body;

    const query = {
      text: "INSERT INTO escuelas(codescuela, nombreescuela, fechacreacion) VALUES($1,$2,$3)",
      values: [codescuela, nombreescuela, fechacreacion],
    };

    const queryResult = await pool.query(query);

    return res.send(queryResult);
  } catch (error) {
    console.log(error);
    return res.send("Error creando la escuela!");
  }
}

async function updateEscuela(req, res) {
  try {
    const { id } = req.params;
    const { codescuela, nombreescuela, fechacreacion } = req.body;

    const query = {
      text: "UPDATE escuelas SET codescuela=$1, nombreescuela=$2, fechacreacion=$3 WHERE idescuela=$4",
      values: [codescuela, nombreescuela, fechacreacion, id],
    };

    const queryResult = await pool.query(query);

    return res.send(queryResult);
  } catch (error) {
    console.log(error);
    return res.send("Error actualizando la escuela!");
  }
}

async function deleteEscuela(req, res) {
  try {
    const { id } = req.params;

    const query = {
      text: "DELETE FROM escuelas WHERE idescuela=$1",
      values: [id],
    };

    const queryResult = await pool.query(query);

    return res.send(queryResult);
  } catch (error) {
    console.log(error);
    return res.send("Error eliminando la escuela!");
  }
}

module.exports = {
  readEscuelas,
  createEscuela,
  updateEscuela,
  deleteEscuela,
};
