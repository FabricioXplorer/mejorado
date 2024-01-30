// AbandonoEscolarForm.js
import React, { useState } from 'react';

const AbandonoEscolarForm = () => {
  const [abandonoEscolar, setAbandonoEscolar] = useState({
    estudianteId: '',
    abandonoGestionAnterior: '',
    razonesAbandono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbandonoEscolar((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Abandono Escolar:', abandonoEscolar);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div >
      <h1>Abandono Escolar de Alumno</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID del Estudiante:
          <input
            type="text"
            name="estudianteId"
            value={abandonoEscolar.estudianteId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Abandono Gestión Anterior:
          <input
            type="date"
            name="abandonoGestionAnterior"
            value={abandonoEscolar.abandonoGestionAnterior}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Razones de Abandono:
      <select
            name="razonesAbandono"
            value={abandonoEscolar.razonesAbandono}
            onChange={handleChange}
      >     
            <option value="">Selecciona...</option>
            <option value="problemas de salud">Problemas de Salud</option>
            <option value="viaje">Viaje</option>
            <option value="problemas economicos">Problemas Economicos</option>
      </select>
          
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
      <hr/> {/* Línea divisora */}
    </div>
  );
};

export default AbandonoEscolarForm;
