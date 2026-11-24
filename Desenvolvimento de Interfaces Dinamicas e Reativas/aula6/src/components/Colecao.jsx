import { produtos } from '@/data/produtos'
import CardProduto from '@/components/CardProduto'
export default function Colecao() {
 return (
 <section className="bg-muted p-12">
 <div className="mx-auto max-w-3xl">
 <h2 className="mb-8 text-center text-2xl font-bold">Nossa coleção</h2>
 <div className="grid grid-cols-2 gap-6">
 {produtos.map((p) => (
 <CardProduto key={p.id} produto={p} />
 ))}
 </div>
 </div>
 </section>
 )
}