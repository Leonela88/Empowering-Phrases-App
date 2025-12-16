import './App.css'
import Header from './Header'
import Footer from './Footer'
import ViewPhrases from './ViewPhrases'
// import RemovePhrases from './RemovePhrases'
// import CreateReadActions from './CreateReadActions'
import NewPhraseForm from './components/NewPhraseForm'


function App() {
  return (
    <>
      <Header></Header>
      <main className="app-main">
        <ViewPhrases></ViewPhrases>
        < NewPhraseForm></NewPhraseForm>
        {/* <CreateReadActions></CreateReadActions> */}
        {/* <RemovePhrases></RemovePhrases> */}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App