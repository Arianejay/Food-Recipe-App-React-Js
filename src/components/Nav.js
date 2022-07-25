import React from 'react'
import {Link} from "react-router-dom"
import {GiCook} from "react-icons/gi"

const Nav = () => {
  return (
    <Link className='nav' to="/">
       <GiCook />
       <h1>Delicious</h1>
    </Link>
  )
}

export default Nav