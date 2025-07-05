"use client";

export function NavigationSection() {
  const sections = [
    {
      id: "introduction",
      title: "🚀 Introducción",
      description: "Qué es svgstorm-client y por qué usarlo",
    },
    {
      id: "installation",
      title: "📦 Instalación",
      description: "Cómo instalar la librería",
    },
    {
      id: "basic-usage",
      title: "🎯 Uso Básico",
      description: "Componente Icon y hook useIcon",
    },
    {
      id: "practical-examples",
      title: "🎨 Ejemplos Prácticos",
      description: "Botones, formularios y tarjetas",
    },
    {
      id: "advanced-config",
      title: "⚙️ Configuración Avanzada",
      description: "Contexto global y optimizaciones",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        📋 Tabla de Contenidos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="text-left p-4 bg-slate-50 hover:bg-blue-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors group"
          >
            <div className="font-semibold text-slate-900 group-hover:text-blue-700 mb-1">
              {section.title}
            </div>
            <div className="text-sm text-slate-600 group-hover:text-blue-600">
              {section.description}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
