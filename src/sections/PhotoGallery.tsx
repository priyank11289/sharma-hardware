import { useState, useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeFilter, setActiveFilter] = useState('all')
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

  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/gallery/shop-exterior.png', alt: 'Sharma Hardware Shop Exterior', category: 'shop' },
    { id: 2, src: '/images/gallery/cement-stock.png', alt: 'Cement Stock', category: 'products' },
    { id: 3, src: '/images/gallery/tmt-bars.png', alt: 'TMT Steel Bars', category: 'products' },
    { id: 4, src: '/images/gallery/paint-section.png', alt: 'Paint Section', category: 'products' },
    { id: 5, src: '/images/gallery/plumbing-items.png', alt: 'Plumbing Items', category: 'products' },
    { id: 6, src: '/images/gallery/sanitary-display.png', alt: 'Sanitary Ware Display', category: 'products' },
    { id: 8, src: '/images/gallery/electrical-section.png', alt: 'Electrical Items', category: 'products' },
    { id: 9, src: '/images/gallery/shop-interior.png', alt: 'Shop Interior', category: 'shop' },
    { id: 10, src: '/images/gallery/delivery.png', alt: 'Delivery Service', category: 'shop' },
    { id: 11, src: '/images/gallery/staff.png', alt: 'Our Team', category: 'shop' },
    { id: 12, src: '/images/gallery/customers.png', alt: 'Happy Customers', category: 'shop' },
  ]

  const filters = [
    { id: 'all', name: 'All Photos' },
    { id: 'shop', name: 'Shop' },
    { id: 'products', name: 'Products' },
  ]

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Photo Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Shop
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of Sharma Hardware. Browse through our shop photos and product displays.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 flex justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-12 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <ImageIcon className="w-4 h-4" />
            Visit our shop in Kamargaon to see the complete range of products. 
            <a href="#contact" className="text-blue-700 font-semibold hover:underline">Contact us</a> for directions.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div 
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video md:aspect-auto max-h-[85vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xl font-semibold mb-1">{selectedImage.alt}</p>
                <p className="text-gray-300 text-sm">{selectedImage.category.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PhotoGallery

