import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

const categories = [
  {
    id: 'refrigeradores',
    name: 'Refrigeradores',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80',
  },
  {
    id: 'lavadoras',
    name: 'Lavadoras',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80',
  },
  {
    id: 'aires-acondicionados',
    name: 'Aires acondicionados',
    image: 'https://images.unsplash.com/photo-1631545308324-e0f879e2c0f0?w=400&q=80',
  },
  {
    id: 'cocina',
    name: 'Cocina',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
  },
];

export default function CategoryNav() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c9a962] mb-4">
            Categorías
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1a1a1a]">
            Explora nuestras <span className="font-semibold">colecciones</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`${createPageUrl('Catalog')}?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-[#f7f6f4]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-medium">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
