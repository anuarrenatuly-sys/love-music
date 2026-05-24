import Hero from '../components/Hero'
import Products from '../components/Products'
import Categories from '../components/Categories'
import Stats from '../components/Stats'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { sendTelegramMessage } from '../api/telegram'

export default function Home() {
  useEffect(() => {

    if (window.location.hash === '#contact') {
  
      setTimeout(() => {
  
        document
          .getElementById('contact')
          ?.scrollIntoView({
            behavior: 'smooth',
          })
  
      }, 100)
  
    }
  
  }, [])

  const [contactName, setContactName] = useState('')
const [contactPhone, setContactPhone] = useState('')
const [contactMessage, setContactMessage] = useState('')
  return (
    <>
      <Hero />
      <Categories />
      <Stats />
      <Brands />
      <Products />
      <section
  id="about"
  className="relative z-10 px-6 md:px-16 py-32"
>

  <div className="grid lg:grid-cols-2 gap-20 items-center">

    <div>

      <div className="text-amber-300 uppercase tracking-[0.3em] mb-6">
        LOVE — MUSIC
      </div>

      <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
        Музыкаға деген
        шынайы махаббат
      </h2>

      <p className="text-zinc-400 text-lg leading-relaxed mb-10">
        LOVE — MUSIC —
        кәсіби музыканттарға арналған
        премиум музыкалық аспаптар дүкені.
        Біз сапалы дыбыс,
        заманауи дизайн және
        жоғары деңгейдегі сервисті ұсынамыз.
      </p>

      <div className="grid grid-cols-3 gap-6">

        <div>
          <div className="text-4xl font-black text-amber-300">
            10К+
          </div>

          <div className="text-zinc-500 mt-2">
            Клиент
          </div>
        </div>

        <div>
          <div className="text-4xl font-black text-amber-300">
            500+
          </div>

          <div className="text-zinc-500 mt-2">
            Өнім
          </div>
        </div>

        <div>
          <div className="text-4xl font-black text-amber-300">
            5+
          </div>

          <div className="text-zinc-500 mt-2">
            Жыл
          </div>
        </div>

      </div>

    </div>

    <div>

      <img
        src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
        alt=""
        className="w-full h-[700px] object-cover rounded-[40px]"
      />

    </div>

  </div>

</section>

<section
  id="contact"
  className="relative z-10 px-4 md:px-16 py-24 md:py-32"
>

<div className="w-full max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-16 overflow-hidden"
>

    <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

      <div>

        <div className="text-amber-300 uppercase tracking-[0.3em] mb-6">
          БАЙЛАНЫС
        </div>

        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
          Бізбен
          байланысыңыз
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Сұрақтарыңыз болса —
          біз әрқашан көмектесуге дайынбыз.
        </p>

        <div className="space-y-6">

          <div>

            <div className="text-zinc-500 mb-2">
              Телефон
            </div>

            <div className="text-2xl font-bold">
              +7 (777) 777 77 77
            </div>

          </div>

          <div>

            <div className="text-zinc-500 mb-2">
              Email
            </div>

            <div className="text-2xl font-bold">
              info@lovemusic.kz
            </div>

          </div>

          <div>

            <div className="text-zinc-500 mb-2">
              Instagram
            </div>

            <div className="text-2xl font-bold">
              @lovemusic.kz
            </div>

          </div>

        </div>

      </div>

      <div className="space-y-6">

      <input
  type="text"
  placeholder="Атыңыз"
  value={contactName}
  onChange={(e) => setContactName(e.target.value)}
  className="w-full px-6 py-5 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-amber-300 transition"
/>

<input
  type="text"
  placeholder="Телефон"
  value={contactPhone}
  onChange={(e) => setContactPhone(e.target.value)}
  className="w-full px-6 py-5 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-amber-300 transition"
/>

<textarea
  rows="5"
  placeholder="Хабарлама"
  value={contactMessage}
  onChange={(e) => setContactMessage(e.target.value)}
  className="w-full px-6 py-5 rounded-2xl bg-black/30 border border-white/10 outline-none resize-none focus:border-amber-300 transition"
/>

<button
  onClick={async () => {

    if (
      !contactName ||
      !contactPhone ||
      !contactMessage
    ) return

    const message = `
📩 Жаңа хабарлама

👤 Аты:
${contactName}

📞 Телефон:
${contactPhone}

💬 Хабарлама:
${contactMessage}
`

    await sendTelegramMessage(message)

    setContactName('')
    setContactPhone('')
    setContactMessage('')

  }}
  className="w-full py-5 rounded-2xl bg-gradient-to-r from-amber-300 to-purple-600 text-black font-bold text-lg hover:scale-[1.02] transition"
>
  Жіберу
</button>

      </div>

    </div>

  </div>

</section>
      <Footer />
    </>
  )
}