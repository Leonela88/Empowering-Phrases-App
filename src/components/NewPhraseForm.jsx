import React, { useState } from 'react';

const NewPhraseForm = () => {

  const [phrase, setPhrase] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  console.log('Nueva Frase Creada:', { phrase, author});
  setPhrase('');
  setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>✍️ EmpowerUs with your own Phrase</h3>
      <div>
        <label htmlFor="phrase">Phrase:</label>
        <textarea
          id="phrase"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          rows="4"
        ></textarea>
      </div>
      <div>
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          value={author} 
         onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type="submit">Save Phrase</button>
    </form>
  );
};

export default NewPhraseForm;