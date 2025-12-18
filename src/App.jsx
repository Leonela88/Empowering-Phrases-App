import './App.css'
import NewPhraseForm from './components/NewPhraseForm'
import Header from './Header'
import Footer from './Footer'
import ViewPhrases from './ViewPhrases'
import RemovePhrases from './RemovePhrases'
// import CreateReadActions from './CreateReadActions'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="app-main">
        {/* <ViewPhrases></ViewPhrases> */}
        {/* <ViewAllPhrases/> */}
        < NewPhraseForm></NewPhraseForm>
        {/* <CreateReadActions></CreateReadActions> */}
        {/* <RemovePhrases></RemovePhrases> */}
      </main>
      <Footer></Footer>
    </div>
  )
      
}

export default App;
