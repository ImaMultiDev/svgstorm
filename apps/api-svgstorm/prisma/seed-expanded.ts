import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const expandedIcons = [
  // WEATHER (6 iconos)
  {
    name: "sun",
    category: "weather",
    tags: ["weather", "sunny", "day", "light"],
    description: "Icono de sol para representar clima soleado",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"/>
  <path d="M12 1v2"/>
  <path d="M12 21v2"/>
  <path d="M4.22 4.22l1.42 1.42"/>
  <path d="M18.36 18.36l1.42 1.42"/>
  <path d="M1 12h2"/>
  <path d="M21 12h2"/>
  <path d="M4.22 19.78l1.42-1.42"/>
  <path d="M18.36 5.64l1.42-1.42"/>
</svg>`,
  },
  {
    name: "moon",
    category: "weather",
    tags: ["weather", "night", "dark", "sleep"],
    description: "Icono de luna para representar la noche",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>`,
  },
  {
    name: "cloud",
    category: "weather",
    tags: ["weather", "cloudy", "sky", "overcast"],
    description: "Icono de nube para clima nublado",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
</svg>`,
  },
  {
    name: "cloud-rain",
    category: "weather",
    tags: ["weather", "rain", "water", "storm"],
    description: "Icono de lluvia",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="16" y1="13" x2="16" y2="21"/>
  <line x1="8" y1="13" x2="8" y2="21"/>
  <line x1="12" y1="15" x2="12" y2="23"/>
  <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
</svg>`,
  },
  {
    name: "snowflake",
    category: "weather",
    tags: ["weather", "snow", "cold", "winter"],
    description: "Icono de copo de nieve",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="2" y1="12" x2="22" y2="12"/>
  <line x1="12" y1="2" x2="12" y2="22"/>
  <path d="M20 16l-4-4 4-4"/>
  <path d="M4 8l4 4-4 4"/>
  <path d="M16 4l-4 4-4-4"/>
  <path d="M8 20l4-4 4 4"/>
</svg>`,
  },
  {
    name: "wind",
    category: "weather",
    tags: ["weather", "wind", "air", "breeze"],
    description: "Icono de viento",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
  <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
  <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
</svg>`,
  },

  // TECHNOLOGY (12 iconos)
  {
    name: "smartphone",
    category: "technology",
    tags: ["phone", "mobile", "device", "tech"],
    description: "Icono de teléfono inteligente",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
  <line x1="12" y1="18" x2="12.01" y2="18"/>
</svg>`,
  },
  {
    name: "laptop",
    category: "technology",
    tags: ["computer", "laptop", "device", "work"],
    description: "Icono de computadora portátil",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
  <line x1="8" y1="21" x2="16" y2="21"/>
  <line x1="12" y1="17" x2="12" y2="21"/>
</svg>`,
  },
  {
    name: "monitor",
    category: "technology",
    tags: ["computer", "screen", "display", "desktop"],
    description: "Icono de monitor de computadora",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
  <line x1="8" y1="21" x2="16" y2="21"/>
  <line x1="12" y1="17" x2="12" y2="21"/>
</svg>`,
  },
  {
    name: "wifi",
    category: "technology",
    tags: ["wifi", "internet", "connection", "wireless"],
    description: "Icono de conexión WiFi",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
  <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
  <line x1="12" y1="20" x2="12.01" y2="20"/>
</svg>`,
  },
  {
    name: "bluetooth",
    category: "technology",
    tags: ["bluetooth", "wireless", "connection", "device"],
    description: "Icono de Bluetooth",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>
</svg>`,
  },
  {
    name: "cpu",
    category: "technology",
    tags: ["cpu", "processor", "computer", "hardware"],
    description: "Icono de procesador",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <rect x="9" y="9" width="6" height="6"/>
  <line x1="9" y1="1" x2="9" y2="4"/>
  <line x1="15" y1="1" x2="15" y2="4"/>
  <line x1="9" y1="20" x2="9" y2="23"/>
  <line x1="15" y1="20" x2="15" y2="23"/>
  <line x1="20" y1="9" x2="23" y2="9"/>
  <line x1="20" y1="14" x2="23" y2="14"/>
  <line x1="1" y1="9" x2="4" y2="9"/>
  <line x1="1" y1="14" x2="4" y2="14"/>
</svg>`,
  },
  {
    name: "database",
    category: "technology",
    tags: ["database", "storage", "data", "server"],
    description: "Icono de base de datos",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <ellipse cx="12" cy="5" rx="9" ry="3"/>
  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
</svg>`,
  },
  {
    name: "code",
    category: "technology",
    tags: ["code", "programming", "development", "software"],
    description: "Icono de código de programación",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="16,18 22,12 16,6"/>
  <polyline points="8,6 2,12 8,18"/>
</svg>`,
  },
  {
    name: "terminal",
    category: "technology",
    tags: ["terminal", "console", "command", "cli"],
    description: "Icono de terminal de comandos",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="4,17 10,11 4,5"/>
  <line x1="12" y1="19" x2="20" y2="19"/>
</svg>`,
  },
  {
    name: "server",
    category: "technology",
    tags: ["server", "hosting", "cloud", "network"],
    description: "Icono de servidor",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
  <line x1="6" y1="6" x2="6.01" y2="6"/>
  <line x1="6" y1="18" x2="6.01" y2="18"/>
</svg>`,
  },
  {
    name: "hardrive",
    category: "technology",
    tags: ["storage", "disk", "hard drive", "memory"],
    description: "Icono de disco duro",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="12" x2="2" y2="12"/>
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  <line x1="6" y1="16" x2="6.01" y2="16"/>
  <line x1="10" y1="16" x2="10.01" y2="16"/>
</svg>`,
  },
  {
    name: "usb",
    category: "technology",
    tags: ["usb", "storage", "device", "connection"],
    description: "Icono de USB",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="10" cy="7" r="1"/>
  <circle cx="4" cy="20" r="1"/>
  <path d="M4.7 19.3l9-9"/>
  <path d="M21 3l-6 6"/>
  <path d="M21 9l-6-6"/>
  <path d="M10 8v13"/>
  <path d="M7 21h6"/>
</svg>`,
  },

  // COMMUNICATION (8 iconos)
  {
    name: "mail",
    category: "communication",
    tags: ["email", "message", "communication", "contact"],
    description: "Icono de correo electrónico",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>`,
  },
  {
    name: "phone",
    category: "communication",
    tags: ["phone", "call", "telephone", "contact"],
    description: "Icono de teléfono",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
</svg>`,
  },
  {
    name: "message-circle",
    category: "communication",
    tags: ["chat", "message", "conversation", "talk"],
    description: "Icono de mensaje circular",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
</svg>`,
  },
  {
    name: "video",
    category: "communication",
    tags: ["video", "camera", "call", "recording"],
    description: "Icono de videollamada",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="23,7 16,12 23,17"/>
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
</svg>`,
  },
  {
    name: "send",
    category: "communication",
    tags: ["send", "message", "arrow", "submit"],
    description: "Icono de enviar mensaje",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="2" x2="11" y2="13"/>
  <polygon points="22,2 15,22 11,13 2,9"/>
</svg>`,
  },
  {
    name: "bell",
    category: "communication",
    tags: ["notification", "alert", "bell", "reminder"],
    description: "Icono de notificación",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
</svg>`,
  },
  {
    name: "at-sign",
    category: "communication",
    tags: ["email", "at", "mention", "contact"],
    description: "Símbolo arroba para email",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"/>
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
</svg>`,
  },
  {
    name: "volume-2",
    category: "communication",
    tags: ["sound", "audio", "volume", "speaker"],
    description: "Icono de volumen alto",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
</svg>`,
  },

  // BUSINESS (10 iconos)
  {
    name: "briefcase",
    category: "business",
    tags: ["business", "work", "job", "professional"],
    description: "Icono de maletín de trabajo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
</svg>`,
  },
  {
    name: "trending-up",
    category: "business",
    tags: ["growth", "chart", "increase", "success"],
    description: "Icono de tendencia creciente",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
  <polyline points="16,7 22,7 22,13"/>
</svg>`,
  },
  {
    name: "trending-down",
    category: "business",
    tags: ["decline", "chart", "decrease", "loss"],
    description: "Icono de tendencia decreciente",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="22,17 13.5,8.5 8.5,13.5 2,7"/>
  <polyline points="16,17 22,17 22,11"/>
</svg>`,
  },
  {
    name: "dollar-sign",
    category: "business",
    tags: ["money", "dollar", "price", "cost"],
    description: "Símbolo de dólar",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="1" x2="12" y2="23"/>
  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
</svg>`,
  },
  {
    name: "credit-card",
    category: "business",
    tags: ["payment", "card", "finance", "money"],
    description: "Icono de tarjeta de crédito",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
  <line x1="1" y1="10" x2="23" y2="10"/>
</svg>`,
  },
  {
    name: "bar-chart",
    category: "business",
    tags: ["chart", "statistics", "data", "analytics"],
    description: "Gráfico de barras",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="20" x2="12" y2="10"/>
  <line x1="18" y1="20" x2="18" y2="4"/>
  <line x1="6" y1="20" x2="6" y2="16"/>
</svg>`,
  },
  {
    name: "pie-chart",
    category: "business",
    tags: ["chart", "statistics", "pie", "analytics"],
    description: "Gráfico circular",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
  <path d="M22 12A10 10 0 0 0 12 2v10z"/>
</svg>`,
  },
  {
    name: "calendar",
    category: "business",
    tags: ["calendar", "date", "schedule", "time"],
    description: "Icono de calendario",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
</svg>`,
  },
  {
    name: "clock",
    category: "business",
    tags: ["time", "clock", "schedule", "hour"],
    description: "Icono de reloj",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <polyline points="12,6 12,12 16,14"/>
</svg>`,
  },
  {
    name: "target",
    category: "business",
    tags: ["target", "goal", "objective", "aim"],
    description: "Icono de objetivo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="6"/>
  <circle cx="12" cy="12" r="2"/>
</svg>`,
  },

  // NAVIGATION (8 iconos más)
  {
    name: "home",
    category: "navigation",
    tags: ["home", "house", "main", "navigation"],
    description: "Icono de casa para página principal",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9,22 9,12 15,12 15,22"/>
</svg>`,
  },
  {
    name: "arrow-left",
    category: "navigation",
    tags: ["arrow", "left", "back", "previous"],
    description: "Flecha hacia la izquierda",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="19" y1="12" x2="5" y2="12"/>
  <polyline points="12,19 5,12 12,5"/>
</svg>`,
  },
  {
    name: "arrow-right",
    category: "navigation",
    tags: ["arrow", "right", "next", "forward"],
    description: "Flecha hacia la derecha",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="12" x2="19" y2="12"/>
  <polyline points="12,5 19,12 12,19"/>
</svg>`,
  },
  {
    name: "arrow-up",
    category: "navigation",
    tags: ["arrow", "up", "top", "ascend"],
    description: "Flecha hacia arriba",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="19" x2="12" y2="5"/>
  <polyline points="5,12 12,5 19,12"/>
</svg>`,
  },
  {
    name: "arrow-down",
    category: "navigation",
    tags: ["arrow", "down", "bottom", "descend"],
    description: "Flecha hacia abajo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="5" x2="12" y2="19"/>
  <polyline points="19,12 12,19 5,12"/>
</svg>`,
  },
  {
    name: "menu",
    category: "navigation",
    tags: ["menu", "hamburger", "navigation", "list"],
    description: "Icono de menú hamburguesa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="6" x2="21" y2="6"/>
  <line x1="3" y1="12" x2="21" y2="12"/>
  <line x1="3" y1="18" x2="21" y2="18"/>
</svg>`,
  },
  {
    name: "x",
    category: "navigation",
    tags: ["close", "cancel", "x", "dismiss"],
    description: "Icono de cerrar/cancelar",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"/>
  <line x1="6" y1="6" x2="18" y2="18"/>
</svg>`,
  },
  {
    name: "external-link",
    category: "navigation",
    tags: ["link", "external", "new", "window"],
    description: "Enlace externo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  <polyline points="15,3 21,3 21,9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>
</svg>`,
  },

  // Mantener iconos originales faltantes
  {
    name: "star",
    category: "shapes",
    tags: ["star", "favorite", "rating", "bookmark"],
    description: "Icono de estrella para favoritos o valoraciones",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
</svg>`,
  },
  {
    name: "heart",
    category: "shapes",
    tags: ["heart", "love", "like", "favorite"],
    description: "Icono de corazón para expresar amor o me gusta",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
</svg>`,
  },
  {
    name: "user",
    category: "people",
    tags: ["user", "person", "profile", "account"],
    description: "Icono de usuario para perfiles",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
  <circle cx="12" cy="7" r="4"/>
</svg>`,
  },
  {
    name: "users",
    category: "people",
    tags: ["users", "people", "team", "group"],
    description: "Icono de múltiples usuarios",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
  <circle cx="9" cy="7" r="4"/>
  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
</svg>`,
  },
  {
    name: "settings",
    category: "interface",
    tags: ["settings", "config", "gear", "preferences"],
    description: "Icono de configuración o ajustes",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3"/>
  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
</svg>`,
  },
  {
    name: "help",
    category: "interface",
    tags: ["help", "question", "support", "info"],
    description: "Icono de ayuda o información",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
  <point cx="12" cy="17"/>
</svg>`,
  },
  {
    name: "download",
    category: "actions",
    tags: ["download", "save", "export", "file"],
    description: "Icono para descargar archivos",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="7,10 12,15 17,10"/>
  <line x1="12" y1="15" x2="12" y2="3"/>
</svg>`,
  },
  {
    name: "upload",
    category: "actions",
    tags: ["upload", "send", "import", "file"],
    description: "Icono para subir archivos",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="17,8 12,3 7,8"/>
  <line x1="12" y1="3" x2="12" y2="15"/>
</svg>`,
  },
];

async function main() {
  console.log("🌱 Comenzando seed EXPANDIDO de la base de datos...");

  // Limpiar datos existentes
  await prisma.icon.deleteMany({});
  console.log("🗑️  Datos existentes eliminados");

  // Contar por categorías
  const categories = {} as Record<string, number>;

  // Insertar iconos expandidos
  for (const icon of expandedIcons) {
    await prisma.icon.create({
      data: icon,
    });

    categories[icon.category] = (categories[icon.category] || 0) + 1;
    console.log(`✅ Icono "${icon.name}" (${icon.category}) creado`);
  }

  console.log(`\n🎉 Seed EXPANDIDO completado!`);
  console.log(`📊 Total: ${expandedIcons.length} iconos creados`);
  console.log(`\n📈 Por categorías:`);
  Object.entries(categories).forEach(([category, count]) => {
    console.log(`  • ${category}: ${count} iconos`);
  });
}

main()
  .catch((e) => {
    console.error("❌ Error durante el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
