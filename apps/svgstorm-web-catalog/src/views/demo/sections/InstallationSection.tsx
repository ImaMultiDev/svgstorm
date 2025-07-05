"use client";

import { useState } from "react";

export function InstallationSection() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const commands = [
    { name: "NPM", command: "npm install svgstorm-client" },
    { name: "Yarn", command: "yarn add svgstorm-client" },
    { name: "pnpm", command: "pnpm add svgstorm-client" },
  ];

  return (
    <section id="installation" className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">📦 Instalación</h2>

      <div className="space-y-6">
        <p className="text-slate-700 text-lg">
          Instala{" "}
          <code className="bg-slate-100 px-2 py-1 rounded text-slate-800">
            svgstorm-client
          </code>{" "}
          usando tu gestor de paquetes preferido:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {commands.map((cmd) => (
            <div key={cmd.name} className="relative">
              <div className="bg-slate-900 rounded-lg p-4 text-white font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-xs font-semibold">
                    {cmd.name}
                  </span>
                  <button
                    onClick={() => copyToClipboard(cmd.command, cmd.name)}
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Copiar comando"
                  >
                    {copiedCommand === cmd.name ? (
                      <span className="text-green-400">✓</span>
                    ) : (
                      <span>📋</span>
                    )}
                  </button>
                </div>
                <code className="text-green-400">{cmd.command}</code>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
          <h3 className="text-lg font-semibold text-amber-900 mb-2">
            ⚠️ Requisitos
          </h3>
          <ul className="text-amber-800 space-y-1">
            <li>• React 18.0.0 o superior</li>
            <li>• TypeScript 4.5.0 o superior (recomendado)</li>
            <li>• Node.js 16.0.0 o superior</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            💡 Próximo Paso
          </h3>
          <p className="text-blue-800">
            Una vez instalado, puedes importar y usar los componentes en tu
            aplicación React. Continúa leyendo para ver ejemplos prácticos.
          </p>
        </div>
      </div>
    </section>
  );
}
