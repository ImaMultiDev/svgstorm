import { motion } from "framer-motion";
import CodeBlock from "../../CodeBlock";
import { Icon } from "svgstorm-client";

export default function AdvancedConfig() {
  const apiBaseUrl = "https://overflowing-adaptation-production.up.railway.app";

  const providerCode = `// config/svgstorm.config.ts
export const SVGSTORM_CONFIG = {
  apiBaseUrl: "https://overflowing-adaptation-production.up.railway.app",
  cacheTime: 10 * 60 * 1000, // 10 minutos
  retryAttempts: 3,
  retryDelay: 1000
}

// hooks/useConfiguredIcon.ts
import { useIcon } from 'svgstorm-client'
import { SVGSTORM_CONFIG } from '@/config/svgstorm.config'

export function useConfiguredIcon(name: string) {
  return useIcon(name, {
    apiBaseUrl: SVGSTORM_CONFIG.apiBaseUrl,
    cacheTime: SVGSTORM_CONFIG.cacheTime,
    retryAttempts: SVGSTORM_CONFIG.retryAttempts,
    retryDelay: SVGSTORM_CONFIG.retryDelay
  })
}

// components/ConfiguredIcon.tsx
import { Icon } from 'svgstorm-client'
import { SVGSTORM_CONFIG } from '@/config/svgstorm.config'

export function ConfiguredIcon({ name, ...props }) {
  return (
    <Icon 
      name={name} 
      apiBaseUrl={SVGSTORM_CONFIG.apiBaseUrl}
      {...props}
    />
  )
}`;

  const multipleIconsCode = `import { useIcon } from 'svgstorm-client'

const API_URL = "https://overflowing-adaptation-production.up.railway.app"

function IconGrid() {
  const iconNames = ['sun', 'moon', 'star', 'heart', 'home', 'user']
  
  // Hook personalizado para múltiples iconos
  const useMultipleIcons = (names: string[], apiBaseUrl: string) => {
    const results = names.map(name => useIcon(name, { apiBaseUrl }))
    
    return {
      data: results.map(r => r.data),
      loading: results.some(r => r.loading),
      errors: results.map(r => r.error).filter(Boolean)
    }
  }
  
  const { data, loading, errors } = useMultipleIcons(iconNames, API_URL)
  
  if (loading) return <div>Cargando iconos...</div>
  if (errors.length > 0) return <div>Error cargando: {errors.join(', ')}</div>
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((icon, index) => (
        icon && (
          <div key={icon.name} className="p-4 border rounded">
            <div dangerouslySetInnerHTML={{ __html: icon.svg_code }} />
            <p className="text-sm mt-2">{icon.name}</p>
          </div>
        )
      ))}
    </div>
  )
}`;

  const themeIntegrationCode = `import { createContext, useContext } from 'react'
import { Icon } from 'svgstorm-client'

const ThemeContext = createContext({ theme: 'light' })

function ThemedIcon({ name, apiBaseUrl, ...props }) {
  const { theme } = useContext(ThemeContext)
  
  const iconColor = theme === 'dark' ? '#ffffff' : '#1f2937'
  
  return (
    <Icon 
      name={name} 
      color={iconColor}
      className={theme === 'dark' ? 'text-white' : 'text-gray-800'}
      apiBaseUrl={apiBaseUrl}
      {...props}
    />
  )
}

// Uso
function App() {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemedIcon name="sun" size={24} apiBaseUrl="https://api.example.com" />
      <ThemedIcon name="moon" size={24} apiBaseUrl="https://api.example.com" />
    </ThemeContext.Provider>
  )
}`;

  const performanceOptimizationCode = `import { Icon } from 'svgstorm-client'
import { memo, useMemo } from 'react'

const API_URL = "https://overflowing-adaptation-production.up.railway.app"

// Componente memoizado para listas grandes
const IconItem = memo(({ name, size, color, apiBaseUrl }) => (
  <Icon name={name} size={size} color={color} apiBaseUrl={apiBaseUrl} />
))

function IconList({ icons }) {
  // Memoizar cálculos pesados
  const processedIcons = useMemo(() => {
    return icons.map(icon => ({
      ...icon,
      displayName: icon.name.charAt(0).toUpperCase() + icon.name.slice(1)
    }))
  }, [icons])
  
  return (
    <div className="grid grid-cols-4 gap-4">
      {processedIcons.map((icon) => (
        <div key={icon.name} className="text-center">
          <IconItem 
            name={icon.name} 
            size={32} 
            color={icon.color || '#374151'}
            apiBaseUrl={API_URL}
          />
          <p className="text-sm mt-1">{icon.displayName}</p>
        </div>
      ))}
    </div>
  )
}`;

  const errorHandlingCode = `import { Icon } from 'svgstorm-client'
import { ErrorBoundary } from 'react-error-boundary'

function IconErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex flex-col items-center p-4 border border-red-200 rounded-lg bg-red-50">
      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mb-2">
        <span className="text-white text-sm">!</span>
      </div>
      <p className="text-red-700 text-sm text-center">
        Error cargando icono: {error.message}
      </p>
      <button 
        onClick={resetErrorBoundary}
        className="mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
      >
        Reintentar
      </button>
    </div>
  )
}

function SafeIcon({ name, fallback = '❓', apiBaseUrl, ...props }) {
  return (
    <ErrorBoundary
      FallbackComponent={IconErrorFallback}
      onError={(error) => console.error('Icon error:', error)}
    >
      <Icon name={name} apiBaseUrl={apiBaseUrl} {...props} />
    </ErrorBoundary>
  )
}

// Uso robusto
function MyComponent() {
  const apiUrl = "https://overflowing-adaptation-production.up.railway.app"
  
  return (
    <div>
      <SafeIcon name="sun" size={24} apiBaseUrl={apiUrl} />
      <SafeIcon name="nonexistent-icon" size={24} apiBaseUrl={apiUrl} />
    </div>
  )
}`;

  const bestPracticesCode = `// ✅ BUENAS PRÁCTICAS

// 1. Centraliza la configuración
const API_URL = "https://api.svgstorm.com"

// 2. Memoiza componentes con muchos iconos
const IconGrid = memo(({ icons }) => (
  icons.map(icon => <Icon key={icon} name={icon} apiBaseUrl={API_URL} />)
))

// 3. Maneja estados de carga y error
function SmartIcon({ name, apiBaseUrl }) {
  const { data, loading, error } = useIcon(name, { apiBaseUrl })
  
  if (loading) return <Skeleton />
  if (error) return <ErrorIcon />
  
  return <Icon name={name} apiBaseUrl={apiBaseUrl} />
}

// 4. Usa TypeScript para mejor DX
interface IconButtonProps {
  icon: string
  label: string
  onClick: () => void
  apiBaseUrl: string
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onClick, apiBaseUrl }) => (
  <button onClick={onClick} className="flex items-center space-x-2">
    <Icon name={icon} size={16} apiBaseUrl={apiBaseUrl} />
    <span>{label}</span>
  </button>
)

// ❌ EVITA ESTO

// No uses inline styles pesados
<Icon name="sun" style={{ filter: 'drop-shadow(...)' }} />

// No repitas la configuración
<Icon name="sun" apiBaseUrl="..." />
<Icon name="moon" apiBaseUrl="..." />

// No ignores los errores
<Icon name="maybe-exists" /> // Puede fallar silenciosamente`;

  return (
    <motion.div
      key="advanced-config"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-8 flex items-center">
          <Icon
            name="wrench"
            size={36}
            className="mr-3 text-slate-600"
            apiBaseUrl={apiBaseUrl}
          />
          Configuración Avanzada
        </h2>

        <div className="space-y-12">
          {/* Configuración Global del Provider */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Icon
                name="number-1"
                size={28}
                className="mr-3 text-blue-600"
                apiBaseUrl={apiBaseUrl}
              />
              Configuración Global Centralizada
            </h3>
            <p className="text-slate-700 mb-6 text-lg">
              Organiza la configuración de SVGStorm de forma centralizada para
              mantener consistencia en toda tu aplicación:
            </p>

            {/* Tabla de props del Provider */}
            <div className="overflow-hidden bg-slate-50 rounded-xl mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                <h4 className="text-lg font-semibold">
                  Opciones de Configuración useIcon
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
                        <code className="font-mono text-sm bg-red-50 text-red-700 px-2 py-1 rounded">
                          apiBaseUrl*
                        </code>
                      </td>
                      <td className="py-4 px-6 text-slate-700 font-mono">
                        string
                      </td>
                      <td className="py-4 px-6 text-red-600 font-semibold">
                        requerido
                      </td>
                      <td className="py-4 px-6 text-slate-700">
                        URL base de la API SVGStorm
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-25">
                      <td className="py-4 px-6">
                        <code className="font-mono text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          cacheTime
                        </code>
                      </td>
                      <td className="py-4 px-6 text-slate-700 font-mono">
                        number
                      </td>
                      <td className="py-4 px-6 text-slate-700">
                        300000 (5min)
                      </td>
                      <td className="py-4 px-6 text-slate-700">
                        Tiempo de caché en milisegundos
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-6">
                        <code className="font-mono text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          retryAttempts
                        </code>
                      </td>
                      <td className="py-4 px-6 text-slate-700 font-mono">
                        number
                      </td>
                      <td className="py-4 px-6 text-slate-700">1</td>
                      <td className="py-4 px-6 text-slate-700">
                        Número de reintentos en caso de error
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="py-4 px-6">
                        <code className="font-mono text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          retryDelay
                        </code>
                      </td>
                      <td className="py-4 px-6 text-slate-700 font-mono">
                        number
                      </td>
                      <td className="py-4 px-6 text-slate-700">1000</td>
                      <td className="py-4 px-6 text-slate-700">
                        Delay entre reintentos (ms)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <CodeBlock
              code={providerCode}
              language="tsx"
              title="Configuración centralizada avanzada"
            />
          </div>

          {/* Hooks Personalizados */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Icon
                name="number-2"
                size={28}
                className="mr-3 text-purple-600"
                apiBaseUrl={apiBaseUrl}
              />
              Hooks Personalizados para Múltiples Iconos
            </h3>
            <p className="text-slate-700 mb-6 text-lg">
              Crea hooks personalizados para manejar cargas de múltiples iconos
              de forma eficiente:
            </p>
            <CodeBlock
              code={multipleIconsCode}
              language="tsx"
              title="Hook para múltiples iconos"
            />
          </div>

          {/* Integración con Sistemas de Temas */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Icon
                name="number-3"
                size={28}
                className="mr-3 text-indigo-600"
                apiBaseUrl={apiBaseUrl}
              />
              Integración con Sistemas de Temas
            </h3>
            <p className="text-slate-700 mb-6 text-lg">
              Integra SVGStorm con tu sistema de temas para iconos adaptativos:
            </p>
            <CodeBlock
              code={themeIntegrationCode}
              language="tsx"
              title="Iconos con tema adaptativo"
            />
          </div>

          {/* Optimización de Rendimiento */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Icon
                name="number-4"
                size={28}
                className="mr-3 text-blue-600"
                apiBaseUrl={apiBaseUrl}
              />
              Optimización de Rendimiento para Listas Grandes
            </h3>
            <p className="text-slate-700 mb-6 text-lg">
              Técnicas para optimizar el rendimiento cuando muestras muchos
              iconos:
            </p>
            <CodeBlock
              code={performanceOptimizationCode}
              language="tsx"
              title="Optimización con memo y useMemo"
            />
          </div>

          {/* Manejo Robusto de Errores */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Icon
                name="number-5"
                size={28}
                className="mr-3 text-blue-600"
                apiBaseUrl={apiBaseUrl}
              />
              Manejo Robusto de Errores con Error Boundaries
            </h3>
            <p className="text-slate-700 mb-6 text-lg">
              Implementa un manejo de errores resiliente para una mejor
              experiencia de usuario:
            </p>
            <CodeBlock
              code={errorHandlingCode}
              language="tsx"
              title="Error Boundaries para iconos"
            />
          </div>

          {/* Mejores Prácticas */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              <Icon
                name="sparkles"
                size={28}
                className="mr-3 text-blue-600"
                apiBaseUrl={apiBaseUrl}
              />
              Mejores Prácticas
            </h3>
            <CodeBlock
              code={bestPracticesCode}
              language="tsx"
              title="Guía de mejores prácticas"
            />

            {/* Lista numerada de mejores prácticas */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">
                Resumen de Recomendaciones:
              </h4>
              <ol className="space-y-3 text-slate-700">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </span>
                  <span>
                    <strong>Configuración centralizada:</strong> Crea constantes
                    compartidas para mantener consistencia
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </span>
                  <span>
                    <strong>Optimización:</strong> Memoiza componentes que
                    renderizan muchos iconos
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </span>
                  <span>
                    <strong>Estados de carga:</strong> Maneja loading y error
                    states apropiadamente
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    4
                  </span>
                  <span>
                    <strong>TypeScript:</strong> Usa tipado para mejor
                    experiencia de desarrollo
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    5
                  </span>
                  <span>
                    <strong>Error Boundaries:</strong> Implementa manejo de
                    errores robusto
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    6
                  </span>
                  <span>
                    <strong>Caché inteligente:</strong> Aprovecha el sistema de
                    caché automático
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
