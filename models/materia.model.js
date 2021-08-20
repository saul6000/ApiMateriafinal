module.exports = mongoose => {
    const Materia = mongoose.model(
      "materias",
      mongoose.Schema(
        {
            "cod_materia" : String,
            "nombre_materia" : String,
            "profesor" : String,
            "duracion_a_la_semana" : Number,
            "fecha_inicio": String,
        },
        { timestamps: true }
      )
    );
    return Materia;
  };