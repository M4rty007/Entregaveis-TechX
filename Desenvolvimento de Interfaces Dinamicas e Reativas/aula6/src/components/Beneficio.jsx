import { beneficios } from '@/data/beneficios'
import CardBeneficio from '@/components/CardBeneficio'
export default function Beneficios() {
 return (
 <section className="mx-auto max-w-4xl p-12">
 <h2 className="mb-8 text-center text-2xl font-bold">Por que a Relic?</h2>
 <div className="grid grid-cols-3 gap-6">
 {beneficios.map((b) => (
 <CardBeneficio key={b.id} beneficio={b} />
 ))}
 </div>
 </section>
 )
}