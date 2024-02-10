import { useState } from 'react'
import './App.css'
import List from './Components/List.jsx'
import Counter from './Components/Counter.jsx'

function App() {

  const [list,setList] = useState(['apple', 'banana', 'cherry', 'pear', 'watermelon'])

  const handleClick = () => {setList(['peppers','Tomato','Onion','Squash'])}

  
  const [InitCount,setCount] = useState([0])

  const CountUp = () => {setCount(InitCount + 1)}
  const CountDown = () => {setCount(InitCount - 1)}

  return (
    <>
    <h1>Hello</h1>
    <h2>Ejercicio 1</h2>
    <button onClick={() => handleClick()}>Actualizar</button>
    <List elements={list}/>

    <h2>Ejercicio 2</h2>
    <Counter count= {InitCount}/>
    
    <button onClick={() => CountUp()}>Incrementar</button>
    <button onClick={() => CountDown()}>Decrementar</button>

    </>
  )
}

export default App
