import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  /* è buona norma evitare funzioni come "count + 1" poichè si preferisce 
      evitare di modificare direttamente gli States, per la stessa ragione
      possono essere usati degli oldValues (come prevCount) per non modificare
      il valore iniziale dello State in maniera diretta
   */
  function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
      setCount(prevCount => prevCount - 1)
    }

      return (
    <>
      <h1>States Counter</h1>
      <div className="card">
        <div className="buttons">
          <button onClick={add}>
            +
          </button>
          <button onClick={subtract}>
            -
          </button>
        </div>
        <p>
          Counter : {count}
        </p>
      </div>
    </>
  )

 /* 
        --* ALTRO MODO MA CON FUNZIONI INTERNE AI BUTTON *--
  return (
    <>
      <h1>States Counter</h1>
      <div className="card">
        <div className="buttons">
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            +
          </button>
          <button onClick={()=> setCount((prevCount) => prevCount - 1)}>
            -
          </button>
        </div>
        <p>
          Counter : {count}
        </p>
      </div>
    </>
  )*/
}

export default App
