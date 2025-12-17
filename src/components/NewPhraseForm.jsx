import { useState } from 'react';
import styles from './NewPhraseForm.module.css'

const NewPhraseForm = () => {

  const [phrase, setPhrase] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size < 2 * 1024 * 1024) { // Validación rápida
      setImage(file);
    } else {
      alert("Archivo demasiado grande");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Nueva Frase Creada:', { phrase, author, image });
    setPhrase('');
    setAuthor('');
  };

  return (
    <main className={styles.container}>

      <div className={styles.img}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="upload-photo"
        />
      </div>

      <form onSubmit={handleSubmit} >


        <div className={styles.phrasePanel}>
          <span className={styles.quoteMark}>&ldquo;</span>

          <textarea
            id="phrase"
            value={phrase}
            onChange={(event) => setPhrase(event.target.value)}
            rows="4"
            placeholder="Please enter your phrase."
          ></textarea>


          <div className={styles.authorContainer}>
            <div className={styles.authorLine}></div>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              placeholder="Enter the author."
            />
          </div>
        </div>
        <div className={styles.footer}>
          <p>
            Thank you for your contribution and for continuing to grow the
            community of women who empower and inspire other women.
            Please review that all fields have been filled in correctly and
            press the verify button.
          </p>
          <button type='submit'>
            <img
              src="/images/ok.png"
              alt="Icono de verificación"
            />
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewPhraseForm;