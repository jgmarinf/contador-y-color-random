import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './assets/components/Formulario.jsx'

var randomColors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6']

function App({oe}) {
  const [count, setCount] = useState(0)
  const [colors, setColors] = useState("")

  useEffect(() => {
    setColors(randomColors[colorRandom])
  }, [count])
  
  console.log(oe)

  const colorRandom = Math.floor(Math.random() * randomColors.length + 1)
  
  const ojo = ()=> {
    const newCount = count + 1
    newCount <= 5 ? setCount(count + 1) : setCount("sobrepasaste el limite")
  }
  
  return (
    <div className="App" style={{backgroundColor: `${colors}`}}>
      <h1>{count}</h1>
      <button onClick={ojo}>+1</button>
      <Formulario></Formulario>
    </div>
  )
}

export default App
