export default function Categories() {
    const categories = [
      {
        title: 'Гитаралар',
        image:
          'https://images.openai.com/static-rsc-4/7qmhLCtaEPASD9ecXmHvDHAXmUEwwEejP_bbqVS9EXVM6fBxCd_BVInMJfozhdTTMTSE2AKq8W4RnE43Ymxhw0VSdq3OA0t-QT3hcHgRBTZzYPQ2LKkfwiQhjzlj3IIdaITNZUSME0cYjEli0KtyFXFUho6yI4CyHKGmU3iRURMI6qXeKhw3VZt588g5ktCT?purpose=fullsize',
      },
  
      {
        title: 'Пианино',
        image:
          'https://images.openai.com/static-rsc-4/HCFbpiCgGmnyQqtEp8KsP4FUUFedcYepJg3R5-MOHlzv2C5MQBclcedfsalq2xXsZyjcxJjtfQMUemUFuf7Ywf64qv0bGfwK8EMwOD3CseghO84BVVh-soLSPUDMgfzYoxzTZHlm5uKPIt9CfKtLBZyy5r6yiOkj-OtlDpbBfqSTFcwJTY50WqCHTBcxGIUR?purpose=fullsize',
      },
  
      {
        title: 'Барабандар',
        image:
          'https://images.openai.com/static-rsc-4/G31jljj27jspI2TgMHto_7m9MSVfb27HO14w3I9qGTKaPsRyHc-ieVPCyQ8jUNxi04_a_ANGuOyxG2pxaqnfo5qXOd6rjxwi-DQXHIJhNG320puKtsEmLrxAJLKoRtVmHpkP2VqEKc5SKFwyikQ36_rs2LLbDUT15R1LoNx8INaVkRrn3owC4VeItg5r2uc5?purpose=fullsize',
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