import React, { useState } from 'react';
import './EmpowerPhraseEditor.css';

function EmpowerPhraseEditor() {
  const INITIAL_PHRASE = "I am my own sanctuary and I can be reborn as many times as I choose throughout my life";
  
  const [phrase, setPhrase] = useState(INITIAL_PHRASE);
  const [isSaved, setIsSaved] = useState(false); 

  const handlePhraseChange = (event) => {
    setPhrase(event.target.value);
    if (isSaved) setIsSaved(false); 
  };

  const handleModify = () => {
        console.log("Frase guardada:", phrase);
    
    setIsSaved(true);
    
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleClear = () => {
    setPhrase('');
    setIsSaved(false);
  };

  return (
    <div className="phrase-editor-container">
      <div className="current-phrase-display">
        <p className="empower-phrase">
          {phrase || "Escribe algo que te inspire..."}
        </p>
      </div>

      {/* Mensaje de confirmación suave */}
      <div className={`save-feedback ${isSaved ? 'visible' : ''}`}>
        ¡Frase actualizada con éxito! ✨
      </div>

      <textarea
        className="phrase-input"
        value={phrase}
        onChange={handlePhraseChange}
        rows="4"
        placeholder="Where there is a woman, there is magic"
      />

      <div className="controls">
        <button className="btn-modify" onClick={handleModify} disabled={!phrase}>
          💾 Guardar Cambios
        </button>
        
        <button className="btn-clear" onClick={handleClear}>
          🗑️ Borrar
        </button>
      </div>
    </div>
  );
}

export default EmpowerPhraseEditor;