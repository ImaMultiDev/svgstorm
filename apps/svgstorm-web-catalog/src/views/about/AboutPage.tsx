"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/common/SVGStormIcon";
import Image from "next/image";

export default function AboutPage() {
  const technologies = [
    {
      name: "Next.js",
      icon: "code-brackets",
      color: "from-gray-800 to-gray-600",
    },
    {
      name: "TypeScript",
      icon: "code-xml",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Tailwind CSS",
      icon: "palette",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Prisma",
      icon: "database-zap",
      color: "from-indigo-600 to-purple-600",
    },
    {
      name: "PostgreSQL",
      icon: "database",
      color: "from-blue-700 to-indigo-700",
    },
    {
      name: "Framer Motion",
      icon: "sparkles",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "React Hook Form",
      icon: "brackets",
      color: "from-emerald-600 to-green-600",
    },
    { name: "Vercel", icon: "cloud", color: "from-gray-900 to-black" },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}

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
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[160px] lg:h-[160px] flex items-center opacity-80 justify-center -rotate-15">
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
          className="absolute top-40 right-25 opacity-15 pointer-events-none"
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[160px] lg:h-[160px] flex items-center opacity-80 justify-center rotate-15">
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

      {/* Developer Section */}
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
                  Soy un desarrollador full-stack apasionado por crear
                  soluciones elegantes y funcionales. Mi enfoque se centra en la
                  experiencia del usuario y en escribir código limpio y
                  mantenible.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Con experiencia en el ecosistema de JavaScript/TypeScript, me
                  especializo en React, Next.js, Node.js y tecnologías modernas
                  de desarrollo web.
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

      {/* App Intention Section */}
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
                  <strong className="text-slate-900">SVGStorm</strong> nació de
                  la necesidad de tener una biblioteca de iconos SVG moderna,
                  elegante y fácil de usar. Muchas veces, como desarrolladores,
                  perdemos tiempo buscando iconos consistentes que se adapten a
                  nuestros proyectos.
                </p>
                <p>
                  El objetivo principal es proporcionar una solución completa
                  que incluya no solo una amplia colección de iconos
                  profesionales, sino también las herramientas necesarias para
                  integrarlos fácilmente en cualquier proyecto de React o
                  aplicación web.
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
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Elegante
                  </h4>
                  <p className="text-sm text-slate-600">
                    Diseño moderno y profesional
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <Icon name="zap" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Funcional
                  </h4>
                  <p className="text-sm text-slate-600">
                    Herramientas completas y fáciles de usar
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <Icon name="heart" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Accesible
                  </h4>
                  <p className="text-sm text-slate-600">
                    Fácil integración y uso
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Components Section */}
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
              SVGStorm está compuesto por tres partes principales que trabajan
              en conjunto para ofrecer una experiencia completa
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

      {/* Technologies Section */}
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
              Stack Tecnológico
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tecnologías modernas y robustas que impulsan SVGStorm
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200/50 text-center hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={tech.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm">
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </div>
  );
}
