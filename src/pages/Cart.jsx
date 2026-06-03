import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { sendTelegramMessage } from '../api/telegram'

export default function Cart() {
  const {
    cart,
    setCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext)
    const totalPrice = cart.reduce((total, product) => {
      return (
        total +
        parseInt(product.price.replace(/\s|₸/g, '')) *
          (product.quantity || 1)
      )
    }, 0)
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    const [successOpen, setSuccessOpen] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')


  return (
    <div className="relative z-10 px-6 md:px-16 py-24">

      <h1 className="text-5xl font-black mb-14">
        Себет
      </h1>

      <div className="grid xl:grid-cols-[1fr_400px] gap-10">

      <div className="space-y-6">

      {cart.length === 0 && (

<div className="text-center py-32">

  <div className="text-7xl mb-8">
    🛒
  </div>

  <h1 className="text-5xl font-black mb-6">
    Себет бос
  </h1>

  <p className="text-zinc-400 mb-10">
    Музыкалық аспаптарды қарап шығыңыз
  </p>

  <Link
    to="/shop"
    className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-300 to-purple-600 text-black font-bold"
  >
    Дүкенге өту
  </Link>

</div>

)}

        {cart.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center gap-6 border border-white/10 bg-white/5 rounded-3xl p-5"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-32 h-[250px] md:h-32 object-cover rounded-2xl"
            />

            <div className="flex-1">
              <div className="text-amber-300 text-sm mb-2">
                {product.category}
              </div>

              <h2 className="text-2xl font-bold">
                {product.name}
              </h2>

              <div className="flex items-center gap-4 mt-4">

  <button
    onClick={() => decreaseQuantity(index)}
    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10"
  >
    -
  </button>

  <div className="text-xl font-bold">
    {product.quantity || 1}
  </div>

  <button
    onClick={() => increaseQuantity(index)}
    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10"
  >
    +
  </button>

</div>
            </div>
            

            <div className="text-2xl font-black">
              {product.price}
            </div>

            <button
  onClick={() => removeFromCart(index)}
  className="self-start md:self-center p-2 rounded-xl bg-red-500/90 text-white hover:scale-105 transition"
>
  <Trash2 size={20} />
</button>

          </div>
        ))}

      </div>

      <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 h-fit xl:sticky xl:top-32">

  <h2 className="text-3xl font-black mb-10">
    Тапсырыс
  </h2>

  <div className="space-y-6">

    <div className="flex items-center justify-between text-zinc-400">

      <span>Өнімдер</span>

      <span>
  {cart.reduce(
    (total, product) => total + (product.quantity || 1),
    0
  )}
</span>

    </div>

    <div className="flex items-center justify-between text-zinc-400">

      <span>Жеткізу</span>

      <span>Тегін</span>

    </div>

    <div className="border-t border-white/10 pt-6 flex items-center justify-between">

      <span className="text-xl font-bold">
        Барлығы
      </span>

      <span className="text-3xl font-black">
        {totalPrice.toLocaleString()} ₸
      </span>

    </div>

    <button
  onClick={() => {

    if (cart.length === 0) return
  
    setCheckoutOpen(true)
  
  }}
  className="w-full mt-8 py-5 rounded-2xl bg-gradient-to-r from-amber-300 to-purple-600 text-black font-bold text-lg hover:scale-[1.02] transition"
>

  Тапсырыс беру

</button>

  </div>

</div>

      </div>

      {checkoutOpen && (

<div
  onClick={() => setCheckoutOpen(false)}
  className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
>

<div
  onClick={(e) => e.stopPropagation()}
  className="w-full max-w-xl rounded-[40px] border border-white/10 bg-zinc-950 p-10"
>

    <div className="flex items-center justify-between mb-10">

      <h2 className="text-4xl font-black">
        Тапсырыс беру
      </h2>

      <button
        onClick={() => setCheckoutOpen(false)}
        className="text-3xl"
      >
        ×
      </button>

    </div>

    <div className="space-y-6">

    <input
  type="text"
  placeholder="Атыңыз"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-amber-300 transition"
      />

<input
  type="text"
  placeholder="Телефон"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none resize-none focus:border-amber-300 transition"
      />

<input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-amber-300 transition"
/>

<textarea
  placeholder="Мекенжай"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none resize-none"
      />

{error && (

<div className="text-red-400 text-sm">
  {error}
</div>

)}

<button
  onClick={async () => {

    if (!name || !phone || !address) {

      setError('Барлық өрістерді толтырыңыз')

      return
    }

    const orderMessage = `
    🛒 Жаңа тапсырыс
    
    ${cart.map(product =>
    `🎵 ${product.name}
    📦 ${product.quantity || 1} дана
    💰 ${product.price}`
    ).join('\n\n')}
    
    👤 Аты: ${name}
    
    📞 Телефон: ${phone}
    
    📧 Email: ${email}
    
    📍 Мекенжай:
    ${address}
    
    💰 Жалпы сома:
    ${totalPrice.toLocaleString()} ₸
    `

    try {

      await sendTelegramMessage(orderMessage)
    
      console.log('SUCCESS')
    
    } catch (error) {
    
      console.log(error)
    
      alert('Telegram error')
    
    }
    const existingOrders =
  JSON.parse(localStorage.getItem('orders')) || []

const newOrder = {
  id: Date.now(),
  items: cart,
  total: totalPrice,
  date: new Date().toISOString(),
}

localStorage.setItem(
  'orders',
  JSON.stringify([
    ...existingOrders,
    newOrder,
  ])
)
    setCart([])

    setCheckoutOpen(false)

    setSuccessOpen(true)

    setTimeout(() => {
      setSuccessOpen(false)
    }, 2000)

  }}
  className="w-full py-5 rounded-2xl bg-gradient-to-r from-amber-300 to-purple-600 text-black font-bold text-lg"
>
  Тапсырысты растау
</button>

    </div>

  </div>

</div>

)}

{successOpen && (

<div className="fixed inset-0 z-[110] flex items-center justify-center px-6">

  <div className="w-full max-w-md rounded-[40px] border border-white/10 bg-zinc-950 p-10 text-center">

    <div className="text-7xl mb-8">
      ✅
    </div>

    <h2 className="text-4xl font-black mb-6">
      Тапсырыс қабылданды
    </h2>

    <p className="text-zinc-400">
      Жақын арада сізбен хабарласамыз
    </p>

  </div>

</div>

)}
    </div>
  )
}