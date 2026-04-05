import { useState, useEffect, useRef } from 'react'
import { Package, Phone, Info } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

interface Product {
  name: string
  description: string
  brands: string[]
  priceRange: string
  image?: string
}

interface Category {
  id: string
  name: string
  icon: string
  products: Product[]
}

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('cement')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
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

  const categories: Category[] = [
    {
      id: 'cement',
      name: 'Cement',
      icon: '🏗️',
      products: [
        {
          name: 'UltraTech Cement',
          description: 'India\'s No. 1 cement brand. OPC 43 Grade, OPC 53 Grade, PPC, and White Cement available.',
          brands: ['UltraTech'],
          priceRange: '₹380 - ₹450 per bag',
        },
        {
          name: 'Ambuja Cement',
          description: 'High-quality cement with excellent strength and durability.',
          brands: ['Ambuja'],
          priceRange: '₹370 - ₹430 per bag',
        },
        {
          name: 'ACC Cement',
          description: 'Trusted cement brand with superior quality and consistency.',
          brands: ['ACC'],
          priceRange: '₹375 - ₹440 per bag',
        },
        {
          name: 'Shree Cement',
          description: 'Premium quality cement for all construction needs.',
          brands: ['Shree Cement'],
          priceRange: '₹365 - ₹420 per bag',
        },
        {
          name: 'Birla White Cement',
          description: 'Premium white cement for decorative and architectural applications.',
          brands: ['Birla White'],
          priceRange: '₹850 - ₹1,100 per bag',
        },
      ],
    },
    {
      id: 'tmt',
      name: 'TMT Steel Bars',
      icon: '🔩',
      products: [
        {
          name: 'Amba Shakti TMT Bars',
          description: 'Fe 500D, Fe 550D grade TMT bars with excellent ductility and strength.',
          brands: ['Amba Shakti'],
          priceRange: '₹52 - ₹72 per kg',
        },
        {
          name: 'Tata Tiscon TMT',
          description: 'India\'s most trusted TMT bar brand with superior quality.',
          brands: ['Tata Tiscon'],
          priceRange: '₹58 - ₹78 per kg',
        },
        {
          name: 'JSW NeoSteel TMT',
          description: 'High-strength TMT bars with advanced technology.',
          brands: ['JSW NeoSteel'],
          priceRange: '₹55 - ₹75 per kg',
        },
        {
          name: 'SAIL TMT Bars',
          description: 'Government-approved TMT bars for all construction projects.',
          brands: ['SAIL'],
          priceRange: '₹53 - ₹73 per kg',
        },
      ],
    },
    {
      id: 'paints',
      name: 'Paints',
      icon: '🎨',
      products: [
        {
          name: 'Birla Opus Paints',
          description: 'Premium interior and exterior emulsions, textures, and wood finishes.',
          brands: ['Birla Opus'],
          priceRange: '₹250 - ₹850 per liter',
        },
        {
          name: 'Asian Paints',
          description: 'Complete range of decorative and industrial paints.',
          brands: ['Asian Paints'],
          priceRange: '₹280 - ₹950 per liter',
        },
        {
          name: 'Berger Paints',
          description: 'High-quality paints for interior and exterior applications.',
          brands: ['Berger'],
          priceRange: '₹240 - ₹780 per liter',
        },
        {
          name: 'Kansai Nerolac',
          description: 'Premium quality paints with excellent coverage.',
          brands: ['Kansai Nerolac'],
          priceRange: '₹260 - ₹820 per liter',
        },
        {
          name: 'Indigo Paints',
          description: 'Innovative paint solutions for modern homes.',
          brands: ['Indigo'],
          priceRange: '₹220 - ₹750 per liter',
        },
      ],
    },
    {
      id: 'plumbing',
      name: 'Plumbing & Pipes',
      icon: '🚿',
      products: [
        {
          name: 'CPVC Pipes & Fittings',
          description: 'Hot and cold water plumbing solutions. All sizes available.',
          brands: ['Astral', 'Supreme', 'Finolex'],
          priceRange: '₹45 - ₹450 per piece',
        },
        {
          name: 'uPVC Pipes',
          description: 'Drainage and sewerage pipes in all sizes.',
          brands: ['Astral', 'Supreme', 'Prince'],
          priceRange: '₹35 - ₹380 per piece',
        },
        {
          name: 'HDPE Pipes',
          description: 'High-density polyethylene pipes for water supply.',
          brands: ['Polycab', 'Supreme'],
          priceRange: '₹55 - ₹520 per meter',
        },
        {
          name: 'Pipe Fittings',
          description: 'Elbows, tees, couplers, valves, and all plumbing accessories.',
          brands: ['Astral', 'Supreme', 'Finolex', 'Prince'],
          priceRange: '₹15 - ₹850 per piece',
        },
      ],
    },
    {
      id: 'sanitary',
      name: 'Sanitary Ware',
      icon: '🛁',
      products: [
        {
          name: 'Water Closets',
          description: 'Western and Indian style toilets, wall-hung and floor-mounted.',
          brands: ['CERA', 'Hindware', 'Jaquar', 'Parryware'],
          priceRange: '₹2,500 - ₹35,000',
        },
        {
          name: 'Wash Basins',
          description: 'Countertop, wall-hung, and pedestal wash basins.',
          brands: ['CERA', 'Hindware', 'Kohler', 'TOTO'],
          priceRange: '₹1,800 - ₹28,000',
        },
        {
          name: 'Faucets & Taps',
          description: 'Bathroom and kitchen faucets in various designs.',
          brands: ['Jaquar', 'Kohler', 'Grohe', 'CERA'],
          priceRange: '₹850 - ₹18,000',
        },
        {
          name: 'Showers & Accessories',
          description: 'Overhead showers, hand showers, and bathroom accessories.',
          brands: ['Jaquar', 'Hindware', 'Kohler'],
          priceRange: '₹1,200 - ₹25,000',
        },
      ],
    },
    {
      id: 'farm',
      name: 'Farm Equipment',
      icon: '🚜',
      products: [
        {
          name: 'Agricultural Tools',
          description: 'Plows, cultivators, seeders, sprayers, and harvesters.',
          brands: ['Mahindra', 'Swaraj', 'Fieldking'],
          priceRange: '₹5,000 - ₹1,50,000',
        },
        {
          name: 'Irrigation Equipment',
          description: 'Pumps, sprinklers, drip irrigation systems.',
          brands: ['CRI', 'Kirloskar', 'Texmo'],
          priceRange: '₹3,500 - ₹85,000',
        },
      ],
    },
    {
      id: 'electrical',
      name: 'Electrical Items',
      icon: '⚡',
      products: [
        {
          name: 'Wires & Cables',
          description: 'House wiring, industrial cables, and flexible wires.',
          brands: ['Polycab', 'Havells', 'Finolex'],
          priceRange: '₹850 - ₹4,500 per 90m',
        },
        {
          name: 'Switches & Sockets',
          description: 'Modular switches, plates, and electrical accessories.',
          brands: ['Havells', 'Legrand', 'Anchor'],
          priceRange: '₹45 - ₹850 per piece',
        },
        {
          name: 'LED Lights',
          description: 'Bulbs, tube lights, panel lights, and decorative lighting.',
          brands: ['Philips', 'Havells', 'Wipro', 'Syska'],
          priceRange: '₹85 - ₹2,500',
        },
        {
          name: 'MCBs & Distribution Boards',
          description: 'Circuit breakers, distribution boards, and electrical panels.',
          brands: ['Havells', 'Legrand', 'Siemens'],
          priceRange: '₹150 - ₹8,500',
        },
      ],
    },
  ]

  const activeProducts = categories.find((c) => c.id === activeCategory)?.products || []

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Product Catalog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our extensive range of construction materials, hardware, and farm equipment.
            Contact us for the best prices and bulk orders.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${activeCategory === category.id
                    ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <span>{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProducts.map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Package className="w-6 h-6 text-blue-700" />
                    </div>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-gray-400 hover:text-blue-700 transition-colors"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Brands</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {product.brands.map((brand) => (
                        <span
                          key={brand}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-500">Price Range</span>
                      <p className="font-semibold text-blue-700">{product.priceRange}</p>
                    </div>
                    <a
                      href="https://wa.me/917721020741"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Contact us for bulk orders, special pricing, or any product inquiries.
              We offer competitive prices and fast delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:7721020741"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now: 7721020741
              </a>
              <a
                href="https://wa.me/917721020741"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
            <DialogDescription>{selectedProduct?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <span className="text-sm text-gray-500">Available Brands</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProduct?.brands.map((brand) => (
                  <span
                    key={brand}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Price Range</span>
              <p className="text-xl font-bold text-blue-700">{selectedProduct?.priceRange}</p>
            </div>
            <a
              href="https://wa.me/917721020741"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Enquire on WhatsApp
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default ProductCatalog
