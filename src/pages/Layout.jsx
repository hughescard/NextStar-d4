
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Nosotros', page: 'About' },
    { name: 'Catálogo', page: 'Catalog' },
    { name: 'Garantía', page: 'Warranty' },
    { name: 'Contacto', page: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --color-charcoal: #1a1a1a;
          --color-warm-gray: #f7f6f4;
          --color-accent: #c9a962;
          --color-muted: #6b6b6b;
        }
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-charcoal);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to={createPageUrl('Home')} 
              className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1a1a1a]"
            >
              NEXSTAR
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                    currentPageName === link.page 
                      ? 'text-[#1a1a1a]' 
                      : 'text-[#6b6b6b] hover:text-[#1a1a1a]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1a1a1a]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg font-medium ${
                    currentPageName === link.page 
                      ? 'text-[#1a1a1a]' 
                      : 'text-[#6b6b6b]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white mt-20 sm:mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12">
            <div className="md:col-span-2">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-4">NEXSTAR</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Elevamos la vida diaria con electrodomésticos diseñados con detalle 
                que combinan innovación y elegancia atemporal.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Navegación</h4>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Contacto</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>info@thenexstar.com</p>
                <p>support@thenexstar.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Nexstar. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
