"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Updated services with more concise descriptions and clearer benefits
const services = [
  {
    id: 1,
    name: "Corte Clássico",
    price: "R$ 45",
    duration: "45 minutos",
    image: "/haircut.jpg",
    description: "Visual elegante e atemporal com acabamento premium",
  },
  {
    id: 2,
    name: "Barba",
    price: "R$ 35",
    duration: "30 minutos",
    image: "/beard.jpg",
    description: "Modelagem profissional com produtos importados",
  },
  {
    id: 3,
    name: "Corte + Barba",
    price: "R$ 70",
    duration: "1h15",
    image: "/haircut-beard.jpg",
    description: "Pacote completo com preço especial",
  },
  {
    id: 4,
    name: "Platinação",
    price: "R$ 120",
    duration: "2h",
    image: "/platinum.jpeg",
    description: "Transformação moderna com produtos premium",
  },
  {
    id: 5,
    name: "Hidratação",
    price: "R$ 50",
    duration: "45min",
    image: "/hydration.jpg",
    description: "Revitalização profunda para cabelo e barba",
  },
  {
    id: 6,
    name: "Design de Sobrancelha",
    price: "R$ 25",
    duration: "20min",
    image: "/eyebrow.jpeg",
    description: "Modelagem perfeita para seu visual",
  },
];

// Added testimonials
const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Cliente desde 2024",
    content:
      "Melhor barbearia da região! Atendimento impecável e resultado sempre perfeito.",
    image: "/testimonial1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Roberto Santos",
    role: "Cliente desde 2024",
    content: "Profissionais altamente qualificados e ambiente muito agradável.",
    image: "/testimonial2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "André Lima",
    role: "Cliente desde 2024",
    content: "Serviço excepcional, sempre saio satisfeito!",
    image: "/testimonial3.jpg",
    rating: 5,
  },
];

const gallery = [
  {
    id: 1,
    image: "/gallery1.jpeg",
    alt: "Corte moderno executivo",
  },
  {
    id: 2,
    image: "/gallery2.jpeg",
    alt: "Barba estilizada",
  },
  {
    id: 3,
    image: "/gallery3.jpeg",
    alt: "Ambiente sofisticado",
  },
  {
    id: 4,
    image: "/gallery4.jpeg",
    alt: "Platinação moderna",
  },
];

