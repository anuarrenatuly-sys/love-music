import { Link } from 'react-router-dom'
export default function Hero() {
    return (
      <section className="relative z-10 grid lg:grid-cols-2 gap-10 items-center px-6 md:px-16 py-20 md:py-32">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm mb-8">
            Премиум музыкалық аспаптар дүкені
          </div>
  
          <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase">
            Музыканы
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-purple-500">
              Сезін
            </span>
          </h1>
  
          <p className="mt-8 text-zinc-400 text-lg max-w-xl leading-relaxed">
            Премиум гитаралар, пианино, барабандар және студиялық жабдықтар.
          </p>
  
          <div className="mt-10 flex flex-wrap gap-4">
          <Link
  to="/shop"
  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-300 to-purple-600 font-semibold shadow-2xl shadow-purple-900/50 hover:scale-105 transition"
>
  Дүкенді Қарау
</Link>
          </div>
        </div>
  
        <div className="relative flex justify-center">
          <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />
  
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop"
            alt=""
            className="relative z-10 rounded-[40px] object-cover w-full max-w-[600px] h-[500px] shadow-2xl border border-white/10"
          />
        </div>
      </section>
    )
  }