"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconData } from "@/interfaces";
import { Icon } from "@/components/common/SVGStormIcon";

interface IconCardProps {
  icon: IconData;
  onSelect: (icon: IconData) => void;
  viewMode?: "grid" | "list";
  className?: string;
}

export default function IconCard({
  icon,
  onSelect,
  viewMode = "grid",
  className = "",
}: IconCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [iconSvg, setIconSvg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load icon immediately when component mounts
  useEffect(() => {
    const loadIconSvg = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://overflowing-adaptation-production.up.railway.app/api/icons/${icon.name}`
        );
        const data = await response.json();
        if (data.success) {
          setIconSvg(data.data.svg_code);
        }
      } catch (error) {
        console.error("Error loading icon:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadIconSvg();
  }, [icon.name]);

  const handleClick = () => {
    onSelect(icon);
  };

  // Grid view (original layout)
  if (viewMode === "grid") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className={`relative group cursor-pointer bg-white rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-72 sm:h-80 ${className}`}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 z-0"
        />

        <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
          {/* Icon preview */}
          <div className="flex items-center justify-center h-16 sm:h-20 mb-3 sm:mb-4 flex-shrink-0">
            {isLoading ? (
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            ) : iconSvg ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
                dangerouslySetInnerHTML={{ __html: iconSvg }}
              />
            ) : (
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <Icon name="image" size={20} />
              </div>
            )}
          </div>

          {/* Icon name */}
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300 line-clamp-1 flex-shrink-0">
            {icon.name}
          </h3>

          {/* Category badge */}
          {icon.category && (
            <div className="flex justify-center mb-2 sm:mb-3 flex-shrink-0">
              <span className="inline-flex items-center px-2 sm:px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {icon.category}
              </span>
            </div>
          )}

          {/* Description - Flex grow para ocupar espacio disponible, máximo 1 línea */}
          <div className="flex-grow mb-2 sm:mb-3 min-h-0">
            {icon.description && (
              <p
                className="text-xs sm:text-sm text-gray-600 text-center text-muted-foreground line-clamp-1 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
              >
                {icon.description}
              </p>
            )}
          </div>

          {/* Tags - si hay más tags de los que caben en una línea, mostrar +N al principio */}
          {icon.tags.length > 0 && (
            <div className="flex gap-1 justify-center mb-2 sm:mb-3 flex-shrink-0 overflow-hidden whitespace-nowrap">
              {icon.tags
                .slice(0, icon.tags.length > 3 ? 2 : 3)
                .map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                  >
                    {tag}
                  </span>
                ))}

              {icon.tags.length > 3 && (
                <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-gray-100 text-gray-600 rounded-md">
                  +{icon.tags.length - 2}
                </span>
              )}
            </div>
          )}

          {/* Hover actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            className="flex justify-center space-x-2 flex-shrink-0"
          >
            <button className="p-1.5 sm:p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm">
              <Icon name="eye" size={14} color="white" />
            </button>
            <button className="p-1.5 sm:p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm">
              <Icon name="copy" size={14} />
            </button>
          </motion.div>
        </div>

        {/* Corner indicator */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>
    );
  }

  // List view (horizontal layout)
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`relative group cursor-pointer bg-white rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 z-0"
      />

      <div className="relative z-10 p-4 flex items-center space-x-6">
        {/* Icon preview */}
        <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-lg flex-shrink-0">
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          ) : iconSvg ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: iconSvg }}
            />
          ) : (
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <Icon name="image" size={16} />
            </div>
          )}
        </div>

        {/* Icon info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1 flex-1">
              {icon.name}
            </h3>
            {icon.category && (
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full flex-shrink-0">
                {icon.category}
              </span>
            )}
          </div>

          {/* Description */}
          {icon.description && (
            <p className="text-sm text-gray-600 mb-2 line-clamp-2 overflow-hidden">
              {icon.description}
            </p>
          )}

          {/* Tags */}
          {icon.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {icon.tags.slice(0, 5).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                >
                  {tag}
                </span>
              ))}
              {icon.tags.length > 5 && (
                <span className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md">
                  +{icon.tags.length - 5}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0.7,
              scale: isHovered ? 1 : 0.8,
            }}
            className="flex space-x-2"
          >
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm">
              <Icon name="eye" size={16} color="white" />
            </button>
            <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm">
              <Icon name="copy" size={16} />
            </button>
          </motion.div>
        </div>

        {/* Corner indicator */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
}
