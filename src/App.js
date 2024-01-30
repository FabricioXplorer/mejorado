import React from 'react';
import UnidadEducativaForm from './formulario unidad educativa/UnidadEducativaForm';
import EstudianteForm from './formulario estudiante/EstudianteForm';
import DireccionActualForm from './formulario direccion actual de estudiante/DireccionActualForm';
import AccesoServiciosBasicosForm from './formulario acceso sb del estudiante/AccesoServiciosBasicosForm';
import AccesoInternetForm from './formulario acceso internet estudiante/AccesoInternetForm';
import MedioTransporteForm from './formulario transporte estudiante/MedioTransporteForm';
import AbandonoEscolarForm from './formulario abandono escolar estudiante/AbandonoEscolarForm';
import PadreForm from './formilario datos de padre/PadreForm';
import MadreForm from './formilario datos madre/MadreForm';
import TutorForm from './formulario tutor/TutorForm';
import './styles.css';
import Login from './Login/login';
import Registro from './Login/registro';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return (
  
    
    <div className="form-row">
      <div className="form-container">
      <EstudianteForm />
      </div>
      <div className="form-container">
      <DireccionActualForm />
      </div> 
      <div className="form-container">
      <PadreForm />
      </div>
      <div className="form-container">
      <MadreForm />
      </div>
      <div className="form-container">
      <TutorForm />
      </div>
      <div className="form-container">
      <AccesoServiciosBasicosForm />
      </div>
      <div className="form-container">
      <MedioTransporteForm />
      </div>
      <div  className="form-container">
      <AccesoInternetForm  />
      </div>
      <div className="form-container">
      <AbandonoEscolarForm />
      </div>
      <div className="form-container">
        <UnidadEducativaForm />
      </div>
    </div>
    
  );
};
export default App;
