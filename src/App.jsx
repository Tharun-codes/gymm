import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Hero from './components/Hero'
import Services from './components/Services'
import Membership from './components/Membership'
import Trainers from './components/Trainers'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gradient">FitZone</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#membership" className="text-gray-700 hover:text-primary transition-colors">Membership</a>
              <a href="#trainers" className="text-gray-700 hover:text-primary transition-colors">Trainers</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Join Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-primary">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-primary">Services</a>
              <a href="#membership" className="block text-gray-700 hover:text-primary">Membership</a>
              <a href="#trainers" className="block text-gray-700 hover:text-primary">Trainers</a>
              <a href="#contact" className="block text-gray-700 hover:text-primary">Contact</a>
              <button className="w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Membership />
        <Trainers />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
