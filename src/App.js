import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import MejorPuntuada from "./components/MejorPuntuada"
import UltimosLanzamientos from "./components/UltimosLanzamientos"
import Personajes from "./components/Personajes"
import DetallePersonaje from "./components/DetallePersonaje"



const App = () => {
  return (
      <BrowserRouter>
      <nav>
        <a href="/mejor">Mejor Puntuada con href</a> {/* Me vuelve a renderizar toda la pagina */}
        <Link to="/">Home</Link> {/*solo funcionan si son a la misma pagina */}
        <Link to="/mejor">Mejor Puntuada</Link>
        <button><Link to="/ultimos">Ultimos Lanzamientos</Link></button>
        <br />
        <button><Link to="/personajes">personajes</Link></button>
        <button><Link to="/detalle">detalle</Link></button>
      </nav>



        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mejor" element={<MejorPuntuada />} />
          <Route path="/ultimos" element={<UltimosLanzamientos />}/>
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/detalle/:id" element={<DetallePersonaje />} />
        </Routes>



        <footer>
          <a href="https://www.linkedin.com">ir a Linkedin</a>
        </footer>

      </BrowserRouter>
  )
}

export default App
