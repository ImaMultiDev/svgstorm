"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/common/SVGStormIcon";
import { useEffect } from "react";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEmailClick = () => {
    window.open("mailto:contact@imamultidev.dev", "_blank");
    onClose();
  };

  // Disable scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Scroll to bottom to see the footer before animation
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fullscreen Footer Background */}
          <motion.div
            initial={{
              scaleY: 0.001,
              scaleX: 0.4,
              y: "100vh",
              opacity: 0,
              borderRadius: "80% 80% 0 0",
            }}
            animate={{
              scaleY: 1,
              scaleX: 1,
              y: 0,
              opacity: 1,
              borderRadius: "0% 0% 0% 0%",
            }}
            exit={{
              scaleY: 0.001,
              scaleX: 0.4,
              y: "100vh",
              opacity: 0,
              borderRadius: "80% 80% 0 0",
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50"
            style={{ transformOrigin: "bottom center" }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl"
              />
            </div>

            {/* Footer transformation layer */}
            <motion.div
              initial={{
                scaleY: 1,
                y: 0,
                opacity: 1,
              }}
              animate={{
                scaleY: 20,
                y: "-90vh",
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="absolute bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-md border-t border-gray-200/50"
              style={{ transformOrigin: "bottom center" }}
            />

            {/* Expansion ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    scaleX: 0.3,
                    scaleY: 0.01,
                    opacity: 0.6,
                  }}
                  animate={{
                    scaleX: 2,
                    scaleY: 0.15,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-gradient-to-t from-white/15 to-transparent rounded-t-full"
                  style={{ transformOrigin: "bottom center" }}
                />
              ))}
            </div>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.7 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-8 right-8 p-3 text-white/80 hover:text-white rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name="x" size={24} />
              </motion.div>
            </motion.button>

            {/* Content Container */}
            <div
              onClick={handleBackdropClick}
              className="flex items-center justify-center min-h-screen p-4"
            >
              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x:
                        Math.random() *
                        (typeof window !== "undefined"
                          ? window.innerWidth
                          : 800),
                      y:
                        Math.random() *
                        (typeof window !== "undefined"
                          ? window.innerHeight
                          : 600),
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      y: [
                        Math.random() *
                          (typeof window !== "undefined"
                            ? window.innerHeight
                            : 600),
                        Math.random() *
                          (typeof window !== "undefined"
                            ? window.innerHeight
                            : 600) -
                          100,
                        Math.random() *
                          (typeof window !== "undefined"
                            ? window.innerHeight
                            : 600) -
                          200,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      delay: Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-1 h-1 bg-white/50 rounded-full"
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 80 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 80 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 max-w-md w-full mx-4 relative overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-pink-50/50 rounded-2xl"
                />

                {/* Glow effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-2xl blur-sm"
                />

                {/* Shimmer effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                />
                {/* Content */}
                <div className="text-center relative z-10">
                  {/* Icon with pulse ring */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  >
                    <Icon name="mail" size={32} className="text-white" />

                    {/* Pulse rings */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={{
                        scale: [1, 1.5, 2],
                        opacity: [0.8, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.8,
                      }}
                      className="absolute inset-0 rounded-2xl border-2 border-purple-400"
                    />
                    <motion.div
                      initial={{ scale: 0, opacity: 0.6 }}
                      animate={{
                        scale: [1, 1.3, 1.8],
                        opacity: [0.6, 0.2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 1.2,
                      }}
                      className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-4 relative"
                  >
                    <motion.span
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="bg-gradient-to-r from-slate-900 via-purple-800 to-blue-800 bg-clip-text text-transparent bg-[length:200%_auto]"
                    >
                      ¡Hablemos!
                    </motion.span>
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    className="text-lg text-slate-600 mb-6 leading-relaxed"
                  >
                    ¿Tienes alguna idea, proyecto o simplemente quieres
                    conversar sobre desarrollo?
                  </motion.p>

                  {/* Email button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmailClick}
                    className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:from-purple-700 hover:to-blue-700 mb-4 overflow-hidden group"
                  >
                    {/* Ripple effect */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{
                        scale: 3,
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 rounded-xl bg-white/20"
                    />
                    {/* Button shine effect */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    />

                    {/* Hover particle effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{
                            opacity: 0,
                            scale: 0,
                            x: 20 + Math.random() * 40,
                            y: 10 + Math.random() * 20,
                          }}
                          whileHover={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: [
                              20 + Math.random() * 40,
                              Math.random() * 80,
                              20 + Math.random() * 40,
                            ],
                            y: [
                              10 + Math.random() * 20,
                              Math.random() * 40,
                              10 + Math.random() * 20,
                            ],
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1,
                            ease: "easeOut",
                          }}
                          className="absolute w-1 h-1 bg-white/60 rounded-full"
                        />
                      ))}
                    </motion.div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="mr-3"
                    >
                      <Icon name="mail" size={18} />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                    >
                      contact@imamultidev.dev
                    </motion.span>
                  </motion.button>

                  {/* Additional info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.3 }}
                    className="flex items-center justify-center text-sm text-slate-500"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="mr-2"
                    >
                      <Icon name="clock" size={14} />
                    </motion.div>
                    Respondo en 24-48 horas
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
