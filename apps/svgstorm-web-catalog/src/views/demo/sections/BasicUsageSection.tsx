"use client";

import { useState } from "react";
// Importar desde NPM - NO desde rutas relativas
import { Icon } from "svgstorm-client";

export function BasicUsageSection() {
  const [selectedExample, setSelectedExample] = useState("component");

  const examples = {
    component: {
      title: "Componente Icon",
      description: "La forma más fácil de usar iconos SVG",
      code: `import { Icon } from 'svgstorm-client';

function MyComponent() {
  return (
    <div>
      <Icon 
        name="home" 
        size={24}
        color="#3B82F6"
        apiBaseUrl="https://overflowing-adaptation-production.up.railway.app"
      />
    </div>
  );
}`,
      demo: (
        <div className="flex items-center gap-4">
          <Icon
            name="home"
            size={24}
            color="#3B82F6"
            apiBaseUrl="https://overflowing-adaptation-production.up.railway.app"
          />
          <span className="text-slate-700">Icono Home</span>
        </div>
      ),
    },
    hook: {
      title: "Hook useIcon",
      description: "Para lógica personalizada y control avanzado",
      code: `import { useIcon } from 'svgstorm-client';

function MyComponent() {
  const { iconSvg, loading, error } = useIcon("home", {
    apiBaseUrl: "https://overflowing-adaptation-production.up.railway.app"
  });

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div dangerouslySetInnerHTML={{ __html: iconSvg || '' }} />
  );
}`,
      demo: (
        <div className="flex items-center gap-4">
          <div className="text-blue-600">Demo disponible con API correcta</div>
          <span className="text-slate-700">
            Hook useIcon (requiere API docs)
          </span>
        </div>
      ),
    },
  };

  return (
    <section id="basic-usage" className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">🎯 Uso Básico</h2>

      <div className="space-y-6">
        <p className="text-slate-700 text-lg">
          <code className="bg-slate-100 px-2 py-1 rounded text-slate-800">
            svgstorm-client
          </code>
          ofrece dos formas principales de usar iconos: el componente{" "}
          <code className="bg-blue-100 px-2 py-1 rounded text-blue-700">
            Icon
          </code>{" "}
          y el hook{" "}
          <code className="bg-green-100 px-2 py-1 rounded text-green-700">
            useIcon
          </code>
          .
        </p>

        {/* Tabs */}
        <div className="flex border-b border-slate-200">
          {Object.entries(examples).map(([key, example]) => (
            <button
              key={key}
              onClick={() => setSelectedExample(key)}
              className={`px-4 py-2 font-medium transition-colors ${
                selectedExample === key
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {examples[selectedExample as keyof typeof examples].title}
            </h3>
            <p className="text-slate-600">
              {examples[selectedExample as keyof typeof examples].description}
            </p>
          </div>

          {/* Code Example */}
          <div className="bg-slate-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
            <pre>
              <code className="text-green-400">
                {examples[selectedExample as keyof typeof examples].code}
              </code>
            </pre>
          </div>

          {/* Live Demo */}
          <div className="bg-slate-50 rounded-lg p-4 border-2 border-dashed border-slate-300">
            <h4 className="font-semibold text-slate-900 mb-3">
              🎮 Demo en Vivo:
            </h4>
            {examples[selectedExample as keyof typeof examples].demo}
          </div>
        </div>

        {/* Props Documentation */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            📋 Props del Componente Icon
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="text-left p-2 font-semibold text-blue-900">
                    Prop
                  </th>
                  <th className="text-left p-2 font-semibold text-blue-900">
                    Tipo
                  </th>
                  <th className="text-left p-2 font-semibold text-blue-900">
                    Requerido
                  </th>
                  <th className="text-left p-2 font-semibold text-blue-900">
                    Descripción
                  </th>
                </tr>
              </thead>
              <tbody className="text-blue-800">
                <tr className="border-b border-blue-200">
                  <td className="p-2 font-mono">name</td>
                  <td className="p-2">string</td>
                  <td className="p-2">✅ Sí</td>
                  <td className="p-2">Nombre del icono a cargar</td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="p-2 font-mono">size</td>
                  <td className="p-2">number</td>
                  <td className="p-2">❌ No</td>
                  <td className="p-2">Tamaño del icono (por defecto: 24)</td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="p-2 font-mono">color</td>
                  <td className="p-2">string</td>
                  <td className="p-2">❌ No</td>
                  <td className="p-2">
                    Color del icono (por defecto: currentColor)
                  </td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="p-2 font-mono">apiBaseUrl</td>
                  <td className="p-2">string</td>
                  <td className="p-2">⚠️ Condicional</td>
                  <td className="p-2">
                    URL base de la API (puede omitirse con contexto)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
