import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/api/localClient';
import CategoryFilter from '@/components/catalog/CategoryFilter';
import ProductGrid from '@/components/catalog/ProductGrid';

export default function Catalog() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products', activeCategory],
    queryFn: async () => {
      if (activeCategory === 'all') {
        return apiClient.entities.Product.list();
      }
      return apiClient.entities.Product.filter({ category: activeCategory });
    },
  });

  useEffect(() => {
    const category = urlParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#f7f6f4] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c9a962] mb-4">
            Nuestra colección
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1a1a]">
            Catálogo <span className="font-semibold">de productos</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Descubre nuestra selección curada de electrodomésticos premium para el hogar, 
            diseñados para elevar tu día a día.
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Filters */}
          <div className="mb-8 sm:mb-12">
            <CategoryFilter 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </div>

          {/* Product Count */}
          <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-100">
            <p className="text-sm text-[#6b6b6b]">
              {isLoading
                ? 'Cargando...'
                : products.length === 1
                  ? '1 producto'
                  : `${products.length} productos`}
            </p>
          </div>

          {/* Products */}
          <ProductGrid products={products} isLoading={isLoading} />
        </div>
      </section>
    </div>
  );
}
