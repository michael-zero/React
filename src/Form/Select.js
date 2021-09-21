import React from 'react'

const Select = ({options, value, setValue, ...outrasProps}) => {
    return (
        <select {...outrasProps} value={value} onChange={({target}) => setValue(target.value)}>

           <option disabled value="">Selecione</option>
           
           {
               options.map(option => {
               return <option key={option} value={option}>{option}</option>
            })
           }
        </select>
    )
}

export default Select
