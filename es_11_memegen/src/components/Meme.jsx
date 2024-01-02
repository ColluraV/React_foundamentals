import React from "react"
import memesData from "../../memesData"
export default function Meme() {
    const [memeImg, setMemeImg] = React.useState("")
    /**

     */
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImg (memesArray[randomNumber].url)  
    
    }
    
    return (
        <main>
            <div className="form">
                <div className="input--container">

                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                </div>

                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                {memeImg && <img src={memeImg} alt="random-meme" className="meme--img" />}
            </div>
            
        </main>
    )
}