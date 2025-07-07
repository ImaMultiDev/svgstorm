"use client";

import { useState } from "react";
import { DocsTab } from "@/interfaces";
import { DocsHero, DocsNavigation, DocsContent } from "./components";
import { SVGStormProvider } from "@/contexts/SVGStormContext";

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("getting-started");

  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://overflowing-adaptation-production.up.railway.app";

  const tabs: DocsTab[] = [
    { id: "getting-started", label: "Primeros Pasos", icon: "🚀" },
    { id: "installation", label: "Instalación", icon: "📦" },
    { id: "usage", label: "Uso Básico", icon: "⚡" },
    { id: "examples", label: "Ejemplos Prácticos", icon: "🎨" },
    { id: "advanced-config", label: "Configuración Avanzada", icon: "⚙️" },
    { id: "api", label: "API Reference", icon: "📚" },
  ];

  return (
    <SVGStormProvider apiBaseUrl={apiBaseUrl}>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-blue-50">
        <DocsHero />
        <DocsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <DocsContent activeTab={activeTab} tabs={tabs} />
      </div>
    </SVGStormProvider>
  );
}
