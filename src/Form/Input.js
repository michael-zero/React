import React from 'react'

const Input = ({label, id, value, onChange, ...outrasProps}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
            {...outrasProps}
            id={id} type="text" value={value} onChange={onChange} />
        </>
    )
}

export default Input
