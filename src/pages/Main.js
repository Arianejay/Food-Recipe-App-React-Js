import React from 'react'
import Home from "./Home"
import {Routes, Route, useLocation} from "react-router-dom"
import SearchRecipe from './SearchRecipe';
import Recipe from './Recipe';
import {AnimatePresence} from "framer-motion"

const Main = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} exact />
        <Route path="/searchrecipe/:search" element={<SearchRecipe />} exact />
        <Route path="/recipe/:id" element={<Recipe />} exact />
      </Routes>
    </AnimatePresence>
  )
}

export default Main