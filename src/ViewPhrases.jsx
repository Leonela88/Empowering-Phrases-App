import { useState } from "react"
import { phrases } from "./array/Array"
import "../src/ViewPhrases.css"


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
        <> <div className="viewContainer">
                <div>
                    <img src={current.photo} alt={current.name} className="viewPhoto"/>
                </div>
                <div className="carousel">
                  <button className="viewButtons" id="box1" onClick={ShowPrevious}> &#060;</button>
                  <div key={current.phrase} className="viewInfo" id="box2">
                          <img src="./quotes.png" alt="quote icon" className="quoteIcon"></img>
                          <div className="fitPhrase">
                            <p className="viewPhrase">{current.phrase}</p>
                          </div>
                          <hr></hr>
                          <p className="viewAuthor">{current.name}</p>
                  </div>
                  <div>
                      <button className="viewButtons" id="box3" onClick={ShowNext}> &#062; </button>
                  </div>
                </div>
            </div>
        </>
    )
};

export default ViewPhrases

