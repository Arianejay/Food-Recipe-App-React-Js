import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from "react-router-dom"

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check){
        setPopular(JSON.parse(check))
    } else {
        //let's fetch 9 random recipes
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();

        localStorage.setItem("popular", JSON.stringify(data.recipes))
        setPopular(data.recipes)
    }
  }

  return (
    <div className='popular__wrapper'>
        <h1>Trending Picks</h1>
        <Splide options={{
            perPage: 4,
            breakpoints: {
              640: {
                perPage: 1,
              },
              912: {
                perPage: 2,
              }
            },
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem"
        }}>
            {popular.map(item => (
                <SplideSlide key={item.id}>
                    <div className='popular__card-wrapper'>
                      <div className='popular__title'>
                        <span>{item.title}</span>
                      </div>
                      <div className='popular__card'>
                          <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt={item.title} />
                          </Link>
                      </div>
                    </div>
                </SplideSlide>
            ))}
        </Splide>
    </div>
  )
}

export default Popular