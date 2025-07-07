"use client";

import { motion } from "framer-motion";
import { DocsContentProps } from "@/interfaces";
import CodeBlock from "./CodeBlock";
import { useState } from "react";
import { Icon } from "svgstorm-client";

export default function DocsContent({ activeTab }: DocsContentProps) {
  const [usageTab, setUsageTab] = useState<"component" | "hook">("component");

  // URL de la API
  const apiBaseUrl = "https://overflowing-adaptation-production.up.railway.app";

  const installationCode = `# NPM
npm install svgstorm-client

# Yarn
yarn add svgstorm-client

# PNPM
pnpm add svgstorm-client`;

  const basicUsageCode = `import { Icon } from 'svgstorm-client'

function MyComponent() {
  return (
    <div>
      <Icon name="sun" size={24} />
      <Icon name="moon" size={32} color="#3B82F6" />
      <Icon name="star" className="text-yellow-500" />
    </div>
  )
}`;

  const hookUsageCode = `import { useIcon } from 'svgstorm-client'

function CustomIconComponent() {
  const { data, loading, error } = useIcon('sun', {
    apiBaseUrl: 'https://overflowing-adaptation-production.up.railway.app',
    cacheTime: 10 * 60 * 1000 // 10 minutos
  })

  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error: {error}</div>
  if (!data) return null

  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <div dangerouslySetInnerHTML={{ __html: data.svg_code }} />
    </div>
  )
}`;

  const renderContent = () => {
    switch (activeTab) {
      case "getting-started":
        return (
          <motion.div
            key="getting-started"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8">
                🚀 Primeros Pasos
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                    ¿Qué es SVGStorm?
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    SVGStorm es una librería React + TypeScript diseñada para
                    integrar fácilmente iconos SVG desde nuestra API REST.
                    Ofrece componentes optimizados, caché inteligente y una
                    experiencia de desarrollo excepcional.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                    Características principales
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg">
                          Componente React simple
                        </h4>
                        <p className="text-slate-600 mt-1">
                          Integración directa con props intuitivas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg">
                          Caché inteligente
                        </h4>
                        <p className="text-slate-600 mt-1">
                          Reduce llamadas API con caché en memoria
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200/50">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg">
                          TypeScript nativo
                        </h4>
                        <p className="text-slate-600 mt-1">
                          Tipado completo y autocompletado
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/50">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg">
                          Ligereza extrema
                        </h4>
                        <p className="text-slate-600 mt-1">
                          Sin dependencias pesadas, solo React
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-blue-600 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-lg">
                        Requisitos
                      </h4>
                      <p className="text-slate-700 mt-2">
                        React 18+ • TypeScript (recomendado) • Acceso a internet
                        para la API
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "installation":
        return (
          <motion.div
            key="installation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8">
                📦 Instalación
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                    Instalar el paquete
                  </h3>
                  <p className="text-slate-700 mb-6 text-lg">
                    Elige tu gestor de paquetes preferido para instalar
                    svgstorm-client:
                  </p>
                  <CodeBlock
                    code={installationCode}
                    language="bash"
                    title="Línea de comandos"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                    Configuración básica
                  </h3>
                  <p className="text-slate-700 mb-6 text-lg">
                    Una vez instalado, puedes comenzar a usar los componentes
                    inmediatamente:
                  </p>
                  <CodeBlock
                    code={basicUsageCode}
                    language="tsx"
                    title="App.tsx"
                  />
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-green-600 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-lg">
                        ¡Listo para usar!
                      </h4>
                      <p className="text-slate-700 mt-2">
                        No necesitas configuración adicional. La librería se
                        conecta automáticamente a nuestra API.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "usage":
        return (
          <motion.div
            key="usage"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8">
                ⚡ Uso Básico
              </h2>

              {/* Tabs Navigation */}
              <div className="flex space-x-1 mb-8 bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => setUsageTab("component")}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    usageTab === "component"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a4 4 0 004 4h4V5z"
                    />
                  </svg>
                  <span>Componente Icon</span>
                </button>
                <button
                  onClick={() => setUsageTab("hook")}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    usageTab === "hook"
                      ? "bg-white text-purple-600 shadow-md"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span>Hook useIcon</span>
                </button>
              </div>

              {/* Content based on selected tab */}
              <div className="space-y-8">
                {usageTab === "component" && (
                  <motion.div
                    key="component"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                  >
                    {/* Componente Icon Section */}
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                        🎯 Componente Icon
                      </h3>
                      <p className="text-slate-700 mb-6 text-lg">
                        El componente principal para mostrar iconos SVG con
                        props personalizables y carga optimizada:
                      </p>

                      {/* Props Table */}
                      <div className="overflow-hidden bg-slate-50 rounded-xl mb-8">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                          <h4 className="text-lg font-semibold">
                            📋 Props del Componente Icon
                          </h4>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead className="bg-slate-200">
                              <tr>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Prop
                                </th>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Tipo
                                </th>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Por defecto
                                </th>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Descripción
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-slate-200 bg-white">
                                <td className="py-4 px-6">
                                  <code className="font-mono text-sm bg-red-50 text-red-700 px-2 py-1 rounded border border-red-200">
                                    name*
                                  </code>
                                </td>
                                <td className="py-4 px-6 text-slate-700 font-mono">
                                  string
                                </td>
                                <td className="py-4 px-6">
                                  <span className="text-red-600 font-semibold">
                                    requerido
                                  </span>
                                </td>
                                <td className="py-4 px-6 text-slate-700">
                                  Nombre del icono a mostrar (ej:
                                  &quot;sun&quot;, &quot;moon&quot;,
                                  &quot;star&quot;)
                                </td>
                              </tr>
                              <tr className="border-b border-slate-200 bg-slate-25">
                                <td className="py-4 px-6">
                                  <code className="font-mono text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
                                    size
                                  </code>
                                </td>
                                <td className="py-4 px-6 text-slate-700 font-mono">
                                  number
                                </td>
                                <td className="py-4 px-6 text-slate-700">24</td>
                                <td className="py-4 px-6 text-slate-700">
                                  Tamaño del icono en píxeles (ancho y alto)
                                </td>
                              </tr>
                              <tr className="border-b border-slate-200 bg-white">
                                <td className="py-4 px-6">
                                  <code className="font-mono text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
                                    color
                                  </code>
                                </td>
                                <td className="py-4 px-6 text-slate-700 font-mono">
                                  string
                                </td>
                                <td className="py-4 px-6 text-slate-500">
                                  undefined
                                </td>
                                <td className="py-4 px-6 text-slate-700">
                                  Color del icono (hex, rgb, hsl, named colors)
                                </td>
                              </tr>
                              <tr className="border-b border-slate-200 bg-slate-25">
                                <td className="py-4 px-6">
                                  <code className="font-mono text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
                                    className
                                  </code>
                                </td>
                                <td className="py-4 px-6 text-slate-700 font-mono">
                                  string
                                </td>
                                <td className="py-4 px-6 text-slate-500">
                                  undefined
                                </td>
                                <td className="py-4 px-6 text-slate-700">
                                  Clases CSS adicionales (Tailwind, CSS custom,
                                  etc.)
                                </td>
                              </tr>
                              <tr className="bg-white">
                                <td className="py-4 px-6">
                                  <code className="font-mono text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
                                    apiBaseUrl
                                  </code>
                                </td>
                                <td className="py-4 px-6 text-slate-700 font-mono">
                                  string
                                </td>
                                <td className="py-4 px-6 text-slate-700">
                                  API por defecto
                                </td>
                                <td className="py-4 px-6 text-slate-700">
                                  URL base de la API SVGStorm (opcional si usas
                                  contexto)
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Ejemplo de código */}
                      <CodeBlock
                        code={basicUsageCode}
                        language="tsx"
                        title="Ejemplo básico del componente Icon"
                      />

                      {/* Demo en vivo */}
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-dashed border-blue-200">
                        <h4 className="font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                          <span className="text-2xl">🚀</span>
                          <span>Demo en Vivo - Componente Icon:</span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Básico */}
                          <div className="bg-white rounded-lg p-4 shadow-sm border">
                            <h5 className="font-semibold text-slate-700 mb-3">
                              Básico
                            </h5>
                            <div className="flex items-center space-x-4">
                              <Icon
                                name="plus"
                                size={24}
                                apiBaseUrl={apiBaseUrl}
                              />
                              <Icon
                                name="check"
                                size={24}
                                apiBaseUrl={apiBaseUrl}
                              />
                              <Icon
                                name="save"
                                size={24}
                                apiBaseUrl={apiBaseUrl}
                              />
                            </div>
                          </div>

                          {/* Con colores */}
                          <div className="bg-white rounded-lg p-4 shadow-sm border">
                            <h5 className="font-semibold text-slate-700 mb-3">
                              Con Colores
                            </h5>
                            <div className="flex items-center space-x-4">
                              <Icon
                                name="heart"
                                size={24}
                                color="#EF4444"
                                apiBaseUrl={apiBaseUrl}
                              />
                              <Icon
                                name="star"
                                size={24}
                                color="#F59E0B"
                                apiBaseUrl={apiBaseUrl}
                              />
                              <Icon
                                name="home"
                                size={24}
                                color="#10B981"
                                apiBaseUrl={apiBaseUrl}
                              />
                            </div>
                          </div>

                          {/* Con clases CSS */}
                          <div className="bg-white rounded-lg p-4 shadow-sm border">
                            <h5 className="font-semibold text-slate-700 mb-3">
                              Con CSS
                            </h5>
                            <div className="flex items-center space-x-4">
                              <Icon
                                name="star"
                                size={24}
                                className="text-yellow-500"
                                apiBaseUrl={apiBaseUrl}
                              />
                              <Icon
                                name="heart"
                                size={24}
                                className="text-pink-500 hover:text-pink-700 transition-colors"
                                apiBaseUrl={apiBaseUrl}
                              />
                              <Icon
                                name="shield-check-2"
                                size={24}
                                className="text-green-600"
                                apiBaseUrl={apiBaseUrl}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Ejemplo práctico: Formulario */}
                        <div className="mt-6 bg-white rounded-lg p-6 shadow-sm border">
                          <h5 className="font-semibold text-slate-900 mb-4">
                            🎯 Ejemplo Práctico: Formulario de Login
                          </h5>
                          <div className="space-y-4 max-w-md">
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon
                                  name="email"
                                  size={20}
                                  color="#6B7280"
                                  apiBaseUrl={apiBaseUrl}
                                />
                              </div>
                              <input
                                type="email"
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="tu@email.com"
                                disabled
                              />
                            </div>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon
                                  name="password"
                                  size={20}
                                  color="#6B7280"
                                  apiBaseUrl={apiBaseUrl}
                                />
                              </div>
                              <input
                                type="password"
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="••••••••"
                                disabled
                              />
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
                              <Icon
                                name="check"
                                size={20}
                                color="white"
                                apiBaseUrl={apiBaseUrl}
                              />
                              <span>Iniciar Sesión</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {usageTab === "hook" && (
                  <motion.div
                    key="hook"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                  >
                    {/* Hook useIcon Section */}
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                        🎣 Hook useIcon
                      </h3>
                      <p className="text-slate-700 mb-6 text-lg">
                        Para casos de uso avanzados donde necesitas acceso
                        directo a los datos del icono y control total sobre el
                        rendering:
                      </p>

                      {/* Hook Options Table */}
                      <div className="overflow-hidden bg-slate-50 rounded-xl mb-8">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4">
                          <h4 className="text-lg font-semibold">
                            ⚙️ Opciones del Hook useIcon
                          </h4>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead className="bg-slate-200">
                              <tr>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Parámetro
                                </th>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Tipo
                                </th>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Por defecto
                                </th>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Descripción
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-slate-200 bg-white">
                                <td className="py-4 px-6">
                                  <code className="font-mono text-sm bg-red-50 text-red-700 px-2 py-1 rounded border border-red-200">
                                    iconName*
                                  </code>
                                </td>
                                <td className="py-4 px-6 text-slate-700 font-mono">
                                  string
                                </td>
                                <td className="py-4 px-6">
                                  <span className="text-red-600 font-semibold">
                                    requerido
                                  </span>
                                </td>
                                <td className="py-4 px-6 text-slate-700">
                                  Nombre del icono a cargar desde la API
                                </td>
                              </tr>
                              <tr className="border-b border-slate-200 bg-slate-25">
                                <td className="py-4 px-6">
                                  <code className="font-mono text-sm bg-purple-50 text-purple-700 px-2 py-1 rounded border border-purple-200">
                                    options
                                  </code>
                                </td>
                                <td className="py-4 px-6 text-slate-700 font-mono">
                                  UseIconOptions
                                </td>
                                <td className="py-4 px-6 text-slate-700">{}</td>
                                <td className="py-4 px-6 text-slate-700">
                                  Configuración opcional (apiBaseUrl, cacheTime)
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Return Value Table */}
                      <div className="overflow-hidden bg-slate-50 rounded-xl mb-8">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4">
                          <h4 className="text-lg font-semibold">
                            📤 Valor de Retorno
                          </h4>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead className="bg-slate-200">
                              <tr>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Propiedad
                                </th>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Tipo
                                </th>
                                <th className="text-left py-4 px-6 font-semibold text-slate-800">
                                  Descripción
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-slate-200 bg-white">
                                <td className="py-4 px-6">
                                  <code className="font-mono text-sm bg-green-50 text-green-700 px-2 py-1 rounded border border-green-200">
                                    data
                                  </code>
                                </td>
                                <td className="py-4 px-6 text-slate-700 font-mono">
                                  IconData | null
                                </td>
                                <td className="py-4 px-6 text-slate-700">
                                  Datos del icono (nombre, SVG, metadatos) o
                                  null si no se ha cargado
                                </td>
                              </tr>
                              <tr className="border-b border-slate-200 bg-slate-25">
                                <td className="py-4 px-6">
                                  <code className="font-mono text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
                                    loading
                                  </code>
                                </td>
                                <td className="py-4 px-6 text-slate-700 font-mono">
                                  boolean
                                </td>
                                <td className="py-4 px-6 text-slate-700">
                                  true mientras se carga el icono desde la API
                                </td>
                              </tr>
                              <tr className="bg-white">
                                <td className="py-4 px-6">
                                  <code className="font-mono text-sm bg-red-50 text-red-700 px-2 py-1 rounded border border-red-200">
                                    error
                                  </code>
                                </td>
                                <td className="py-4 px-6 text-slate-700 font-mono">
                                  string | null
                                </td>
                                <td className="py-4 px-6 text-slate-700">
                                  Mensaje de error si la carga falla, null si no
                                  hay error
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Ejemplo de código */}
                      <CodeBlock
                        code={hookUsageCode}
                        language="tsx"
                        title="Ejemplo avanzado con hook useIcon"
                      />

                      {/* Demo en vivo del hook */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-dashed border-purple-200">
                        <h4 className="font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                          <span className="text-2xl">🎮</span>
                          <span>Demo en Vivo - Hook useIcon:</span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Estado de carga */}
                          <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <h5 className="font-semibold text-slate-700 mb-3 flex items-center space-x-2">
                              <Icon
                                name="loader"
                                size={16}
                                className="animate-spin"
                              />
                              <span>Loading</span>
                            </h5>
                            <div className="text-sm text-gray-600">
                              <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                                loading: true
                              </code>
                            </div>
                          </div>

                          {/* Estado exitoso */}
                          <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <h5 className="font-semibold text-slate-700 mb-3 flex items-center space-x-2">
                              <Icon
                                name="check"
                                size={16}
                                color="#10B981"
                                apiBaseUrl={apiBaseUrl}
                              />
                              <span>Success</span>
                            </h5>
                            <div className="flex items-center space-x-2">
                              <Icon
                                name="shield-check-2"
                                size={24}
                                color="#10B981"
                              />
                              <span className="text-sm text-gray-600">
                                Icon cargado correctamente
                              </span>
                            </div>
                          </div>

                          {/* Estado de error */}
                          <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <h5 className="font-semibold text-slate-700 mb-3 flex items-center space-x-2">
                              <Icon
                                name="alert-triangle"
                                size={16}
                                color="#F59E0B"
                              />
                              <span>Error</span>
                            </h5>
                            <div className="flex items-center space-x-2">
                              <Icon
                                name="alert-triangle"
                                size={24}
                                color="#EF4444"
                              />
                              <span className="text-sm text-red-600">
                                Icono no encontrado
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Ejemplo práctico: Dashboard de estadísticas */}
                        <div className="mt-6 bg-white rounded-lg p-6 shadow-sm border">
                          <h5 className="font-semibold text-slate-900 mb-4">
                            📊 Ejemplo Práctico: Dashboard de Estadísticas
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-blue-600 text-sm font-medium">
                                    Usuarios Activos
                                  </p>
                                  <p className="text-2xl font-bold text-blue-900">
                                    1,234
                                  </p>
                                  <p className="text-blue-500 text-xs">
                                    +12% este mes
                                  </p>
                                </div>
                                <div className="bg-blue-500 rounded-full p-3">
                                  <Icon
                                    name="users-2"
                                    size={24}
                                    color="white"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-green-600 text-sm font-medium">
                                    Ventas del Mes
                                  </p>
                                  <p className="text-2xl font-bold text-green-900">
                                    $15,647
                                  </p>
                                  <p className="text-green-500 text-xs">
                                    +8.3% vs mes anterior
                                  </p>
                                </div>
                                <div className="bg-green-500 rounded-full p-3">
                                  <Icon name="sales" size={24} color="white" />
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-purple-600 text-sm font-medium">
                                    Pedidos
                                  </p>
                                  <p className="text-2xl font-bold text-purple-900">
                                    89
                                  </p>
                                  <p className="text-purple-500 text-xs">
                                    Últimas 24h
                                  </p>
                                </div>
                                <div className="bg-purple-500 rounded-full p-3">
                                  <Icon
                                    name="package-delivery"
                                    size={24}
                                    color="white"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Consejos generales */}
              <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-amber-600 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg mb-2">
                      💡 Consejos de Uso
                    </h4>
                    <ul className="text-slate-700 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>
                          Usa el <strong>componente Icon</strong> para la
                          mayoría de casos simples
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>
                          Usa el <strong>hook useIcon</strong> cuando necesites
                          control avanzado o metadatos
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>
                          Configura el <strong>contexto global</strong> para
                          evitar repetir apiBaseUrl
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>
                          El <strong>caché automático</strong> optimiza las
                          llamadas repetidas a la API
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "examples":
        return (
          <motion.div
            key="examples"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-6">
                🎨 Ejemplos Prácticos
              </h2>
              <p className="text-slate-700 mb-8 text-lg">
                Aquí tienes ejemplos reales de cómo integrar iconos SVG en
                componentes comunes de una aplicación.
              </p>

              <div className="space-y-12">
                {/* Ejemplo 1: Botones */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-slate-800">
                    🔘 Botones con Iconos
                  </h3>

                  <CodeBlock
                    code={`// Botón con icono y texto
<button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
  <Icon name="plus" size={16} color="white" apiBaseUrl={apiBaseUrl} />
  Agregar Elemento
</button>

// Botón con estado de carga
<button 
  onClick={handleSubmit}
  disabled={isButtonLoading}
  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg"
>
  {isButtonLoading ? (
    <Icon name="loading" size={16} color="white" apiBaseUrl={apiBaseUrl} />
  ) : (
    <Icon name="check" size={16} color="white" apiBaseUrl={apiBaseUrl} />
  )}
  {isButtonLoading ? "Guardando..." : "Guardar"}
</button>`}
                    language="tsx"
                    title="Botones interactivos con iconos"
                  />

                  {/* Botones interactivos */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
                      <span className="text-2xl">🎯</span>
                      <span>Botones Interactivos</span>
                    </h4>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          <Icon
                            name="plus"
                            size={20}
                            color="white"
                            apiBaseUrl={apiBaseUrl}
                          />
                          <span>Agregar Elemento</span>
                        </button>
                        <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          <Icon
                            name="save"
                            size={20}
                            color="white"
                            apiBaseUrl={apiBaseUrl}
                          />
                          <span>Guardar Cambios</span>
                        </button>
                        <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                          <Icon
                            name="alert-triangle"
                            size={20}
                            color="white"
                            apiBaseUrl={apiBaseUrl}
                          />
                          <span>Eliminar</span>
                        </button>
                      </div>

                      {/* Botón con estado de loading */}
                      <div className="pt-4 border-t border-gray-200">
                        <h5 className="font-semibold text-slate-700 mb-2">
                          Con estado de loading:
                        </h5>
                        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-75">
                          <Icon
                            name="loader"
                            size={20}
                            color="white"
                            className="animate-spin"
                          />
                          <span>Guardando...</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ejemplo 2: Formulario */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-slate-800">
                    📝 Formularios con Iconos
                  </h3>

                  <CodeBlock
                    code={`// Input con icono
<div className="relative">
  <Icon 
    name="mail" 
    size={20} 
    color="#6B7280" 
    apiBaseUrl={apiBaseUrl}
    className="absolute left-3 top-1/2 transform -translate-y-1/2"
  />
  <input 
    type="email" 
    placeholder="Tu email" 
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
</div>

// Input con icono de contraseña
<div className="relative">
  <Icon 
    name="lock" 
    size={20} 
    color="#6B7280" 
    apiBaseUrl={apiBaseUrl}
    className="absolute left-3 top-1/2 transform -translate-y-1/2"
  />
  <input 
    type="password" 
    placeholder="Tu contraseña" 
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
</div>`}
                    language="tsx"
                    title="Formularios con iconos contextuales"
                  />

                  {/* Formularios contextuales */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
                      <span className="text-2xl">📝</span>
                      <span>Formularios Contextuales</span>
                    </h4>
                    <div className="space-y-4">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Icon
                              name="email"
                              size={20}
                              color="#6B7280"
                              apiBaseUrl={apiBaseUrl}
                            />
                          </div>
                          <input
                            type="email"
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="tu@email.com"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Contraseña
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Icon
                              name="password"
                              size={20}
                              color="#6B7280"
                              apiBaseUrl={apiBaseUrl}
                            />
                          </div>
                          <input
                            type="password"
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="••••••••"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
                          <Icon
                            name="check"
                            size={20}
                            color="white"
                            apiBaseUrl={apiBaseUrl}
                          />
                          <span>Iniciar Sesión</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ejemplo 3: Tarjetas */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-slate-800">
                    🎴 Tarjetas con Iconos
                  </h3>

                  <CodeBlock
                    code={`// Tarjeta de estadística
<div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-lg font-semibold text-slate-900">Usuarios Activos</h3>
      <p className="text-2xl font-bold text-blue-600">1,234</p>
    </div>
    <div className="bg-blue-100 p-3 rounded-full">
      <Icon name="user" size={24} color="#3B82F6" apiBaseUrl={apiBaseUrl} />
    </div>
  </div>
</div>`}
                    language="tsx"
                    title="Tarjetas de estadísticas"
                  />

                  {/* Tarjetas de estadísticas */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
                      <span className="text-2xl">📊</span>
                      <span>Tarjetas de Estadísticas</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-blue-600 text-sm font-medium">
                              Usuarios Activos
                            </p>
                            <p className="text-2xl font-bold text-blue-900">
                              1,234
                            </p>
                            <p className="text-blue-500 text-xs">
                              +12% este mes
                            </p>
                          </div>
                          <div className="bg-blue-500 rounded-full p-3">
                            <Icon
                              name="users-2"
                              size={24}
                              color="white"
                              apiBaseUrl={apiBaseUrl}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-green-600 text-sm font-medium">
                              Ventas del Mes
                            </p>
                            <p className="text-2xl font-bold text-green-900">
                              $15,647
                            </p>
                            <p className="text-green-500 text-xs">
                              +8.3% vs mes anterior
                            </p>
                          </div>
                          <div className="bg-green-500 rounded-full p-3">
                            <Icon
                              name="sales"
                              size={24}
                              color="white"
                              apiBaseUrl={apiBaseUrl}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-purple-600 text-sm font-medium">
                              Pedidos
                            </p>
                            <p className="text-2xl font-bold text-purple-900">
                              89
                            </p>
                            <p className="text-purple-500 text-xs">
                              Últimas 24h
                            </p>
                          </div>
                          <div className="bg-purple-500 rounded-full p-3">
                            <Icon
                              name="package-delivery"
                              size={24}
                              color="white"
                              apiBaseUrl={apiBaseUrl}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ejemplo 4: Estados de Error */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-slate-800">
                    ⚠️ Manejo de Estados de Error
                  </h3>

                  <CodeBlock
                    code={`// Manejo de error con fallback
<div className="flex items-center gap-2">
  <Icon 
    name="nonexistent-icon" 
    size={20} 
    color="#EF4444" 
    apiBaseUrl={apiBaseUrl}
    fallback={<span className="text-red-500">⚠️</span>}
  />
  <span className="text-slate-700">Icono no encontrado</span>
</div>

// Componente con loading y error states
function IconWithStates({ iconName }) {
  const { data, loading, error } = useIcon(iconName);
  
  if (loading) return <div className="animate-spin w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full" />;
  if (error) return <span className="text-red-500">⚠️</span>;
  
  return <div dangerouslySetInnerHTML={{ __html: data?.svg_code || '' }} />;
}`}
                    language="tsx"
                    title="Manejo robusto de errores"
                  />

                  <div className="bg-slate-50 rounded-lg p-6 border-2 border-dashed border-slate-300">
                    <h4 className="font-semibold text-slate-900 mb-4">
                      🎮 Demo en Vivo:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon
                          name="help"
                          size={20}
                          color="#EF4444"
                          apiBaseUrl={apiBaseUrl}
                        />
                        <span className="text-slate-700">
                          Icono no encontrado (muestra fallback)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="animate-spin">
                          <Icon
                            name="refresh"
                            size={20}
                            color="#3B82F6"
                            apiBaseUrl={apiBaseUrl}
                          />
                        </div>
                        <span className="text-slate-700">Estado de carga</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "advanced-config":
        return (
          <motion.div
            key="advanced-config"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8">
                ⚙️ Configuración Avanzada
              </h2>

              <div className="space-y-8">
                <p className="text-slate-700 text-lg">
                  Para evitar repetir la{" "}
                  <code className="bg-slate-100 px-2 py-1 rounded text-slate-800">
                    apiBaseUrl
                  </code>{" "}
                  en cada componente, puedes usar el contexto global{" "}
                  <code className="bg-blue-100 px-2 py-1 rounded text-blue-700">
                    SVGStormProvider
                  </code>
                  .
                </p>

                {/* Configuración del Provider */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-800">
                    🌐 Configuración Global con Context
                  </h3>

                  <CodeBlock
                    code={`// 1. Crear el contexto (contexts/SVGStormContext.tsx)
import { createContext, useContext, ReactNode } from "react";

interface SVGStormContextProps {
  apiBaseUrl: string;
}

const SVGStormContext = createContext<SVGStormContextProps | undefined>(undefined);

export function SVGStormProvider({ children, apiBaseUrl }: { 
  children: ReactNode; 
  apiBaseUrl: string; 
}) {
  return (
    <SVGStormContext.Provider value={{ apiBaseUrl }}>
      {children}
    </SVGStormContext.Provider>
  );
}

export function useSVGStormContext() {
  const context = useContext(SVGStormContext);
  if (!context) {
    throw new Error("useSVGStormContext must be used within a SVGStormProvider");
  }
  return context;
}`}
                    language="tsx"
                    title="Crear contexto SVGStorm"
                  />
                </div>

                {/* Configuración en la App */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-800">
                    🔧 Configuración en tu App
                  </h3>

                  <CodeBlock
                    code={`// 2. Configurar en tu App.tsx o layout.tsx
import { SVGStormProvider } from "@/contexts/SVGStormContext";

export default function App({ children }: { children: ReactNode }) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 
    "https://overflowing-adaptation-production.up.railway.app";

  return (
    <SVGStormProvider apiBaseUrl={apiBaseUrl}>
      {children}
    </SVGStormProvider>
  );
}`}
                    language="tsx"
                    title="Configurar Provider en App"
                  />
                </div>

                {/* Uso Simplificado */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-800">
                    ✨ Uso Simplificado sin apiBaseUrl
                  </h3>

                  <CodeBlock
                    code={`// 3. Usar iconos sin repetir la apiBaseUrl
import { Icon } from "svgstorm-client";

function MyComponent() {
  return (
    <div>
      {/* ✅ Sin apiBaseUrl - usa el contexto global */}
      <Icon name="home" size={24} color="#3B82F6" />
      <Icon name="user" size={20} color="#10B981" />
      <Icon name="settings" size={18} color="#F59E0B" />
    </div>
  );
}`}
                    language="tsx"
                    title="Uso con contexto global"
                  />
                </div>

                {/* Ventajas del Contexto */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">
                    🎯 Ventajas del Contexto Global
                  </h3>
                  <ul className="text-green-800 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✅</span>
                      <div>
                        <strong>Menos repetición:</strong> No necesitas pasar{" "}
                        <code className="bg-green-100 px-1 rounded">
                          apiBaseUrl
                        </code>{" "}
                        en cada componente
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✅</span>
                      <div>
                        <strong>Configuración centralizada:</strong> Cambia la
                        URL desde un solo lugar
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✅</span>
                      <div>
                        <strong>Flexibilidad:</strong> Puedes seguir pasando{" "}
                        <code className="bg-green-100 px-1 rounded">
                          apiBaseUrl
                        </code>{" "}
                        para casos específicos
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✅</span>
                      <div>
                        <strong>TypeScript:</strong> Completamente tipado con
                        detección de errores
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Variables de Entorno */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-800">
                    🔐 Variables de Entorno
                  </h3>

                  <CodeBlock
                    code={`# .env.local
NEXT_PUBLIC_API_BASE_URL=https://overflowing-adaptation-production.up.railway.app

# next.config.js
module.exports = {
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
};`}
                    language="bash"
                    title="Configuración de variables de entorno"
                  />

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-900 mb-3">
                      💡 Mejores Prácticas
                    </h4>
                    <ul className="text-blue-800 space-y-2">
                      <li>
                        • Usa variables de entorno para diferentes environments
                        (dev, staging, prod)
                      </li>
                      <li>
                        • Siempre proporciona un fallback para la URL de la API
                      </li>
                      <li>
                        • Considera implementar retry logic para requests
                        fallidos
                      </li>
                      <li>
                        • Usa el contexto para configuración global, props para
                        casos específicos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "api":
        return (
          <motion.div
            key="api"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8">
                📚 API Reference
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                    Endpoints de la API
                  </h3>
                  <div className="space-y-4">
                    <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-mono font-semibold">
                          GET
                        </span>
                        <code className="text-lg font-mono text-slate-800">
                          /api/icons
                        </code>
                      </div>
                      <p className="text-slate-700">
                        Obtiene la lista completa de iconos disponibles con
                        metadatos (sin SVG).
                      </p>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-mono font-semibold">
                          GET
                        </span>
                        <code className="text-lg font-mono text-slate-800">
                          /api/icons/:name
                        </code>
                      </div>
                      <p className="text-slate-700">
                        Obtiene un icono específico con su código SVG completo.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                    Tipos TypeScript
                  </h3>
                  <CodeBlock
                    code={`interface IconData {
  id: number
  name: string
  category?: string
  tags: string[]
  description?: string
  createdAt: string
  updatedAt: string
}

interface IconProps {
  name: string
  size?: number
  color?: string
  className?: string
  apiBaseUrl?: string
}

interface UseIconOptions {
  apiBaseUrl?: string
  cacheTime?: number
}

interface UseIconResult {
  data: IconData | null
  loading: boolean
  error: string | null
}`}
                    language="typescript"
                    title="Definiciones de tipos"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                    Configuración del caché
                  </h3>
                  <p className="text-slate-700 mb-6 text-lg">
                    La librería incluye un sistema de caché inteligente para
                    optimizar el rendimiento:
                  </p>

                  <div className="bg-slate-50 rounded-xl p-6 mb-6">
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start space-x-3">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>
                        <span className="text-lg">
                          <strong className="text-slate-800">
                            Tiempo por defecto:
                          </strong>{" "}
                          5 minutos
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>
                        <span className="text-lg">
                          <strong className="text-slate-800">
                            Almacenamiento:
                          </strong>{" "}
                          Memoria (Map)
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>
                        <span className="text-lg">
                          <strong className="text-slate-800">
                            Invalidación:
                          </strong>{" "}
                          Automática por tiempo
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>
                        <span className="text-lg">
                          <strong className="text-slate-800">
                            Personalizable:
                          </strong>{" "}
                          Via prop cacheTime
                        </span>
                      </li>
                    </ul>
                  </div>

                  <CodeBlock
                    code={`// Configurar caché personalizado
const { data, loading, error } = useIcon('sun', {
  cacheTime: 15 * 60 * 1000, // 15 minutos
  apiBaseUrl: 'https://overflowing-adaptation-production.up.railway.app'
})`}
                    language="tsx"
                    title="Configuración personalizada"
                  />
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-amber-600 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-lg">
                        Nota importante
                      </h4>
                      <p className="text-slate-700 mt-2">
                        La API está desplegada en Railway y requiere conexión a
                        internet. En desarrollo, asegúrate de tener acceso a la
                        red.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {renderContent()}
    </div>
  );
}
