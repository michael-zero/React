import React from 'react'
function App() {

const [comentarios, setComentarios] = React.useState([])
const [texto, setTexto] = React.useState('')
const [notificacao, setNotificacao] = React.useState(null)
const [carrinho, setCarrinho] = React.useState(0)

const inputRef = React.useRef(null)
const timeoutRef = React.useRef(null)


const handleComment = () => {
  setComentarios([...comentarios, texto])
  setTexto('')
  inputRef.current.focus()
}

const addCarrinho = () => {
  setCarrinho(c => c+1)
  setNotificacao('Item adicionado no carrinho!')

  //Usando a referencia
  timeoutRef.current = setTimeout(() => {
    setNotificacao(null);

  }, 2000)
}

return ( 
   <div>
      <ul>
        {
          comentarios && comentarios.map(c  => <li key={c}>{c}</li>)
        }
      </ul>

        <input  ref={inputRef} type="text" value={texto} onChange={({target}) => setTexto(target.value)}/>

        <button style={{marginTop: '1rem'}} onClick={handleComment}>Enviar</button>

        <button style={{marginTop: '1rem', marginLeft: '1rem'}} onClick={addCarrinho}>Carrinho {carrinho}</button>
        <p>{notificacao}</p>

   </div>
  );
}

export default App;
