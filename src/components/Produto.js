import React from 'react'
import UserContext, { Produtos } from '../UserContext'

const Produto = ({produto}) => {

    const {user} = React.useContext(UserContext)
    const armazem = React.useContext(Produtos)

    const handleClick = () => {
        armazem.setContar(ant => ant + 1)
    }

    return (
        <div style={{border: "1px solid", margin: "1rem 0", padding: '1rem'}}>
           {/* <p>{produto.nome}</p> */}
           <p style={{color: 'red'}}>Usuário {user}</p>

           <ul>
            {produto.propriedades.map(prop => <li key={prop}>{prop}</li>)}
           </ul> 

            <ul>
              {armazem.produtos.map(prop => <li key={prop}>{prop}</li>)}
            </ul>

            <button onClick={handleClick}>{armazem.contar}</button>

        </div>
    )
}

export default Produto
