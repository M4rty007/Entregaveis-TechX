import { useState } from "react";

export default function Aula3() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [menss, setMenss] = useState('')

    function enviar(e) {
        e.preventDefault()
        setMenss(`Cadastro de ${nome} (${email})`)
    }

    return (
        
        <>
            <form onSubmit={enviar}>
                <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <button type="submit">Cadastrar</button>
            </form>
            <p>{menss}</p>
        </>
    )
}