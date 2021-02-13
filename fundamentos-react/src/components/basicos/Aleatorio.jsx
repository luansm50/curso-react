import React from 'react'

function randomNumber(min, max) {  
    return parseInt(Math.random() * (max - min) + min); 
}  

export default props => {
    const {min, max} = props
    const val = randomNumber(min, max)
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Valor Mínimo {min}</p>
            <p>Valor Máximo {max}</p>
            <p>O número sortedo foi {val}</p>
        </div>
        
    );
}