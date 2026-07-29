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
  metadataBase: new URL("https://sohansaha.vercel.app"),
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

import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { FilmGrain } from "@/components/FilmGrain";
import { ClientWrapper } from "@/components/ClientWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <FilmGrain />
          <CustomCursor />
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
