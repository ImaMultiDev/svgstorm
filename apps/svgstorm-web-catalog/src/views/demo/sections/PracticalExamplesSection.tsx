"use client";

import { useState } from "react";
// Importar desde NPM - NO desde rutas relativas
import { Icon } from "svgstorm-client";

export function PracticalExamplesSection() {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = () => {
    setIsButtonLoading(true);
    setTimeout(() => setIsButtonLoading(false), 2000);
  };

  const apiBaseUrl = "https://overflowing-adaptation-production.up.railway.app";

  return (
    <section
      id="practical-examples"
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        🎨 Ejemplos Prácticos
      </h2>

      <div className="space-y-8">
        <p className="text-slate-700 text-lg">
          Aquí tienes ejemplos reales de cómo integrar iconos SVG en componentes
          comunes de una aplicación.
        </p>

        {/* Ejemplo 1: Botones */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            🔘 Botones con Iconos
          </h3>

          <div className="bg-slate-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
            <pre>
              <code className="text-green-400">
                {`// Botón con icono y texto
<button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
  <Icon name="plus" size={16} color="white" apiBaseUrl={apiBaseUrl} />
  Agregar Elemento
</button>

// Botón con estado de carga
<button 
  onClick={handleSubmit}
  disabled={isButtonLoading}
  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg"
>
  {isButtonLoading ? (
    <Icon name="loading" size={16} color="white" apiBaseUrl={apiBaseUrl} />
  ) : (
    <Icon name="check" size={16} color="white" apiBaseUrl={apiBaseUrl} />
  )}
  {isButtonLoading ? "Guardando..." : "Guardar"}
</button>`}
              </code>
            </pre>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 border-2 border-dashed border-slate-300">
            <h4 className="font-semibold text-slate-900 mb-3">
              🎮 Demo en Vivo:
            </h4>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                <Icon
                  name="plus"
                  size={16}
                  color="white"
                  apiBaseUrl={apiBaseUrl}
                />
                Agregar Elemento
              </button>

              <button
                onClick={handleSubmit}
                disabled={isButtonLoading}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {isButtonLoading ? (
                  <Icon
                    name="loading"
                    size={16}
                    color="white"
                    apiBaseUrl={apiBaseUrl}
                  />
                ) : (
                  <Icon
                    name="check"
                    size={16}
                    color="white"
                    apiBaseUrl={apiBaseUrl}
                  />
                )}
                {isButtonLoading ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </div>
        </div>

        {/* Ejemplo 2: Formulario */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            📝 Formularios con Iconos
          </h3>

          <div className="bg-slate-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
            <pre>
              <code className="text-green-400">
                {`// Input con icono
<div className="relative">
  <Icon 
    name="mail" 
    size={20} 
    color="#6B7280" 
    apiBaseUrl={apiBaseUrl}
    className="absolute left-3 top-1/2 transform -translate-y-1/2"
  />
  <input 
    type="email" 
    placeholder="Tu email" 
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
</div>

// Input con icono de contraseña
<div className="relative">
  <Icon 
    name="lock" 
    size={20} 
    color="#6B7280" 
    apiBaseUrl={apiBaseUrl}
    className="absolute left-3 top-1/2 transform -translate-y-1/2"
  />
  <input 
    type="password" 
    placeholder="Tu contraseña" 
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
</div>`}
              </code>
            </pre>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 border-2 border-dashed border-slate-300">
            <h4 className="font-semibold text-slate-900 mb-3">
              🎮 Demo en Vivo:
            </h4>
            <div className="space-y-4 max-w-md">
              <div className="relative">
                <Icon
                  name="mail"
                  size={20}
                  color="#6B7280"
                  apiBaseUrl={apiBaseUrl}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <Icon
                  name="lock"
                  size={20}
                  color="#6B7280"
                  apiBaseUrl={apiBaseUrl}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="password"
                  placeholder="Tu contraseña"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 3: Tarjetas */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            🎴 Tarjetas con Iconos
          </h3>

          <div className="bg-slate-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
            <pre>
              <code className="text-green-400">
                {`// Tarjeta de estadística
<div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-lg font-semibold text-slate-900">Usuarios Activos</h3>
      <p className="text-2xl font-bold text-blue-600">1,234</p>
    </div>
    <div className="bg-blue-100 p-3 rounded-full">
      <Icon name="users" size={24} color="#3B82F6" apiBaseUrl={apiBaseUrl} />
    </div>
  </div>
</div>`}
              </code>
            </pre>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 border-2 border-dashed border-slate-300">
            <h4 className="font-semibold text-slate-900 mb-3">
              🎮 Demo en Vivo:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Usuarios Activos
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">1,234</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon
                      name="users"
                      size={24}
                      color="#3B82F6"
                      apiBaseUrl={apiBaseUrl}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Ventas Hoy
                    </h3>
                    <p className="text-2xl font-bold text-green-600">$2,456</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Icon
                      name="trending-up"
                      size={24}
                      color="#10B981"
                      apiBaseUrl={apiBaseUrl}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 4: Estados de Error */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            ⚠️ Manejo de Estados de Error
          </h3>

          <div className="bg-slate-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
            <pre>
              <code className="text-green-400">
                {`// Manejo de error con fallback
<div className="flex items-center gap-2">
  <Icon 
    name="nonexistent-icon" 
    size={20} 
    color="#EF4444" 
    apiBaseUrl={apiBaseUrl}
    fallback={<span className="text-red-500">⚠️</span>}
  />
  <span className="text-slate-700">Icono no encontrado</span>
</div>`}
              </code>
            </pre>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 border-2 border-dashed border-slate-300">
            <h4 className="font-semibold text-slate-900 mb-3">
              🎮 Demo en Vivo:
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon
                  name="nonexistent-icon"
                  size={20}
                  color="#EF4444"
                  apiBaseUrl={apiBaseUrl}
                />
                <span className="text-slate-700">
                  Icono no encontrado (muestra fallback)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
