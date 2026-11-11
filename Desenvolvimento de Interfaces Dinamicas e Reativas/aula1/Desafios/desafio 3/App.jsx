import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape"
import Cartao from "./components/Cartao"
import Caixa from "./components/Caixa"

function App() {
    return (
        <>
            <Cabecalho />
            <Caixa>
                <Cartao title="Um Titulo" text="O Texto hehe" />
                <Cartao title="Outro Titulo" text="Outro Texto kkk" />
            </Caixa>
            <Rodape />
        </>
    )
}

export default App