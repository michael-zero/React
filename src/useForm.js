import React from 'react'
import Input from './Form/Input';
import useForm from './Hooks/useForm';

function App() {
  
  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm()
  const sobrenome = useForm(false)
  //  ^ - começa com 5 dígitos
  //  $ - termina com 3 digitos
  // -? - poder ter o não o "-"



  const handleSubmit = (event) => {
    event.preventDefault()
    if(cep.validate() && email.validate() && nome.validate()){
      console.log("Enviou!")
    }else{
      console.log("Não deve enviar!")
    }
  }

  return ( 
  <form onSubmit={handleSubmit}>
      <Input label='Nome' type="text" id="nome" {...nome}/>
      <Input label='Sobrenome' type="text" id="sobrenome" {...sobrenome}/>
      <Input label='CEP' type="text" id="cep" placeholder="00000-000" 
       {...cep}
      />
       <Input label='Email' type="email" id="cep" {...email}/>
      
      {/* {error && <p>{error}</p>} */}

      <button>Enviar</button>
  </form>
);
}

export default App;
