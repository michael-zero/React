import React from 'react'
function App() {

const [descricao, setDescricao] = React.useState('')
const [select, setSelect] = React.useState('')
const [radio, setRadio] = React.useState('')

return ( 
  <div>
    <form onSubmit={(e) => { e.preventDefault() ; console.log(descricao)}}>

        {/* TextArea */}
        <label htmlFor="descricao">Descrição de suas habilidades</label>
        <textarea name="descricao" onChange={({target}) => setDescricao(target.value)} id="descricao" cols="20" rows="5"/>

        {/* Select */}
        <label htmlFor="produtos">{select}</label>
        <select value={select} id="produtos" 
        onChange={({target}) => setSelect(target.value)}>
            <option disabled value="">Selecione</option>
            <option value="notebook">Notebook</option>          
            <option value="smartphone">Smartphone</option>          
            <option value="tablet">Tablet</option>          
        </select>

        {/* Radio */}
        <label>Selecionado: {radio}</label>
        <label>Notebook<input type="radio" value="noteboook" name="produto" onChange={({target}) => setRadio(target.value)}/></label>
        <label>Fone de Ouvido<input type="radio" value="fonedeouvido" name="produto" onChange={({target}) => setRadio(target.value)}/> </label>

        <button>Enviar</button>
    </form>
  </div>
);
}

export default App;
