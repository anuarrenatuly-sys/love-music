import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { ShoppingBag } from 'lucide-react'
import { User } from 'lucide-react'
import AuthModal from './AuthModal'
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebase'

export default function Navbar() {
  const { cart } = useContext(CartContext)

  const [menuOpen, setMenuOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [profileOpen, setProfileOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
  
        setUser(currentUser)
  
      }
    )
  
    return () => unsubscribe()
  
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-5 transition-all duration-500 translate-y-0 opacity-100 ${
            window.scrollY > 20
              ? 'bg-black/60 backdrop-blur-2xl border-b border-white/10'
              : 'bg-transparent'
          }`}
      >
        <Link
  to="/"
  className="text-2xl md:text-3xl font-black tracking-widest uppercase"
>
  LOVE — MUSIC
</Link>

        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-zinc-300">
        <button
  onClick={() => {

    if (window.location.pathname !== '/') {

      window.location.href = '/'

      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

  }}
  className="text-sm uppercase tracking-[0.2em] hover:text-amber-300 transition"
>
  Басты бет
</button>
          <Link to="/shop">Дүкен</Link>
          <button
  onClick={() => {
    document
      .getElementById('about')
      ?.scrollIntoView({
        behavior: 'smooth',
      })

  }}
  className="text-sm uppercase tracking-[0.2em] hover:text-amber-300 transition"
>
  Біз туралы
</button>
<button
  onClick={() => {

    if (window.location.pathname !== '/') {

      window.location.href = '/#contact'

    } else {

      document
        .getElementById('contact')
        ?.scrollIntoView({
          behavior: 'smooth',
        })

    }

  }}
  className="text-sm uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-300 transition"
>
  Байланыс
</button>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

          {user ? (

<div
  className="relative"
>

  <button
    onClick={() => setProfileOpen(!profileOpen)}
    className="flex items-center justify-center w-11 h-11 overflow-hidden rounded-full bg-gradient-to-r from-amber-300 to-purple-600 text-black font-bold"
  >
    {localStorage.getItem('avatar') ? (

<img
  src={localStorage.getItem('avatar')}
  alt=""
  className="w-full h-full object-cover"
/>

) : (

user.displayName
  ? user.displayName[0].toUpperCase()
  : user.email[0].toUpperCase()

)}
  </button>

  {profileOpen && (

    <div className="absolute top-14 right-0 w-[260px] rounded-3xl border border-white/10 bg-zinc-950/95 backdrop-blur-2xl p-4 shadow-2xl">

      <div className="pb-4 border-b border-white/10">

        <div className="text-sm text-zinc-500 mb-1">
          Аккаунт
        </div>

        {user.photoURL || localStorage.getItem('avatar') ? (

<img
  src={localStorage.getItem('avatar')}
  alt=""
  className="w-11 h-11 rounded-full object-contain bg-black p-1"
/>

) : (

user.displayName
  ? user.displayName[0].toUpperCase()
  : user.email[0].toUpperCase()

)}

      </div>

      <button
  onClick={() => {

    setProfileOpen(false)

    window.location.href = '/profile'

  }}
  className="w-full mt-4 px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition text-left"
>
  Профиль
</button>

      <button
  onClick={async (e) => {

    e.stopPropagation()

    await signOut(auth)

    setProfileOpen(false)

  }}
        className="w-full mt-3 px-4 py-3 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition text-left"
      >
        Шығу
      </button>

    </div>

  )}

</div>

) : (

<button
  onClick={() => setAuthOpen(true)}
  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
>
  <User size={20} />
</button>

)}

          <Link
            to="/cart"
            className="relative px-4 py-2 rounded-full bg-white text-black"
          >
            <ShoppingBag size={22} />

            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
        </div>
      </header>

      {menuOpen && (
  <div
    onClick={() => setMenuOpen(false)}
    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] rounded-[32px] border border-white/10 bg-zinc-950/95 backdrop-blur-2xl p-6 flex flex-col gap-4 shadow-2xl"
    >

      <div className="flex items-center justify-between mb-4">

        <div className="text-xl font-black tracking-widest">
          MENU
        </div>

        <button
          onClick={() => setMenuOpen(false)}
          className="text-3xl text-zinc-400 hover:text-white transition"
        >
          ×
        </button>

      </div>

      <button
  onClick={() => {

    setMenuOpen(false)

    if (window.location.pathname !== '/') {

      window.location.href = '/'

      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

  }}
  className="text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-gradient-to-r hover:from-amber-300 hover:to-purple-600 hover:text-black transition"
>
  Басты бет
</button>

      <Link
        to="/shop"
        onClick={() => setMenuOpen(false)}
        className="px-5 py-4 rounded-2xl bg-white/5 hover:bg-gradient-to-r hover:from-amber-300 hover:to-purple-600 hover:text-black transition"
      >
        Дүкен
      </Link>

      <button
  onClick={() => {

    setMenuOpen(false)

    if (window.location.pathname !== '/') {

      window.location.href = '/#about'

      return
    }

    document
      .getElementById('about')
      ?.scrollIntoView({
        behavior: 'smooth',
      })

  }}
  className="w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-gradient-to-r hover:from-amber-300 hover:to-purple-600 hover:text-black transition"
>
  Біз туралы
</button>

<button
  onClick={() => {

    setMenuOpen(false)

    if (window.location.pathname !== '/') {

      window.location.href = '/#contact'

      return
    }

    document
      .getElementById('contact')
      ?.scrollIntoView({
        behavior: 'smooth',
      })

  }}
  className="w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-gradient-to-r hover:from-amber-300 hover:to-purple-600 hover:text-black transition"
>
  Байланыс
</button>

<button
  onClick={() => {

    setMenuOpen(false)

    setAuthOpen(true)

  }}
  className="w-full text-left px-5 py-4 rounded-2xl bg-gradient-to-r from-amber-300 to-purple-600 text-black font-bold transition"
>
  Кіру / Тіркелу
</button>

    </div>
  </div>
)}

{authOpen && (
  <AuthModal setAuthOpen={setAuthOpen} />
)}
    </>
  )
}