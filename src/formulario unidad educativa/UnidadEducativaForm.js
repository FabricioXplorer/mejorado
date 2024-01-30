// UnidadEducativaForm.js
import React, { useState } from 'react';

const UnidadEducativaForm = () => {
  const [unidadEducativa, setUnidadEducativa] = useState({
    tipo: '',
    ubicacion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUnidadEducativa((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Unidad Educativa:', unidadEducativa);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div>
      <h1>Registro de Unidad Educativa</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Tipo:
          <select
            name="tipo"
            value={unidadEducativa.tipo}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="">Selecciona...</option>
            <option value="fiscal">Fiscal</option>
            <option value="particular">Particular</option>
            <option value="convenio">convenio</option>
          </select>
        </label>
        <br />
        <label>
          Ubicación:
          <input
            type="text"
            name="ubicacion"
            value={unidadEducativa.ubicacion}
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

export default UnidadEducativaForm;
