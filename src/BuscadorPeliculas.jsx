// API Key
// 233ae512087e60ab602bc4dca088faa7
// API Read Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzNhZTUxMjA4N2U2MGFiNjAyYmM0ZGNhMDg4ZmFhNyIsInN1YiI6IjY0ZTJmMTZjZTE5ZGU5MDEzYTI5NTZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t2D_1EY7D0ZKXYrOcL60l28Fs2SccVnMV9BeYFWCyUI
import { useState } from "react"
export const BuscadorPeliculas = () => {
    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '233ae512087e60ab602bc4dca088faa7'

    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])

    const handleInputChange =(e)=>{
        setBusqueda(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        fetchPeliculas()
    }
    const fetchPeliculas= async()=>{
        try {
            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
            const data = await response.json()
            setPeliculas(data.results)
            console.log(data.results)
        } catch (error) {
            console.log('Error al buscar',error)
        }
    }

  return (
    <div className="container">
        <h1 className="title">Buscador de Peliculas</h1>        
        <form onSubmit={handleSubmit}>
            <input type="text" value={busqueda} onChange={handleInputChange} placeholder="Escribir una Pelicula" />
            <button type="submit" className="search-buttom">Buscar</button>
        </form>
        
        <div className="movie-list">        
            {peliculas.map((pelicula) => (
                <div key={pelicula.id} className="movie-card">
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                    <h2>{pelicula.title}</h2>
                    <p>{pelicula.overview}</p>
                </div>    
            ))}

        </div>
    </div>
  )
}
