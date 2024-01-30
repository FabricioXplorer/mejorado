// AccesoServiciosBasicosForm.js
import React, { useState } from 'react';

const AccesoServiciosBasicosForm = () => {
  const [accesoServiciosBasicos, setAccesoServiciosBasicos] = useState({
    estudianteId: '',
    accesoAguaPotable: '',
    banoEnVivienda: '',
    redAlcantarillado: '',
    energiaElectrica: '',
    servicioRecojoBasura: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccesoServiciosBasicos((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Acceso a Servicios Básicos:', accesoServiciosBasicos);
    // Puedes enviar los datos a tu servidor o realizar acciones adicionales aquí
  };

  return (
    <div >
      <h1>Acceso a Servicios Básicos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID del Estudiante:
          <input
            type="text"
            name="estudianteId"
            value={accesoServiciosBasicos.estudianteId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Acceso a Agua Potable:
          <select
            name="accesoAguaPotable"
            value={accesoServiciosBasicos.accesoAguaPotable}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
        </label>
        <br />
        <label>
          Baño en Vivienda:
          <select
            name="banoEnVivienda"
            value={accesoServiciosBasicos.banoEnVivienda}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
        </label>
        <br />
        <label>
          Red de Alcantarillado:
          <select
            name="redAlcantarillado"
            value={accesoServiciosBasicos.redAlcantarillado}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
        </label>
        <br />
        <label>
          Energía Eléctrica:
          <select
            name="energiaElectrica"
            value={accesoServiciosBasicos.energiaElectrica}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
        </label>
        <br />
        <label>
          Servicio de Recojo de Basura:
          <select
            name="servicioRecojoBasura"
            value={accesoServiciosBasicos.servicioRecojoBasura}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
      <hr/> {/* Línea divisora */}
    </div>
  );
};

export default AccesoServiciosBasicosForm;
