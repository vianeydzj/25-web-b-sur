const express = require("express");
const app = express();
const port = 8000;
const routes = require ("./src/routes") 

const alumnos = [
  { id: 1, name: "Anayeli Soto", score: 40 },
  { id: 2, name: "Efrén Jiménez", score: 50 },
  { id: 3, name: "Erika Hernández", score: 60 },
  { id: 4, name: "Elias Monrroy", score: 70 },
];



app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
