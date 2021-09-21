import React from 'react'

const Input = ({label, id, value, setValue, ...outrasProps}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
            {...outrasProps}
            id={id} type="text" value={value} onChange={({target}) => setValue(target.value)} />
        </>
    )
}

export default Input
