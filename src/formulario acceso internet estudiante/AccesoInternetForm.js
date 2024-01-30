// AccesoInternetForm.js
import React, { useState } from 'react';

const AccesoInternetForm = () => {
  const [accesoInternet, setAccesoInternet] = useState({
    estudianteId: '',
    accesoInternet: '',
    frecuenciaUsoInternet: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccesoInternet((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Acceso a Internet:', accesoInternet);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div >
      <h1>Acceso a Internet</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID del Estudiante:
          <input
            type="text"
            name="estudianteId"
            value={accesoInternet.estudianteId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Acceso a Internet:
          <select
            name="accesoInternet"
            value={accesoInternet.accesoInternet}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
        </label>
        <br />
        <label>
          Frecuencia de Uso de Internet:
          <select
            type=""
            name="frecuenciaUsoInternet"
            value={accesoInternet.frecuenciaUsoInternet}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="una vez a la semana">Una vez a la Semana</option>
            <option value=" tres veces a la semana">Tres veces a la Semana</option>
            <option value="todos los dias">Todos los Dias</option>
          </select>
          
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
      <hr/> {/* Línea divisora */}
    </div>
  );
};

export default AccesoInternetForm;
