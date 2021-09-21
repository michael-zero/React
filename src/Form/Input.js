import React from 'react'

const Input = ({label, id, value, onChange, type, onBlur, placeholder, error}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
            type={type}
            onBlur={onBlur}
            placeholder={placeholder}
            id={id} value={value} onChange={onChange} />
            {error && <p>{error}</p>}
        </>
    )
}

export default Input
