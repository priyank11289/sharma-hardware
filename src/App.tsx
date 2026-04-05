import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import BrandMarquee from './sections/BrandMarquee'
import ProductCatalog from './sections/ProductCatalog'
import PhotoGallery from './sections/PhotoGallery'
import Testimonials from './sections/Testimonials'
import ContactForm from './sections/ContactForm'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <ProductCatalog />
      <PhotoGallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
