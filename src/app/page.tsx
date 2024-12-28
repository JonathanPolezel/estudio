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
    image: "/platinum.jpeg",
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
    image: "/eyebrow.jpeg",
    description: "Modelagem precisa para harmonização facial",
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
    <div className="min-h-screen bg-[#1A1310]">
      {" "}
      {/* Updated background to a deep brown */}
      {/* Navigation */}
      <nav className="fixed w-full bg-gradient-to-b from-[#1A1310]/95 to-[#1A1310]/85 backdrop-blur-md border-b border-[#3D2E26]/30 z-50">
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
                  className="text-[#E6D5B8] hover:text-[#C4A484] transition-all duration-300 text-sm uppercase tracking-wider font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="md:hidden text-[#E6D5B8] hover:text-[#C4A484] transition-colors duration-300">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1310]/80 via-[#1A1310]/60 to-[#1A1310]/90 z-10" />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#E6D5B8] to-[#C4A484]">
                ESTÚDIO BISPO
              </span>
            </h1>
            <p className="text-xl text-[#E6D5B8] mb-8 leading-relaxed max-w-2xl">
              Onde a tradição encontra a excelência moderna. Uma experiência
              única em barbearia premium, criando estilos que definem gerações
              desde 2024.
            </p>
            <a
              href="#services"
              className="inline-block bg-gradient-to-r from-[#C4A484] to-[#8B4513] text-[#E6D5B8] px-8 py-4 rounded-lg 
              hover:from-[#8B4513] hover:to-[#C4A484] transition-all duration-300 text-lg font-semibold shadow-xl 
              hover:shadow-[#8B4513]/20 transform hover:-translate-y-1"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="serviços"
        className="py-24 bg-gradient-to-b from-[#1A1310] via-[#2A1F1A] to-[#1A1310]"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-[#E6D5B8] text-center mb-12 max-w-2xl mx-auto">
            Oferecemos uma experiência premium de cuidados masculinos,
            combinando técnicas tradicionais com tendências contemporâneas.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-[#2A1F1A] to-[#1A1310] shadow-xl 
                border border-[#3D2E26]/50 hover:border-[#C4A484]/30 transition-all duration-300"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1310]/90 via-transparent to-transparent z-10" />
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
                  <p className="text-[#E6D5B8] text-sm mb-3">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#C4A484] text-lg font-semibold">
                      {service.price}
                    </span>
                    <span className="text-[#E6D5B8] text-sm">
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
      <section id="galeria" className="py-24 bg-[#1A1310]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">
              Nossa Galeria
            </span>
          </h2>
          <p className="text-[#E6D5B8] text-center mb-12 max-w-2xl mx-auto">
            Conheça um pouco do nosso trabalho através das transformações que
            realizamos e do ambiente sofisticado do nosso espaço.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl 
                shadow-lg border border-[#3D2E26]/50 hover:border-[#C4A484]/30 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#1A1310]/90 via-[#1A1310]/30 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                />
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full 
                  group-hover:translate-y-0 transition-transform duration-500 z-20"
                >
                  <p className="text-[#E6D5B8] text-sm font-medium">
                    {item.alt}
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#1A1310]/20 group-hover:bg-transparent transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section with New Layout */}
      <section
        id="sobre"
        className="py-24 bg-gradient-to-b from-[#1A1310] via-[#2A1F1A] to-[#1A1310] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('/texture.png')] bg-repeat opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1310]/80 to-transparent z-10" />
              <Image
                src="/about-image.jpg"
                alt="Nossa História"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-[#C4A484]">
                    <Image
                      src="/founder.jpg"
                      alt="Fundador"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#E6D5B8] font-semibold">
                      Ygor Bispo e Yuri Bispo
                    </h4>
                    <p className="text-[#C4A484] text-sm">Fundadores</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">
                  Nossa História
                </span>
              </h2>

              <div className="space-y-4">
                <p className="text-[#E6D5B8] leading-relaxed">
                  O Estudio Bispo nasceu da paixão por transformar a experiência
                  tradicional de barbearia em algo extraordinário. Em cada
                  corte, em cada atendimento, buscamos a excelência e a
                  satisfação total de nossos clientes.
                </p>

                <p className="text-[#E6D5B8] leading-relaxed">
                  Nossa equipe de profissionais altamente qualificados está
                  comprometida em proporcionar não apenas um serviço, mas uma
                  experiência única, utilizando produtos premium e técnicas
                  aperfeiçoadas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#2A1F1A] to-[#1A1310] border border-[#3D2E26]/50">
                  <h4 className="text-[#C4A484] font-semibold mb-2">
                    Experiência
                  </h4>
                  <p className="text-[#E6D5B8] text-3xl font-bold">10+</p>
                  <p className="text-[#E6D5B8]/70 text-sm">Anos no mercado</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[#2A1F1A] to-[#1A1310] border border-[#3D2E26]/50">
                  <h4 className="text-[#C4A484] font-semibold mb-2">
                    Clientes
                  </h4>
                  <p className="text-[#E6D5B8] text-3xl font-bold">5k+</p>
                  <p className="text-[#E6D5B8]/70 text-sm">Satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contato" className="py-24 bg-[#1A1310] relative">
        <div className="absolute inset-0 bg-[url('/grain-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">
              Contato
            </span>
          </h2>
          <p className="text-[#E6D5B8] text-center mb-12 max-w-2xl mx-auto">
            Estamos prontos para proporcionar a você uma experiência única de
            cuidado e estilo.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              {/* Info Cards */}
              <div className="space-y-6">
                <div
                  className="group flex items-start space-x-6 p-8 rounded-xl bg-gradient-to-br from-[#2A1F1A] to-[#1A1310] 
                  border border-[#3D2E26]/50 hover:border-[#C4A484]/30 transition-all duration-300 transform hover:-translate-y-1"
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
                  </div>
                </div>

                <div
                  className="group flex items-start space-x-6 p-8 rounded-xl bg-gradient-to-br from-[#2A1F1A] to-[#1A1310] 
                  border border-[#3D2E26]/50 hover:border-[#C4A484]/30 transition-all duration-300 transform hover:-translate-y-1"
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

                <div
                  className="group flex items-start space-x-6 p-8 rounded-xl bg-gradient-to-br from-[#2A1F1A] to-[#1A1310] 
                  border border-[#3D2E26]/50 hover:border-[#C4A484]/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0">
                    <Phone className="text-[#C4A484] w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#C4A484] mb-2">
                      Contatos
                    </h3>
                    <div className="space-y-2">
                      <p className="text-[#E6D5B8]">(13) 99139-0010</p>
                      <p className="text-[#E6D5B8]">(13) 99999-9999</p>
                      <p className="text-[#E6D5B8]">contato@estudiobispo.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="relative h-full min-h-[600px]">
              <div
                className="absolute inset-0 rounded-xl overflow-hidden border border-[#3D2E26]/50 
                shadow-2xl transition-all duration-300 hover:border-[#C4A484]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1310]/50 to-transparent z-10" />
                <Image
                  src="/map.jpg"
                  alt="Localização Estudio Bispo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#1A1310]/90 backdrop-blur-md rounded-lg border border-[#3D2E26]/50 z-20">
                  <h4 className="text-[#C4A484] font-semibold mb-2">
                    Visite-nos
                  </h4>
                  <p className="text-[#E6D5B8] text-sm">
                    Estamos localizados em uma região de fácil acesso, com
                    estacionamento próximo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#1A1310] to-black py-16 border-t border-[#3D2E26]/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="space-y-4">
              <div className="w-32 relative h-16">
                <Image
                  src="/logo.png"
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
                Desenvolvido pelo Jonathan Souza Moyano.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
