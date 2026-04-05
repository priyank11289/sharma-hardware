import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Brands', href: '#brands' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const productCategories = [
    { name: 'Cement', href: '#products' },
    { name: 'TMT Steel Bars', href: '#products' },
    { name: 'Paints', href: '#products' },
    { name: 'Plumbing', href: '#products' },
    { name: 'Sanitary Ware', href: '#products' },
    { name: 'Farm Equipment', href: '#products' },
    { name: 'Electrical', href: '#products' },
  ]

  const topBrands = [
    'UltraTech Cement',
    'Amba Shakti TMT',
    'Birla Opus Paints',
    'Asian Paints',
    'Astral Pipes',
    'CERA',
    'Mahindra',
    'Havells',
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/images/sharma_hardware_logo.png"
              alt="Sharma Hardware"
              className="h-16 w-auto mb-6 bg-white rounded-lg p-2"
            />
            <p className="text-gray-400 mb-6">
              Your trusted hardware partner in Kamargaon, Washim. We offer premium construction materials,
              TMT bars, paints, plumbing, sanitary ware, farm equipment, and electrical items.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-yellow-500 font-bold">Authorized Dealer</span>
              <span>of UltraTech Cement</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Main Road, Kamargaon,<br />
                  Washim District - 444110,<br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:7721020741" className="text-gray-400 hover:text-white transition-colors">
                  7721020741
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">
                  Monday - Sunday: 8:00 AM - 8:00 PM
                </span>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917721020741"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Top Brands Marquee */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm mb-4">Authorized Dealers Of</p>
          <div className="flex flex-wrap justify-center gap-3">
            {topBrands.map((brand) => (
              <span
                key={brand}
                className="bg-gray-800 text-gray-400 px-4 py-2 rounded-full text-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Sharma Hardware. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Owned & Operated by Promod Sharma, Vinod Sharma & Yash Sharma
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
