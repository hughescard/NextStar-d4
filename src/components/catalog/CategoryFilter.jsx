import React from 'react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'Todos los productos' },
  { id: 'refrigeradores', name: 'Refrigeradores' },
  { id: 'lavadoras', name: 'Lavadoras' },
  { id: 'aires-acondicionados', name: 'Aires acondicionados' },
  { id: 'cocina', name: 'Cocina' },
  { id: 'televisores', name: 'Televisores' },
];

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "px-4 py-2 sm:px-6 sm:py-3 text-sm font-medium transition-all duration-300",
            activeCategory === category.id
              ? "bg-[#1a1a1a] text-white"
              : "bg-[#f7f6f4] text-[#6b6b6b] hover:bg-[#e8e7e5] hover:text-[#1a1a1a]"
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
