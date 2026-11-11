import { useState } from 'react'

function Botao ({ aoClicar }) {
    return <button onClick={aoClicar}>+1</button>
}
    
export default function Aula4() {
    const [contador, setContador] = useState(0)
    return (
        <>
            <p>Contador: {contador}</p>
            <Botao aoClicar={() => setContador(contador + 1)} />
        </>
    )
}