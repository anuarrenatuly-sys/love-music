import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { FaShoppingBag } from 'react-icons/fa'
import toast from 'react-hot-toast'

export default function Products() {
    const { addToCart } = useContext(CartContext)
    const [search, setSearch] = useState('')
const [selectedCategory, setSelectedCategory] = useState('Барлығы')
const [favorites, setFavorites] = useState([])
useEffect(() => {

  const savedFavorites =
    JSON.parse(localStorage.getItem('favorites')) || []

  setFavorites(savedFavorites)

}, [])
const toggleFavorite = (product) => {

  const exists = favorites.find(
    (item) => item.name === product.name
  )

  let updatedFavorites

  if (exists) {

    updatedFavorites = favorites.filter(
      (item) => item.name !== product.name
    )

  } else {

    updatedFavorites = [
      ...favorites,
      product,
    ]

  }

  setFavorites(updatedFavorites)

  localStorage.setItem(
    'favorites',
    JSON.stringify(updatedFavorites)
  )

}
  return (
    <section className="relative z-10 px-6 md:px-16 py-24">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 mb-14">

  <div>

    <h2 className="text-4xl md:text-5xl font-black uppercase">
      Танымал Өнімдер
    </h2>

    <p className="text-zinc-400 mt-4">
      Премиум музыкалық аспаптар коллекциясы
    </p>

  </div>

  <div className="w-full xl:w-[400px]">

    <input
      type="text"
      placeholder="Іздеу..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none text-white backdrop-blur-xl"
    />

  </div>

</div>

      

<div className="flex flex-wrap gap-4 mb-12">

{[
  'Барлығы',
  'Электр гитара',
  'Пианино',
  'Барабандар',
  'Синтезатор',
'Акустикалық гитара',
'DJ',
].map((category) => (

  <button
    key={category}
    onClick={() => setSelectedCategory(category)}
    className={`px-6 py-3 rounded-2xl transition ${
      selectedCategory === category
        ? 'bg-gradient-to-r from-amber-300 to-purple-600 text-black font-semibold'
        : 'bg-white/5 border border-white/10'
    }`}
  >
    {category}
  </button>

))}

</div>


      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {products
  .filter((product) => {
    const searchText = search.toLowerCase()
  
    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
  
    const matchesCategory =
      selectedCategory === 'Барлығы' ||
      product.category === selectedCategory
  
    return matchesSearch && matchesCategory
  })
  .map((product, index) => (
          <Link
          to={`/product/${index}`}
          key={index}
          className="group relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(168,85,247,0.25)] transition duration-500"
        >
            <div className="relative overflow-hidden h-[300px]">
            <button
  onClick={(e) => {

    e.preventDefault()

    toggleFavorite(product)

  }}
  className={`absolute top-4 right-4 z-20 w-11 h-11 rounded-full backdrop-blur-xl border flex items-center justify-center transition ${
    favorites.find(
      (item) => item.name === product.name
    )
      ? 'bg-red-500 text-white border-red-500'
      : 'bg-black/40 border-white/10 text-white'
  }`}
>
  ❤️
</button>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-7">
              <div className="text-sm uppercase tracking-[0.2em] text-amber-300 mb-3">
                {product.category}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {product.name}
              </h3>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-black">
                  {product.price}
                </div>

                <button
onClick={(e) => {

  e.preventDefault()

  addToCart(product)

  toast.success('Тауар себетке қосылды', {
    duration: 1500,
  })

}}
  className="p-3 rounded-xl bg-gradient-to-r from-amber-300 to-purple-600 text-black hover:scale-105 transition"
>
<FaShoppingBag />
</button>
              </div>
            </div>
            </Link>
        ))}
      </div>
    </section>
  )
}