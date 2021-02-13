
import './TabelaProdutos.css'
import React from 'react'

import produtos from '../../data/produtos'

export default props => {
    function getLinhas(){
        return produtos.map((produto, i) => {
            return (
                <tr key={produtos.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        });
    }

    return (
        <div className="TabelaProdutos">
            <ul>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Preco</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getLinhas()}
                    </tbody>
                </table>
            </ul>
        </div>
    )
}