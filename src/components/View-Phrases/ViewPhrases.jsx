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

    const PressToNext = (event) => {
    if (event.key === "ArrowRight") {
    setIndex((prevIndex) =>
      prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
    );
  }};

  const ShowPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? phrases.length - 1 : prevIndex - 1
    );
  };

  const PressToPrevious = (event) => {
    if (event.key === "ArrowLeft") {
    setIndex((prevIndex) =>
      prevIndex === 0 ? phrases.length - 1 : prevIndex - 1
    );
  }};

  const current = phrases[index];

  return (
    <main className="viewContainer">
      <img src={current.photo} alt={current.name} className="viewPhoto" />
      <div className="rightFrame">
        <div className="carousel">
          <button className="viewButtons" onClick={ShowPrevious} onKeyDown={PressToPrevious}>&#060;
          </button>
          <div key={current.phrase} className="viewInfo" id="box2" style={{"--bg-image": `url(${current.photo})` }}>
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
          <button className="viewButtons" onClick={ShowNext} onKeyDown={PressToNext}>&#062;
          </button>
        </div>
        <div className="otherButtons">
          <div className="viewCollaborate">
            <p>Collaborate :<br></br> Add your phrase</p>
            <button className="viewAdd">
              <img src="../public/images/add.png" alt="add icon" id="viewPlus" />
            </button>
          </div>
          <div className="viewExplore">
            <p>Explore:<br></br> View full Gallery</p>
            <button className="viewGallery">
              <img src="../public/images/book.png" alt="book icon" id="viewList" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};


export default ViewPhrases;
