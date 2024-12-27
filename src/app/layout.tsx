import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
