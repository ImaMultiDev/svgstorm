"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/common/SVGStormIcon";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Catálogo", href: "/", icon: "palette" },
    { label: "Documentación", href: "/docs", icon: "documentation" },
    { label: "About", href: "/about", icon: "user" },
    {
      label: "API",
      href: "https://overflowing-adaptation-production.up.railway.app/api/icons",
      icon: "external-link",
      external: true,
    },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 min-w-0"
          >
            <Link href="/" className="flex items-center space-x-3 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-white shadow-sm border border-gray-200">
                  <Image
                    src="/SVGStorm_logo.svg"
                    alt="SVGStorm Logo"
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent truncate">
                  SVGStorm
                </h1>
                <p className="text-xs text-gray-500 -mt-1 hidden sm:block">
                  Icon Library
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 lg:px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm lg:text-base"
                  >
                    <Icon name={item.icon} size={14} />
                    <span className="whitespace-nowrap">{item.label}</span>
                    <Icon name="external-link" size={10} className="ml-1" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-3 lg:px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm lg:text-base"
                  >
                    <Icon name={item.icon} size={14} />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-gray-200/50 py-4"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon name={item.icon} size={18} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <Icon
                        name="external-link"
                        size={12}
                        className="text-gray-400"
                      />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon name={item.icon} size={18} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
