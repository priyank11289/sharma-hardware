import { useEffect, useRef, useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  location: string
  rating: number
  text: string
  avatar: string
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Patil',
      role: 'Contractor',
      location: 'Washim',
      rating: 5,
      text: 'Sharma Hardware is my go-to shop for all construction materials. They have the best prices for UltraTech Cement and their delivery is always on time. The staff is very knowledgeable and helpful.',
      avatar: 'RP',
    },
    {
      id: 2,
      name: 'Suresh Kumar',
      role: 'Home Owner',
      location: 'Kamargaon',
      rating: 5,
      text: 'I built my entire house using materials from Sharma Hardware. From cement to paints to sanitary ware, everything was top quality. Promod ji and Vinod ji gave me excellent guidance throughout.',
      avatar: 'SK',
    },
    {
      id: 3,
      name: 'Mahendra Sharma',
      role: 'Farmer',
      location: 'Washim District',
      rating: 5,
      text: 'Best place for farm equipment and tractor parts. They have genuine Mahindra and Swaraj parts at reasonable prices. Yash bhai is very helpful in finding the right equipment.',
      avatar: 'MS',
    },
    {
      id: 4,
      name: 'Prakash Deshmukh',
      role: 'Builder',
      location: 'Washim',
      rating: 5,
      text: 'Been purchasing TMT bars and cement from Sharma Hardware for over 5 years. Their Amba Shakti TMT bars are excellent quality and the pricing is very competitive. Highly recommended!',
      avatar: 'PD',
    },
    {
      id: 5,
      name: 'Anil Rathod',
      role: 'Plumber',
      location: 'Kamargaon',
      rating: 5,
      text: 'Great collection of plumbing materials - Astral, Supreme, Finolex pipes and fittings all available under one roof. The staff knows their products well and gives good advice.',
      avatar: 'AR',
    },
    {
      id: 6,
      name: 'Vijay Bhosale',
      role: 'Electrician',
      location: 'Washim',
      rating: 5,
      text: 'Best electrical shop in the area. They stock all major brands - Havells, Polycab, Philips. Prices are fair and the product range is excellent.',
      avatar: 'VB',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with Sharma Hardware.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 relative">
          {/* Desktop View - 3 Cards */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {visibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-200 mb-4" />

                <p className="text-gray-700 mb-6 line-clamp-4">{testimonial.text}</p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet View - Single Card */}
          <div className="lg:hidden">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-blue-200 mb-4" />

              <p className="text-gray-700 mb-6">{testimonials[currentIndex].text}</p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-6 bg-blue-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
                <div className="text-blue-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200">Premium Brands</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">7</div>
                <div className="text-blue-200">Product Categories</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9</div>
                <div className="text-blue-200">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
