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
                    <button className="viewButtons" onClick={ShowPrevious}> &#060;</button>
                </div>
                <div>
                    <img src={current.photo} alt={current.name} className="viewPhoto"/>
                </div>
                <div key={current.phrase} className="viewInfo">
                        <p className="viewPhrase">{current.phrase}</p>
                        <p className="viewAuthor">{current.name}</p>
                </div>
                <div>
                    <button className="viewButtons" onClick={ShowNext}> &#062; </button>
                </div>
            </div>
        </>
    )
};

export default ViewPhrases

