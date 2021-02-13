import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerNerd = () => Math.random() > 0.5
    return (
        <div>
           <div>Filho</div>
           <button onClick={_ => cb('João', gerarIdade(), gerNerd())}>
               Fornecer Informacoes
            </button>
        </div>
    )
}