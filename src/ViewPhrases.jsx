import { useState } from "react";
import { phrases } from "./array/Array";
import "../src/ViewPhrases.css";

const ViewPhrases = () => {
  const [index, setIndex] = useState(0);

  const ShowNext = () => {
    setIndex((prevIndex) =>
      prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
    );
  };

  const ShowPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? phrases.length - 1 : prevIndex - 1
    );
  };

  const current = phrases[index];

  return (
    <main className="viewContainer">
      <div className="ViewphotoFrame">
        <img src={current.photo} alt={current.name} className="viewPhoto" />
      </div>
      <div className="carousel">
        <button className="viewButtons" onClick={ShowPrevious}>&#060;
        </button>
        <div key={current.phrase} className="viewInfo" id="box2">
          <img src="./quotes.png" alt="quote icon" className="quoteIcon"></img>
          <div className="fitPhrase">
            <p className="viewPhrase">{current.phrase}</p>
          </div>
          <hr></hr>
          <div className="buttons">
            <button className="viewModificar">
              <img src="../public/images/pencil.png" alt="pencil icon" id="viewPencil" />
            </button>
            <button className="viewDelete">
              <img src="../public/images/trash.png" alt="bin icon" id="viewBin" />
            </button>
          </div>
          <p className="viewAuthor">{current.name}</p>
        </div>
        <button className="viewButtons" onClick={ShowNext}>&#062;
        </button>
      </div>
    </main>
  );
};

// function ManageOverflow() {
//   const phraseElement = document.querySelector('.viewPhrase');

//   if ($("phraseElement").height() > $(".fitPhrase").height())
//      {
//       result = phraseElement.style.fontSize = "1.5rem";
//     }

//      }

// ManageOverflow();

export default ViewPhrases;
