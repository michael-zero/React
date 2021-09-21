import React from 'react'


const coresArray = ['azul','verde']

function App() {

  const [cores, setCores] = React.useState(['verde'])

  const handleChange = ({target}) => {
    if(target.checked){
      setCores([...cores, target.value])
    }else{
      setCores([...cores.filter(cor => cor !== target.value)])
    }
  }

  return ( 
  <div>
    <form>
      {
        coresArray.map(cor => (
          <label key={cor} style={{textTransform: 'capitalize'}}>
          <input type="checkbox" value={cor} 
          checked={cores.includes(cor)} 
          onChange={handleChange}/>
         {cor}
        </label>
        ) )
      }






    </form>
  </div>
);
}

export default App;
