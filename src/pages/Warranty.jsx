import React from 'react';
import { Shield, CheckCircle2, Clock, Wrench } from 'lucide-react';

export default function Warranty() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#f7f6f4] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c9a962] mb-4">
            Tranquilidad
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1a1a]">
            Cobertura de <span className="font-semibold">garantía</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Cada producto Nexstar incluye una garantía integral, 
            protegiendo tu inversión por años.
          </p>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Main Coverage Card */}
          <div className="bg-[#1a1a1a] text-white p-6 sm:p-10 lg:p-12 mb-12 sm:mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="w-10 h-10 text-[#c9a962]" />
              <h2 className="text-2xl font-semibold">Garantía estándar</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-light text-[#c9a962] mb-2">2 Años</p>
                <p className="text-gray-400">Piezas y mano de obra</p>
              </div>
              <div>
                <p className="text-4xl font-light text-[#c9a962] mb-2">5 Años</p>
                <p className="text-gray-400">Motor y compresor</p>
              </div>
              <div>
                <p className="text-4xl font-light text-[#c9a962] mb-2">De por vida</p>
                <p className="text-gray-400">Soporte al cliente</p>
              </div>
            </div>
          </div>

          {/* What's Covered */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-6">Qué incluye</h3>
              <ul className="space-y-4">
                {[
                  'Defectos de fabricación en materiales y mano de obra',
                  'Fallas en componentes eléctricos bajo uso normal',
                  'Reemplazos de motor y compresor',
                  'Fallas en panel de control y electrónica',
                  'Problemas de integridad estructural',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a962] shrink-0 mt-0.5" />
                    <span className="text-[#6b6b6b]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-6">Cómo funciona</h3>
              <ul className="space-y-4">
                {[
                  { icon: Clock, text: 'Envía tu solicitud de garantía en línea o por correo' },
                  { icon: Wrench, text: 'Nuestro equipo evaluará y responderá en 48 horas' },
                  { icon: CheckCircle2, text: 'Las solicitudes aprobadas se atienden sin costo adicional' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[#c9a962] shrink-0 mt-0.5" />
                    <span className="text-[#6b6b6b]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Terms */}
          <div className="bg-[#f7f6f4] p-6 sm:p-8 mb-12 sm:mb-16">
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Términos importantes</h3>
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              La cobertura de garantía inicia desde la fecha de compra y requiere comprobante. 
              No incluye daños por mal uso, accidentes, modificaciones no autorizadas 
              o por no seguir las recomendaciones de cuidado. Hay opciones de garantía extendida 
              al momento de la compra para ampliar los períodos de cobertura.
            </p>
          </div>

          {/* Request CTA */}
          <div className="text-center py-10 sm:py-12 border-t border-gray-100">
            <h3 className="text-xl sm:text-2xl font-light text-[#1a1a1a] mb-4">
              Necesitas ayuda con la <span className="font-semibold">garantía?</span>
            </h3>
            <p className="text-[#6b6b6b] mb-8">
              Nuestro equipo está listo para ayudarte con tu solicitud de garantía.
            </p>
            <a
              href="mailto:support@thenexstar.com?subject=Solicitud%20de%20garant%C3%ADa"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#333] transition-all duration-300"
            >
              Solicitar soporte de garantía
            </a>
            <p className="mt-4 text-sm text-[#6b6b6b]">
              O escríbenos directamente a{' '}
              <a href="mailto:support@thenexstar.com" className="text-[#c9a962] hover:underline">
                support@thenexstar.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
