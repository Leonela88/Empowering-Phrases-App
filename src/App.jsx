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
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;