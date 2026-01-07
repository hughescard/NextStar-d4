import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/api/localClient';
import HeroSection from '@/components/home/HeroSection';
import CategoryNav from '@/components/home/CategoryNav';
import FeaturedProducts from '@/components/home/FeaturedProducts';

export default function Home() {
  const { data: products = [] } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => apiClient.entities.Product.filter({ featured: true }),
  });

  return (
    <div>
      <HeroSection />
      <CategoryNav />
      <FeaturedProducts products={products} />
      
      {/* Brand Promise Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-[#c9a962] flex items-center justify-center">
                <span className="text-2xl font-light text-[#c9a962]">01</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">Calidad premium</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Cada electrodoméstico se fabrica con atención meticulosa al detalle 
                usando solo materiales de primera.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-[#c9a962] flex items-center justify-center">
                <span className="text-2xl font-light text-[#c9a962]">02</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">Diseño innovador</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Combinamos tecnología de vanguardia con estética atemporal 
                para el hogar moderno.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-[#c9a962] flex items-center justify-center">
                <span className="text-2xl font-light text-[#c9a962]">03</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">Garantía confiable</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Cobertura de garantía integral para tu tranquilidad 
                por años.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
