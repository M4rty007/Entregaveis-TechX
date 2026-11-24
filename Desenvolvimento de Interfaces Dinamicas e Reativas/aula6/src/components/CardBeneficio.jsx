import { Card, CardContent} from '@/components/ui/card'

export default function CardBeneficio({beneficio}) {
    return(
        <Card className="text-center">
            <CardContent>
                <div className='flex justify-center text-primary'>{beneficio.icone}</div>
                <h3 className="mt-3 font-semibold">{beneficio.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{beneficio.texto}</p>
            </CardContent>
        </Card>
    )
}