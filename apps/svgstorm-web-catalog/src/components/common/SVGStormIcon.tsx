import React from "react";
import { Icon as SVGStormIcon } from "svgstorm-client";
import { useSVGStormContext } from "@/contexts/SVGStormContext";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = (props) => {
  const { apiBaseUrl } = useSVGStormContext();

  return <SVGStormIcon {...props} apiBaseUrl={apiBaseUrl} />;
};
