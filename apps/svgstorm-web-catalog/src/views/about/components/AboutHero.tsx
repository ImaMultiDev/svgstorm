"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/common/SVGStormIcon";
import Image from "next/image";

export function AboutHero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-4 sm:-left-4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-10 right-4 sm:-right-4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute top-40 left-25 opacity-15 pointer-events-none"
      >
        <div className="hidden lg:block w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[160px] lg:h-[160px] items-center opacity-80 justify-center -rotate-15">
          <Image
            src="/SVGStorm_logo.svg"
            alt="SVGStorm Logo"
            width={480}
            height={480}
            className="w-full h-full opacity-60"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute  lg:top-40 lg:right-25 opacity-15 pointer-events-none"
      >
        <div className="w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[160px] lg:h-[160px] flex items-center opacity-20 lg:opacity-80 justify-center lg:rotate-15">
          <Image
            src="/SVGStorm_logo.svg"
            alt="SVGStorm Logo"
            width={480}
            height={480}
            className="w-full h-full opacity-60"
          />
        </div>
      </motion.div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
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
              <Icon name="user" size={16} />
            </span>
            Conoce al Desarrollador
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Sobre SVGStorm
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent font-light mt-2">
              & su Creador
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Una biblioteca moderna de iconos SVG creada con pasión por la
            elegancia y la funcionalidad.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
