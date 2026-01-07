import React from 'react';

export default function ProductGrid({ products, isLoading }) {
  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-square bg-gray-200 mb-4 sm:mb-6" />
            <div className="space-y-3">
              <div className="h-3 bg-gray-200 w-1/3" />
              <div className="h-5 bg-gray-200 w-2/3" />
              <div className="h-4 bg-gray-200 w-1/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-[#6b6b6b]">No se encontraron productos en esta categoría.</p>
      </div>
    );
  }

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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group cursor-pointer"
        >
          <div className="aspect-square bg-[#f7f6f4] mb-4 sm:mb-6 overflow-hidden">
            <img
              src={product.image_url || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80'}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider text-[#6b6b6b]">
              {getCategoryLabel(product.category)}
            </p>
            <h3 className="text-base sm:text-lg font-medium text-[#1a1a1a] group-hover:text-[#c9a962] transition-colors">
              {product.name}
            </h3>
            {product.description && (
              <p className="text-sm text-[#6b6b6b] line-clamp-2">{product.description}</p>
            )}
            <p className="text-[#1a1a1a] font-semibold text-base sm:text-lg">
              ${product.price?.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
