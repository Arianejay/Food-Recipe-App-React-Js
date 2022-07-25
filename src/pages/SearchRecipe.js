import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import {motion} from "framer-motion"

const SearchRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  let params = useParams();
  let search = params.search

  useEffect(() => {
    getRecipe(search)
  }, [search])

  const getRecipe = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const data = await api.json();
    setRecipe(data)
  }

  return (
    <motion.div 
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.3}}}
    >
        <div className='search'>
            <span>Search results for: {search}</span>
        </div>
        <div className='searchRecipe__wrapper'>
        {recipe.totalResults > 0 && recipe.results.map(item => (
            <div className='searchRecipe__content' key={item.id}>
                <div className='searchRecipe__content-title'>
                    <span>{item.title}</span>
                </div>
                <Link to={"/recipe/" + item.id}>
                  <img src={item.image} alt={item.title} />
                </Link>
            </div>
        ))}
        {recipe.totalResults <= 0 &&
            <div className='search__error'>
              <h1>Sorry, {search} is not found!</h1>
            </div>
        }
        </div>
    </motion.div>
  )
}

export default SearchRecipe