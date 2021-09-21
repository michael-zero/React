import React from 'react'
// import UserContext from './UserContext';
// import { Armazem } from './UserContext';
// import Produto from './components/Produto'
import useLocalStorage from './Hooks/useLocalStorage';
import useFetch from './Hooks/useFetch';

function App() {

const [produto, setProduto] = useLocalStorage('produto','fone de ouvido')
const {request, data, loading, error} = useFetch()

React.useEffect(() => {

  async function fetchData(){
    const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
  
    console.log(response);

  }

  fetchData()

}, [request])


const handleClick = ({target}) => {
  setProduto(target.innerText)
}


if(error) return <p>{error}</p>
if(loading) return <p>Carregando .... </p>
return ( 
  <div>
    <p>{produto}</p>
    <button onClick={handleClick} style={{marginRight: '1rem'}}>Fone de ouvido</button>
    <button onClick={handleClick}>Monitor</button>
  
      { data && data.map(item => <div key={item.id}><li>{item.nome}</li></div>)}
  
  </div>
  
  
  //Contexto

  
  // <UserContext.Provider value={{user: 'robot'}}>
  //   <Armazem>
  //     <Produto produto={{nome: 'produto', propriedades: ['Computação','Javascript']}}/>
  //   </Armazem>
  // </UserContext.Provider>


);
}

export default App;
