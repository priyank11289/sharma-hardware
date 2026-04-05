import { useEffect, useRef } from 'react'

interface Brand {
  name: string
  image: string
}

interface CategoryBrands {
  category: string
  brands: Brand[]
}

const BrandMarquee = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const categories: CategoryBrands[] = [
    {
      category: 'Cement',
      brands: [
        { name: 'UltraTech', image: '/images/brands/ultratech_cement_new.png' },
        { name: 'Ambuja', image: '/images/brands/9_Ambuja_Cements_logo_in_transparent.png' },
        { name: 'ACC', image: '/images/brands/1_File_ACC_Limited_logo_svg_Wikimedia.png' },
        { name: 'Shree Cement', image: '/images/brands/5_Shree_Cement_logo_in_transparent.png' },
      ],
    },
    {
      category: 'TMT Steel Bars',
      brands: [
        { name: 'Amba Shakti', image: '/images/brands/2_Amba_Shakti_Tmt_Bars_at_49201_tonne.png' },
        { name: 'Tata Tiscon', image: '/images/brands/4_Company_Building_Material_Supplier.png' },
        { name: 'JSW NeoSteel', image: '/images/brands/3_JSW_JSW_NeoSteel_TMT_Bars.png' },
      ],
    },
    {
      category: 'Paints',
      brands: [
        { name: 'Birla Opus', image: '/images/brands/4_Paint_Lines_Birla_Opus_I50_interior.png' },
        { name: 'Asian Paints', image: '/images/brands/5_asian_paints_vector_logo_2.png' },
        { name: 'Berger', image: '/images/brands/4_Berger_Paints_Bangladesh_Limited.png' },
        { name: 'Indigo', image: '/images/brands/6_INDIGO_PAINTS_Logo_Download_png.png' },
      ],
    },
    {
      category: 'Plumbing & Pipes',
      brands: [
        { name: 'Astral', image: '/images/brands/1_Astral_Pipes_Logo_Vector_Free_Download.png' },
        { name: 'Supreme', image: '/images/brands/7_Supreme_Logo_PNG_Image_File.png' },
        { name: 'Finolex', image: '/images/brands/6_Finolex_Industries_unveils_new_logo.png' },
        { name: 'Prince', image: '/images/brands/3_File_Prince_Pipes_and_Fitting_Limited.png' },
        { name: 'Polycab', image: '/images/brands/2_Polycab_Brands_of_the_World_Download.png' },
      ],
    },
    {
      category: 'Sanitary Ware',
      brands: [
        { name: 'CERA', image: '/images/brands/3_Cera_Sanitaryware_Ltd_Share_Price.png' },
        { name: 'Hindware', image: '/images/brands/6_Hindware_Logo_PNG_Transparent_SVG.png' },
        { name: 'Jaquar', image: '/images/brands/2_Jaquar_ContractorBhai.png' },
        { name: 'Kohler', image: '/images/brands/1_KOHLER_Corporate_Logo_Logo_Downloads.png' },
        { name: 'Parryware', image: '/images/brands/2_Parryware_unveils_new_logo_plans.png' },
        { name: 'TOTO', image: '/images/brands/1_TOTO_Japanese_company_Baiduwiki.png' },
      ],
    },
    {
      category: 'Farm Equipment',
      brands: [
        { name: 'Mahindra', image: '/images/brands/5_Mahindra_Tractors_Logo_Metal_Wall.png' },
        { name: 'Swaraj', image: '/images/brands/4_Swaraj_Logo_and_symbol_meaning_history.png' },
        { name: 'John Deere', image: '/images/brands/8_John_Deere_Logo_PNG_Image_HD.png' },
        { name: 'Sonalika', image: '/images/brands/4_File_SONALIKA_LOGO_hd_jpg_Wikimedia.png' },
      ],
    },
    {
      category: 'Electrical',
      brands: [
        { name: 'Havells', image: '/images/brands/5_Download_Havells_Logo_in_SVG_Vector.png' },
        { name: 'Philips', image: '/images/brands/3_Philips_Lighting_and_LED_Solutions.png' },
        { name: 'Polycab', image: '/images/brands/6_Polycab_Unveils_New_Brand_Identity.png' },
        { name: 'Legrand', image: '/images/brands/3_Legrand_logo_and_symbol_meaning_history.png' },
        { name: 'Wipro', image: '/images/brands/1_About_Wipro_Consumer_Lighting_Smart.png' },
      ],
    },
  ]

  const MarqueeRow = ({ brands, direction = 'left', speed = 30 }: { brands: Brand[]; direction?: 'left' | 'right'; speed?: number }) => {
    // Create enough duplicates for seamless infinite scroll
    const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands]
    
    return (
      <div className="relative overflow-hidden py-4">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        
        <div
          className={`flex gap-8 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
          style={{ 
            animationDuration: `${speed}s`,
            width: 'fit-content'
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-100 p-4 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-32 h-16 flex items-center justify-center">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                  title={brand.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="brands" ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Authorized Dealers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Brands We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are authorized dealers of India's top construction material brands. 
            Quality guaranteed with every purchase.
          </p>
        </div>
      </div>

      {/* Featured Brand - UltraTech */}
      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/images/brands/ultratech_cement_new.png"
                alt="UltraTech Cement"
                className="h-24 md:h-32 w-auto rounded-xl"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold mb-3">
                MAIN BRAND
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                UltraTech Cement - India's No. 1 Cement Brand
              </h3>
              <p className="text-blue-100 mb-4">
                Authorized dealer of UltraTech Cement - The Engineer's Choice. 
                India's largest manufacturer of grey cement, white cement, and ready-mix concrete.
              </p>
              <a
                href="tel:7721020741"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
              >
                Order UltraTech Cement
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Categories */}
      <div className="space-y-8">
        {categories.map((category, index) => (
          <div
            key={category.category}
            className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
          >
            <div className="container mx-auto px-4 mb-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                {category.category}
              </h3>
            </div>
            <MarqueeRow
              brands={category.brands}
              direction={index % 2 === 0 ? 'left' : 'right'}
              speed={35 + index * 3}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandMarquee
