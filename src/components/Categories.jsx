export default function Categories() {
    const categories = [
      {
        title: 'Гитаралар',
        image:
          'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1200&auto=format&fit=crop',
      },
  
      {
        title: 'Пианино',
        image:
          'https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=1200&auto=format&fit=crop',
      },
  
      {
        title: 'Барабандар',
        image:
          'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
      },
    ]
  
    return (
      <section className="relative z-10 px-6 md:px-16 py-24">
  
        <div className="flex items-center justify-between mb-14">
  
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              Санаттар
            </h2>
  
            <p className="text-zinc-400 mt-3">
              Музыкалық аспап категориялары
            </p>
          </div>
  
        </div>
  
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
  
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[36px] h-[400px] cursor-pointer"
            >
  
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
  
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
  
              <div className="absolute bottom-8 left-8">
  
                <h3 className="text-3xl font-black">
                  {category.title}
                </h3>
  
              </div>
  
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }