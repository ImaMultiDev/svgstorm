"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", emoji: "🐈‍⬛", href: "#" },
    { name: "LinkedIn", emoji: "📄", href: "#" },
    { name: "Portfolio", emoji: "🌐", href: "#" },
    { name: "Email", emoji: "✉️", href: "#" },
  ];

  const footerLinks = [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Licensing", href: "#" },
  ];

  return (
    <footer className="bg-white/95 backdrop-blur-md border-t border-gray-200/50 mt-20">
      <div className=" mx-auto">
        <div className="py-6">
          <div className="flex px-4 lg:px-24 lg:flex-row flex-col justify-between items-center space-y-4 md:space-y-0">
            {/* Logo y redes sociales */}
            <div className="flex flex-col space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-white shadow-sm border border-gray-200">
                    <Image
                      src="/SVGStorm_logo.svg"
                      alt="SVGStorm Logo"
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    SVGStorm
                  </h3>
                  <p className="text-sm text-gray-500 -mt-1">
                    Professional Icon Library
                  </p>
                </div>
              </motion.div>

              {/* Redes sociales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
                    title={social.name}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      {social.emoji}
                    </span>
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Links de páginas */}
            <div className="flex md:gap-16 lg:gap-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:text-center"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Páginas
                </h4>
                <div className="space-y-3">
                  <Link
                    href="/"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Catálogo
                  </Link>
                  <Link
                    href="/docs"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Documentación
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contacto
                  </Link>
                </div>
              </motion.div>

              {/* Links legales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:text-center"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Legal
                </h4>
                <div className="space-y-3">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright final */}
        <div className="border-t-2 border-gray-500/30 py-6">
          <div className="flex px-4 lg:px-24 flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-500"
            >
              © 2025 SVGStorm. All rights reserved.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500"
            >
              Powered by Next.js & TypeScript
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
