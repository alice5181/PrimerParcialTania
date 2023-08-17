import React, { useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {
    const [nombreLibro, setNombreLibro] = useState('');
    const [autorLibro, setAutorLibro] = useState('');
    const [nombreEstudiante, setNombreEstudiante] = useState('');
    

    const [showCard, setShowCard] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
  
        // Validaciones
        if ((nombreLibro.trim().length < 3 || /^\s+/.test(nombreLibro)) || (autorLibro.trim().length < 6) || (nombreEstudiante.trim().length < 6))  {
          setErrorMessage('Por favor chequea que la información proporcionada sea correcta');
          setShowCard(false);
          return;
        }
        // Si pasa validaciones
        setShowCard(true);
        setErrorMessage('');
    };

  return (
    <div>
      
      <h1>Solicitud de préstamos en biblioteca</h1>

      <form onSubmit={handleSubmit} className="main-form">
        <label>Título del libro solicitado: </label>
        <input
          type="text"
          name="nombreLibro"
          value={nombreLibro}
          onChange={(event) => setNombreLibro(event.target.value)}
        />

        <label>Nombre completo del autor del libro: </label>
        <input
          type="text"
          name="autorLibro"
          value={autorLibro}
          onChange={(event) => setAutorLibro(event.target.value)}
        />

        <label>Nombre completo del estudiante que solicita el préstamo </label>
          <input
            type="text"
            name="nombreEstudiante"
            value={nombreEstudiante}
            onChange={(event) => setNombreEstudiante(event.target.value)}
          />
          
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button>Solicitar Préstamo</button>
      </form>

      {showCard && <Card Libro={nombreLibro} Estudiante={nombreEstudiante} Autor={autorLibro} />}
    </div>
  );

  }


export default App
