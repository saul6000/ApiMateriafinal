const { estudiantes } = require("../models");
const db = require("../models");
const Estudiante = db.estudiantes;


//Msg Bienvenida
exports.saludos = (req, res) => {

  res.send({status: true, mensaje:"Bienvenidos..."});
 
}

//Listado de estudiantes
exports.getEstudiantes = (req, res) => {

  const genero = req.query.genero;

  
  let condicion = genero ? {sexo: genero}:{};
  
  
  Estudiante.find(condicion).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
}

// guardar un estudiante
exports.guardar = (req,res)=> {
    const matricula= req.body.matricula;
    const apellidos = req.body.apellidos;
    const nombres=req.body.nombres;
    const edad=req.body.edad;
    const sexo= req.body.sexo;

    const estudiante = new estudiantes({
        "matricula":matricula,
        "apellidos":apellidos,
        "nombres":nombres,
        "edad":edad,
        "sexo":sexo
    });
    estudiante.save(estudiante).then( data =>{
        res.send(data);

    }).
    catch( err => {
        res.status(500).send({
        mensaje:
            err.message || "Error al guardar datos en la colección de estudiantes..."
        });
      });
}
//borrar estudiante 
//borrar un estudiante

exports.borrar = (req, res) => {
  const id = req.params.id;
  Estudiante.findByIdAndRemove(id).then(data => {
    if(!data){
      res.status(404).send({status:false, 
        mensaje: "No se pudo borrar el estudiante de id: "+ id});
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


exports.borrarv2 = (req, res) => {
  const matricula = req.params.matricula;

  Estudiante.deleteOne(
    //pasar el criterio de busqueda
    {matricula:matricula}
    ).then(data => {
      console.log(data);
    if(!data){
      res.status(404).send({status:false, 
        mensaje: `No se pudo borrar el estudiante de matricula: ${matricula}`});
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
  const matricula = req.body.matricula;
  if(!matricula){
    return res.status(404).send({status:false, mensaje:"Falta el parámetro matrícula..."});
  }
  const ape = req.body.apellidos;

  const nom = req.body.nombres;

  const edad = req.body.edad;

  const sexo = req.body.sexo;

  Estudiante.updateOne(
    //pasar criterio de búsqueda
    {matricula: matricula},
    {$set:
      {
        apellidos:ape,

        nombres:nom,

        edad:edad,

        sexo: sexo
      }

    }
  ).then(data => {
  //console.log("Datos devueltos: ",data);
    if(data.n==0){

      res.status(404).send({status:false, 

        mensaje: `No se pudo actualizar el estudiante de matricula: ${matricula}`});
    }
    else{
      res.send({status:true, mensaje: "Registro actualizado..."});
    }
  }).catch(err => {
    res.status(500).send({ status:false,
      mensaje:
        err.message || "Error al actualizar el estudiante de matrícula: " + matricula

    });

  });

}