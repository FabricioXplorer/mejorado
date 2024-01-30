// PadreForm.js
import React, { useState } from 'react';

const PadreForm = () => {
  const [padre, setPadre] = useState({
    carnetIdentidad: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    nombres: '',
    idiomaFrecuente: '',
    ocupacionLaboral: '',
    gradoInstruccion: '',
    fechaNacimiento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPadre((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del Padre:', padre);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div >
      <h1>Datos del Padre</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Carnet de Identidad:
          <input
            type="text"
            name="carnetIdentidad"
            value={padre.carnetIdentidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido Paterno:
          <input
            type="text"
            name="apellidoPaterno"
            value={padre.apellidoPaterno}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido Materno:
          <input
            type="text"
            name="apellidoMaterno"
            value={padre.apellidoMaterno}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nombres:
          <input
            type="text"
            name="nombres"
            value={padre.nombres}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Idioma Frecuente:
          <select
            name="idiomaFrecuente"
            value={padre.idiomaFrecuente}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="Castellano">Castellano</option>
            <option value="Ingles">Ingles</option>
            <option value="Quechua">Quechua</option>
            <option value="Guarani">Guarani</option>
            <option value="Aimara">Aimara</option>
            <option value="Otros">Otros</option>
          </select>
        </label>
        <br />
        <label>
          Ocupación Laboral:
          <input
            type="text"
            name="ocupacionLaboral"
            value={padre.ocupacionLaboral}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Grado de Instrucción:
          <select
            name="gradoInstruccion"
            value={padre.gradoInstruccion}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="Primaria">Primaria</option>
            <option value="Secundaria">Secundaria</option>
            <option value="Profesional">Profesional</option>
          </select>
        </label>
        <br />
        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            name="fechaNacimiento"
            value={padre.fechaNacimiento}
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

export default PadreForm;
