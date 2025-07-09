"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@/components/common/SVGStormIcon";
import EmailModal from "@/components/common/EmailModal";

export default function Footer() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleEmailClick = () => {
    setIsEmailModalOpen(true);
    // Prevent scrolling when modal opens
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsEmailModalOpen(false);
    // Restore scrolling when modal closes
    document.body.style.overflow = "unset";
  };

  const socialLinks = [
    { name: "GitHub", icon: "github", href: "https://github.com/imamultidev" },
    {
      name: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/imanol-mugueta-unsain/",
    },
    { name: "Portfolio", icon: "home", href: "https://imamultidev.dev/" },
    {
      name: "Email",
      icon: "email",
      href: "#",
      onClick: handleEmailClick,
    },
  ];

  const footerItems = [
    { label: "Catálogo", href: "/", icon: "palette" },
    { label: "Documentación", href: "/docs", icon: "documentation" },
    { label: "About", href: "/about", icon: "user" },
    {
      label: "Contacto",
      icon: "email",
      onClick: handleEmailClick,
    },
  ];

  return (
    <>
      <motion.footer
        className={`${
          isEmailModalOpen ? "fixed inset-0 z-50" : "relative"
        } bg-white/95 backdrop-blur-md border-t border-gray-200/50 mt-20 transition-all duration-300`}
        initial={false}
        animate={
          isEmailModalOpen
            ? {
                background:
                  "linear-gradient(135deg, rgb(15 23 42), rgb(88 28 135), rgb(15 23 42))",
                backdropFilter: "blur(0px)",
              }
            : {
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(12px)",
              }
        }
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div
          className={`max-w-7xl mx-auto ${
            isEmailModalOpen ? "h-full flex items-center justify-center" : ""
          }`}
        >
          <div className="py-6">
            <div className="flex px-4 sm:px-6 lg:px-8 lg:flex-row flex-col justify-between items-center space-y-4 md:space-y-0">
              {/* Logo y redes sociales */}
              <div className="flex flex-col space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-white shadow-sm border border-gray-200">
                      <Image
                        src="/SVGStorm_logo.svg"
                        alt="SVGStorm Logo"
                        width={64}
                        height={64}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      SVGStorm
                    </h3>
                    <p className="text-sm text-gray-500 -mt-1">
                      Professional Icon Library
                    </p>
                  </div>
                </motion.div>

                {/* Redes sociales */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex space-x-4"
                >
                  {socialLinks.map((social) =>
                    social.onClick ? (
                      <button
                        key={social.name}
                        onClick={social.onClick}
                        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
                        title={social.name}
                      >
                        <Icon
                          name={social.icon}
                          size={20}
                          className="text-gray-600 group-hover:text-gray-900 group-hover:scale-110 transition-all"
                        />
                      </button>
                    ) : (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
                        title={social.name}
                      >
                        <Icon
                          name={social.icon}
                          size={20}
                          className="text-gray-600 group-hover:text-gray-900 group-hover:scale-110 transition-all"
                        />
                      </Link>
                    )
                  )}
                </motion.div>
              </div>

              {/* Links de páginas */}
              <div className="hidden border-2 border-gray-500/30 rounded-xl p-2 md:flex gap-4">
                {footerItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.onClick ? (
                      <button
                        onClick={item.onClick}
                        className="flex flex-col items-center gap-3 px-3 lg:px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm lg:text-base"
                      >
                        <Icon name={item.icon} size={14} />
                        <span className="whitespace-nowrap text-sm">
                          {item.label}
                        </span>
                      </button>
                    ) : (
                      <Link
                        href={item.href || ""}
                        className="flex flex-col items-center gap-3 px-3 lg:px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm lg:text-base"
                      >
                        <Icon name={item.icon} size={14} />
                        <span className="whitespace-nowrap text-sm">
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-0.5 text-sm text-gray-500">
                <a href="/legal/terms-of-use.html">Términos de uso</a>
                <a href="/privacy.html">Política de privacidad</a>
                <span>Licencia MIT</span>
              </div>
            </div>
          </div>

          {/* Línea divisoria y copyright final */}
          <div className="border-t-2 border-gray-500/30 py-6">
            <div className="flex px-4 sm:px-6 lg:px-8 flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm text-gray-500"
              >
                © 2025 SVGStorm. All rights reserved.
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-gray-500"
              >
                Powered by Next.js & TypeScript
              </motion.div>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Email Modal */}
      <EmailModal isOpen={isEmailModalOpen} onClose={handleModalClose} />
    </>
  );
}
