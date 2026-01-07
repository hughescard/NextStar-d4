import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center bg-[#f7f6f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c9a962]">
                Electrodomésticos premium para el hogar
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#1a1a1a]">
                Diseñados para
                <span className="block font-semibold">la vida moderna</span>
              </h1>
              <p className="text-base sm:text-lg text-[#6b6b6b] max-w-md leading-relaxed">
                Vive la armonía perfecta entre tecnología de vanguardia 
                y diseño atemporal en cada electrodoméstico Nexstar.
              </p>
            </div>
            <Link
              to={createPageUrl('Catalog')}
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-6 py-3 sm:px-8 sm:py-4 text-sm font-medium tracking-wide hover:bg-[#333] transition-all duration-300 group"
            >
              Explorar colección
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Cocina premium"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#c9a962] opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
