import { motion } from "framer-motion";
import CodeBlock from "../../CodeBlock";
import { Icon } from "svgstorm-client";

export default function Examples() {
  const apiBaseUrl = "https://overflowing-adaptation-production.up.railway.app";

  const contextCode = `// config/svgstorm.ts - Configuración centralizada
export const SVGSTORM_API_URL = "https://overflowing-adaptation-production.up.railway.app";

// components/MyComponent.tsx
import { Icon } from 'svgstorm-client'
import { SVGSTORM_API_URL } from '@/config/svgstorm'

function MyComponent() {
  return (
    <div>
      <Icon name="sun" size={24} apiBaseUrl={SVGSTORM_API_URL} />
      <Icon name="moon" size={24} apiBaseUrl={SVGSTORM_API_URL} />
    </div>
  )
}

// hooks/useIconConfig.ts - Hook personalizado para reutilizar configuración
import { useIcon } from 'svgstorm-client'
import { SVGSTORM_API_URL } from '@/config/svgstorm'

export function useIconWithConfig(name: string) {
  return useIcon(name, { apiBaseUrl: SVGSTORM_API_URL })
}`;

  const stylingCode = `import { Icon } from 'svgstorm-client'

function StyledIcons() {
  return (
    <div className="flex space-x-4">
      {/* Con Tailwind CSS */}
      <Icon 
        name="heart" 
        className="text-red-500 hover:text-red-700 transition-colors" 
      />
      
      {/* Con inline styles */}
      <Icon 
        name="star" 
        color="#F59E0B"
        className="drop-shadow-lg"
      />
      
      {/* Con animaciones CSS */}
      <Icon 
        name="sparkles" 
        className="text-yellow-500 animate-pulse"
      />
      
      {/* Tamaños dinámicos */}
      <Icon 
        name="sun" 
        size={isLarge ? 48 : 24}
        className="transition-all duration-300"
      />
    </div>
  )
}`;

  const buttonCode = `import { Icon } from 'svgstorm-client'

function ActionButtons() {
  return (
    <div className="flex space-x-3">
      <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        <Icon name="plus" size={18} color="white" />
        <span>Crear</span>
      </button>
      
      <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        <Icon name="check" size={18} color="white" />
        <span>Guardar</span>
      </button>
      
      <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
        <Icon name="close" size={18} color="white" />
        <span>Cancelar</span>
      </button>
    </div>
  )
}`;

  const formCode = `import { Icon } from 'svgstorm-client'

function LoginForm() {
  return (
    <form className="max-w-md mx-auto space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Icon name="email" size={20} className="text-gray-400" />
        </div>
        <input 
          type="email" 
          className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
        />
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Icon name="password" size={20} className="text-gray-400" />
        </div>
        <input 
          type="password" 
          className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Contraseña"
        />
      </div>
      
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2">
        <Icon name="play-button" size={20} color="white" />
        <span>Iniciar Sesión</span>
      </button>
    </form>
  )
}`;

  const navigationCode = `import { Icon } from 'svgstorm-client'

function Navigation() {
  const menuItems = [
    { name: 'Dashboard', icon: 'home', href: '/dashboard' },
    { name: 'Usuarios', icon: 'users-2', href: '/users' },
    { name: 'Configuración', icon: 'wrench', href: '/settings' },
    { name: 'Reportes', icon: 'graph', href: '/reports' }
  ]

  return (
    <nav className="bg-slate-800 text-white p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a 
              href={item.href}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700"
            >
              <Icon name={item.icon} size={20} color="white" />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}`;

  return (
    <motion.div
      key="examples"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8 flex items-center">
          <Icon
            name="lightning-bolt"
            size={36}
            className="mr-3 text-indigo-600"
            apiBaseUrl={apiBaseUrl}
          />
          Ejemplos Prácticos
        </h2>

        <div className="space-y-12">
          {/* Configuración Global */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Icon
                name="number-1"
                size={28}
                className="mr-3 text-blue-600"
                apiBaseUrl={apiBaseUrl}
              />
              Configuración Centralizada
            </h3>
            <p className="text-slate-700 mb-6 text-lg">
              Organiza la configuración de SVGStorm de forma centralizada para
              mantener tu código limpio y fácil de mantener:
            </p>
            <CodeBlock
              code={contextCode}
              language="tsx"
              title="Configuración centralizada con constantes"
            />
          </div>

          {/* Styling y CSS */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Icon
                name="number-2"
                size={28}
                className="mr-3 text-blue-600"
                apiBaseUrl={apiBaseUrl}
              />
              Estilos y CSS Personalizado
            </h3>
            <p className="text-slate-700 mb-6 text-lg">
              Los iconos se integran perfectamente con Tailwind CSS, CSS custom
              y animaciones:
            </p>
            <CodeBlock
              code={stylingCode}
              language="tsx"
              title="Estilos y animaciones"
            />

            {/* Demo live de estilos */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mt-6 border border-purple-200">
              <h4 className="font-semibold text-slate-900 mb-4">
                Demo en Vivo - Estilos:
              </h4>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <Icon
                    name="heart"
                    size={32}
                    className="text-red-500 hover:text-red-700 transition-colors mb-2"
                    apiBaseUrl={apiBaseUrl}
                  />
                  <p className="text-sm text-slate-600">Hover Effect</p>
                </div>
                <div className="text-center">
                  <Icon
                    name="star"
                    size={32}
                    color="#F59E0B"
                    className="drop-shadow-lg"
                    apiBaseUrl={apiBaseUrl}
                  />
                  <p className="text-sm text-slate-600">Drop Shadow</p>
                </div>
                <div className="text-center">
                  <Icon
                    name="sparkles"
                    size={32}
                    className="text-yellow-500 animate-pulse"
                    apiBaseUrl={apiBaseUrl}
                  />
                  <p className="text-sm text-slate-600">Animate Pulse</p>
                </div>
                <div className="text-center">
                  <Icon
                    name="sun"
                    size={32}
                    className="text-orange-500 animate-spin"
                    apiBaseUrl={apiBaseUrl}
                  />
                  <p className="text-sm text-slate-600">Rotate Animation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de Acción */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Icon
                name="number-3"
                size={28}
                className="mr-3 text-blue-600"
                apiBaseUrl={apiBaseUrl}
              />
              Botones de Acción
            </h3>
            <p className="text-slate-700 mb-6 text-lg">
              Mejora la UX de tus botones añadiendo iconos contextuales:
            </p>
            <CodeBlock
              code={buttonCode}
              language="tsx"
              title="Botones con iconos"
            />

            {/* Demo live de botones */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mt-6 border border-blue-200">
              <h4 className="font-semibold text-slate-900 mb-4">
                Demo en Vivo - Botones:
              </h4>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Icon
                    name="plus"
                    size={18}
                    color="white"
                    apiBaseUrl={apiBaseUrl}
                  />
                  <span>Crear</span>
                </button>
                <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  <Icon name="save" size={18} apiBaseUrl={apiBaseUrl} />
                  <span>Guardar</span>
                </button>
                <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  <Icon
                    name="close"
                    size={18}
                    color="white"
                    apiBaseUrl={apiBaseUrl}
                  />
                  <span>Cancelar</span>
                </button>
                <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  <Icon name="edit" size={18} apiBaseUrl={apiBaseUrl} />
                  <span>Editar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Formularios */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Icon
                name="number-4"
                size={28}
                className="mr-3 text-blue-600"
                apiBaseUrl={apiBaseUrl}
              />
              Formularios con Iconos
            </h3>
            <p className="text-slate-700 mb-6 text-lg">
              Añade iconos a tus inputs para una experiencia más intuitiva:
            </p>
            <CodeBlock
              code={formCode}
              language="tsx"
              title="Formulario de login con iconos"
            />

            {/* Demo live de formulario */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 mt-6 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-4">
                Demo en Vivo - Formulario:
              </h4>
              <form className="max-w-md space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Icon
                      name="email"
                      size={20}
                      className="text-gray-400"
                      apiBaseUrl={apiBaseUrl}
                    />
                  </div>
                  <input
                    type="email"
                    className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Icon
                      name="password"
                      size={20}
                      className="text-gray-400"
                      apiBaseUrl={apiBaseUrl}
                    />
                  </div>
                  <input
                    type="password"
                    className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
                >
                  <Icon
                    name="play-button"
                    size={20}
                    color="white"
                    apiBaseUrl={apiBaseUrl}
                  />
                  <span>Iniciar Sesión</span>
                </button>
              </form>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Icon
                name="number-5"
                size={28}
                className="mr-3 text-blue-600"
                apiBaseUrl={apiBaseUrl}
              />
              Menús de Navegación
            </h3>
            <p className="text-slate-700 mb-6 text-lg">
              Crea menús más visuales e intuitivos con iconos representativos:
            </p>
            <CodeBlock
              code={navigationCode}
              language="tsx"
              title="Menu de navegación lateral"
            />

            {/* Demo live de navegación */}
            <div className="bg-slate-800 rounded-xl p-6 mt-6">
              <h4 className="font-semibold text-white mb-4">
                Demo en Vivo - Navegación:
              </h4>
              <nav className="max-w-xs">
                <ul className="space-y-2">
                  {[
                    { name: "Dashboard", icon: "home" },
                    { name: "Usuarios", icon: "users-2" },
                    { name: "Configuración", icon: "wrench" },
                    { name: "Reportes", icon: "graph" },
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href="#"
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700 transition-colors text-white"
                      >
                        <Icon
                          name={item.icon}
                          size={20}
                          color="white"
                          apiBaseUrl={apiBaseUrl}
                        />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
