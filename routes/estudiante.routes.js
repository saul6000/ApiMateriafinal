module.exports = app => {
    const Estudiante = require("../controllers/estudiante.controller");
  
    var router = require("express").Router();
   
    // http://localhost:8080/api/estudiantes/listado
    router.get("/listado", Estudiante.getEstudiantes);

    //guardar un estudiante
     // http://localhost:8080/api/estudiantes/guardar
  router.post("/guardar", Estudiante.guardar);
  // http://localhost:8080/api/estudiantes/borrar
  router.delete("/borrar/:id", Estudiante.borrar);
   //elimina estudiante -v2
     // http://localhost:8080/api/estudiantes/borrarv2
  router.delete("/borrarv2/:matricula", Estudiante.borrarv2);
  http://localhost:8080/api/estudiantes/actualizar
  router.put("/actualizar/:cod_materia", Estudiante.actualizar);
  http://localhost:8080/api/estudiantes/actualizar1
  router.put("/actualizar1/:cod_materia/:profesor", Estudiante.actualizar);
  app.use('/api/estudiantes',router);
  // filtra por instrumento de evaluación
 

  
};
  