import React from 'react';
import './RegistroForm.css';

const LoginForm = () => {
  const handleRegistro = () => {
    // Lógica para manejar el registro
  };

  return (
    <div className="registro-form-container">
      <h2>Inicio de Sesion</h2>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre"
            // Agrega event handlers según sea necesario
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="contrasena"
            placeholder="Ingresa tu contraseña"
            // Agrega event handlers según sea necesario
          />
        </label>
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="correo"
            placeholder="Ingresa tu correo electrónico"
            // Agrega event handlers según sea necesario
          />
        </label>
        <button type="button" onClick={handleRegistro}>
            Inicio de Sesion
        </button>
      </form>
      <p>¿No tienes una cuenta? <a href="./registro.js">Registrarse</a></p>
    </div>
  );
};

export default LoginForm;
