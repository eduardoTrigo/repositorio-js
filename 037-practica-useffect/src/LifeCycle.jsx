import { useEffect, useState } from "react"
import React from 'react'

const LifeCycle = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    useEffect(() =>{
        console.log("useEffect sin dependencia")
    })
    useEffect(() =>{
        console.log("useEffect []")
    }, [])
    useEffect(() =>{
        console.log("useEffect Counter 1")
    }, [counter1])

  return (    
    <div>
        <h2>Clicks C1 : {counter1}</h2>
        <h2>Clicks C2 : {counter2}</h2>
        <button onClick={() => setCounter1(counter1+1)} > Sumar c1</button>
        <button onClick={() => setCounter2(counter2+1)} > Sumar c2</button>

        
    </div>  
    
  )
}

export default LifeCycle