import Image from "next/image";
import { Clock, MapPin, Phone, Mail, Instagram, Menu } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Corte Clássico",
    price: "R$ 45",
    duration: "45 minutos",
    image: "/haircut.jpg",
    description: "Corte tradicional com acabamento impecável",
  },
  {
    id: 2,
    name: "Barba",
    price: "R$ 35",
    duration: "30 minutos",
    image: "/beard.jpg",
    description: "Modelagem completa com produtos premium",
  },
  {
    id: 3,
    name: "Corte + Barba",
    price: "R$ 70",
    duration: "1 hora e 15 minutos",
    image: "/haircut-beard.jpg",
    description: "Combinação perfeita para um visual completo",
  },
  {
    id: 4,
    name: "Platinação",
    price: "R$ 120",
    duration: "2 horas",
    image: "/platinum.jpg",
    description: "Transformação completa com produtos especializados",
  },
  {
    id: 5,
    name: "Hidratação",
    price: "R$ 50",
    duration: "45 minutos",
    image: "/hydration.jpg",
    description: "Tratamento profundo para revitalização",
  },
  {
    id: 6,
    name: "Design de Sobrancelha",
    price: "R$ 25",
    duration: "20 minutos",
    image: "/eyebrow.jpg",
    description: "Modelagem precisa para harmonização facial",
  },
];

const gallery = [
  {
    id: 1,
    image: "/gallery1.jpg",
    alt: "Corte moderno executivo",
  },
  {
    id: 2,
    image: "/gallery2.jpg",
    alt: "Barba estilizada",
  },
  {
    id: 3,
    image: "/gallery3.jpg",
    alt: "Ambiente sofisticado",
  },
  {
    id: 4,
    image: "/gallery4.jpg",
    alt: "Platinação moderna",
  },
  {
    id: 5,
    image: "/gallery5.jpg",
    alt: "Degradê profissional",
  },
  {
    id: 6,
    image: "/gallery6.jpg",
    alt: "Produtos exclusivos",
  },
  {
    id: 7,
    image: "/gallery7.jpg",
    alt: "Nossa estrutura",
  },
  {
    id: 8,
    image: "/gallery8.jpg",
    alt: "Resultado final",
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
    name: "Email",
    icon: Mail,
    url: "mailto:contato@estudiobispo.com",
  },
  {
    id: 3,
    name: "Phone",
    icon: Phone,
    url: "tel:+5511999999999",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed w-full bg-gradient-to-b from-black/95 to-black/85 backdrop-blur-md border-b border-zinc-800/30 z-50">
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
              {["Serviços", "Galeria", "Sobre", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-stone-100 hover:text-amber-300 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="md:hidden text-stone-100 hover:text-amber-300 transition-colors duration-300">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
          <Image
            src="/hero-bg.jpg"
            alt="Barbershop Interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200">
                ESTÚDIO BISPO
              </span>
            </h1>
            <p className="text-xl text-stone-200 mb-8 leading-relaxed max-w-2xl">
              Onde a tradição encontra a excelência moderna. Uma experiência
              única em barbearia premium, criando estilos que definem gerações
              desde 2024.
            </p>
            <a
              href="#services"
              className="inline-block bg-gradient-to-r from-amber-200 to-amber-300 text-zinc-900 px-8 py-4 rounded-lg 
              hover:from-amber-300 hover:to-amber-400 transition-all duration-300 text-lg font-semibold shadow-xl 
              hover:shadow-amber-500/20 transform hover:-translate-y-1"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="serviços"
        className="py-24 bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#0A0A0A]"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-300">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-stone-400 text-center mb-12 max-w-2xl mx-auto">
            Oferecemos uma experiência premium de cuidados masculinos,
            combinando técnicas tradicionais com tendências contemporâneas.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-800 shadow-xl 
                border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-semibold text-amber-200 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-stone-400 text-sm mb-3">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-300 text-lg font-semibold">
                      {service.price}
                    </span>
                    <span className="text-stone-400 text-sm">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-300">
              Nossa Galeria
            </span>
          </h2>
          <p className="text-stone-400 text-center mb-12 max-w-2xl mx-auto">
            Conheça um pouco do nosso trabalho através das transformações que
            realizamos e do ambiente sofisticado do nosso espaço.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl 
                shadow-lg border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                />
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full 
                group-hover:translate-y-0 transition-transform duration-300 z-20"
                >
                  <p className="text-stone-200 text-sm font-medium">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="sobre"
        className="py-24 bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#0A0A0A]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-300">
                Sobre Nós
              </span>
            </h2>
            <p className="text-stone-300 mb-6 leading-relaxed">
              O Estudio Bispo é mais que uma barbearia - é um espaço onde
              tradição encontra modernidade. Fundado em 2024, nos dedicamos a
              oferecer cortes clássicos e contemporâneos com a mais alta
              qualidade em um ambiente que combina sofisticação e conforto.
            </p>
            <p className="text-stone-400 leading-relaxed">
              Nossa equipe de profissionais altamente qualificados está
              comprometida em proporcionar uma experiência única, utilizando
              produtos premium e técnicas aperfeiçoadas para garantir resultados
              excepcionais em cada atendimento.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-300">
              Contato
            </span>
          </h2>
          <p className="text-stone-400 text-center mb-12 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo e proporcionar uma experiência única
            em nossa barbearia.
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div
                className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 
              border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-300"
              >
                <MapPin className="text-amber-300 w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-200 mb-1">
                    Localização
                  </h3>
                  <p className="text-stone-300">
                    Rua Labrea, 148 - Parque São Vicente, São Vicente - SP
                  </p>
                </div>
              </div>
              <div
                className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 
              border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-300"
              >
                <Phone className="text-amber-300 w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-200 mb-1">
                    Telefone
                  </h3>
                  <p className="text-stone-300">(13) 99139-0010</p>
                  <p className="text-stone-300">(13) 99999-9999</p>
                </div>
              </div>
              <div
                className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 
              border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-300"
              >
                <Clock className="text-amber-300 w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-200 mb-1">
                    Horário
                  </h3>
                  <p className="text-stone-300">Segunda a Sábado: 09h às 20h</p>
                  <p className="text-stone-300">Domingo: Fechado</p>
                </div>
              </div>
            </div>
            <div
              className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl 
            border border-zinc-800/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
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
      <footer className="bg-gradient-to-b from-[#0A0A0A] to-black py-12 border-t border-zinc-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="w-32 relative h-16">
              <Image
                src="/logo.png"
                alt="Estudio Bispo Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex space-x-8">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className="text-stone-400 hover:text-amber-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-stone-400 mb-2">
                &copy; 2024 Estudio Bispo. Todos os direitos reservados.
              </p>
              <p className="text-stone-500 text-sm">
                Desenvolvido com excelência para sua experiência
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
