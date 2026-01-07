import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c9a962] mb-6">
              Sobre Nexstar
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Creando el futuro del
              <span className="block font-semibold">hogar</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <div className="aspect-[4/3] bg-[#f7f6f4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                  alt="Historia de Nexstar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c9a962]">
                Nuestra historia
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1a1a1a]">
                Un legado de <span className="font-semibold">excelencia</span>
              </h2>
              <div className="space-y-4 text-[#6b6b6b] leading-relaxed">
                <p>
                  Fundada en el principio de que los electrodomésticos deben ser 
                  funcionales y hermosos, Nexstar ha dedicado décadas a perfeccionar 
                  el arte de la innovación doméstica.
                </p>
                <p>
                  Nuestro equipo de ingenieros y diseñadores trabaja en armonía para crear 
                  productos que se integran a los estilos de vida modernos y resisten 
                  el paso del tiempo.
                </p>
                <p>
                  Cada electrodoméstico Nexstar es un testimonio de nuestro compromiso 
                  con la calidad, la sustentabilidad y la satisfacción del cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-[#f7f6f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c9a962] mb-4">
              Nuestros valores
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1a1a1a]">
              Lo que <span className="font-semibold">nos impulsa</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: 'Innovación',
                description: 'Superamos límites con tecnología de vanguardia que anticipa tus necesidades.',
              },
              {
                title: 'Sustentabilidad',
                description: 'Comprometidos con prácticas responsables y soluciones de alta eficiencia energética.',
              },
              {
                title: 'Artesanía',
                description: 'Atención meticulosa al detalle en cada componente que creamos.',
              },
              {
                title: 'Confiabilidad',
                description: 'Hecho para durar, respaldado por garantía y soporte integral.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 sm:p-8 bg-white">
                <div className="w-12 h-12 mx-auto mb-6 border border-[#c9a962] flex items-center justify-center text-[#c9a962] font-light text-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">{value.title}</h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6">
            Listo para <span className="font-semibold">transformar</span> tu hogar?
          </h2>
          <p className="text-[#6b6b6b] mb-8">
            Explora nuestra colección y descubre electrodomésticos diseñados para tu estilo de vida.
          </p>
          <Link
            to={createPageUrl('Catalog')}
            className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#333] transition-all duration-300 group"
          >
            Ver colección
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
