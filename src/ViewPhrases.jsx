import { useState } from "react"
import { phrases } from "./array/Array"
import "../src/ViewPhrases.css"


const ViewPhrases = () => {
    console.log(phrases);

    /*const [paragraph, setParagraph] = useState ("I am my own sanctuary and I can be reborn as many times as I choose throughout my life.")
    const [author, setAuthor] = useState ("Lady Gaga")

    function ChangePhrase () {
        
    }

    function ChangeAuthor () {
    */

         
    return (
        <div className="container">
        {
            phrases.map(index => (
                <div key={index.id} className="otherClass">
                    <p>{index.phrase}</p>
                    <p>{index.author}</p>
                </div>
            ))
        }
        </div>

    )

};

export default ViewPhrases

