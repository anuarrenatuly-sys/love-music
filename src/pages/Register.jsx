import { useState } from 'react'

import {
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { auth } from '../firebase'

export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert('Аккаунт құрылды 😮‍💨')

    } catch (error) {

      alert(error.message)

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-[500px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10">

        <h1 className="text-5xl font-black mb-10">
          Тіркелу
        </h1>

        <div className="space-y-6">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-5 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-amber-300 transition"
          />

          <input
            type="password"
            placeholder="Құпия сөз"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-5 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-amber-300 transition"
          />

          <button
            onClick={handleRegister}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-amber-300 to-purple-600 text-black font-bold text-lg hover:scale-[1.02] transition"
          >
            Тіркелу
          </button>

        </div>

      </div>

    </div>
  )
}