import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick and Morty Characters - Conexa ",
  description: "Ssr. Frontend Developer (NextJS) Technical Test - Conexa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4">
          <h1 className="text-3xl font-bold">Rick and Morty Characters</h1>
        </header>
        <main className="min-h-screen p-4 sm:p-6 font-[family-name:var(--font-geist-sans)]">
          {children}
        </main>
      </body>
    </html>
  );
}
