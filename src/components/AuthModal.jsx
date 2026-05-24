import { useState } from 'react'

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { auth } from '../firebase'
export default function AuthModal({ setAuthOpen }) {
    const [email, setEmail] = useState('')

const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')
const [isLogin, setIsLogin] = useState(true)

    return (
  
        <div
        onClick={() => setAuthOpen(false)}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
      >
  
  <div
  onClick={(e) => e.stopPropagation()}
  className="w-full max-w-[520px] rounded-[40px] border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-10 md:p-12 relative shadow-[0_0_80px_rgba(168,85,247,0.15)] overflow-hidden"
>

<div className="absolute -top-32 -right-32 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full" />

<div className="absolute -bottom-32 -left-32 w-72 h-72 bg-amber-300/20 blur-[120px] rounded-full" />
  
        <button
  onClick={() => setAuthOpen(false)}
  className="absolute top-6 right-6 text-3xl text-zinc-500 hover:text-white transition"
>
  ×
</button>
  
<h2 className="text-4xl md:text-5xl font-black mb-3 relative z-10">
  {isLogin ? 'Кіру' : 'Тіркелу'}
</h2>

<p className="text-zinc-500 mb-10 relative z-10">
  Музыкалық әлемге қош келдіңіз 🎵
</p>
  
          <div className="space-y-6">
  
          <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-amber-300 focus:bg-white/[0.07] transition"
/>
  
<input
  type="password"
  placeholder="Құпия сөз"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-amber-300 focus:bg-white/[0.07] transition"
/>

{error && (

<div className="text-red-400 text-sm">
  {error}
</div>

)}
  
<button
  onClick={async () => {

    if (!email || !password) {
  
      setError('Барлық өрістерді толтырыңыз')
  
      return
    }
  
    try {
  
      setLoading(true)
  
      setError('')
  
      if (isLogin) {
  
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
  
      } else {
  
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
  
      }
  
      setAuthOpen(false)
  
      setEmail('')
      setPassword('')
  
    } catch (error) {
  
      if (error.code === 'auth/invalid-email') {
  
        setError('Email қате')
  
      } else if (
        error.code === 'auth/invalid-credential'
      ) {
  
        setError('Email немесе құпия сөз қате')
  
      } else if (
        error.code === 'auth/email-already-in-use'
      ) {
  
        setError('Бұл email бұрын тіркелген')
  
      } else {
  
        setError('Қате пайда болды')
  
      }
  
    } finally {
  
      setLoading(false)
  
    }
  
  }}
  className="w-full py-5 rounded-2xl bg-gradient-to-r from-amber-300 to-purple-600 text-black font-black text-lg hover:scale-[1.02] active:scale-[0.99] transition duration-300 shadow-lg"
>
{loading
  ? 'Жүктелуде...'
  : isLogin
    ? 'Кіру'
    : 'Тіркелу'}
</button>

<button
  onClick={() => setIsLogin(!isLogin)}
  className="w-full text-zinc-400 hover:text-white transition"
>
  {isLogin
    ? 'Аккаунтыңыз жоқ па? Тіркелу'
    : 'Аккаунтыңыз бар ма? Кіру'}
</button>
  
          </div>
  
        </div>
  
      </div>
  
    )
  
  }