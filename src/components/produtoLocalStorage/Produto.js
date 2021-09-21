import React from 'react'

function Produto({produto}) {

    const [dados, setDados] = React.useState(null)

    React.useEffect(() => {
        if(produto !== null){
                 fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
                .then(res => res.json())
                .then(json => { 
                    console.log(json);
                    setDados(json)})
            }
      }, [produto]);

    if(!dados) return null

    return (
        <div>
            <h1>{dados.nome}</h1>
            <h1>R$ {dados.preco}</h1>
        </div>
    )
}

export default Produto
