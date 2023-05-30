import React from 'react'

const Punto2 = () => {
  return (
    <div>
        <Mensaje friend="My Friends"/>
    </div>
  )
}

function Mensaje(props) {
    return(
        <>
        <div className='mensaje'>
            <h1>
                hola {props.friend}
            </h1>
        </div>
        </>
    )
}

export default Punto2