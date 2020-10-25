import React from 'react'

const Saludo = (props) => {

    return (
        <div>
            <h2>Saludando a {props.persona}</h2>
            <h3>Con edad de {props.edad} años</h3>
        </div>
    )
}

export default Saludo
