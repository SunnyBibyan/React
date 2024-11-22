import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let [name, setName] = useState('John Doe')
  
  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter+1)
    
  }
  
  const removeValue = () => {
    console.log("clicked", counter);
    setCounter(counter-1)
    
  }


  return (
    <>
     <h1>Number of companies(net worth of 2500 crores )</h1>
     <h2>counter Value:{counter}</h2>
     <button onClick={addValue}>Add Value: {counter}</button>
     <button onClick={removeValue}>Remove: {counter}</button>
    </>
  )
}

export default App

// import React, { useState } from 'react';

// const CounterComponent = () => {
//   const [counter, setCounter] = useState(10); // Initial value for counter

//   const removeValue = () => {
    // console.log("clicked", counter);
//     setCounter(counter - 1); // Prevent negative values
//   };

//   return (
//     <div>
//       <p>Counter: {counter}</p>
//       <button onClick={removeValue}>Remove:{counter}</button>
//     </div>
//   );
// };

// export default CounterComponent;

