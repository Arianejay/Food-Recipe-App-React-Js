import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {motion} from "framer-motion"

const Recipe = () => {
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab]= useState("instructions")
  let params = useParams();

  useEffect(() => {
    getDetails(params.id)
  }, [params.id])

  const getDetails = async (id) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await api.json()

    setDetails(data)
  }

  return (
    <motion.div className='recipe__wrapper'
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.3}}}
    >
      <div className="recipe__details">
        <div className='recipe__title'>
          <h1>{details.title}</h1>
        </div>
        <img src={details.image} alt={details.title} />
      </div>
      <div className="recipe__content">
        <button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</button>
        <button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</button>
  
      {activeTab === "instructions" && (
        <div className='recipe__instruction'>
          {/* dangerouslySetInnerHTML removes html tags */}
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>
      )}

      {activeTab === "ingredients" && (
        <ul>
          {details.extendedIngredients.map((item, index) => (
            <div key={index}>
              <li>{item.original}</li>
            </div>
          ))}
        </ul>
      )}
      </div>
    </motion.div>
  )
}

export default Recipe