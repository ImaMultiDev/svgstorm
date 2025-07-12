"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/common/SVGStormIcon";

export function AboutComponents() {
  const appComponents = [
    {
      title: "SVGStorm API",
      description:
        "API REST robusta construida con Next.js que gestiona la base de datos de iconos, proporciona endpoints para búsqueda, filtrado y acceso a los iconos SVG.",
      icon: "network",
      features: [
        "Endpoints REST",
        "Base de datos PostgreSQL",
        "Prisma ORM",
        "Búsqueda avanzada",
      ],
    },
    {
      title: "Web Catalog",
      description:
        "Interfaz web elegante y responsive que permite explorar, buscar y visualizar todos los iconos disponibles en la biblioteca SVGStorm.",
      icon: "monitor",
      features: [
        "Catálogo interactivo",
        "Búsqueda en tiempo real",
        "Vista responsive",
        "Paginación optimizada",
      ],
    },
    {
      title: "Client Package",
      description:
        "Paquete NPM que facilita la integración de iconos SVGStorm en cualquier proyecto React con hooks y componentes listos para usar.",
      icon: "package",
      features: [
        "Hooks personalizados",
        "Componentes React",
        "TypeScript",
        "Fácil integración",
      ],
    },
  ];

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
            Arquitectura del Proyecto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            SVGStorm está compuesto por tres partes principales que trabajan en
            conjunto para ofrecer una experiencia completa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {appComponents.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      name={component.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {component.title}
                  </h3>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {component.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3">
                    Características principales:
                  </h4>
                  {component.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
