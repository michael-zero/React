import React from 'react'

const RadioDesafio = ({active, pergunta, id, options, onChange, value, slide}) => { 
    if(!active) return null
    return (
        <fieldset style={{padding: '2rem', marginBottom: "1rem", border: "2px solid #eee"}}>
            <legend style={{fontWeight: "bold"}}>{pergunta}</legend>
            {
                // Vetor de respostas 
                options.map(option => <label key={option} style={{marginBottom: "1rem", fontFamily: 'monospace'}}>
                    {/* Criando o radio da resposta */}
                    <input 
                    id={id}
                    checked={value === option}
                    onChange={onChange} value={option} type='radio'/>
                {option}
                </label>)
            }
        </fieldset>
    )
}

export default RadioDesafio
