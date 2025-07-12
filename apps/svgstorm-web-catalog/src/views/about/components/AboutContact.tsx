"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/common/SVGStormIcon";

export function AboutContact() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-4">
            ¿Te interesa colaborar?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Si tienes alguna pregunta, sugerencia o te interesa colaborar en
              futuros proyectos, no dudes en contactarme.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Icon name="mail" size={32} className="text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Contacto
              </h3>
              <p className="text-slate-600 mb-6">
                Siempre estoy abierto a nuevas oportunidades y conversaciones
                interesantes.
              </p>

              <motion.a
                href="mailto:contact@imamultidev.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
              >
                <Icon name="mail" size={20} className="mr-3" />
                contact@imamultidev.dev
              </motion.a>

              <p className="text-sm text-slate-500 mt-4">
                Respondo usualmente en 24-48 horas
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
