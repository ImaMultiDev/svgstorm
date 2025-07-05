"use client";

// Importar desde NPM - NO desde rutas relativas
import { Icon } from "svgstorm-client";
import { useSVGStormContext } from "@/contexts/SVGStormContext";

export function AdvancedConfigSection() {
  const { apiBaseUrl } = useSVGStormContext();

  return (
    <section id="advanced-config" className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
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
          <h3 className="text-xl font-semibold text-slate-900">
            🌐 Configuración Global con Context
          </h3>

          <div className="bg-slate-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
            <pre>
              <code className="text-green-400">
                {`// 1. Crear el contexto (contexts/SVGStormContext.tsx)
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
              </code>
            </pre>
          </div>
        </div>

        {/* Configuración en la App */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            🔧 Configuración en tu App
          </h3>

          <div className="bg-slate-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
            <pre>
              <code className="text-green-400">
                {`// 2. Configurar en tu App.tsx o layout.tsx
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
              </code>
            </pre>
          </div>
        </div>

        {/* Uso Simplificado */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            ✨ Uso Simplificado sin apiBaseUrl
          </h3>

          <div className="bg-slate-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
            <pre>
              <code className="text-green-400">
                {`// 3. Usar iconos sin repetir la apiBaseUrl
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
              </code>
            </pre>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 border-2 border-dashed border-slate-300">
            <h4 className="font-semibold text-slate-900 mb-3">
              🎮 Demo en Vivo (usando contexto):
            </h4>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="home" size={24} color="#3B82F6" />
                <span className="text-slate-700">Home</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="user" size={20} color="#10B981" />
                <span className="text-slate-700">User</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="settings" size={18} color="#F59E0B" />
                <span className="text-slate-700">Settings</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-2">
              ℹ️ Estos iconos usan el contexto global. API Base URL:{" "}
              <code className="bg-slate-200 px-1 rounded text-xs">
                {apiBaseUrl}
              </code>
            </p>
          </div>
        </div>

        {/* Ventajas del Contexto */}
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h3 className="text-lg font-semibold text-green-900 mb-3">
            🎯 Ventajas del Contexto Global
          </h3>
          <ul className="text-green-800 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✅</span>
              <div>
                <strong>Menos repetición:</strong> No necesitas pasar{" "}
                <code>apiBaseUrl</code> en cada componente
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✅</span>
              <div>
                <strong>Configuración centralizada:</strong> Cambia la URL desde
                un solo lugar
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✅</span>
              <div>
                <strong>Flexibilidad:</strong> Puedes seguir pasando{" "}
                <code>apiBaseUrl</code> para casos específicos
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✅</span>
              <div>
                <strong>TypeScript:</strong> Completamente tipado con detección
                de errores
              </div>
            </li>
          </ul>
        </div>

        {/* Configuración de Variables de Entorno */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            🔐 Variables de Entorno
          </h3>

          <div className="bg-slate-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
            <pre>
              <code className="text-green-400">
                {`// .env.local
NEXT_PUBLIC_API_BASE_URL=https://overflowing-adaptation-production.up.railway.app

// next.config.js
module.exports = {
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
};`}
              </code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="text-lg font-semibold text-blue-900 mb-2">
              💡 Mejores Prácticas
            </h4>
            <ul className="text-blue-800 space-y-1">
              <li>
                • Usa variables de entorno para diferentes environments (dev,
                staging, prod)
              </li>
              <li>• Siempre proporciona un fallback para la URL de la API</li>
              <li>
                • Considera implementar retry logic para requests fallidos
              </li>
              <li>
                • Usa el contexto para configuración global, props para casos
                específicos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
