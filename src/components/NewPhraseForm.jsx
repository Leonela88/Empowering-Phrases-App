import { useState } from 'react';
import styles from './NewPhraseForm.module.css'

const NewPhraseForm = () => {

  const [phrase, setPhrase] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Nueva Frase Creada:', { phrase, author });
    setPhrase('');
    setAuthor('');
  };

  return (
    <div className={styles.container}>

      <div className={styles.img}>
       
      </div>

      <form onSubmit={handleSubmit} >

       
        <div className={styles.phrasePanel}>
          <span className={styles.quoteMark}>&ldquo;</span>

          <textarea
            id="phrase"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            rows="4"
            placeholder="Please enter your phrase."
          ></textarea>

     
          <div className={styles.authorContainer}>
            <div className={styles.authorLine}></div>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
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

         
          <button type="submit" className={styles.verifyButton}>
            <span className={styles.checkIcon}>&#10003;</span> 
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPhraseForm;