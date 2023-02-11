import {useState, useEffect} from "react"
import "./personajes.css"
// import { Link } from 'react-router-dom'

const Personajes = () => {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => setPersonajes(data.results))
  }, [])

  console.log(personajes)
  return (
    <div>
    <h1>Personajes</h1>
    <div className="card-container">
      {personajes.map(personaje => (
        // <Link to={`/detalle/${personaje.id}`}>
          <div className="card">
            <h2>{personaje.name}</h2>
            <h3>{personaje.status}</h3>
            <img src={personaje.image} alt={personaje.name}/>
          </div>
          /* </Link> */
      ))}
    </div>
    </div>
  )
}

export default Personajes
