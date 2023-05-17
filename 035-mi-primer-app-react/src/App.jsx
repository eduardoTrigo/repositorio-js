import './App.css'

function App() {
  const nombre = "Eduardo"
  const anios = 38
  const arregloNombres = ["juan", "daniela", "sebastian", "jose", "pedro"]
  return (
    <>
    <div className='bg-dark text-white p-5 rounded'>
      <h1 className='text-danger'>Eduardo Trigo</h1>
      <h2>este es un subtitulo</h2>
      <p>hola mi nombre es {nombre}</p>
      <p>tengo {anios} años</p>
      <ul>
        {
          arregloNombres.map(function (item, idx) {
             return <li className='text-warning' key={idx}>
              {item}
             </li>
          })          
        }
      </ul>
    </div>
    </>
  )
}

export default App
