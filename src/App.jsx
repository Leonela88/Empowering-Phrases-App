import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ViewPhrases from './components/View-Phrases/ViewPhrases'
import NewPhraseForm from './components/New-Phrases-Form/NewPhraseForm'
import CreateReadActions from './components/Create-Read-Actions/CreateReadActions'
import RemovePhrases from './components/Remove-Phrases/RemovePhrases'
import ViewAllPhrases from './components/View-All-Phrases/ViewAllPhrases'

function App() {
  return (
    <div className="App">
      <Header></Header>
        <ViewPhrases></ViewPhrases>
        {/* <ViewAllPhrases/> */}
        {/* < NewPhraseForm></NewPhraseForm> */}
        {/* <CreateReadActions></CreateReadActions> */}
        {/* <RemovePhrases></RemovePhrases> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
