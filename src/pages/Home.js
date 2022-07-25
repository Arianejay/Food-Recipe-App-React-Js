import React from 'react'
import Wine from '../components/Wine'
import Popular from '../components/Popular'
import {motion} from "framer-motion"

const Home = () => {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.3}}}
    >
        <Wine />
        <Popular />
    </motion.div>
  )
}

export default Home