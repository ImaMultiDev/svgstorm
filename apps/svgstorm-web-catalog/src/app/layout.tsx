import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SVGStormProvider } from "@/contexts/SVGStormContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "SVGStorm - Professional Icon Library",
  description:
    "Discover and implement beautiful SVG icons with the SVGStorm library. Professional, elegant, and developer-friendly.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-br from-gray-50 to-blue-50/30 min-h-screen overflow-x-hidden">
        <SVGStormProvider apiBaseUrl="https://overflowing-adaptation-production.up.railway.app">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </SVGStormProvider>
      </body>
    </html>
  );
}
