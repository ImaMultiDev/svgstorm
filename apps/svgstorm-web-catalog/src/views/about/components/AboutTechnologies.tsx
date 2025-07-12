"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/common/SVGStormIcon";

export function AboutTechnologies() {
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
  );
} 