import Card from "./components/cards.jsx"
import climaData from "./components/mock/climaApi.json"

function App() {
  return (    
   <div className="bg-dark container mt-5 d-flex flex-wrap">
    {
      climaData.data.map((item, index) => (
         <Card
         key={index}
         ciudad={item.ciudad}
         descripcion={item.descripcion}
         temperatura={item.temperatura}
         />
      ))
    }
   
   </div>
  )
}

export default App
