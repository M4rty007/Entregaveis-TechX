import { Button } from "@/components/ui/button";

export default function Cabecalho() {
    return (
        <header className="flex items-center justify-between bg-zinc-900 p-4 text-white">
            <h1 className="text-xl font-bold">
                Relic Shop
            </h1>
            <nav className="flex gap-6">
                <a href="#">Início</a>
                <a href="#">Benefícios</a>
                <a href="#">Coleção</a>
            </nav>
            <button>Ver coleção</button>
        </header>
    )
}