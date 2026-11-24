import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
export default function CardProduto({ produto }) {
 return (
    <Card className="overflow-hidden pt-0">
        <img src={produto.imagem} alt={produto.nome} className="w-full  h-64 object-contain" />
        <CardContent>
            <Badge>Sale</Badge>
            <h3 className="mt-2 font-semibold">{produto.nome}</h3>
            <p className="mt-2">
                <span className="text-muted-foreground line-through">
                    ${produto.precoAntigo}
                </span>
                <span className="ml-2 text-xl font-bold text-primary">
                    ${produto.preco}
                </span>
            </p>
        </CardContent>
        <CardFooter>
            <Button variant="outline" className="w-full">
            Ver detalhes
            </Button>
        </CardFooter>
    </Card>
 )
}