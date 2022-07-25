import React, { useState } from 'react'
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searchrecipe/" + input);
    setInput("")
  }
  const handleClick = () => {
    navigate("/searchrecipe/" + input);
    setInput("")
  }

  return (
    <div className='searchbar__wrapper'>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Search' 
              autoComplete='off'
              
              value={input}
              onChange={e => setInput(e.target.value)}  
            />
            <i onClick={handleClick}><FaSearch className='icon' /></i>
        </form>
    </div>
  )
}

export default Searchbar