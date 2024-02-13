import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes,setjokes]= useState([])
  useEffect(() => {
  axios.get(`/api/jokes`)
  .then((response)=>{
    setjokes(response.data)
    console.log(response.data);
  })
  .catch((error)=>{
    console.log(error);
  })
  })
  

  return (
    <>
    <h1>MY FULL STACK PROJECT</h1>
      <p>Jokes : {jokes.length}</p>
      {
        jokes.map((joke, index)=>(
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
