import React from 'react'
import Produto from './components/produtoLocalStorage/Produto'
function App() {

  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    if(produto){
      window.localStorage.setItem('produto',produto)
    }
  }, [produto])

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal){
      setProduto(produtoLocal)
    }
  },[])
  
  
  function handleClick(event){
    setProduto(event.target.innerText)
  }



  return ( 
   <div>
     <h1>Preferência: {produto}</h1>
     
     <button onClick={handleClick} style={{marginRight: '1rem'}}>notebook</button>
     <button onClick={handleClick}>smartphone</button>

     <Produto produto={produto}/>
   
   </div>
  );
}

export default App;
