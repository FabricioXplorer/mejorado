// DireccionActualForm.js
import React, { useState } from 'react';

const DireccionActualForm = () => {
  const [direccionActual, setDireccionActual] = useState({
    estudianteId: '',
    departamento: '',
    provincia: '',
    seccionMunicipio: '',
    localidadComunidad: '',
    zonaVilla: '',
    avenidaCalle: '',
    numeroVivienda: '',
    celularContacto: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDireccionActual((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Dirección Actual:', direccionActual);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div >
      <h1>Dirección Actual del Estudiante</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID del Estudiante:
          <input
            type="text"
            name="estudianteId"
            value={direccionActual.estudianteId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Departamento:
          <select
            name="departamento"
            value={direccionActual.departamento}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="Chiquisaca">Chuquisaca</option>
          </select>
        </label>
        <br />
        <label>
          Provincia:
          <input
            type="text"
            name="provincia"
            value={direccionActual.provincia}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sección/Municipio:
          <input
            type="text"
            name="seccionMunicipio"
            value={direccionActual.seccionMunicipio}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Localidad/Comunidad:
          <input
            type="text"
            name="localidadComunidad"
            value={direccionActual.localidadComunidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Zona/Villa:
          <input
            type="text"
            name="zonaVilla"
            value={direccionActual.zonaVilla}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Avenida/Calle:
          <input
            type="text"
            name="avenidaCalle"
            value={direccionActual.avenidaCalle}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          N° de Vivienda:
          <input
            type="number"
            name="numeroVivienda"
            value={direccionActual.numeroVivienda}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Celular de Contacto:
          <input
            type="number"
            name="celularContacto"
            value={direccionActual.celularContacto}
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

export default DireccionActualForm;
