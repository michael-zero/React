import React from 'react'
import Input from './Form/Input';

function App() {
  const [cep, setCep] = React.useState("")
  const [error, setError] = React.useState(null)


  const validateCep = (value) => {
    
    //  ^ - começa com 5 dígitos
    //  $ - termina com 3 digitos
    // -? - poder ter o não o "-"

    if(!value){
      setError("Preencha um valor")
      return false
    }else if(!/^\d{5}-?\d{3}$/.test(value)){
      setError("Preencha com um CEP válido.")
      return false
    }else{
      setError(null)
      return true
    }
  }

  const handleBlur = ({target}) => {
    validateCep(target.value)
  }

  const onChange = ({target}) => {
    if(error) validateCep(target.value)
    setCep(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(validateCep(cep)){
      console.log("Enviou!")
    }else{
      console.log("Não deve enviar!")
    }
  }

  return ( 
  <form onSubmit={handleSubmit}>
      <Input label='CEP' type="text" id="cep" placeholder="00000-000" 
      value={cep} onChange={onChange}
      onBlur={handleBlur}
      />
      {error && <p>{error}</p>}

      <button>Enviar</button>
  </form>
);
}

export default App;
