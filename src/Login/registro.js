import React, { useState } from 'react';
import './RegistroForm.css';

const RegistroForm = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    contraseña: '',
    correo: '',
    fechaRegistro: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario
    console.log('Datos del formulario:', formulario);
  };

  return (
    <div className="registro-form-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="contraseña"
            value={formulario.contraseña}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Fecha de Registro:
          <input
            type="date"
            name="fechaRegistro"
            value={formulario.fechaRegistro}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroForm;
