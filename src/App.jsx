import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ViewPhrases from './components/View Phrases/ViewPhrases'
import NewPhraseForm from './components/New Phrase Form/New Phrase Form/NewPhraseForm'
import CreateReadActions from './components/Create Read Actions/CreateReadActions'
import RemovePhrases from './components/Remove Phrases/RemovePhrases'
import ViewAllPhrases from './ViewAllPhrases'

function App() {
  return (
    <div className="App">
      <Header/>
        {/* <ViewPhrases></ViewPhrases> */}
        {/* {< NewPhraseForm></NewPhraseForm>} */}
        {/* <CreateReadActions></CreateReadActions> */}
        {/* <RemovePhrases></RemovePhrases> */}
        <ViewAllPhrases/>
      <Footer/>
    </div>
  );
}

export default App