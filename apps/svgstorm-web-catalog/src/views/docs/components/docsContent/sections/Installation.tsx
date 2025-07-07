import { motion } from "framer-motion";
import CodeBlock from "../../CodeBlock";
import { Icon } from "svgstorm-client";

export default function Installation() {
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

  return (
    <motion.div
      key="installation"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8 flex items-center">
          <Icon
            name="package"
            size={36}
            className="mr-3 text-blue-600"
            apiBaseUrl={apiBaseUrl}
          />
          Instalación
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
            <CodeBlock code={basicUsageCode} language="tsx" title="App.tsx" />
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <Icon
                name="check-circle"
                size={24}
                className="text-green-600 mt-1"
                apiBaseUrl={apiBaseUrl}
              />
              <div>
                <h4 className="font-semibold text-slate-800 text-lg">
                  ¡Listo para usar!
                </h4>
                <p className="text-slate-700 mt-2">
                  No necesitas configuración adicional. La librería se conecta
                  automáticamente a nuestra API.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
