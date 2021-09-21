import React from 'react';

const UserContext = React.createContext()
export const Produtos = React.createContext()

//Exporta o contexto sem os valores
export default UserContext

//Exporta o contexto já com os valores, fica mais enxuto na outra parte 
export const Armazem = ({children}) => {
    
    const [contar, setContar] = React.useState(0)
    
    return <Produtos.Provider value={{produtos: ['Notebook','Celular','Fone de ouvido da Manassés'], contar, setContar}}>
        {children}
    </Produtos.Provider>
}
