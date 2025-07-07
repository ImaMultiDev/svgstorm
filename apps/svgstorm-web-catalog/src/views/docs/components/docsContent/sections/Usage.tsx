import { motion } from "framer-motion";
import { useState } from "react";
import CodeBlock from "../../CodeBlock";
import { Icon } from "svgstorm-client";

export default function Usage() {
  const [usageTab, setUsageTab] = useState<"component" | "hook">("component");
  const apiBaseUrl = "https://overflowing-adaptation-production.up.railway.app";

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

  return (
    <motion.div
      key="usage"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8 flex items-center">
          <Icon
            name="lightning-bolt"
            size={36}
            className="mr-3 text-yellow-600"
            apiBaseUrl={apiBaseUrl}
          />
          Uso Básico
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
            <Icon name="code-brackets" size={20} apiBaseUrl={apiBaseUrl} />
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
            <Icon name="wrench" size={20} apiBaseUrl={apiBaseUrl} />
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
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                  <Icon
                    name="target"
                    size={28}
                    className="mr-3 text-blue-600"
                    apiBaseUrl={apiBaseUrl}
                  />
                  Componente Icon
                </h3>
                <p className="text-slate-700 mb-6 text-lg">
                  El componente principal para mostrar iconos SVG con props
                  personalizables y carga optimizada:
                </p>

                {/* Props Table */}
                <div className="overflow-hidden bg-slate-50 rounded-xl mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                    <h4 className="text-lg font-semibold flex items-center">
                      <Icon
                        name="clipboard"
                        size={20}
                        color="white"
                        className="mr-2"
                        apiBaseUrl={apiBaseUrl}
                      />
                      Props del Componente Icon
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
                            Nombre del icono a mostrar (ej: &quot;sun&quot;,
                            &quot;moon&quot;, &quot;star&quot;)
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
                            Clases CSS adicionales (Tailwind, CSS custom, etc.)
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

                {/* Ejemplos interactivos */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mt-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">
                    🎨 Ejemplos Interactivos
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-50 rounded-lg p-4 mb-2">
                        <Icon
                          name="sun"
                          size={32}
                          color="#3B82F6"
                          apiBaseUrl={apiBaseUrl}
                        />
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-slate-700">sun</div>
                        <div className="text-slate-500">size: 32</div>
                        <div className="text-slate-500">color: blue</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-50 rounded-lg p-4 mb-2">
                        <Icon
                          name="moon"
                          size={28}
                          color="#8B5CF6"
                          apiBaseUrl={apiBaseUrl}
                        />
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-slate-700">moon</div>
                        <div className="text-slate-500">size: 28</div>
                        <div className="text-slate-500">color: purple</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-50 rounded-lg p-4 mb-2">
                        <Icon
                          name="star"
                          size={24}
                          color="#F59E0B"
                          apiBaseUrl={apiBaseUrl}
                        />
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-slate-700">star</div>
                        <div className="text-slate-500">size: 24</div>
                        <div className="text-slate-500">color: yellow</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-50 rounded-lg p-4 mb-2">
                        <Icon
                          name="heart"
                          size={20}
                          color="#10B981"
                          apiBaseUrl={apiBaseUrl}
                        />
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-slate-700">heart</div>
                        <div className="text-slate-500">size: 20</div>
                        <div className="text-slate-500">color: green</div>
                      </div>
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
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  🔧 Hook useIcon
                </h3>
                <p className="text-slate-700 mb-6 text-lg">
                  Para casos avanzados donde necesites más control sobre la
                  carga de iconos:
                </p>

                <CodeBlock
                  code={hookUsageCode}
                  language="tsx"
                  title="Ejemplo del hook useIcon"
                />

                {/* Hook Options Table */}
                <div className="overflow-hidden bg-slate-50 rounded-xl mt-8">
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
                            Opción
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
                            <code className="font-mono text-sm bg-purple-50 text-purple-700 px-2 py-1 rounded border border-purple-200">
                              apiBaseUrl
                            </code>
                          </td>
                          <td className="py-4 px-6 text-slate-700 font-mono">
                            string
                          </td>
                          <td className="py-4 px-6 text-slate-500">
                            undefined
                          </td>
                          <td className="py-4 px-6 text-slate-700">
                            URL base personalizada de la API
                          </td>
                        </tr>
                        <tr className="bg-slate-25">
                          <td className="py-4 px-6">
                            <code className="font-mono text-sm bg-purple-50 text-purple-700 px-2 py-1 rounded border border-purple-200">
                              cacheTime
                            </code>
                          </td>
                          <td className="py-4 px-6 text-slate-700 font-mono">
                            number
                          </td>
                          <td className="py-4 px-6 text-slate-700">
                            300000 (5 min)
                          </td>
                          <td className="py-4 px-6 text-slate-700">
                            Tiempo de caché en milisegundos
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Return Values Table */}
                <div className="overflow-hidden bg-slate-50 rounded-xl mt-8">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4">
                    <h4 className="text-lg font-semibold">
                      📦 Valores de Retorno
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
                            <code className="font-mono text-sm bg-indigo-50 text-indigo-700 px-2 py-1 rounded border border-indigo-200">
                              data
                            </code>
                          </td>
                          <td className="py-4 px-6 text-slate-700 font-mono">
                            IconData | null
                          </td>
                          <td className="py-4 px-6 text-slate-700">
                            Datos del icono cargado
                          </td>
                        </tr>
                        <tr className="border-b border-slate-200 bg-slate-25">
                          <td className="py-4 px-6">
                            <code className="font-mono text-sm bg-indigo-50 text-indigo-700 px-2 py-1 rounded border border-indigo-200">
                              loading
                            </code>
                          </td>
                          <td className="py-4 px-6 text-slate-700 font-mono">
                            boolean
                          </td>
                          <td className="py-4 px-6 text-slate-700">
                            Estado de carga
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="py-4 px-6">
                            <code className="font-mono text-sm bg-indigo-50 text-indigo-700 px-2 py-1 rounded border border-indigo-200">
                              error
                            </code>
                          </td>
                          <td className="py-4 px-6 text-slate-700 font-mono">
                            string | null
                          </td>
                          <td className="py-4 px-6 text-slate-700">
                            Mensaje de error si ocurre
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Tips de optimización */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-xl p-6 mt-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            💡 Tips de Optimización
          </h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5">
                1
              </span>
              <span>
                Define la <code>apiBaseUrl</code> como constante para
                reutilizarla en todos tus componentes
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5">
                2
              </span>
              <span>
                El caché automático reduce llamadas redundantes a la API
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5">
                3
              </span>
              <span>
                Usa <code>className</code> para aplicar estilos de Tailwind o
                CSS custom
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5">
                4
              </span>
              <span>
                Para iconos estáticos, considera usar el componente{" "}
                <code>Icon</code>; para lógica compleja, usa el hook{" "}
                <code>useIcon</code>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
