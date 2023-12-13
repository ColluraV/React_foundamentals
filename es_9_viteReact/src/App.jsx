
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
    
    return (
      <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

/* la props item={item} può essere scritta anche {...item}

viene chiamato spread operator e divide il contenuto dell'oggetto ricevuto
  id={item.id}
  title={item.title}
  description={item.description}
  ecc..

questo cambierà il contenuto delle props inviando 
i singoli valori divisi invece che un singolo oggetto

*/