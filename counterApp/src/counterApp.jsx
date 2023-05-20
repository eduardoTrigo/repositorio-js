import { useState } from"react"

function CounterApp(){
    const [count, setCount]= useState(0)

    return (
        <>
        <div className="text-white text-center">
            <h1 className="my-5">CounterApp</h1>
            <p>tengo un contador</p>
            <p>{count}</p>
            <div className="text center  ">
                <button className="btn btn-primary" onClick={() => {setCount( count + 1)}}>sumar+1</button>
                <button className="btn btn-danger mx-3" onClick={() => {setCount( count - 1)}}>restar-1</button>
                <button className="btn btn-warning" onClick={() => {setCount( count = 0)}}>reiniciar 0</button>
            </div>
        </div>
        </>
    )
}

export default CounterApp
