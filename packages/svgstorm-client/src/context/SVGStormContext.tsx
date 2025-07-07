import React, { createContext, useContext, ReactNode } from "react";

interface SVGStormContextProps {
  apiBaseUrl: string;
  cacheTime?: number;
  retryAttempts?: number;
  retryDelay?: number;
}

const SVGStormContext = createContext<SVGStormContextProps | undefined>(
  undefined
);

interface SVGStormProviderProps {
  children: ReactNode;
  apiBaseUrl: string;
  cacheTime?: number;
  retryAttempts?: number;
  retryDelay?: number;
}

export function SVGStormProvider({
  children,
  apiBaseUrl,
  cacheTime = 5 * 60 * 1000, // 5 minutes default
  retryAttempts = 3,
  retryDelay = 1000,
}: SVGStormProviderProps) {
  return (
    <SVGStormContext.Provider
      value={{
        apiBaseUrl,
        cacheTime,
        retryAttempts,
        retryDelay,
      }}
    >
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

export function useSVGStormContextOptional() {
  return useContext(SVGStormContext);
}
