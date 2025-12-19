import { useState } from "react";
import { phrases as initialPhrases } from "../../array/Array.jsx"
import { useNavigate } from "react-router";
// import EmpowerPhraseEditor from "../Remove-Phrases/RemovePhrases.jsx"
// import EmpowerPhraseModify from "../Modify-Phrases/modifyPhrases.jsx";
import NewPhraseForm from "../New-Phrases-Form/NewPhraseForm.jsx"
import ViewAllPhrases from "../View-All-Phrases/ViewAllPhrases.jsx"
import useDeletePhrase from "../Remove-Phrases/DeletePhrases.jsx"
import useUpdatePhrase from "../Modify-Phrases/updatePhrases.jsx"
// import CreateReadActions from "../Create-Read-Actions/CreateReadActions.jsx";
import "./ViewPhrases.css"



const ViewPhrases = () => {
  
  const [index, setIndex] = useState(0);

  const [phrases, setPhrases] = useState(initialPhrases);
  const deletePhrase = useDeletePhrase(setPhrases, index, setIndex);

  const [isEditing, setIsEditing] = useState(false);
  const [draftPhrase, setDraftPhrase] = useState("");
  const [draftAuthor, setDraftAuthor] = useState("");
  const updatePhrase = useUpdatePhrase(setPhrases, index);

  const handleEditClick = () => {
  setDraftPhrase(current.phrase);
  setDraftAuthor(current.name);
  setIsEditing(true);
};

  const navigate = useNavigate();

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
            <div className="quoteAndEdit">
              <img src="./quotes.png" alt="quote icon" className="quoteIcon"></img>
              <div> 
              {isEditing && (
                <div className="editActions">
                <button className="saveButton"
                onClick={() => {
                updatePhrase({phrase: draftPhrase,name: draftAuthor});setIsEditing(false);}}> Save</button>
                <button className="cancelButton" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              )}
              </div>
            </div>
            <div className="fitPhrase">
              {isEditing ? (
                <textarea
                  className="viewPhrase editInput"
                  value={draftPhrase}
                  onChange={(e) => setDraftPhrase(e.target.value)}
                  autoFocus
                />
                ) : (
                <p className="viewPhrase">{current.phrase}</p>
              )}
            </div>
            <hr></hr>
            <div className="buttons">
              <button className="viewModificar">
                <img src="../public/images/pencil.png" alt="pencil icon" id="viewPencil" onClick={handleEditClick}/>
              </button>
              <button className="viewDelete">
                <img src="../public/images/trash.png" alt="bin icon" id="viewBin" onClick={deletePhrase} />
              </button>
            </div>
              {isEditing ? (
              <input
                className="viewAuthor editInput"
                value={draftAuthor}
                onChange={(e) => setDraftAuthor(e.target.value)}
              />
              ) : (
              <p className="viewAuthor">{current.name}</p>
              )}
            </div>
          <button className="viewButtons" onClick={ShowNext} onKeyDown={PressToNext}>&#062;
          </button>
        </div>
        {/* <CreateReadActions></CreateReadActions> */}
        <div className="otherButtons">
          <div className="viewCollaborate">
            <p>Collaborate :<br></br> Add your phrase</p>
            <button className="viewAdd" onClick={() => navigate("/form")}>
              <img src="../public/images/add.png" alt="add icon" id="viewPlus" />
            </button>
          </div>
          <div className="viewExplore">
            <p>Explore:<br></br> View full Gallery</p>
            <button className="viewGallery" onClick={() => navigate("/viewAll")}>
              <img src="../public/images/book.png" alt="book icon" id="viewList" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};


export default ViewPhrases;
