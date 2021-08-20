const { borrar } = require("../controllers/estudiante.controller");

module.exports = app => {
    const Materia = require("../controllers/materia.controller");
  
    var router = require("express").Router();
   
    // http://localhost:8080/api/materia/getmateria
    router.get("/getmateria", Materia.getmateria);

    // http://localhost:8080/api/materia/saludos
    router.get("/saludos", Materia.saludos);
    //guardar un estudiante
     // http://localhost/:8080/api/materia/guardar
     router.post("/guardar", Materia.guardarMateria);
  //router.post("/guardar", Estudiante.borrar);

  //Senguda tarea
  ///////////////////////////////////////////
  //http://localhost:8080/api/materia/borrar2
  router.delete("/borrar2", Materia.borrarv2);
  http://localhost:8080/api/materia/actualizar
  router.put("/actualizar/:cod_materia", Materia.actualizar);
  http://localhost:8080/api/materia/actualizar1
  router.put("/actualizar1", Materia.actualizarCondicion2);
  http://localhost:8080/api/materia/getmateria2
  router.get("/getmateria2", Materia.getmateriaCon2);
    app.use('/api/materia',router);
  // filtra por instrumento de evaluación
 

  
};
  