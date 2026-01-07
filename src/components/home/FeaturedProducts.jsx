import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProducts({ products }) {
  if (!products || products.length === 0) return null;

  const categoryLabels = {
    refrigeradores: 'Refrigeradores',
    lavadoras: 'Lavadoras',
    'aires-acondicionados': 'Aires acondicionados',
    cocina: 'Cocina',
    televisores: 'Televisores',
  };

  const getCategoryLabel = (category) =>
    categoryLabels[category] || category?.replace(/-/g, ' ');

  return (
    <section className="py-16 sm:py-24 bg-[#f7f6f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10 sm:mb-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c9a962] mb-4">
              Destacados
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1a1a1a]">
              Selección <span className="font-semibold">curada</span>
            </h2>
          </div>
          <Link
            to={createPageUrl('Catalog')}
            className="hidden md:flex items-center gap-2 text-sm font-medium text-[#1a1a1a] hover:gap-4 transition-all"
          >
            Ver todo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="group bg-white p-5 sm:p-6 transition-shadow hover:shadow-xl"
            >
              <div className="aspect-square bg-[#f7f6f4] mb-6 overflow-hidden">
                <img
                  src={product.image_url || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80'}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-[#6b6b6b]">
                  {getCategoryLabel(product.category)}
                </p>
                <h3 className="text-lg font-medium text-[#1a1a1a]">{product.name}</h3>
                <p className="text-[#1a1a1a] font-semibold">
                  ${product.price?.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to={createPageUrl('Catalog')}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1a1a]"
          >
            Ver todos los productos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
