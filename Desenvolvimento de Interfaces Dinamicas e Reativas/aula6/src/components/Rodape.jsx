import { Mail, MapPin } from 'lucide-react'
export default function Rodape() {
 return (
 <footer className="bg-zinc-900 p-10 text-center text-zinc-400">
    <h2 className="text-xl font-bold text-white">
        <span className="text-primary">Relic</span> Shop
    </h2>
    <div className="mt-4 flex justify-center gap-8 text-sm">
        <p className="flex items-center gap-2">
            <Mail className="size-4" /> contato@relicshop.com
        </p>
        <p className="flex items-center gap-2">
            <MapPin className="size-4" /> São Luís, MA
        </p>
    </div>
 </footer>
 )
}