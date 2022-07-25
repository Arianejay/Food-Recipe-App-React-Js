import { useState, useEffect } from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

const Ingredients = () => {
  const [wine, setWine] = useState([])

  useEffect(() => {
    getWine();
  }, [])

  const getWine = async () => {
    const check = localStorage.getItem("wine")

    if (check){
        setWine(JSON.parse(check))
    } else {
        const api = await fetch(`https://api.spoonacular.com/food/wine/pairing?apiKey=${process.env.REACT_APP_API_KEY}&food=steak`)
        const data = await api.json()

        localStorage.setItem("wine", JSON.stringify(data.productMatches))
        setWine(data.productMatches)
    }
  
  }


  return (
    <div className='wine__wrapper'>
        <h1>Featured Wine Pairing</h1>
        {wine.map(item => (
            <div className='wine__content-wrapper'>
                <div className='wine__content' key={item.id}>
                    <h2>{item.title}</h2>
                    <h3>Pairs with Steak.</h3>
                    <p className='wine__rating'>Rating Count: {item.ratingCount}.0</p>
                    <p className='wine__description'>{item.description}</p>
                    <button><a href={item.link} target="_blank" rel='noreferrer'>Buy Now</a><AiOutlineShoppingCart className='shopping__icon' /></button>
                </div>
                <div className='wine__img'>
                    <img src={item.imageUrl} alt={item.title} />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Ingredients