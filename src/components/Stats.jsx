export default function Stats() {
    const stats = [
      {
        number: '10K+',
        title: 'Клиенттер',
      },
  
      {
        number: '500+',
        title: 'Музыкалық аспаптар',
      },
  
      {
        number: '24/7',
        title: 'Қолдау қызметі',
      },
  
      {
        number: '100%',
        title: 'Сапалы брендтер',
      },
    ]
  
    return (
      <section className="relative z-10 px-6 md:px-16 py-24">
  
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
  
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 hover:-translate-y-2 transition duration-300"
            >
  
              <div className="text-5xl font-black bg-gradient-to-r from-amber-300 to-purple-500 text-transparent bg-clip-text">
                {stat.number}
              </div>
  
              <div className="mt-5 text-zinc-400 text-lg">
                {stat.title}
              </div>
  
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }