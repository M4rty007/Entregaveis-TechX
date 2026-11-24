import { Guitar } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Badge } from "./ui/badge";

export default function Destaque() {
    return(
        <section className="bg-zinc-800 p-16 text-center text-white">
            <Badge>Black Friday</Badge>
            <h2 className="mt-4 text-4xl font-bold">Loja inteira com até 60% OFF</h2>
            <p className="mt-2 text-zinc-300">Aproveite para realizar seu sonho de ter uma relíquia!</p>
            <Button size="lg" className="mt-6">
                <Guitar /> Ver coleção
            </Button>
        </section>
    )
}