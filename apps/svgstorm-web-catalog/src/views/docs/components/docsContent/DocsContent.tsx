"use client";

import { DocsContentProps } from "@/interfaces";
import GettingStarted from "./sections/GettingStarted";
import Installation from "./sections/Installation";
import Usage from "./sections/Usage";
import Examples from "./sections/Examples";
import { AdvancedConfig } from "./sections";
import Api from "./sections/Api";

export default function DocsContent({ activeTab }: DocsContentProps) {
  // URL de la API

  const renderContent = () => {
    switch (activeTab) {
      case "getting-started":
        return <GettingStarted />;

      case "installation":
        return <Installation />;

      case "usage":
        return <Usage />;

      case "examples":
        return <Examples />;

      case "advanced-config":
        return <AdvancedConfig />;

      case "api":
        return <Api />;

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {renderContent()}
    </div>
  );
}
