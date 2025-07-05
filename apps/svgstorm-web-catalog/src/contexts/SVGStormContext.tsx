"use client";

import { createContext, useContext, ReactNode } from "react";

interface SVGStormContextProps {
  apiBaseUrl: string;
}

const SVGStormContext = createContext<SVGStormContextProps | undefined>(
  undefined
);

interface SVGStormProviderProps {
  children: ReactNode;
  apiBaseUrl: string;
}

export function SVGStormProvider({
  children,
  apiBaseUrl,
}: SVGStormProviderProps) {
  return (
    <SVGStormContext.Provider value={{ apiBaseUrl }}>
      {children}
    </SVGStormContext.Provider>
  );
}

export function useSVGStormContext() {
  const context = useContext(SVGStormContext);
  if (!context) {
    throw new Error(
      "useSVGStormContext must be used within a SVGStormProvider"
    );
  }
  return context;
}
