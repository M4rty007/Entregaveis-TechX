import { useState } from "react";

export default function Desafio1() {
    const [contador, setContador] = useState(0)

    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>+1</button>
            <button onClick={() => setContador(contador - 1)}>-1</button>
            <button onClick={() => setContador(0)}>Zerar</button>
        </>
    )
}