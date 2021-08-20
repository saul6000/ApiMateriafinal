module.exports = app => {
    const acadevaluaciones = require("../controllers/acadeval.controller");
  
    var router = require("express").Router();
  
  // filtra por instrumento de evaluación
  // http://localhost:8080/api/ejemplo
  router.get("/", acadevaluaciones.saludos);
  
  // Listado de carreras (por codigo)
  // localhost:8080/api/ejemplo/carreras
  router.get("/carreras", acadevaluaciones.getCarreras);

  // Listado de carreras (por nombre)
  // localhost:8080/api/ejemplos/nombreCarreras
  router.get("/nombreCarreras", acadevaluaciones.getCarrerasOperadorLike);

  // localhost:8080/api/prueba
  app.use('/api/ejemplos', router);

  //localhost:8080/api/ejemplos/nombreCarreras2
  router.get("/nombreCarreras2", acadevaluaciones.getCarrerasOperadorLike2);
  
  
};
  