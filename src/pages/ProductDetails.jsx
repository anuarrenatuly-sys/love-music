import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import { FaShoppingBag, FaBolt } from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import toast from 'react-hot-toast'

export default function ProductDetails() {
  const { id } = useParams()

  const product = products[id]
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(
    product.gallery?.[0] || product.image
  )
  const { addToCart } = useContext(CartContext)

  return (
    <div className="relative z-10 px-6 md:px-16 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full rounded-[40px] h-[600px] object-cover border border-white/10"
          />
          <div className="flex gap-4 mt-6">

{(product.gallery || [product.image]).map((img, index) => (

  <button
    key={index}
    onClick={() => setSelectedImage(img)}
    className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition ${
      selectedImage === img
        ? 'border-amber-300'
        : 'border-white/10'
    }`}
  >

    <img
      src={img}
      alt=""
      className="w-full h-full object-cover"
    />

  </button>

))}

</div>
        </div>

        <div className="lg:sticky lg:top-32 h-fit">
          <div className="text-amber-300 uppercase tracking-[0.2em] mb-4">
            {product.category}
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-8">
            {product.name}
          </h1>

          <div className="text-4xl font-black mb-8">
            {product.price}
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Жоғары сапалы музыкалық аспап.
            Кәсіби музыканттарға арналған премиум модель.
          </p>

          <div className="space-y-4 mb-10">

  <div className="flex items-center justify-between border-b border-white/10 pb-4">

    <span className="text-zinc-400">
      Бренд
    </span>

    <span className="font-semibold">
      {product.brand}
    </span>

  </div>

  <div className="flex items-center justify-between border-b border-white/10 pb-4">

    <span className="text-zinc-400">
      Түрі
    </span>

    <span className="font-semibold">
      {product.category}
    </span>

  </div>

  <div className="flex items-center justify-between border-b border-white/10 pb-4">

    <span className="text-zinc-400">
      Түсі
    </span>

    <span className="font-semibold">
      {product.color}
    </span>

  </div>

  <div className="flex items-center justify-between border-b border-white/10 pb-4">

    <span className="text-zinc-400">
      Кепілдік
    </span>

    <span className="font-semibold">
      {product.warranty}
    </span>

  </div>

</div>

          <div className="flex items-center gap-4 mb-10">

  <button
    onClick={() =>
      quantity > 1 && setQuantity(quantity - 1)
    }
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-2xl"
  >
    -
  </button>

  <div className="text-2xl font-bold w-10 text-center">
    {quantity}
  </div>

  <button
    onClick={() => setQuantity(quantity + 1)}
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-2xl"
  >
    +
  </button>

</div>

<div className="flex flex-col sm:flex-row gap-4">

<button
  onClick={() => {

    addToCart(product)
  
    toast.success('Тауар себетке қосылды', {
      duration: 1500,
    })
  
  }}
  className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-300 to-purple-600 text-black font-semibold hover:scale-105 transition"
>

  <FaShoppingBag />

  <span>Себетке</span>

</button>

<button
  className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
>

  <FaBolt />

  <span>Қазір сатып алу</span>

</button>

</div>
        </div>

      </div>
      <div className="mt-32">

  <h2 className="text-4xl font-black mb-14">
    Ұқсас өнімдер
  </h2>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

    {products
      .filter((item) => item.name !== product.name)
      .slice(0, 3)
      .map((item, index) => (

        <div
          key={index}
          className="group rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl hover:-translate-y-2 transition duration-300"
        >

          <div className="overflow-hidden h-[300px]">

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

          </div>

          <div className="p-7">

            <div className="text-sm uppercase tracking-[0.2em] text-amber-300 mb-3">
              {item.category}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {item.name}
            </h3>

            <div className="text-2xl font-black">
              {item.price}
            </div>

          </div>

        </div>

    ))}

  </div>

</div>

<div className="mt-32">

  <h2 className="text-4xl font-black mb-14">
    Пікірлер
  </h2>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

    {[
      {
        name: 'Аян',
        text: 'Дыбысы өте сапалы. Кәсіби деңгейдегі аспап.',
      },

      {
        name: 'Мадина',
        text: 'Жеткізу жылдам болды. Сапасы керемет.',
      },

      {
        name: 'Нұрбек',
        text: 'LOVE — MUSIC дүкені өте ұнады.',
      },
    ].map((review, index) => (

      <div
        key={index}
        className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
      >

        <div className="text-amber-300 text-2xl mb-4">
          ★★★★★
        </div>

        <p className="text-zinc-300 leading-relaxed mb-8">
          {review.text}
        </p>

        <div className="text-lg font-bold">
          {review.name}
        </div>

      </div>

    ))}

  </div>

</div>
    </div>
    
    
  )
}