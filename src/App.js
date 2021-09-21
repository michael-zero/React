import React from 'react'
import RadioDesafio from './Form/RadioDesafio';

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: "React.createElement()",
    id: "p1"
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component form "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component form "./Component"',
    id: "p2"
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: [
      'useEffect()',
      'useFetch()',
      'useCallback()',
    ],
    resposta: 'useFetch()',
    id: "p3"
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook",
    options: [
      'use',
      'get',
      'set'
    ],
    resposta: 'use',
    id: "p4"
  }
]

function App() {
  
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  })

  const handleChange = ({target}) => {
    setRespostas({...respostas, [target.id]: target.value})
  }
 
  return ( 
  <form>
    {
      perguntas.map(pergunta => <RadioDesafio 
        value={respostas[pergunta.id]}
        key={pergunta.id} onChange={handleChange} {...pergunta}/>)
    }
    <button>Enviar</button>
  </form>
);
}

export default App;
