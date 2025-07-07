"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "svgstorm-client";

export default function DocsHero() {
  const apiBaseUrl = "https://overflowing-adaptation-production.up.railway.app";

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 text-sm font-medium mb-8"
          >
            <Icon
              name="documentation"
              size={16}
              color="currentColor"
              className="mr-2"
              apiBaseUrl={apiBaseUrl}
            />
            Documentación Completa
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            SVGStorm
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-purple-300 mt-2">
              Developer Guide
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Domina la integración de iconos SVG con nuestra librería React +
            TypeScript.
            <span className="text-purple-200 font-medium">
              {" "}
              Componentes optimizados, caché inteligente y documentación
              completa.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <motion.a
              href="https://overflowing-adaptation-production.up.railway.app/api/icons"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:bg-purple-50"
            >
              <Icon
                name="external-link"
                size={20}
                color="currentColor"
                className="mr-3 transition-transform group-hover:rotate-12"
                apiBaseUrl={apiBaseUrl}
              />
              Explorar API
              <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                Live
              </span>
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
              >
                <Icon
                  name="folder"
                  size={20}
                  color="white"
                  className="mr-3 transition-transform group-hover:-translate-x-1"
                  apiBaseUrl={apiBaseUrl}
                />
                Ver Catálogo
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center items-center space-x-6 text-sm text-slate-400"
          >
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              React 18+
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              TypeScript
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              API REST
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
