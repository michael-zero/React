import React from 'react'

const Radio = ({options, value, setValue, ...outrasProps}) => {
    return (
        <>
        {
            options.map(option => (
                <label key={option}> 
                    <input 
                    onChange={({target}) => setValue(target.value)}
                    {...outrasProps}
                    type="radio" checked={value === option} value={option}/>
                    {option}
                </label>   
            ))
        }
        </>
    )
}

export default Radio
