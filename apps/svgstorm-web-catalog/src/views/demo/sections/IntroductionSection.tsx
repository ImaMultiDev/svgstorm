"use client";

export function IntroductionSection() {
  return (
    <section id="introduction" className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        🚀 Introducción
      </h2>

      <div className="prose prose-lg max-w-none">
        <p className="text-slate-700 mb-4">
          <strong>svgstorm-client</strong> es una librería React moderna que te
          permite integrar fácilmente iconos SVG de alta calidad en tus
          aplicaciones. Con soporte para TypeScript, estados de carga, manejo de
          errores y configuración global.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            ✨ Características Principales
          </h3>
          <ul className="text-blue-800 space-y-1">
            <li>
              🎨 <strong>Componente Icon</strong> con props intuitivas
            </li>
            <li>
              🔄 <strong>Hook useIcon</strong> para lógica personalizada
            </li>
            <li>
              ⚡ <strong>Estados de carga</strong> y manejo de errores
            </li>
            <li>
              🌐 <strong>Configuración global</strong> con React Context
            </li>
            <li>
              📦 <strong>TypeScript</strong> completamente tipado
            </li>
            <li>
              🎯 <strong>API REST</strong> integrada con SVGStorm
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            🎯 ¿Para Quién es Esta Librería?
          </h3>
          <p className="text-green-800">
            Perfect para desarrolladores que quieren integrar iconos SVG de
            forma eficiente sin preocuparse por la gestión de assets, carga
            asíncrona o configuración compleja.
          </p>
        </div>
      </div>
    </section>
  );
}
