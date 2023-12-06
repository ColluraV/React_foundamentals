

import React from "react"
import ReactDOM from "react-dom"

function Header(){
    return (
        <nav>
        <img src="./react-logo.png" width="40px" />
        <h3> tutto molto bello</h3>
        </nav>
    )
    
}

function Footer(){
    return (
        <p>
        <p> © 2023 Roberto e alora? development. All rights reserved.</p>
        </p>
    )
}
function Main(){
    return (
        <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>
    )
}
function Page() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}



ReactDOM.render(<Page />, document.getElementById("root"))

/*invece che importare gli elementi singolarmente tramite js si possono salvare come componenti
e importarli insieme sull'index.html tramite il componente "padre" Page() */

//ReactDOM.render(<Header/>, document.getElementById("header"))
//ReactDOM.render(<Footer />, document.getElementById("footer"))