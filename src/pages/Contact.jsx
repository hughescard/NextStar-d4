import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/api/localClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const sendMessage = useMutation({
    mutationFn: async (data) => {
      await apiClient.entities.ContactMessage.create(data);
      await apiClient.integrations.Core.SendEmail({
        to: 'info@thenexstar.com',
        subject: `Formulario de contacto: ${data.subject || 'Nuevo mensaje'}`,
        body: `
Nueva solicitud del formulario de contacto:

Nombre: ${data.name}
Correo: ${data.email}
Asunto: ${data.subject || 'Sin asunto'}

Mensaje:
${data.message}
        `,
      });
    },
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: () => {
      toast.error('No se pudo enviar el mensaje. Intenta de nuevo.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage.mutate(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#f7f6f4] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c9a962] mb-4">
            Contáctanos
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1a1a]">
            Contacta <span className="font-semibold">con nosotros</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Tienes una pregunta o necesitas ayuda? Estamos para ayudarte.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-10 sm:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-6">Información de contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#f7f6f4] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#c9a962]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6b6b6b] mb-1">Correo</p>
                      <a href="mailto:info@thenexstar.com" className="text-[#1a1a1a] hover:text-[#c9a962] transition-colors">
                        info@thenexstar.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#f7f6f4] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#c9a962]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6b6b6b] mb-1">Teléfono</p>
                      <p className="text-[#1a1a1a]">+1 (800) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#f7f6f4] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#c9a962]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6b6b6b] mb-1">Sede</p>
                      <p className="text-[#1a1a1a]">
                        123 Innovation Drive<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-[#6b6b6b]">
                  Para soporte de garantía, contacta a{' '}
                  <a href="mailto:support@thenexstar.com" className="text-[#c9a962] hover:underline">
                    support@thenexstar.com
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-[#f7f6f4] p-8 sm:p-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#c9a962] mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Mensaje enviado</h3>
                  <p className="text-[#6b6b6b] mb-6">
                    Gracias por escribirnos. Te responderemos dentro de 24 horas.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-[#1a1a1a]">
                        Nombre completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 border-gray-200 focus:border-[#c9a962] focus:ring-[#c9a962]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-[#1a1a1a]">
                        Correo electrónico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 border-gray-200 focus:border-[#c9a962] focus:ring-[#c9a962]"
                        placeholder="tu@ejemplo.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-[#1a1a1a]">
                      Asunto
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="h-12 border-gray-200 focus:border-[#c9a962] focus:ring-[#c9a962]"
                      placeholder="En qué podemos ayudarte?"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-[#1a1a1a]">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-gray-200 focus:border-[#c9a962] focus:ring-[#c9a962] resize-none"
                      placeholder="Cuéntanos más sobre tu consulta..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={sendMessage.isPending}
                    className="w-full sm:w-auto h-12 px-10 sm:px-12 bg-[#1a1a1a] hover:bg-[#333] text-white text-sm font-medium tracking-wide"
                  >
                    {sendMessage.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar mensaje'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
