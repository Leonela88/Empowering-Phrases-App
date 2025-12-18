import React, { useState } from 'react';
import './EmpoweringPhraseEditor.css'; 


function EmpowerPhraseEditor() {

  const INITIAL_PHRASE = "I am my own sanctuary and I can be reborn as many times as I choose throughout my life";
  const DEFAULT_PLACEHOLDER = "As long as you live, there's something new everyday.";

    const [phrase, setPhrase] = useState(INITIAL_PHRASE);

    const handlePhraseChange = (event) => {
    setPhrase(event.target.value);
  };

  const handleClear = () => {
    setPhrase('');
  };

  return (
    <div className="phrase-editor-container">
      <header>
        <h2 style={{ color: '#8e44ad', marginBottom: '1.5rem' }}>Mi Espacio de Empoderamiento</h2>
      </header>

      {/* Área de Visualización */}
      <div className="current-phrase-display">
        <p className="empower-phrase">
          {phrase || DEFAULT_PLACEHOLDER}
        </p>
      </div>

      <hr className="separator" />

      {/* Área de Modificación */}
      <div className="input-group">
        <label htmlFor="phrase-textarea" style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Edita tu mensaje:
        </label>
        <textarea
          id="phrase-textarea"
          className="phrase-input"
          value={phrase}
          onChange={handlePhraseChange}
          rows="4"
          placeholder="Escribe tu frase de hoy..."
        />
      </div>

      {/* Controles */}
      <div className="controls">
        <button
          className="clear-button"
          onClick={handleClear}
          disabled={!phrase}
          title="Borrar contenido"
        >
          ❌ Borrar Frase
        </button>
      </div>
    </div>
  );
}
export default RemovingPhrases;
