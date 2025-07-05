"use client";

import Link from "next/link";
import { SVGStormProvider } from "@/contexts/SVGStormContext";
import { InstallationSection } from "./sections/InstallationSection";
import { BasicUsageSection } from "./sections/BasicUsageSection";
import { PracticalExamplesSection } from "./sections/PracticalExamplesSection";
import { AdvancedConfigSection } from "./sections/AdvancedConfigSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { NavigationSection } from "./sections/NavigationSection";

export default function DemoPage() {
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://overflowing-adaptation-production.up.railway.app";

  return (
    <SVGStormProvider apiBaseUrl={apiBaseUrl}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              📚 SVGStorm Client - Demo & Documentation
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Guía práctica para consumir la librería{" "}
              <code className="bg-blue-100 px-2 py-1 rounded text-blue-700">
                svgstorm-client
              </code>{" "}
              desde NPM
            </p>
          </div>

          {/* Table of Contents */}
          <NavigationSection />

          {/* Content Sections */}
          <div className="space-y-16">
            <IntroductionSection />
            <InstallationSection />
            <BasicUsageSection />
            <PracticalExamplesSection />
            <AdvancedConfigSection />
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-600">
              ¿Necesitas ayuda? Visita nuestro{" "}
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                catálogo principal
              </Link>{" "}
              o consulta la{" "}
              <a
                href="https://github.com/ImaMultiDev/svgstorm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                documentación en GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </SVGStormProvider>
  );
}
