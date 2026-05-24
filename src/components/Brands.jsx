export default function Brands() {
    const brands = [
      'Fender',
      'Yamaha',
      'Roland',
      'Gibson',
      'Casio',
      'Korg',
    ]
  
    return (
      <section className="relative z-10 px-6 md:px-16 py-24">
  
        <div className="text-center mb-16">
  
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            Танымал Брендтер
          </h2>
  
          <p className="text-zinc-400 mt-4">
            Әлемдік музыкалық брендтер
          </p>
  
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
  
          {brands.map((brand, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl py-10 flex items-center justify-center hover:-translate-y-2 transition duration-300"
            >
  
              <div className="text-2xl font-black tracking-widest text-zinc-300">
                {brand}
              </div>
  
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }