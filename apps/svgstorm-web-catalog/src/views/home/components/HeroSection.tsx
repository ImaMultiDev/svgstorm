"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/common/SVGStormIcon";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-4 sm:-left-4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-10 right-4 sm:-right-4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-8 left-8 sm:-bottom-8 sm:left-20 w-72 h-72 sm:w-96 sm:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>
      {/* Logo de fondo decorativo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute -top-5 -left-5 lg:top-5 lg:-left-10 opacity-15 pointer-events-none"
      >
        <div className="w-48 h-48 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[360px] lg:h-[360px] xl:w-[420px] xl:h-[420px] flex items-center opacity-30 lg:opacity-60 justify-center -rotate-15">
          <Image
            src="/SVGStorm_logo.svg"
            alt="SVGStorm Logo"
            width={480}
            height={480}
            className="w-full h-full opacity-60"
          />
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 text-sm font-medium mb-6 sm:mb-8"
          >
            <span className="mr-2 text-yellow-400">
              <Icon name="sparkles" size={16} />
            </span>
            Biblioteca Premium de Iconos SVG
          </motion.div>

          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Descubre Iconos
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent font-light mt-2">
                Extraordinarios
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Explora nuestra biblioteca profesional de iconos SVG.
            <span className="text-purple-200 font-medium">
              {" "}
              Elegantes, optimizados y listos para usar en tus proyectos.
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 sm:mb-12 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:from-purple-700 hover:to-blue-700 w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("search-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon
                name="search"
                size={20}
                className="mr-3 transition-transform group-hover:scale-110"
              />
              Explorar Iconos
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/docs"
                className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
              >
                <Icon
                  name="documentation"
                  size={20}
                  className="mr-3 transition-transform group-hover:rotate-12"
                />
                Ver Docs
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400 px-4"
          >
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              API REST
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              React Client
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              TypeScript
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              Open Source
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
