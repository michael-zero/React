import React from 'react'

function App() {

const [contar, setContar] = React.useState(0)
//Callback recebe uma função e assim não ficará redesenhando a função toda vez

const handleClick = React.useCallback(() => {
  setContar(contar => contar + 1)
}, [])


return ( 
 <div>
   <button onClick={handleClick}>{contar}</button>
 </div>
);
}

export default App;
