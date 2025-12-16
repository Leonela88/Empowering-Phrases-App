import './App.css'
import Header from './Header'
import Footer from './Footer'
import ViewPhrases from './ViewPhrases'
import RemovePhrases from './RemovePhrases'
import CreateReadActions from './CreateReadActions'
import ViewAllPhrases from './ViewAllPhrases'


function App() {
return (
    <div className="App">
      <Header></Header>
      <main className="app-main">
        {/* <ViewPhrases></ViewPhrases> */}
        {/* <CreateReadActions></CreateReadActions> */}
        {/* <RemovePhrases></RemovePhrases> */}
        <ViewAllPhrases></ViewAllPhrases>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App