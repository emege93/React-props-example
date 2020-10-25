import React from 'react'

const Saludo = ({persona, edad}) => {

    return (
        <div>
            <h2>Saludando a {persona}</h2>
            <h3>Con edad de {edad} años</h3>
        </div>
    )
}

export default Saludo
