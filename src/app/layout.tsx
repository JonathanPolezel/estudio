import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudio Bispo - Premium Barbershop",
  description:
    "Barbearia premium oferecendo cortes clássicos e modernos desde 2024.",
  keywords:
    "barbearia, corte de cabelo, barba, estúdio bispo, barbearia premium",
  openGraph: {
    title: "Estudio Bispo - Premium Barbershop",
    description:
      "Barbearia premium oferecendo cortes clássicos e modernos desde 2024.",
    images: ["/favicon.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.jpg" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
