import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sohan Saha | AI & Machine Learning Engineer",
  description: "Portfolio of Sohan Saha, an AI & Machine Learning student and Technical Co-Head of IEEE TEMS REVA University.",
  keywords: ["AI Engineer", "Machine Learning", "Data Science", "Sohan Saha", "REVA University", "Portfolio"],
  openGraph: {
    title: "Sohan Saha | AI Engineer",
    description: "Building Intelligent Solutions Through AI, Innovation, and Leadership.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohan Saha | AI Engineer",
    description: "Building Intelligent Solutions Through AI, Innovation, and Leadership.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
