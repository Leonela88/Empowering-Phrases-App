import { useState } from 'react'
import './App.css'
import ViewPhrases from './ViewPhrases'
import RemovePhrases from './RemovePhrases'
import Header from './Header'

function App() {
return (
    <>
    <Header></Header>
    <ViewPhrases></ViewPhrases>
    <RemovePhrases></RemovePhrases>
    </>
  )
}

export default App


