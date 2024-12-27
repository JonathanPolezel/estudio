// src/app/page.tsx

import Image from "next/image";
import { Clock, MapPin, Phone, Mail, Instagram, Menu, X } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const services = [
  {
    id: 1,
    name: "Corte Clássico",
    price: "R$ 45",
    duration: "45 minutos",
    image: "/haircut.jpg",
  },
  {
    id: 2,
    name: "Barba",
    price: "R$ 35",
    duration: "30 minutos",
    image: "/beard.jpg",
  },
  {
    id: 3,
    name: "Corte + Barba",
    price: "R$ 70",
    duration: "1 hora e 15 minutos",
    image: "/haircut-beard.jpg",
  },
  {
    id: 4,
    name: "Platinação",
    price: "R$ 120",
    duration: "2 horas",
    image: "/platinum.jpg",
  },
  {
    id: 5,
    name: "Hidratação",
    price: "R$ 50",
    duration: "45 minutos",
    image: "/hydration.jpg",
  },
  {
    id: 6,
    name: "Design de Sobrancelha",
    price: "R$ 25",
    duration: "20 minutos",
    image: "/eyebrow.jpg",
  },
];

const gallery = [
  { id: 1, image: "/gallery1.jpg", alt: "Corte moderno" },
  { id: 2, image: "/gallery2.jpg", alt: "Barba bem feita" },
  { id: 3, image: "/gallery3.jpg", alt: "Ambiente da barbearia" },
  { id: 4, image: "/gallery4.jpg", alt: "Platinação" },
  { id: 5, image: "/gallery5.jpg", alt: "Corte degradê" },
  { id: 6, image: "/gallery6.jpg", alt: "Produtos premium" },
  { id: 7, image: "/gallery7.jpg", alt: "Estrutura moderna" },
  { id: 8, image: "/gallery8.jpg", alt: "Resultado final" },
];

const socials = [
  {
    id: 1,
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/estudiobispo",
  },
  { id: 2, name: "Email", icon: Mail, url: "mailto:contato@estudiobispo.com" },
  { id: 3, name: "Phone", icon: Phone, url: "tel:+5511999999999" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="w-40 relative h-16">
              <Image
                src="/logo.png"
                alt="Estudio Bispo Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-amber-100 hover:text-amber-200 transition-colors duration-300"
              >
                Serviços
              </a>
              <a
                href="#gallery"
                className="text-amber-100 hover:text-amber-200 transition-colors duration-300"
              >
                Galeria
              </a>
              <a
                href="#about"
                className="text-amber-100 hover:text-amber-200 transition-colors duration-300"
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="text-amber-100 hover:text-amber-200 transition-colors duration-300"
              >
                Contato
              </a>
            </div>
            <button className="md:hidden text-amber-100">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Barbershop Interior"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-6xl md:text-7xl font-bold text-amber-100 mb-6 tracking-tight">
              ESTÚDIO BISPO
            </h1>
            <p className="text-xl text-amber-50 mb-8 leading-relaxed">
              Onde a tradição encontra o estilo moderno. Premium Barbershop
              desde 2024.
            </p>
            <a
              href="#booking"
              className="inline-block bg-amber-100 text-zinc-900 px-8 py-4 rounded-lg hover:bg-amber-200 transition-colors duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Agende seu Horário
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-100 mb-12 text-center">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-xl bg-zinc-800 shadow-xl"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-zinc-800">
                  <h3 className="text-xl font-semibold text-amber-100 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-amber-50/80 text-sm mb-2">
                    {service.duration}
                  </p>
                  <p className="text-amber-100 text-lg font-semibold">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-100 mb-12 text-center">
            Galeria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-amber-100 mb-6">
              Sobre Nós
            </h2>
            <p className="text-amber-50 mb-4 leading-relaxed">
              O Estudio Bispo é mais que uma barbearia - é um espaço onde
              tradição encontra modernidade. Fundado em 2024, nos dedicamos a
              oferecer cortes clássicos e contemporâneos com a mais alta
              qualidade.
            </p>
            <p className="text-amber-50 leading-relaxed">
              Nossa equipe de profissionais altamente qualificados está
              comprometida em proporcionar uma experiência única, em um ambiente
              acolhedor e sofisticado.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-100 mb-12 text-center">
            Agendamento
          </h2>
          <div className="flex justify-center">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-100 mb-12 text-center">
            Contato
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <MapPin className="text-amber-100 w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-100">
                    Localização
                  </h3>
                  <p className="text-amber-50">
                    Rua Labrea, 148 - Parque São Vicente, São Vicente - SP
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-amber-100 w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-100">
                    Telefone
                  </h3>
                  <p className="text-amber-50">(13) 99139-0010</p>
                  <p className="text-amber-50">(13) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-amber-100 w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-100">
                    Horário
                  </h3>
                  <p className="text-amber-50">Segunda a Sábado: 09h às 20h</p>
                  <p className="text-amber-50">Domingo: Fechado</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/map.jpg"
                alt="Localização Estudio Bispo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="w-32 relative h-16">
              <Image
                src="/logo.png"
                alt="Estudio Bispo Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex space-x-6">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className="text-amber-100 hover:text-amber-200 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-amber-50">
              &copy; 2024 Estudio Bispo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
