import React from "react"
import ReactDOM from "react-dom"

//React prevede la dichiarazione di una classe tramite l'attributo 
//                          className=""





function Page() {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))