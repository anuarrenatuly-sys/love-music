import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut,updateProfile,updatePassword,updateEmail, } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [newEmail, setNewEmail] = useState('')

const [newPassword, setNewPassword] = useState('')
const [orders, setOrders] = useState([])
const [favorites, setFavorites] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {

        if (!currentUser) {

          navigate('/')

          return
        }

        setUser(currentUser)

        setName(
            currentUser.displayName || ''
          )
          setAvatar(
            localStorage.getItem('avatar') ||
            currentUser.photoURL ||
            ''
          )
          setNewEmail(currentUser.email)
          const savedOrders =
  JSON.parse(localStorage.getItem('orders')) || []

setOrders(savedOrders)

      }
    )

    const savedFavorites =
  JSON.parse(localStorage.getItem('favorites')) || []

setFavorites(savedFavorites)

    return () => unsubscribe()

  }, [])

  if (!user) return null

  return (
    <section className="min-h-screen px-6 md:px-16 py-40">

      <div className="max-w-4xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-14">

        <div className="flex items-center gap-6 mb-12">

        <label className="relative cursor-pointer">

<input
  type="file"
  accept="image/*"
  className="hidden"
  onChange={(e) => {

    const file = e.target.files[0]
  
    if (!file) return
  
    const reader = new FileReader()
  
    reader.onload = () => {
  
      const base64 = reader.result
  
      setAvatar(base64)
  
      localStorage.setItem(
        'avatar',
        base64
      )
  
    }
  
    reader.readAsDataURL(file)
  
  }}
/>

{avatar ? (

  <img
    src={avatar}
    alt=""
    className="w-24 h-24 rounded-full object-contain bg-black border border-white/10 p-1"
  />

) : (

  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-300 to-purple-600 flex items-center justify-center text-4xl font-black text-black">
    {name
      ? name[0].toUpperCase()
      : user.email[0].toUpperCase()}
  </div>

)}

</label>

          <div>

            <div className="text-zinc-500 mb-2">
              Аккаунт
            </div>

            <h1 className="text-4xl font-black">
              Профиль
            </h1>

          </div>

        </div>

        <div className="mb-8">

  <div className="text-zinc-500 mb-3">
    Атыңыз
  </div>

  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Атыңызды енгізіңіз"
    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-amber-300 transition"
  />
  
  

<div className="mb-8">

<div className="text-zinc-500 mb-3">
  Email
</div>

<input
  type="email"
  value={newEmail}
  onChange={(e) => setNewEmail(e.target.value)}
  placeholder="Email"
  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-amber-300 transition"
/>

<div className="mb-8">

  <div className="text-zinc-500 mb-3">
    Жаңа құпия сөз
  </div>

  <input
    type="password"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    placeholder="••••••••"
    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-amber-300 transition"
  />

</div>

</div>

</div>

        <div className="grid md:grid-cols-2 gap-6">

  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">

    <div className="text-zinc-500 mb-2">
      Email
    </div>

    <div className="text-xl font-semibold break-all">
      {user.email}
    </div>

  </div>

  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">

    <div className="text-zinc-500 mb-2">
      User ID
    </div>

    <div className="text-sm break-all text-zinc-300">
      {user.uid}
    </div>

  </div>

  <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-amber-300/10 to-purple-600/10 p-6">

    <div className="text-zinc-500 mb-2">
      Таңдаулылар
    </div>

    <div className="text-5xl font-black">
    {favorites.length}
    </div>

  </div>

  <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-purple-600/10 to-pink-500/10 p-6">

<div className="text-zinc-500 mb-2">
  Тапсырыстар
</div>

<div className="text-5xl font-black mb-4">
  {orders.length}
</div>

{orders.length > 0
  ? 'Сізде тапсырыстар бар'
  : 'Әзірге тапсырыс жоқ'}

</div>

  <div className="md:col-span-2 rounded-3xl border border-white/10 bg-black/20 p-6">

    <div className="text-zinc-500 mb-2">
      Аккаунт жасалған уақыт
    </div>

    <div className="text-lg font-semibold">
      {new Date(user.metadata.creationTime).toLocaleDateString()}
    </div>

  </div>

</div>

<div className="flex flex-col sm:flex-row gap-4 mt-10">

<button
onClick={async () => {

    try {
  
        await updateProfile(auth.currentUser, {
            displayName: name,
          })
  
      if (newEmail !== user.email) {
  
        await updateEmail(
          auth.currentUser,
          newEmail
        )
  
      }
  
      if (newPassword) {
  
        await updatePassword(
          auth.currentUser,
          newPassword
        )
  
      }
  
      alert('Сақталды')

      window.location.reload()
  
    } catch (error) {
  
      alert(error.message)
  
    }
  
  }}
  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-300 to-purple-600 text-black font-bold hover:scale-105 transition"
>
  Сақтау
</button>

<button
  onClick={async () => {

    await signOut(auth)

    navigate('/')

  }}
  className="px-8 py-4 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold transition"
>
  Шығу
</button>

</div>

      </div>

    </section>
  )
}