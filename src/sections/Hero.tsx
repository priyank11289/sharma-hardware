import { useEffect, useRef } from 'react'
import { Phone, MapPin, Clock, ArrowRight, Truck, Shield, Award } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    { icon: Truck, text: 'Fast Delivery' },
    { icon: Shield, text: 'Genuine Products' },
    { icon: Award, text: 'Authorized Dealer' },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Authorized Dealer of UltraTech Cement
              </span>
            </div>

            <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Trusted{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                Hardware
              </span>{' '}
              Partner in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Washim
              </span>
            </h1>

            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg text-gray-600 max-w-xl">
              Sharma Hardware - Your one-stop destination for premium construction materials,
              TMT bars, paints, plumbing, sanitary ware, farm equipment, and electrical items.
              Serving Kamargaon and surrounding areas with quality products since generations.
            </p>

            {/* Quick Info Cards */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 grid sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <span className="font-medium text-gray-800 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-wrap gap-4">
              <a
                href="tel:7721020741"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/30"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/917721020741"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-green-600/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold transition-all"
              >
                View Products
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500 flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-blue-700" />
                <span className="text-sm">Main Road, Kamargaon, Washim - 444110</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5 text-blue-700" />
                <span className="text-sm">Monday - Sunday: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Content - Logo Display */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 relative">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-3xl blur-2xl transform scale-110" />

              {/* Main Logo Card */}
              <div className="relative bg-[#FFF200] rounded-3xl shadow-2xl p-8 md:p-12 border border-[#E6DA00]">
                <img
                  src="/images/sharma_hardware_logo.png"
                  alt="Sharma Hardware"
                  className="w-full max-w-2xl mx-auto scale-150 transition-transform duration-500 hover:scale-155"
                />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-0 mt-16 pt-8 border-t-2 border-blue-900/30">
                  <div className="text-center px-2">
                    <div className="text-2xl md:text-3xl font-bold text-blue-900">50+</div>
                    <div className="text-sm text-blue-900/70 font-medium">Top Brands</div>
                  </div>
                  <div className="text-center px-2 border-x border-blue-900/20">
                    <div className="text-2xl md:text-3xl font-bold text-blue-900">7</div>
                    <div className="text-sm text-blue-900/70 font-medium">Product Categories</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-2xl md:text-3xl font-bold text-blue-900">24/7</div>
                    <div className="text-sm text-blue-900/70 font-medium">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
