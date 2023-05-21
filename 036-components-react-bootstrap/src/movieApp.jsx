import { useState } from "react"
import {} from "react-bootstrap"

function MovieApp() {
  const [count, setCount] = useState(0)
  return (    
   <div >
    <h1>Movie App</h1>
    <button> +1</button>
   </div>
  )
}

export default MovieApp
