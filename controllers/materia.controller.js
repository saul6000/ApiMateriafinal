const { materias } = require("../models");
const db = require("../models");
const Materia = db.materias;


//Msg Bienvenida
exports.saludos = (req, res) => {
  res.send({status: true, mensaje:"Bienvenidos... a materia la base de datos mas confiable sobre materias"});
}
//Listado de materia
exports.getmateria = (req, res) => {
  const cod_materia = req.query.cod_materia; 
  let condicion = cod_materia ? {cod_materia: cod_materia}:{};
  Materia.find(condicion).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
 
}
//guardar Materia
exports.guardarMateria = (req,res)=> {
  const cod_materia= req.body.cod_materia;
  const nombre_materia = req.body.nombre_materia;
  const profesor=req.body.profesor;
  const duracion_a_la_semana=req.body.duracion_a_la_semana;
  const fecha_inicio= req.body.fecha_inicio;
  const materia = new materias({
      "cod_materia":cod_materia,
      "nombre_materia":nombre_materia,
      "profesor":profesor,
      "duracion_a_la_semana":duracion_a_la_semana,
      "fecha_inicio":fecha_inicio
  });
  materia.save(materia).then( data =>{
      res.send(data);
  }).
  catch( err => {
      res.status(500).send({
      mensaje:
          err.message || "Error al guardar datos en la colección de materias..."
      });
    });
}
exports.borrarv2 = (req, res) => {
  const nombre_materia = req.query.nombre_materia;
  let condicion = nombre_materia ? {nombre_materia: nombre_materia}:{};
  Materia.deleteOne(condicion).then( data => {
    console.log(data);
    if(data.n==0){
      res.status(404).send({status:false,
      mensaje: `No se pudo borrar el estudiante de matricula: ${nombre_materia}`});
    }
    else{
      res.send({status:true, mensaje: "Registro borrado..."});
    }
  }).catch( err => {
    res.status(500).send({ status:false,
        mensaje:
            err.message || "Error al eliminar un estudiante..."
    });
  });
}

exports.borrar = (req, res) => {
  const nombre_materia= req.params.nombre_materia;
  Materia.findByIdAndRemove(nombre_materia).then(data => {
    if(!data){
      res.status(404).send({status:false, 
        mensaje: "No se pudo borrar la materia con el cod_materia: "+ nombre_materia});
    }
    else{
      res.send({status:true, mensaje: "Registro borrado..."});
    }
  }).catch(err => {
    res.status(500).send({ status:false,
      mensaje:
       err.message || "Error al eliminar un estudiante..."
    });
  });
}


exports.actualizar = (req, res) => {
  const cod_materia = req.body.cod_materia;
  if(!cod_materia){
    return res.status(404).send({status:false, mensaje:"Falta el parámetro matrícula..."});
  }
  const mat = req.body.cod_materia;
  const nom = req.body.nombre_materia;
  const pro = req.body.profesor;
  const dur = req.body.duracion_a_la_semana;
  const fech = req.body.fecha_inicio;

  Materia.updateOne(
    //pasar criterio de búsqueda
    {cod_materia: cod_materia},
    {$set:
      {
        cod_materia:mat,
        nombre_materia:nom,
        profesor:pro,
        duracion_a_la_semana: dur,
        fecha_inicio:fech
      }
    }
  ).then(data => {
  //console.log("Datos devueltos: ",data);
    if(data.n==0){
      res.status(404).send({status:false, 
        mensaje: `No se pudo actualizar el estudiante de matricula: ${cod_materia}`});
    }
    else{
      res.send({status:true, mensaje: "Registro actualizado..."});
    }
  }).catch(err => {
    res.status(500).send({ status:false,
      mensaje:
        err.message || "Error al actualizar el estudiante de matrícula: " + cod_materia
    });
  });

}





exports.actualizarCondicion2 = (req, res) => {
  const cod_materia = req.body.cod_materia;
  const profesor = req.body.profesor;
  const mat = req.body.cod_materia;
  if(!cod_materia){
    return res.status(404).send({status:false, mensaje:"Falta el parámetro de cod_Materia..."});
  }
  const nom = req.body.nombre_materia;
  const pro = req.body.profesor;
  if(!profesor){
    return res.status(404).send({status:false, mensaje:"Falta el parámetro Profesor"});
  }
  const dur = req.body.duracion_a_la_semana;
  const fech = req.body.fecha_inicio;
  Materia.updateOne(
    //pasar criterio de búsqueda
    {cod_materia: cod_materia } && {profesor:profesor},
    {$set:
      {
        cod_materia:mat,
        nombre_materia:nom,
        profesor:pro,
        duracion_a_la_semana: dur,
        fecha_inicio:fech
      }
    }
  ).then(data => {
  //console.log("Datos devueltos: ",data);
    if(data==0){
      res.status(404).send({status:false, 
        mensaje: `No se pudo actualizar el estudiante de matricula: ${cod_materia}`});
    }
    else{
      res.send({status:true, mensaje: "Registro actualizado..."});
    }
  }).catch(err => {
    res.status(500).send({ status:false,
      mensaje:
        err.message || "Error al actualizar el estudiante de matrícula: " + cod_materia
    });
  });
}

exports.getmateriaCon2 = (req, res) => {
  const cod_materia = req.query.cod_materia; 
  const profesor=req.query.profesor;
  //let condicion = (cod_materia && profesor)? {cod_materia: cod_materia} && {profesor:profesor}:{};
  Materia.find({cod_materia: cod_materia} && {profesor:profesor}).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
 
}