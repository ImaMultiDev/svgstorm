"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/common/SVGStormIcon";

export function AboutIntention() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-100 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-4">
            La Intención de SVGStorm
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-200/50">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Icon name="target" size={32} className="text-white" />
              </div>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">SVGStorm</strong> nació de la
                necesidad de tener una biblioteca de iconos SVG moderna,
                elegante y fácil de usar. Muchas veces, como desarrolladores,
                perdemos tiempo buscando iconos consistentes que se adapten a
                nuestros proyectos.
              </p>
              <p>
                El objetivo principal es proporcionar una solución completa que
                incluya no solo una amplia colección de iconos profesionales,
                sino también las herramientas necesarias para integrarlos
                fácilmente en cualquier proyecto de React o aplicación web.
              </p>
              <p>
                Esta aplicación representa mi visión de cómo debería ser una
                biblioteca de iconos moderna:
                <strong className="text-purple-600">
                  {" "}
                  accesible, elegante, y completamente funcional
                </strong>
                .
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Icon name="sparkles" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Elegante</h4>
                <p className="text-sm text-slate-600">
                  Diseño moderno y profesional
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Icon name="zap" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Funcional</h4>
                <p className="text-sm text-slate-600">
                  Herramientas completas y fáciles de usar
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Icon name="heart" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Accesible</h4>
                <p className="text-sm text-slate-600">
                  Fácil integración y uso
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
