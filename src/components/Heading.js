import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Heading = () => {
  const [joke, setJoke] = useState([])
  const check = localStorage.getItem("joke");

  useEffect(() => {
    getJoke();
  }, [])

  const getJoke = async () => {

    if (!check){
        const api = await fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();

        localStorage.setItem("joke", JSON.stringify(data.text));
        console.log(data)
        setJoke(data)
    }
  }

  return (
    <div className='heading__wrapper'>
        <h1>Recipe App</h1>
        <p>{check}</p>
    </div>
  )
}

export default Heading