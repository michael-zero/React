import React from 'react'

function useLocalStorage(chave, valorInicial) {
    const [state, setState] = React.useState(() => {
        // Verifica se já existe
        const local = window.localStorage.getItem(chave)
        return local ? local : valorInicial
    })

    React.useEffect(() => {
        window.localStorage.setItem(chave, state)
    }, [chave, state])

    return [state, setState]
}

export default useLocalStorage
