// el useParams es una ruta que me retorna lo que esta escrito en la variable.. y se me guarda en la variable sirve para todas las rutas que tiene variables.. y me tengo que importar params que me devuelve un objeto lo que dice (ver todo esto en consola)

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetallePersonaje = () => {
  const params = useParams() 
  const [personaje, setPersonaje] = useState([])
  console.log("params", params.id)
  console.log("personaje", personaje)

    useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    .then(res => res.json())
    .then(data => setPersonaje(data))
  }, [params.id])

  return (
    <div>
    <h1>detalle personaje</h1>
    <article>
      <h2>Nombre: {personaje.name} </h2>
      <h3>Status: {personaje.status}</h3>
      <img src={personaje.image} alt={personaje.name} />

    </article>
    </div>
  )
}

export default DetallePersonaje