import { useState } from "react"

function CounterApp() {
    //hucks---------------------------------------
    const [count, setCount] = useState(0)
    const [valorInput, setValorInput] = useState("")

    //funciones-----------------------------------
    const changeInput = (event) => {
        setValorInput(event.target.value)
    }

    const sumarUno = () => {
        setCount(count + 1)
    }

    const restarUno = () => {
        setCount(count - 1)
    }

    const resetear = () => {
        setCount(0)
    }
    return (
        <>
            <div className="text-white text-center">
                <h1 className="my-5">CounterApp</h1>
                <p>tengo un contador</p>
                <p>{count}</p>
                <div className="text center ">
                    <button className="btn btn-primary" onClick={sumarUno}>sumar+1</button>
                    <button className="btn btn-danger mx-3" onClick={restarUno}>restar-1</button>
                    <button className="btn btn-warning" onClick={resetear}>reiniciar 0</button>
                </div>
                <hr className="text-white my-5" />
                <div className=" w-50 mx-auto " >
                    <label className="my-2">input</label>
                    <input
                        type="text "
                        className="form-control"
                        placeholder="Ej: asdf ñlkj"
                        name="name"
                        value={valorInput}
                        onChange={changeInput} />
                </div>
            </div>
        </>
    )
}

export default CounterApp
