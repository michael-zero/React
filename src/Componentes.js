import React from 'react'
import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

function App() {

  const [nome, setNome] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [time, setTime] = React.useState('')
  const [perifericos, setPerifericos] = React.useState([])

  return ( 
  <form>

    {/* Mais de Um */}
     <h2>Periféricos</h2>
     <Checkbox options={['Mouse','Monitor']} value={perifericos} setValue={setPerifericos}/>

     {/* Opção Única */}
     <h2>Time</h2>
     <Radio options={['Palmeiras', 'Timon FC']} value={time} setValue={setTime}/>


    <h2>Linguagens</h2>
     <Select options={['Javascript', 'Python', 'C']} value={produto} setValue={setProduto}/>

     <p>{nome}</p>
     <Input label='Nome' id='nome' value={nome} setValue={setNome}/>


  </form>
);
}

export default App;
