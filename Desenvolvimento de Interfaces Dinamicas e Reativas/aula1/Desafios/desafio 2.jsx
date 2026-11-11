function App() {
    const name = "Pedro"
    const age = 18
    const technologies = ["HMTL", "CSS", "JS"]

    return (
        <div className="profile">
            <h1>{name}</h1>
            <p>{age >= 18 ? "Maior de Idade" : "Menor de Idade"}</p>
            <lable htmlFor="obs">Observação</lable>
            <input id="obs" />
            <ul>
                {technologies.map((t) => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
        </div>
    )
}

export default App