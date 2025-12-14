import './App.css'
import Header from './Header'
import Footer from './Footer'
import ViewPhrases from './ViewPhrases'
import RemovePhrases from './RemovePhrases'


function App() {
return (
    <div className="App">
      <Header></Header>
      <main className="app-main">
        <ViewPhrases></ViewPhrases>
        <RemovePhrases></RemovePhrases>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App