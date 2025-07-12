"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/common/SVGStormIcon";

export function AboutDeveloper() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-4">
            El Desarrollador
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Hola, soy Imamultidev 👨‍💻
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Soy un desarrollador full-stack apasionado por crear soluciones
                elegantes y funcionales. Mi enfoque se centra en la experiencia
                del usuario y en escribir código limpio y mantenible.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Con experiencia en el ecosistema de JavaScript/TypeScript, me
                especializo en React, Next.js, Node.js y tecnologías modernas de
                desarrollo web.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                  Full-Stack Developer
                </span>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
                  React Specialist
                </span>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                  TypeScript Expert
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 shadow-xl">
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="user" size={64} className="text-slate-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Imamultidev
                </h4>
                <p className="text-slate-600 mb-4">Full-Stack Developer</p>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center text-sm text-slate-500">
                    <Icon
                      name="briefcase-business"
                      size={16}
                      className="mr-2"
                    />
                    Freelancer
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Icon name="calendar" size={16} className="mr-2" />
                    2024
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
