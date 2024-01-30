// EstudianteForm.js
import React, { useState } from 'react';

const EstudianteForm = () => {
  const [estudiante, setEstudiante] = useState({
    unidadEducativaId: '',
    sexo: '',
    nombre: '',
    apellido: '',
    lugarNacimiento: '',
    fechaNacimiento: '',
    discapacidad: '',
    padreCarnetIdentidad: '',
    madreCarnetIdentidad: '',
    tutorCarnetIdentidad: ''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEstudiante((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del Estudiante:', estudiante);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div >
      <h1>Registro del Estudiante</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID de la Unidad Educativa:
          <input
            type="text"
            name="unidadEducativaId"
            value={estudiante.unidadEducativaId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sexo:
          <select
            name="sexo"
            value={estudiante.sexo}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="Si">Femenino</option>
            <option value="No">Masculino</option>
          
          </select>
        </label>
        <br />
        <label>
          Nombres:
          <input
            type="text"
            name="nombre"
            value={estudiante.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido Paterno:
          <input
            type="text"
            name="apellido"
            value={estudiante.apellido}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido Materno:
          <input
            type="text"
            name="apellido"
            value={estudiante.apellido}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Lugar de Nacimiento:
          <select
            name="lugarNacimiento"
            value={estudiante.lugarNacimiento}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="">Selecciona...</option>
            <option value="Beni">Beni</option>
            <option value="Pando">Pando</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="La Paz">La Paz</option>
            <option value="Potosi">Potosi</option>
            <option value="Chuquisaca">Chuquisaca</option>
            <option value="Tarija">Tarija</option>
            <option value="Oruro">Oruro</option>
            <option value="Cochabamba">Cochabamba</option>
          </select>
        </label>
        <br />
        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            name="fechaNacimiento"
            value={estudiante.fechaNacimiento}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Discapacidad:
          <select
            type="text"
            name="discapacidad"
            value={estudiante.discapacidad}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </label>
        <br />
        <label>
          Carnet de Identidad del Padre:
          <input
            type="text"
            name="padreCarnetIdentidad"
            value={estudiante.padreCarnetIdentidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Carnet de Identidad de la Madre:
          <input
            type="text"
            name="madreCarnetIdentidad"
            value={estudiante.madreCarnetIdentidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Carnet de Identidad del Tutor:
          <input
            type="text"
            name="tutorCarnetIdentidad"
            value={estudiante.tutorCarnetIdentidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
      <hr/> {/* Línea divisora */}
    </div>
  );
};

export default EstudianteForm;
