const express = require ('express')
const router = express.Router() 


router.get("/", function (req, res) {
    res.status(200).json({ message: "Server running" });
  });
  
  router.get("/alumnos", function (req, res) {
    res.status(200).json(alumnos);
  });
  
  // http://localhost:8000/alumnos/notas?min=50&max=60
  router.get("/alumnos/notas/", function (req, res) {
    let alumno = alumnos.filter(
      (alumno) => alumno.score >= req.query.min && alumno.score <= req.query.max
    );
    res.status(200).json(alumno);
  });
  
  router.get("/alumnos/:id", function (req, res) {
    let alumno = alumnos.filter(
      (alumno) => alumno.id === parseInt(req.params.id)
    );
    if (alumno.length !== 0) {
      res.status(200).json(alumno[0]);
    } else {
      res.status(404).json({ message: "Alumno no encontrado" });
    }
  });

  module.exports = router; 