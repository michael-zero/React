import React from 'react'

import Header from './components/Header';
import Home from './components/Home';
import Produtos from './components/Produtos';

function App() {


  //UseState
  const [ativo, setAtivo] = React.useState(false)

  const {pathname}  = window.location
  let Pagina = Home

  pathname === '/produtos' ? Pagina = Produtos : Pagina = Home

 



  return ( 
    <section>
     <Header/>
     <Pagina/>
     <button  onClick={() => setAtivo(!ativo)}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </section>
  );
}

export default App;
