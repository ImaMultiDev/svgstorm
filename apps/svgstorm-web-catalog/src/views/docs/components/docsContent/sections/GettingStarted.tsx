import { motion } from "framer-motion";
import { Icon } from "svgstorm-client";

export default function GettingStarted() {
  const apiBaseUrl = "https://overflowing-adaptation-production.up.railway.app";

  return (
    <motion.div
      key="getting-started"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="prose prose-lg max-w-none"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8 flex items-center">
          <Icon
            name="demo"
            size={36}
            className="mr-3 text-purple-600"
            apiBaseUrl={apiBaseUrl}
          />
          Primeros Pasos
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              ¿Qué es SVGStorm?
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              SVGStorm es una librería React + TypeScript diseñada para integrar
              fácilmente iconos SVG desde nuestra API REST. Ofrece componentes
              optimizados, caché inteligente y una experiencia de desarrollo
              excepcional.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Características principales
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50">
                <div className="w-8 h-8 bg-gradient-to-r text-white from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-1">
                  <Icon name="check-circle" size={20} apiBaseUrl={apiBaseUrl} />
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
                  <Icon
                    name="lightning-bolt"
                    size={20}
                    color="white"
                    apiBaseUrl={apiBaseUrl}
                  />
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
                <div className="w-8 h-8 bg-gradient-to-r text-white from-purple-500 to-violet-500 rounded-full flex items-center justify-center mt-1">
                  <Icon name="check-circle" size={20} apiBaseUrl={apiBaseUrl} />
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
                  <Icon
                    name="sparkles"
                    size={20}
                    color="white"
                    apiBaseUrl={apiBaseUrl}
                  />
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
              <Icon
                name="info"
                size={24}
                className="text-blue-600 mt-1"
                apiBaseUrl={apiBaseUrl}
              />
              <div>
                <h4 className="font-semibold text-slate-800 text-lg">
                  Requisitos
                </h4>
                <p className="text-slate-700 mt-2">
                  React 18+ • TypeScript (recomendado) • Acceso a internet para
                  la API
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
