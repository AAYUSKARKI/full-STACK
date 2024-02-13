import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes,setjokes]= useState([])
  return (
    <>
    <h1>MY FULL STACK PROJECT</h1>
      <p>Jokes : {jokes.length}</p>
      {
        jokes.map((joke, index)=>{
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            </div>
        })
      }
    </>
  )
}

export default App
