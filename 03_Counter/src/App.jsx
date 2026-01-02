import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//let counter = 15;
let [counter, setCounter] = useState(0);
const addValue = () => {
  counter += 1;
  if(counter===21){
    counter=20;
  }
  setCounter(counter)
  console.log(counter)
}
const subValue = ()=>{
  counter -= 1;
  if(counter===-1){
    counter=0;
  }
  setCounter(counter)
  console.log(counter)
}
  return (
    <>
      <h1>Hello EveryOne, Welcome </h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={subValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
