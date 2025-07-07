import { motion } from "framer-motion";
import CodeBlock from "../../CodeBlock";
import { Icon } from "svgstorm-client";

export default function Api() {
  const apiBaseUrl = "https://overflowing-adaptation-production.up.railway.app";

  return (
    <motion.div
      key="api"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8 flex items-center">
          <Icon
            name="documentation"
            size={36}
            className="mr-3 text-purple-600"
            apiBaseUrl={apiBaseUrl}
          />
          API Reference
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
                  Obtiene la lista completa de iconos disponibles con metadatos
                  (sin SVG).
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
              La librería incluye un sistema de caché inteligente para optimizar
              el rendimiento:
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
                    <strong className="text-slate-800">Almacenamiento:</strong>{" "}
                    Memoria (Map)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>
                  <span className="text-lg">
                    <strong className="text-slate-800">Invalidación:</strong>{" "}
                    Automática por tiempo
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>
                  <span className="text-lg">
                    <strong className="text-slate-800">Personalizable:</strong>{" "}
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
              <Icon
                name="alert-triangle"
                size={24}
                className="text-amber-600 mt-1"
                apiBaseUrl={apiBaseUrl}
              />
              <div>
                <h4 className="font-semibold text-slate-800 text-lg">
                  Nota importante
                </h4>
                <p className="text-slate-700 mt-2">
                  La API está desplegada en Railway y requiere conexión a
                  internet. En desarrollo, asegúrate de tener acceso a la red.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
