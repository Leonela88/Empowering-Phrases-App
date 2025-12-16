import './App.css'
import Header from './Header'
import Footer from './Footer'
import ViewPhrases from './ViewPhrases'
import NewPhraseForm from './components/NewPhraseForm'
import CreateReadActions from './CreateReadActions'
import RemovePhrases from './RemovePhrases'
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