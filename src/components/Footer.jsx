import {
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
  } from 'react-icons/fa'
export default function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-16 py-20 border-t border-white/10">

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">

        <div>
          <div className="text-3xl font-black tracking-widest mb-6">
            LOVE — MUSIC
          </div>

          <p className="text-zinc-400 leading-relaxed">
            Қазақстандағы премиум музыкалық аспаптар дүкені.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">
            Навигация
          </h3>

          <div className="flex flex-col gap-4 text-zinc-400">
            <a href="#">Басты бет</a>
            <a href="#">Дүкен</a>
            <a href="#">Біз туралы</a>
            <a href="#">Байланыс</a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">
            Байланыс
          </h3>

          <div className="flex flex-col gap-4 text-zinc-400">
            <div>+7 777 777 77 77</div>
            <div>lovemusic@gmail.com</div>
            <div>Алматы, Қазақстан</div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">
            Әлеуметтік желі
          </h3>

          <div className="flex gap-4">

            <button className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition">
            <FaInstagram />
            </button>

            <button className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition">
            <FaYoutube />
            </button>

            <button className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition">
  <FaWhatsapp />
</button>

          </div>
        </div>

      </div>

      <div className="mt-20 pt-8 border-t border-white/10 text-zinc-500 text-sm text-center">
        © 2026 LOVE — MUSIC. Барлық құқықтар қорғалған.
      </div>

    </footer>
  )
}