const socials = [
  {
    id: 1,
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/estudiobispo",
  },
  {
    id: 2,
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/5513991390010",
  },
  {
    id: 3,
    name: "Email",
    icon: Mail,
    url: "mailto:contato@estudiobispo.com",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1A1310]">
      {/* Navigation - Improved contrast and mobile menu */}
      <nav className="fixed w-full bg-[#1A1310]/95 backdrop-blur-md border-b border-[#3D2E26]/30 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="w-32 relative h-24">
              <Image
                src="/logo1.png"
                alt="Estudio Bispo Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden md:flex space-x-8">
              {["Serviços", "Galeria", "Depoimentos", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#E6D5B8] hover:text-[#C4A484] transition-all duration-300 
                  text-sm uppercase tracking-wider font-medium"
                >
                  {item}
                </a>
              ))}
              <a
                href="https://wa.me/5513991390010"
                className="bg-[#C4A484] text-[#1A1310] px-4 py-2 rounded-lg 
                hover:bg-[#8B4513] hover:text-[#E6D5B8] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende Agora
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#E6D5B8] hover:text-[#C4A484] transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#1A1310]/95 backdrop-blur-md border-b border-[#3D2E26]/30">
              <div className="py-4 space-y-4">
                {["Serviços", "Galeria", "Depoimentos", "Contato"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-2 text-[#E6D5B8] hover:text-[#C4A484] 
                    transition-all duration-300 text-sm uppercase tracking-wider font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  )
                )}
                <div className="px-4">
                  <a
                    href="https://wa.me/5513991390010"
                    className="block w-full text-center bg-[#C4A484] text-[#1A1310] px-4 py-2 
                    rounded-lg hover:bg-[#8B4513] hover:text-[#E6D5B8] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agende Agora
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Improved contrast and call-to-action */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1310]/90 via-[#1A1310]/70 to-[#1A1310] z-10" />
          <Image
            src="/hero-bg.jpg"
            alt="Barbershop Interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="text-[#E6D5B8]">Eleve Seu Estilo no</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">
                ESTÚDIO BISPO
              </span>
            </h1>
            <p className="text-xl text-[#E6D5B8] mb-8 leading-relaxed max-w-2xl">
              Experimente o melhor em barbearia premium. Cortes modernos,
              ambiente exclusivo e profissionais especializados para transformar
              seu visual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5513991390010"
                className="inline-block bg-[#C4A484] text-[#1A1310] px-8 py-4 rounded-lg 
                hover:bg-[#8B4513] hover:text-[#E6D5B8] transition-all duration-300 
                text-lg font-semibold text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende Agora
              </a>
              <a
                href="#serviços"
                className="inline-block border-2 border-[#C4A484] text-[#E6D5B8] px-8 py-4 
                rounded-lg hover:bg-[#C4A484] hover:text-[#1A1310] transition-all duration-300 
                text-lg font-semibold text-center"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="relative z-20 -mt-20 container mx-auto px-4">
        <Alert className="bg-[#C4A484]/10 border border-[#C4A484]/30 text-[#E6D5B8]">
          <AlertDescription>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span>
                🎉 Promoção especial: Ganhe 15% de desconto na sua primeira
                visita!
              </span>
              <a
                href="https://wa.me/5513991390010"
                className="text-[#C4A484] hover:text-[#8B4513] transition-colors duration-300 
                font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais →
              </a>
            </div>
          </AlertDescription>
        </Alert>
      </div>

      {/* Services Section - Improved cards and layout */}
      <section
        id="serviços"
        className="py-24 bg-gradient-to-b from-[#1A1310] via-[#2A1F1A] to-[#1A1310]"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">
              Serviços Premium
            </span>
          </h2>
          <p className="text-[#E6D5B8] text-center mb-12 max-w-2xl mx-auto">
            Experimente o melhor em cuidados masculinos com nossa equipe de
            especialistas.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-xl bg-[#2A1F1A] shadow-xl 
                border border-[#3D2E26]/50 hover:border-[#C4A484]/30 transition-all duration-300
                transform hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1310] via-[#1A1310]/50 to-transparent z-10" />
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-semibold text-[#C4A484] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-[#E6D5B8] text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#C4A484] text-lg font-semibold">
                      {service.price}
                    </span>
                    <div className="flex items-center gap-2 text-[#E6D5B8] text-sm">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/5513991390010"
                    className="mt-4 block w-full text-center bg-[#C4A484] text-[#1A1310] px-4 py-2 
                    rounded-lg hover:bg-[#8B4513] hover:text-[#E6D5B8] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - New section */}
      <section id="depoimentos" className="py-24 bg-[#1A1310]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">
              O Que Dizem Nossos Clientes
            </span>
          </h2>
          <p className="text-[#E6D5B8] text-center mb-12 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-b from-[#2A1F1A] to-[#1A1310] p-6 rounded-xl
                border border-[#3D2E26]/50 hover:border-[#C4A484]/30 transition-all duration-300
                transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C4A484]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C4A484] font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#E6D5B8]/70 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-[#E6D5B8] mb-4">{testimonial.content}</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#C4A484]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5513991390010"
              className="inline-block bg-[#C4A484] text-[#1A1310] px-8 py-4 rounded-lg
              hover:bg-[#8B4513] hover:text-[#E6D5B8] transition-all duration-300
              text-lg font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agende seu Horário
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section - Improved layout and hover effects */}
      <section
        id="galeria"
        className="py-24 bg-gradient-to-b from-[#1A1310] via-[#2A1F1A] to-[#1A1310]"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">
              Nossa Galeria
            </span>
          </h2>
          <p className="text-[#E6D5B8] text-center mb-12 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes e nosso espaço
            exclusivo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl
                shadow-lg border border-[#3D2E26]/50 hover:border-[#C4A484]/30 
                transition-all duration-500"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#1A1310] 
                  via-[#1A1310]/30 to-transparent opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 z-10"
                />
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transform transition-transform duration-700 
                  group-hover:scale-110"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 transform 
                  translate-y-full group-hover:translate-y-0 transition-transform 
                  duration-500 z-20"
                >
                  <p className="text-[#E6D5B8] text-sm font-medium">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://instagram.com/estudiobispo"
              className="inline-flex items-center gap-2 text-[#C4A484] hover:text-[#E6D5B8] 
              transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
              <span>Siga-nos no Instagram para mais inspirações</span>
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section - Improved layout and accessibility */}
      <section id="contato" className="py-24 bg-[#1A1310] relative">
        <div className="absolute inset-0 bg-[url('/grain-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">
              Fale Conosco
            </span>
          </h2>
          <p className="text-[#E6D5B8] text-center mb-12 max-w-2xl mx-auto">
            Estamos sempre prontos para atender você da melhor forma possível.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Location Card */}
              <div
                className="group flex items-start space-x-6 p-8 rounded-xl 
                bg-gradient-to-br from-[#2A1F1A] to-[#1A1310] 
                border border-[#3D2E26]/50 hover:border-[#C4A484]/30 
                transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <MapPin className="text-[#C4A484] w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#C4A484] mb-2">
                    Localização
                  </h3>
                  <p className="text-[#E6D5B8] leading-relaxed">
                    Rua Labrea, 148 - Parque São Vicente
                    <br />
                    São Vicente - SP
                  </p>
                  <a
                    href="https://www.google.com/maps/place/R.+L%C3%A1brea,+148+-+Parque+Sao+Vicente,+S%C3%A3o+Vicente+-+SP,+11365-270/@-23.9569034,-46.3973412,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce1b7c4ab7d605:0x8fe124f172a6d324!8m2!3d-23.9569034!4d-46.3947663!16s%2Fg%2F11csjcsr7n?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                    className="inline-block mt-2 text-[#C4A484] hover:text-[#8B4513] 
                    transition-colors duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div
                className="group flex items-start space-x-6 p-8 rounded-xl 
                bg-gradient-to-br from-[#2A1F1A] to-[#1A1310] 
                border border-[#3D2E26]/50 hover:border-[#C4A484]/30 
                transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <Clock className="text-[#C4A484] w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#C4A484] mb-2">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[#E6D5B8]">
                      <span>Segunda - Sexta</span>
                      <span>09h - 20h</span>
                    </div>
                    <div className="flex justify-between text-[#E6D5B8]">
                      <span>Sábado</span>
                      <span>09h - 18h</span>
                    </div>
                    <div className="flex justify-between text-[#E6D5B8]">
                      <span>Domingo</span>
                      <span>Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods Card */}
              <div
                className="group flex items-start space-x-6 p-8 rounded-xl 
                bg-gradient-to-br from-[#2A1F1A] to-[#1A1310] 
                border border-[#3D2E26]/50 hover:border-[#C4A484]/30 
                transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <Phone className="text-[#C4A484] w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#C4A484] mb-2">
                    Contatos
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/5513991390010"
                      className="flex items-center gap-2 text-[#E6D5B8] hover:text-[#C4A484] 
                      transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={16} />
                      <span>(13) 99139-0010</span>
                    </a>
                    <a
                      href="tel:+5513999999999"
                      className="flex items-center gap-2 text-[#E6D5B8] hover:text-[#C4A484] 
                      transition-colors duration-300"
                    >
                      <Phone size={16} />
                      <span>(13) 99999-9999</span>
                    </a>
                    <a
                      href="mailto:contato@estudiobispo.com"
                      className="flex items-center gap-2 text-[#E6D5B8] hover:text-[#C4A484] 
                      transition-colors duration-300"
                    >
                      <Mail size={16} />
                      <span>contato@estudiobispo.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="bg-gradient-to-br from-[#2A1F1A] to-[#1A1310] p-8 rounded-xl 
              border border-[#3D2E26]/50 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-[#C4A484] mb-6">
                Envie uma Mensagem
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#E6D5B8] mb-2 text-sm"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-[#1A1310] border border-[#3D2E26]/50 
                    text-[#E6D5B8] focus:border-[#C4A484] focus:outline-none 
                    transition-colors duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#E6D5B8] mb-2 text-sm"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-lg bg-[#1A1310] border border-[#3D2E26]/50 
                    text-[#E6D5B8] focus:border-[#C4A484] focus:outline-none 
                    transition-colors duration-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#E6D5B8] mb-2 text-sm"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-[#1A1310] border border-[#3D2E26]/50 
                    text-[#E6D5B8] focus:border-[#C4A484] focus:outline-none 
                    transition-colors duration-300 resize-none"
                    placeholder="Sua mensagem"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C4A484] text-[#1A1310] px-6 py-3 rounded-lg 
                  hover:bg-[#8B4513] hover:text-[#E6D5B8] transition-all duration-300 
                  font-semibold"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Improved layout and social links */}
      <footer className="bg-gradient-to-b from-[#1A1310] to-black py-16 border-t border-[#3D2E26]/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="space-y-4">
              <div className="w-32 relative h-40">
                <Image
                  src="/logo1.png"
                  alt="Estudio Bispo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[#E6D5B8]/70 text-sm max-w-xs">
                Transformando a experiência tradicional de barbearia em algo
                extraordinário desde 2024.
              </p>
            </div>

            <div className="flex justify-center space-x-8">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className="text-[#C4A484] hover:text-[#E6D5B8] transition-colors duration-300 
                  transform hover:-translate-y-1 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            <div className="text-right space-y-2">
              <p className="text-[#E6D5B8]/70">
                &copy; {new Date().getFullYear()} Estudio Bispo.
                <br />
                Todos os direitos reservados.
              </p>
              <p className="text-[#C4A484] text-sm font-medium">
                Desenvolvido por Jonathan Souza Moyano - (13) 9 7412-4438
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-[#3D2E26]/30">
            <div className="flex justify-center space-x-8">
              {["Serviços", "Galeria", "Depoimentos", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#E6D5B8]/70 hover:text-[#C4A484] transition-colors 
                  duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
