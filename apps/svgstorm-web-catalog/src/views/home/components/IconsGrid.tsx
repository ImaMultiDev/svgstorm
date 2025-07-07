"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect, useRef } from "react";
import IconCard from "@/components/catalog/IconCard";
import { IconData } from "@/interfaces";

interface IconsGridProps {
  filteredIcons: IconData[];
  onIconSelect: (icon: IconData) => void;
  onSearch: (query: string) => void;
}

export default function IconsGrid({
  filteredIcons,
  onIconSelect,
  onSearch,
}: IconsGridProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const iconsPerPage = 40;
  const catalogRef = useRef<HTMLDivElement>(null);

  // Calculate pagination
  const totalPages = Math.ceil(filteredIcons.length / iconsPerPage);
  const startIndex = (currentPage - 1) * iconsPerPage;
  const endIndex = startIndex + iconsPerPage;
  const currentIcons = useMemo(
    () => filteredIcons.slice(startIndex, endIndex),
    [filteredIcons, startIndex, endIndex]
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredIcons]);

  const handleViewChange = (mode: "grid" | "list") => {
    setViewMode(mode);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to catalog section - this solution works perfectly
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/30 py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={catalogRef}
          className="flex flex-col lg:flex-row lg:items-center justify-between mb-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-3">
              Catálogo de Iconos
            </h2>
            <p className="text-xl text-slate-600 mb-4 lg:mb-0">
              {filteredIcons.length}{" "}
              <span className="font-semibold text-purple-600">
                {filteredIcons.length === 1
                  ? "icono encontrado"
                  : "iconos encontrados"}
              </span>
              {filteredIcons.length > iconsPerPage && (
                <span className="text-sm text-slate-500 ml-2">
                  (mostrando {startIndex + 1}-
                  {Math.min(endIndex, filteredIcons.length)} de{" "}
                  {filteredIcons.length})
                </span>
              )}
            </p>
          </motion.div>

          {/* View options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <span className="text-sm text-slate-600 font-medium">Vista:</span>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-xl p-1 border border-slate-200/50">
              <button
                onClick={() => handleViewChange("grid")}
                className={`p-3 rounded-lg shadow-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleViewChange("list")}
                className={`p-3 rounded-lg shadow-lg transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Icons Grid/List */}
        <AnimatePresence mode="popLayout">
          {currentIcons.length > 0 ? (
            <motion.div
              key={`${viewMode}-${currentPage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  : "flex flex-col space-y-4"
              }
            >
              {currentIcons.map((icon, index) => (
                <motion.div
                  key={`${icon.id}-${viewMode}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  layout
                  className={viewMode === "list" ? "w-full" : ""}
                >
                  <IconCard
                    icon={icon}
                    onSelect={onIconSelect}
                    viewMode={viewMode}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-24"
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-purple-100 rounded-full flex items-center justify-center mx-auto border border-slate-200/50">
                  <svg
                    className="w-16 h-16 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-300 rounded-full animate-pulse animation-delay-2000"></div>
              </div>

              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                No se encontraron iconos
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto">
                Intenta con diferentes palabras clave o explora nuestras
                categorías populares
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSearch("")}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Ver todos los iconos
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSearch("interface")}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-xl font-semibold border border-slate-200/50 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                >
                  Explorar Interface
                </motion.button>
              </div>

              {/* Popular searches */}
              <div className="mt-8">
                <p className="text-sm text-slate-500 mb-4">
                  Búsquedas populares:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["arrow", "star", "home", "user", "mail"].map((term) => (
                    <button
                      key={term}
                      onClick={() => onSearch(term)}
                      className="px-3 py-1 text-xs bg-slate-100 text-slate-600 rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination */}
        {filteredIcons.length > iconsPerPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center mt-16 space-x-2"
          >
            {/* Previous button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 1
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200 hover:border-purple-300"
              }`}
            >
              ← Anterior
            </button>

            {/* Page numbers */}
            {getPageNumbers().map((pageNum, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof pageNum === "number"
                    ? handlePageChange(pageNum)
                    : undefined
                }
                disabled={typeof pageNum !== "number"}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  pageNum === currentPage
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : typeof pageNum === "number"
                    ? "bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200 hover:border-purple-300"
                    : "bg-transparent text-slate-400 cursor-default"
                }`}
              >
                {pageNum}
              </button>
            ))}

            {/* Next button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === totalPages
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200 hover:border-purple-300"
              }`}
            >
              Siguiente →
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
