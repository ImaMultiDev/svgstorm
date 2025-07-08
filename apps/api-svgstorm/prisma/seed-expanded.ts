import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const expandedIcons = [
  // COLECCIÓN COMPLETA DE 204 ICONOS DE LUCIDE

  // ===== WEATHER & NATURE ICONS (25) =====
  {
    name: "sun",
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
    category: "Weather & Nature",
    tags: ["sun", "sunny", "weather", "bright", "day"],
    description: "Bright sunny weather",
  },
  {
    name: "moon",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["moon", "night", "dark", "lunar", "evening"],
    description: "Night time or moon phase",
  },
  {
    name: "cloud-rain",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
    <path d="M16 14v6"/>
    <path d="M8 14v6"/>
    <path d="M12 16v6"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["rain", "weather", "storm", "precipitation", "cloudy"],
    description: "Rainy weather conditions",
  },
  {
    name: "snowflake",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="2" y1="12" x2="22" y2="12"/>
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="m20 16-4-4 4-4"/>
    <path d="m4 8 4 4-4 4"/>
    <path d="m16 4-4 4-4-4"/>
    <path d="m8 20 4-4 4 4"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["snow", "winter", "cold", "frozen", "ice"],
    description: "Snow or winter weather",
  },
  {
    name: "tree-pine",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 14h.01"/>
    <path d="M7 14h.01"/>
    <path d="M12 3 8 10h8z"/>
    <path d="M12 8 9.5 13.5h5z"/>
    <path d="M12 13v8"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["tree", "pine", "forest", "nature", "evergreen"],
    description: "Pine tree or evergreen forest",
  },
  {
    name: "flower",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"/>
    <path d="M12 7.5V9"/>
    <path d="M7.5 12H9"/>
    <path d="M16.5 12H15"/>
    <path d="M12 16.5V15"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["flower", "bloom", "garden", "nature", "spring"],
    description: "Flower or blooming plant",
  },
  {
    name: "leaf",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["leaf", "plant", "nature", "green", "organic"],
    description: "Single leaf or plant foliage",
  },
  {
    name: "mountain",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 21l4-7 4 7"/>
    <path d="M2 21h20"/>
    <path d="M15 10l-2-5-2 5"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["mountain", "peak", "landscape", "nature", "outdoor"],
    description: "Mountain or landscape view",
  },
  {
    name: "waves",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 6c.6.5 1.2 1 2.5 1C6 7 6 6 7.5 6c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1c1.3 0 1.9-.5 2.5-1"/>
    <path d="M2 12c.6.5 1.2 1 2.5 1 1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1c1.3 0 1.9-.5 2.5-1"/>
    <path d="M2 18c.6.5 1.2 1 2.5 1 1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1c1.3 0 1.9-.5 2.5-1"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["waves", "water", "ocean", "sea", "surf"],
    description: "Ocean waves or water movement",
  },
  {
    name: "rainbow",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 17c0-9.5-7.5-17-17-17s-17 7.5-17 17"/>
    <path d="M18 17c0-7-5.5-13-13-13s-13 6-13 13"/>
    <path d="M14 17c0-4.5-3.5-8-8-8s-8 3.5-8 8"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["rainbow", "colorful", "weather", "spectrum", "arc"],
    description: "Rainbow or colorful arc",
  },
  {
    name: "lightning",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.326"/>
    <path d="M13 11l-4 6h6l-4 6"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["lightning", "storm", "thunder", "bolt", "electric"],
    description: "Lightning or thunderstorm",
  },
  {
    name: "wind",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["wind", "breeze", "air", "weather", "windy"],
    description: "Wind or air movement",
  },
  {
    name: "droplets",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2.04 4.6 4.14 6.1a5.11 5.11 0 0 1 .9 8.38A5.1 5.1 0 0 1 14 20.5a5.1 5.1 0 0 1-5.05-2.56"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["droplets", "water", "rain", "moisture", "liquid"],
    description: "Water droplets or moisture",
  },
  {
    name: "bug",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 2h8"/>
    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <path d="M12 8c0 8 0 8 0 8"/>
    <path d="M8 8c0 4 0 10 4 10s4-6 4-10"/>
    <path d="M8 21a4 4 0 0 0 8 0"/>
    <path d="M5 10h.01"/>
    <path d="M19 10h.01"/>
    <path d="M5 14h.01"/>
    <path d="M19 14h.01"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["bug", "insect", "beetle", "creature", "nature"],
    description: "Bug or small insect",
  },
  {
    name: "sprout",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 20h10"/>
    <path d="M10 20c5.5-2.5.8-6.4 3-10"/>
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.7 4.3-1.4 1-1.1 1.6-2.7 1.7-4.6-2.7.1-4 1-4.9 2z"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["sprout", "seedling", "growth", "plant", "new"],
    description: "Plant sprout or new growth",
  },
  {
    name: "cactus",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 21v-8"/>
    <path d="M13 5v8"/>
    <path d="M16 8a3 3 0 0 1 6 0c0 3-3 5-6 8"/>
    <path d="M8 8a3 3 0 0 0-6 0c0 3 3 5 6 8"/>
    <path d="M7 21h10"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["cactus", "desert", "plant", "succulent", "dry"],
    description: "Cactus or desert plant",
  },
  {
    name: "fire",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["fire", "flame", "heat", "burn", "hot"],
    description: "Fire or flame",
  },
  {
    name: "tornado",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 4H3"/>
    <path d="M18 8H6"/>
    <path d="M19 12H9"/>
    <path d="M16 16h-6"/>
    <path d="M11 20H9"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["tornado", "twister", "storm", "wind", "disaster"],
    description: "Tornado or severe storm",
  },
  {
    name: "thermometer",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["thermometer", "temperature", "weather", "hot", "cold"],
    description: "Temperature measurement",
  },
  {
    name: "earth",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["earth", "globe", "world", "planet", "global"],
    description: "Planet Earth or global",
  },
  {
    name: "recycle",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.784 1.784 0 0 1-.004-1.784L7.196 9.5"/>
    <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/>
    <path d="M14 16l-3 3 3 3"/>
    <path d="M8.293 13.596L7.196 9.5 3.1 10.598"/>
    <path d="M9.344 5.811L11.898 9.5 14.482 8.562"/>
    <path d="M15.707 13.596L14.482 8.562 18.655 7.409"/>
    <path d="M13.188 2.188L14.482 8.562 11.898 9.5"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["recycle", "environment", "green", "eco", "sustainability"],
    description: "Recycling or environmental conservation",
  },
  {
    name: "sunrise",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2v8"/>
    <path d="M4.93 10.93l1.41 1.41"/>
    <path d="M2 18h2"/>
    <path d="M20 18h2"/>
    <path d="M19.07 10.93l-1.41 1.41"/>
    <path d="M22 22H2"/>
    <path d="M8 6l4-4 4 4"/>
    <path d="M16 18a4 4 0 0 0-8 0"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["sunrise", "dawn", "morning", "sun", "early"],
    description: "Sunrise or dawn",
  },
  {
    name: "sunset",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 10V2"/>
    <path d="M4.93 10.93l1.41 1.41"/>
    <path d="M2 18h2"/>
    <path d="M20 18h2"/>
    <path d="M19.07 10.93l-1.41 1.41"/>
    <path d="M22 22H2"/>
    <path d="M16 6l-4 4-4-4"/>
    <path d="M16 18a4 4 0 0 0-8 0"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["sunset", "dusk", "evening", "sun", "twilight"],
    description: "Sunset or dusk",
  },
  {
    name: "cloudy",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["cloudy", "overcast", "weather", "sky", "gloomy"],
    description: "Cloudy or overcast weather",
  },
  {
    name: "umbrella",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 12a10.06 10.06 0 0 0-20 0Z"/>
    <path d="M12 12v8a2 2 0 0 0 4 0"/>
    <path d="M12 2v1"/>
  </svg>`,
    category: "Weather & Nature",
    tags: ["umbrella", "rain", "protection", "weather", "cover"],
    description: "Umbrella for rain protection",
  },

  // ===== TRANSPORTATION & VEHICLES ICONS (20) =====
  {
    name: "car",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 10c-.4-.8-1.2-1.3-2.1-1.3H7.7c-.9 0-1.7.5-2.1 1.3l-2.1 1.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2"/>
    <circle cx="7" cy="17" r="2"/>
    <path d="M9 17h6"/>
    <circle cx="17" cy="17" r="2"/>
  </svg>`,
    category: "Transportation",
    tags: ["car", "vehicle", "automobile", "transport", "drive"],
    description: "Passenger car or automobile",
  },
  {
    name: "bus",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 6v6"/>
    <path d="M15 6v6"/>
    <path d="M2 12h19.6"/>
    <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2L21 10"/>
    <path d="M5 15h14"/>
    <path d="M5 18a2 2 0 1 0 4 0"/>
    <path d="M15 18a2 2 0 1 0 4 0"/>
    <path d="M3 6h18"/>
    <path d="M3 10h18"/>
  </svg>`,
    category: "Transportation",
    tags: ["bus", "public", "transport", "vehicle", "travel"],
    description: "Public bus transportation",
  },
  {
    name: "plane",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>`,
    category: "Transportation",
    tags: ["plane", "airplane", "flight", "aviation", "travel"],
    description: "Airplane or aircraft",
  },
  {
    name: "train",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 15.5c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-13C4.67 7 4 7.67 4 8.5z"/>
    <path d="M6 6h12"/>
    <path d="M6 22v-2"/>
    <path d="M18 22v-2"/>
    <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>
    <circle cx="8" cy="14" r="1"/>
    <circle cx="16" cy="14" r="1"/>
  </svg>`,
    category: "Transportation",
    tags: ["train", "railway", "locomotive", "transport", "rail"],
    description: "Train or railway transport",
  },
  {
    name: "bike",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18.5" cy="17.5" r="3.5"/>
    <circle cx="5.5" cy="17.5" r="3.5"/>
    <circle cx="15" cy="5" r="1"/>
    <path d="M12 17.5 14 15.5 10.5 12 14 8.5 16 9.5"/>
    <path d="M17.5 17.5L19 16"/>
  </svg>`,
    category: "Transportation",
    tags: ["bike", "bicycle", "cycling", "pedal", "sport"],
    description: "Bicycle or bike",
  },
  {
    name: "ship",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/>
    <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/>
    <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>
    <path d="M12 10v4"/>
    <path d="M12 2v3"/>
  </svg>`,
    category: "Transportation",
    tags: ["ship", "boat", "vessel", "sailing", "maritime"],
    description: "Ship or boat",
  },
  {
    name: "helicopter",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10h12"/>
    <path d="M3 14h9"/>
    <path d="M13 4h8"/>
    <path d="M13 8h5"/>
    <path d="M16 4v4"/>
    <path d="M11 10v6"/>
    <path d="M5 16v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"/>
  </svg>`,
    category: "Transportation",
    tags: ["helicopter", "chopper", "aircraft", "rotor", "flight"],
    description: "Helicopter aircraft",
  },
  {
    name: "sailboat",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"/>
    <path d="M21 14 10 2 3 14h18Z"/>
    <path d="M10 2v16"/>
  </svg>`,
    category: "Transportation",
    tags: ["sailboat", "sailing", "yacht", "boat", "wind"],
    description: "Sailboat or yacht",
  },

  {
    name: "taxi",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 2h4"/>
    <path d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/>
    <path d="M7 10h10"/>
    <path d="M3 10v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8"/>
    <circle cx="7" cy="18" r="2"/>
    <circle cx="17" cy="18" r="2"/>
  </svg>`,
    category: "Transportation",
    tags: ["taxi", "cab", "ride", "transport", "city"],
    description: "Taxi cab service",
  },
  {
    name: "scooter",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18" cy="18" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <path d="M9 18h6"/>
    <path d="M12 8V5l2-2"/>
    <path d="M9 8h3l2-5"/>
    <path d="M18 9a2 2 0 0 1-2-2V5"/>
  </svg>`,
    category: "Transportation",
    tags: ["scooter", "kick", "electric", "urban", "mobility"],
    description: "Scooter or kick scooter",
  },
  {
    name: "motorcycle",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="17" cy="18" r="3"/>
    <circle cx="7" cy="18" r="3"/>
    <path d="M5 18H2l1-5 2-2h10"/>
    <path d="M12 8l-2 2h8"/>
    <path d="M16 8h2l1 3"/>
    <path d="M12 8V5l2-2"/>
  </svg>`,
    category: "Transportation",
    tags: ["motorcycle", "motorbike", "bike", "two-wheeler", "ride"],
    description: "Motorcycle or motorbike",
  },
  {
    name: "submarine",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 14c0 3.31-2.69 6-6 6H9c-3.31 0-6-2.69-6-6 0-3.31 2.69-6 6-6h6c3.31 0 6 2.69 6 6Z"/>
    <path d="M3 14h6"/>
    <path d="M15 14h6"/>
    <path d="M12 8V5"/>
    <circle cx="12" cy="14" r="1"/>
  </svg>`,
    category: "Transportation",
    tags: ["submarine", "underwater", "naval", "vessel", "marine"],
    description: "Submarine or underwater vessel",
  },
  {
    name: "tractor",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 4h9l1 7"/>
    <path d="M4 11V9"/>
    <path d="M8 11V9"/>
    <path d="M13 11h4"/>
    <path d="M13 19a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H13z"/>
    <circle cx="4" cy="19" r="2"/>
    <circle cx="20" cy="19" r="2"/>
  </svg>`,
    category: "Transportation",
    tags: ["tractor", "farm", "agriculture", "vehicle", "farming"],
    description: "Farm tractor",
  },
  {
    name: "ambulance",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 10H6"/>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/>
    <path d="M8 8v4"/>
    <path d="M9 18h6"/>
    <circle cx="17" cy="18" r="2"/>
    <circle cx="7" cy="18" r="2"/>
  </svg>`,
    category: "Transportation",
    tags: ["ambulance", "emergency", "medical", "vehicle", "rescue"],
    description: "Emergency ambulance",
  },
  {
    name: "truck",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
    <path d="M15 18H9"/>
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
    <circle cx="17" cy="18" r="2"/>
    <circle cx="7" cy="18" r="2"/>
  </svg>`,
    category: "Transportation",
    tags: ["truck", "lorry", "delivery", "cargo", "freight"],
    description: "Delivery truck or lorry",
  },
  {
    name: "forklift",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 12H5a2 2 0 0 0-2 2v5"/>
    <circle cx="13" cy="19" r="2"/>
    <circle cx="5" cy="19" r="2"/>
    <path d="M8 19h3m-6-7 1.5-1.5L9 13"/>
    <path d="M2 13h15"/>
    <path d="M18 6v7"/>
    <path d="M18 8a2 2 0 1 1 4 0v6"/>
  </svg>`,
    category: "Transportation",
    tags: ["forklift", "warehouse", "lifting", "cargo", "industrial"],
    description: "Forklift for warehouse operations",
  },
  {
    name: "ferry",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 22a7 7 0 1 1 12.16-4.16L22 16l-8 6Z"/>
    <path d="M6 16h.01"/>
    <path d="M10 16h.01"/>
    <path d="M14 16h.01"/>
  </svg>`,
    category: "Transportation",
    tags: ["ferry", "boat", "passenger", "water", "transport"],
    description: "Ferry boat for passengers",
  },
  {
    name: "caravan",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 9h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z"/>
    <path d="M13 20h3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9"/>
    <path d="M22 17h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1"/>
    <circle cx="7" cy="20" r="2"/>
    <path d="M22 17v-5"/>
    <path d="M6 6h.01"/>
    <path d="M10 6h.01"/>
  </svg>`,
    category: "Transportation",
    tags: ["caravan", "trailer", "camping", "rv", "mobile"],
    description: "Travel caravan or RV",
  },
  {
    name: "cable-car",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 3h.01"/>
    <path d="M14 2h.01"/>
    <path d="M16 8a4 4 0 0 0-8 0"/>
    <path d="M4.5 17a3.5 3.5 0 0 0 0-7"/>
    <path d="M19.5 17a3.5 3.5 0 0 0 0-7"/>
    <path d="M17 22H7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2Z"/>
    <path d="M9 19h.01"/>
    <path d="M15 19h.01"/>
  </svg>`,
    category: "Transportation",
    tags: ["cable-car", "gondola", "mountain", "ski", "aerial"],
    description: "Cable car or gondola lift",
  },

  // ===== HEALTH & MEDICAL ICONS (20) =====

  {
    name: "heart-pulse",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5"/>
    <path d="M12 5L8 21l4-7 4 7-4-16"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["heart", "pulse", "heartbeat", "cardiology", "vital"],
    description: "Heart with pulse or vital signs",
  },
  {
    name: "pill",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.5 20.5 21 10a3.5 3.5 0 0 0-5-5l-10.5 10.5a3.5 3.5 0 1 0 5 5Z"/>
    <path d="M8.5 8.5 15 15"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["pill", "medicine", "medication", "pharmacy", "treatment"],
    description: "Medical pill or medication",
  },

  {
    name: "hospital",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 6v4"/>
    <path d="M14 14h-4"/>
    <path d="M14 18h-4"/>
    <path d="M14 8h-4"/>
    <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/>
    <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["hospital", "medical", "healthcare", "building", "clinic"],
    description: "Hospital or medical facility",
  },
  {
    name: "thermometer",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["thermometer", "temperature", "fever", "medical", "health"],
    description: "Medical thermometer",
  },
  {
    name: "microscope",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 18h8"/>
    <path d="M3 22h18"/>
    <path d="M14 22a7 7 0 1 0 0-14h-1"/>
    <path d="M9 14h2"/>
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2"/>
    <path d="M12 6V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["microscope", "laboratory", "research", "science", "analysis"],
    description: "Laboratory microscope",
  },
  {
    name: "dna",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 15c6.667-6 13.333 0 20-6"/>
    <path d="M9 22c6.667-6 13.333 0 20-6"/>
    <path d="M2 9c6.667 6 13.333 0 20 6"/>
    <path d="M9 2c6.667 6 13.333 0 20 6"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["dna", "genetics", "biology", "helix", "science"],
    description: "DNA double helix structure",
  },
  {
    name: "virus",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9L21 3z"/>
    <path d="M7.5 8 10 5.5"/>
    <path d="M14 16.5 16.5 19"/>
    <path d="M8.5 16.5 5 13"/>
    <path d="M16.5 7.5 13 11"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["virus", "infection", "pathogen", "disease", "medical"],
    description: "Virus or pathogen",
  },
  {
    name: "wheelchair",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="5" r="1"/>
    <path d="M9 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
    <path d="M6 8h2l2 4"/>
    <path d="M16 8h3.5a2 2 0 0 1 1.6 3.2L19 14"/>
    <path d="M14 8v8"/>
    <path d="M14 8h1"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["wheelchair", "accessibility", "disability", "mobility", "medical"],
    description: "Wheelchair for mobility assistance",
  },
  {
    name: "test-tube",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 2a.5.5 0 0 1 .5.5v6.5"/>
    <path d="M8.5 2a.5.5 0 0 0-.5.5v6.5"/>
    <path d="M8.5 2h6"/>
    <path d="M9 9l6 11a2 2 0 0 1-2 3H11a2 2 0 0 1-2-3l6-11"/>
    <circle cx="12" cy="16" r="1"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["test-tube", "laboratory", "chemistry", "experiment", "science"],
    description: "Laboratory test tube",
  },
  {
    name: "x-ray",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 2H3v20h18V2Z"/>
    <path d="M7 8h6v8H7z"/>
    <path d="M7 12h6"/>
    <path d="M10 8v8"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["x-ray", "medical", "imaging", "bones", "diagnosis"],
    description: "Medical X-ray imaging",
  },
  {
    name: "first-aid",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
    <path d="M12 8v8"/>
    <path d="M8 12h8"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["first-aid", "medical", "emergency", "cross", "health"],
    description: "First aid medical cross",
  },
  {
    name: "brain",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
    <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
    <path d="M6 18a4 4 0 0 1-1.967-.516"/>
    <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["brain", "neurology", "mind", "intelligence", "mental"],
    description: "Human brain or neurology",
  },
  {
    name: "lungs",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 12a4 4 0 1 1-8 0V8a4 4 0 1 1 8 0"/>
    <path d="M23 12a4 4 0 1 1-8 0V8a4 4 0 1 1 8 0"/>
    <path d="M9 12v4a4 4 0 0 1-4 4H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a4 4 0 0 0 4-4"/>
    <path d="M15 12v4a4 4 0 0 0 4 4h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a4 4 0 0 1-4-4"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["lungs", "respiratory", "breathing", "pulmonary", "organs"],
    description: "Human lungs respiratory system",
  },
  {
    name: "eye-scan",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
    <circle cx="12" cy="12" r="1"/>
    <path d="M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["eye", "scan", "vision", "ophthalmology", "examination"],
    description: "Eye examination or scan",
  },
  {
    name: "medical-cross",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 2a2 2 0 0 1 2 0l7 4a2 2 0 0 1 1 1.732v8.536a2 2 0 0 1-1 1.732l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16.268V7.732A2 2 0 0 1 4 6l7-4Z"/>
    <path d="M12 8v8"/>
    <path d="M8 12h8"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["medical", "cross", "health", "emergency", "hospital"],
    description: "Medical cross symbol",
  },
  {
    name: "pharmacy",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 21h18"/>
    <path d="M5 21V7l8-4v18"/>
    <path d="M19 21V11l-6-4"/>
    <path d="M9 9v.01"/>
    <path d="M9 12v.01"/>
    <path d="M9 15v.01"/>
    <path d="M9 18v.01"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["pharmacy", "medicine", "drugs", "prescription", "store"],
    description: "Pharmacy or drug store",
  },
  {
    name: "surgery",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 10.01h.01"/>
    <path d="M10 14.01h.01"/>
    <path d="M14 10.01h.01"/>
    <path d="M14 14.01h.01"/>
    <path d="M18 6v11.5c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5V6h12Z"/>
    <path d="M6 6V4.5C6 3.7 6.7 3 7.5 3h9c.8 0 1.5.7 1.5 1.5V6"/>
    <path d="M12 13v-2"/>
    <path d="M11 12h2"/>
  </svg>`,
    category: "Health & Medical",
    tags: ["surgery", "operation", "medical", "procedure", "surgical"],
    description: "Surgical operation or procedure",
  },

  // ===== ENTERTAINMENT & MEDIA ICONS (20) =====
  {
    name: "play",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="6,3 20,12 6,21 6,3"/>
  </svg>`,
    category: "Entertainment",
    tags: ["play", "start", "media", "video", "music"],
    description: "Play button for media",
  },
  {
    name: "pause",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="4" height="16" x="6" y="4"/>
    <rect width="4" height="16" x="14" y="4"/>
  </svg>`,
    category: "Entertainment",
    tags: ["pause", "stop", "media", "video", "music"],
    description: "Pause button for media",
  },
  {
    name: "stop",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
  </svg>`,
    category: "Entertainment",
    tags: ["stop", "halt", "media", "video", "music"],
    description: "Stop button for media",
  },
  {
    name: "music",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>`,
    category: "Entertainment",
    tags: ["music", "note", "audio", "song", "melody"],
    description: "Music note or audio",
  },
  {
    name: "tv",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="20" height="15" x="2" y="7" rx="2" ry="2"/>
    <polyline points="17,2 12,7 7,2"/>
  </svg>`,
    category: "Entertainment",
    tags: ["tv", "television", "screen", "entertainment", "broadcast"],
    description: "Television or TV screen",
  },
  {
    name: "film",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2"/>
    <path d="M7 3v18"/>
    <path d="M3 7.5h4"/>
    <path d="M3 12h18"/>
    <path d="M3 16.5h4"/>
    <path d="M17 3v18"/>
    <path d="M17 7.5h4"/>
    <path d="M17 16.5h4"/>
  </svg>`,
    category: "Entertainment",
    tags: ["film", "movie", "cinema", "video", "reel"],
    description: "Film or movie reel",
  },
  {
    name: "camera",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>`,
    category: "Entertainment",
    tags: ["camera", "photo", "picture", "capture", "photography"],
    description: "Camera for photography",
  },
  {
    name: "radio",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/>
    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/>
    <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>
  </svg>`,
    category: "Entertainment",
    tags: ["radio", "broadcast", "audio", "signal", "transmission"],
    description: "Radio broadcasting or signal",
  },
  {
    name: "gaming-pad",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="6" y1="11" x2="10" y2="11"/>
    <line x1="8" y1="9" x2="8" y2="13"/>
    <line x1="15" y1="12" x2="15.01" y2="12"/>
    <line x1="18" y1="10" x2="18.01" y2="10"/>
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.152A4 4 0 0 0 17.32 5z"/>
  </svg>`,
    category: "Entertainment",
    tags: ["gaming", "gamepad", "controller", "video-games", "console"],
    description: "Gaming controller or gamepad",
  },
  {
    name: "dice",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="12" height="12" x="2" y="10" rx="2" ry="2"/>
    <path d="M17.92 14H20a2 2 0 0 0 1.92-2.5l-2.5-8A2 2 0 0 0 17.5 2H8.08a2 2 0 0 0-1.92 1.5L4.5 11.5A2 2 0 0 0 6.42 14"/>
    <path d="M8 6h.01"/>
    <path d="M16 6h.01"/>
    <path d="M12 6h.01"/>
    <path d="M12 10h.01"/>
    <path d="M12 14h.01"/>
    <path d="M16 10h.01"/>
    <path d="M16 14h.01"/>
    <path d="M8 10h.01"/>
    <path d="M8 14h.01"/>
  </svg>`,
    category: "Entertainment",
    tags: ["dice", "game", "random", "luck", "gambling"],
    description: "Gaming dice",
  },
  {
    name: "puzzle",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19.439 7.85c-.049.322-.059.648-.026.975.056.506.194.995.357 1.47.388.955.337 2.043-.069 2.958-.16.373-.404.66-.741.97-.046.133-.096.266-.147.4-.044.119-.094.232-.145.343-.667 1.512-1.344 3.02-2.011 4.531-.287.646-.649 1.28-1.15 1.738-.501.458-1.19.635-1.859.635-1.14 0-2.199-.613-2.793-1.534-.297-.459-.52-.963-.728-1.469-.286-.695-.566-1.392-.848-2.087-.283-.694-.566-1.389-.85-2.083-.142-.347-.284-.694-.426-1.041-.093-.224-.186-.448-.279-.672-.094-.224-.187-.449-.28-.673-.048-.116-.095-.232-.142-.348L8.5 9.5"/>
    <path d="M8.5 2.5c0-1.38 1.12-2.5 2.5-2.5S13.5 1.12 13.5 2.5 12.38 5 11 5 8.5 3.88 8.5 2.5"/>
    <path d="M12.5 16.5c0 1.38-1.12 2.5-2.5 2.5S7.5 17.88 7.5 16.5 8.62 14 10 14s2.5 1.12 2.5 2.5"/>
  </svg>`,
    category: "Entertainment",
    tags: ["puzzle", "jigsaw", "game", "problem", "solve"],
    description: "Puzzle piece or jigsaw",
  },
  {
    name: "trophy",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <path d="M7 4v10a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V4"/>
    <path d="M17 4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/>
    <path d="M7 4H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"/>
  </svg>`,
    category: "Entertainment",
    tags: ["trophy", "award", "winner", "achievement", "prize"],
    description: "Trophy or award",
  },
  {
    name: "theater",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 16.1A5 5 0 0 1 5.9 20M6.3 20.9a10 10 0 0 1 11.4 0"/>
    <path d="M6.9 20.1A7 7 0 0 1 17.1 20M15.7 20.9C15.6 21 15.4 21 15.3 21c-.2 0-.5 0-.7-.1"/>
    <path d="M9 12h6"/>
    <path d="M4 9h16"/>
    <circle cx="12" cy="6" r="4"/>
  </svg>`,
    category: "Entertainment",
    tags: ["theater", "drama", "performance", "stage", "acting"],
    description: "Theater or drama performance",
  },
  {
    name: "art-palette",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="13.5" cy="6.5" r=".5"/>
    <circle cx="17.5" cy="10.5" r=".5"/>
    <circle cx="8.5" cy="7.5" r=".5"/>
    <circle cx="6.5" cy="12.5" r=".5"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>`,
    category: "Entertainment",
    tags: ["palette", "art", "painting", "colors", "creative"],
    description: "Artist color palette",
  },
  {
    name: "paintbrush",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/>
    <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>
    <path d="M14.5 17.5 4.5 15"/>
  </svg>`,
    category: "Entertainment",
    tags: ["paintbrush", "art", "painting", "brush", "creative"],
    description: "Paintbrush for art",
  },
  {
    name: "guitar",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 2v20C10 24 8 24 8 22V2c0-2 2-2 2 0Z"/>
    <path d="M8 8a4 4 0 1 1-8 0 4 4 0 1 1 8 0"/>
    <path d="M12 8h10"/>
    <circle cx="20" cy="8" r="2"/>
  </svg>`,
    category: "Entertainment",
    tags: ["guitar", "music", "instrument", "string", "acoustic"],
    description: "Guitar musical instrument",
  },
  {
    name: "piano",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 10v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-2.2-1.8-4-4-4-.6 0-1.1.1-1.5.4"/>
    <path d="M2 14h20"/>
    <path d="M6 14v4"/>
    <path d="M10 14v4"/>
    <path d="M14 14v4"/>
    <path d="M18 14v4"/>
  </svg>`,
    category: "Entertainment",
    tags: ["piano", "music", "keyboard", "instrument", "keys"],
    description: "Piano musical instrument",
  },
  {
    name: "drum",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2a10 10 0 0 1 10 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8A10 10 0 0 1 12 2Z"/>
    <path d="M12 2v4"/>
    <path d="M12 18v4"/>
    <path d="M7 7l2 2"/>
    <path d="M15 15l2 2"/>
    <path d="M7 17l2-2"/>
    <path d="M15 9l2-2"/>
  </svg>`,
    category: "Entertainment",
    tags: ["drum", "music", "percussion", "instrument", "beat"],
    description: "Drum percussion instrument",
  },
  {
    name: "vinyl",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="12" cy="12" r="1"/>
  </svg>`,
    category: "Entertainment",
    tags: ["vinyl", "record", "music", "disc", "retro"],
    description: "Vinyl record disc",
  },
  {
    name: "ticket",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
    <path d="M13 5v2"/>
    <path d="M13 17v2"/>
    <path d="M13 11v2"/>
  </svg>`,
    category: "Entertainment",
    tags: ["ticket", "event", "admission", "concert", "show"],
    description: "Event ticket or admission",
  },

  // ===== SHOPPING & E-COMMERCE ICONS (15) =====
  {
    name: "shopping-cart",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>`,
    category: "Shopping",
    tags: ["cart", "shopping", "buy", "purchase", "ecommerce"],
    description: "Shopping cart for purchases",
  },
  {
    name: "shopping-bag",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <path d="M3 6h18"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>`,
    category: "Shopping",
    tags: ["bag", "shopping", "purchase", "carry", "store"],
    description: "Shopping bag for carrying items",
  },
  {
    name: "store",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 7V5c0-1.1.9-2 2-2h2"/>
    <path d="M17 3h2c1.1 0 2 .9 2 2v2"/>
    <path d="M21 17v2c0 1.1-.9 2-2 2h-2"/>
    <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"/>
    <path d="M8 7v10"/>
    <path d="M16 7v10"/>
    <path d="M8 17h8"/>
  </svg>`,
    category: "Shopping",
    tags: ["store", "shop", "retail", "business", "commerce"],
    description: "Retail store or shop",
  },
  {
    name: "gift",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="8" width="18" height="4" rx="1"/>
    <path d="M12 8v13"/>
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
  </svg>`,
    category: "Shopping",
    tags: ["gift", "present", "box", "surprise", "birthday"],
    description: "Gift box or present",
  },
  {
    name: "tag",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>
  </svg>`,
    category: "Shopping",
    tags: ["tag", "label", "price", "sale", "discount"],
    description: "Price tag or label",
  },
  {
    name: "percent",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="19" y1="5" x2="5" y2="19"/>
    <circle cx="6.5" cy="6.5" r="2.5"/>
    <circle cx="17.5" cy="17.5" r="2.5"/>
  </svg>`,
    category: "Shopping",
    tags: ["percent", "discount", "sale", "percentage", "offer"],
    description: "Percentage or discount symbol",
  },
  // ===== COMMUNICATION ICONS (30) =====
  {
    name: "mail",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>`,
    category: "Communication",
    tags: ["email", "message", "letter", "envelope", "inbox"],
    description: "Represents email or postal mail communication",
  },
  {
    name: "phone",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>`,
    category: "Communication",
    tags: ["call", "telephone", "contact", "dial", "voice"],
    description: "Represents phone calls and voice communication",
  },
  {
    name: "phone-call",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>`,
    category: "Communication",
    tags: ["call", "telephone", "outgoing", "active", "ringing"],
    description: "Represents an active or outgoing phone call",
  },
  {
    name: "message-circle",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
    </svg>`,
    category: "Communication",
    tags: ["chat", "message", "bubble", "conversation", "talk"],
    description: "Represents chat messages and conversations",
  },
  {
    name: "message-square",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>`,
    category: "Communication",
    tags: ["chat", "message", "comment", "dialog", "feedback"],
    description: "Represents text messages or comments",
  },
  {
    name: "send",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.919L22 12 3.46 20.924c-.688.302-1.482-.198-1.46-.919a.662.662 0 0 1 .023-.14L4 12.989"/>
    </svg>`,
    category: "Communication",
    tags: ["send", "submit", "arrow", "deliver", "transmit"],
    description: "Represents sending messages or data",
  },
  {
    name: "microphone",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
      <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>`,
    category: "Communication",
    tags: ["microphone", "audio", "voice", "record", "sound"],
    description: "Represents audio recording or voice input",
  },
  {
    name: "speaker",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <circle cx="12" cy="14" r="4"/>
      <circle cx="12" cy="6" r="2"/>
    </svg>`,
    category: "Communication",
    tags: ["speaker", "audio", "sound", "volume", "output"],
    description: "Represents audio output or speaker device",
  },
  {
    name: "video",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>`,
    category: "Communication",
    tags: ["video", "camera", "call", "conference", "meeting"],
    description: "Represents video calls or video recording",
  },
  {
    name: "voicemail",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="12" r="4"/>
      <circle cx="18" cy="12" r="4"/>
      <line x1="6" y1="16" x2="18" y2="16"/>
    </svg>`,
    category: "Communication",
    tags: ["voicemail", "message", "audio", "recording", "phone"],
    description: "Represents voicemail messages",
  },
  {
    name: "inbox",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>`,
    category: "Communication",
    tags: ["inbox", "mail", "messages", "receive", "input"],
    description: "Represents incoming messages or inbox",
  },
  {
    name: "reply",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 17 4 12 9 7"/>
      <path d="M20 18v-2a4 4 0 0 0-4-4H4"/>
    </svg>`,
    category: "Communication",
    tags: ["reply", "response", "answer", "back", "return"],
    description: "Represents replying to messages",
  },
  {
    name: "forward",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 17 20 12 15 7"/>
      <path d="M4 18v-2a4 4 0 0 1 4-4h12"/>
    </svg>`,
    category: "Communication",
    tags: ["forward", "send", "share", "pass", "transmit"],
    description: "Represents forwarding messages",
  },
  {
    name: "user-plus",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="8.5" cy="7" r="4"/>
      <line x1="20" y1="8" x2="20" y2="14"/>
      <line x1="23" y1="11" x2="17" y2="11"/>
    </svg>`,
    category: "Communication",
    tags: ["contact", "person", "user", "add", "profile"],
    description: "Represents adding or managing contacts",
  },
  {
    name: "broadcast",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 16V9a7 7 0 0 1 14 0v7"/>
      <path d="M3.29 8.71a1.5 1.5 0 0 1 2.12 0L12 15.29l6.59-6.58a1.5 1.5 0 0 1 2.12 2.12l-8 8a1 1 0 0 1-1.42 0l-8-8a1.5 1.5 0 0 1 0-2.12Z"/>
    </svg>`,
    category: "Communication",
    tags: ["broadcast", "signal", "transmission", "announce", "spread"],
    description:
      "Represents broadcasting or transmitting to multiple recipients",
  },
  {
    name: "phone-incoming",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 2 16 8 22 8"/>
      <line x1="23" y1="1" x2="16" y2="8"/>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>`,
    category: "Communication",
    tags: ["phone", "incoming", "call", "receive", "answer"],
    description: "Represents incoming phone calls",
  },
  {
    name: "phone-outgoing",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="22 8 22 2 16 2"/>
      <line x1="16" y1="2" x2="23" y2="9"/>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>`,
    category: "Communication",
    tags: ["phone", "outgoing", "call", "dial", "make"],
    description: "Represents outgoing phone calls",
  },
  {
    name: "message-circle-plus",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>`,
    category: "Communication",
    tags: ["chat", "message", "add", "new", "create"],
    description: "Represents creating new messages or conversations",
  },
  {
    name: "message-square-plus",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>`,
    category: "Communication",
    tags: ["message", "add", "new", "create", "comment"],
    description: "Represents adding new messages or comments",
  },
  {
    name: "mail-open",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/>
      <path d="M6 12.5 12 18l6-5.5"/>
    </svg>`,
    category: "Communication",
    tags: ["mail", "open", "email", "read", "envelope"],
    description: "Represents opened or read email messages",
  },
  {
    name: "mail-plus",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
      <line x1="12" y1="11" x2="12" y2="17"/>
      <line x1="9" y1="14" x2="15" y2="14"/>
    </svg>`,
    category: "Communication",
    tags: ["mail", "add", "new", "create", "compose"],
    description: "Represents composing new email messages",
  },
  {
    name: "smartphone",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>`,
    category: "Communication",
    tags: ["smartphone", "mobile", "device", "phone", "cellular"],
    description: "Represents mobile phones or smartphones",
  },
  {
    name: "volume-2",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>`,
    category: "Communication",
    tags: ["volume", "sound", "audio", "speaker", "loud"],
    description: "Represents audio volume or sound output",
  },
  {
    name: "headphones",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>`,
    category: "Communication",
    tags: ["headphones", "audio", "listen", "music", "sound"],
    description: "Represents headphones or audio listening devices",
  },
  {
    name: "megaphone",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 11 22 2l-9 19-2-10-10-2z"/>
      <path d="M11 12 5 6"/>
    </svg>`,
    category: "Communication",
    tags: ["megaphone", "announce", "broadcast", "loud", "speaker"],
    description: "Represents announcements or broadcasting messages",
  },
  {
    name: "signal",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 20h.01"/>
      <path d="M7 20v-4"/>
      <path d="M12 20v-8"/>
      <path d="M17 20V8"/>
      <path d="M22 20V4"/>
    </svg>`,
    category: "Communication",
    tags: ["signal", "strength", "network", "connection", "bars"],
    description: "Represents network or signal strength",
  },
  {
    name: "wifi",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <path d="M12 20h.01"/>
    </svg>`,
    category: "Communication",
    tags: ["wifi", "wireless", "internet", "connection", "network"],
    description: "Represents wireless internet connection",
  },
  {
    name: "rss",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 11a9 9 0 0 1 9 9"/>
      <path d="M4 4a16 16 0 0 1 16 16"/>
      <circle cx="5" cy="19" r="1"/>
    </svg>`,
    category: "Communication",
    tags: ["rss", "feed", "news", "subscribe", "broadcast"],
    description: "Represents RSS feeds or news subscriptions",
  },
  {
    name: "antenna",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 12 7 2l5 10 5-10 5 10"/>
      <path d="M12 12v10"/>
    </svg>`,
    category: "Communication",
    tags: ["antenna", "signal", "transmission", "radio", "broadcast"],
    description: "Represents antenna or signal transmission",
  },

  // ===== TECHNOLOGY ICONS (32) =====
  {
    name: "computer",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="14" height="8" x="2" y="3" rx="2" ry="2"/>
      <path d="m20 3-1.5 1.5M8 21l8 0M12 17l0 4"/>
    </svg>`,
    category: "Technology",
    tags: ["desktop", "pc", "workstation", "monitor", "device"],
    description: "Desktop computer or PC workstation",
  },
  {
    name: "laptop",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>
    </svg>`,
    category: "Technology",
    tags: ["laptop", "notebook", "portable", "computer", "mobile"],
    description: "Laptop or notebook computer",
  },
  {
    name: "tablet",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="12" height="18" x="6" y="2" rx="2"/>
      <circle cx="12" cy="17" r="1"/>
    </svg>`,
    category: "Technology",
    tags: ["tablet", "ipad", "mobile", "touchscreen", "device"],
    description: "Tablet computer or iPad device",
  },
  {
    name: "bluetooth",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m7 7 10 10-5 5V2l5 5L7 17"/>
    </svg>`,
    category: "Technology",
    tags: ["bluetooth", "wireless", "connectivity", "pairing", "device"],
    description: "Bluetooth wireless connectivity",
  },
  {
    name: "database",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
      <path d="M3 12a9 3 0 0 0 18 0"/>
    </svg>`,
    category: "Technology",
    tags: ["database", "storage", "data", "server", "information"],
    description: "Database storage system",
  },
  {
    name: "server",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
      <line x1="6" x2="6.01" y1="6" y2="6"/>
      <line x1="6" x2="6.01" y1="18" y2="18"/>
    </svg>`,
    category: "Technology",
    tags: ["server", "hosting", "datacenter", "computing", "infrastructure"],
    description: "Computer server or hosting infrastructure",
  },
  {
    name: "cloud",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>`,
    category: "Technology",
    tags: ["cloud", "storage", "computing", "remote", "internet"],
    description: "Cloud computing and storage",
  },
  {
    name: "hard-drive",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="22" x2="2" y1="12" y2="12"/>
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
      <line x1="6" x2="6.01" y1="16" y2="16"/>
      <line x1="10" x2="10.01" y1="16" y2="16"/>
    </svg>`,
    category: "Technology",
    tags: ["hard-drive", "storage", "disk", "memory", "data"],
    description: "Hard disk drive storage device",
  },
  {
    name: "cpu",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="16" height="16" x="4" y="4" rx="2"/>
      <rect width="6" height="6" x="9" y="9" rx="1"/>
      <path d="M15 2v2"/>
      <path d="M15 20v2"/>
      <path d="M2 15h2"/>
      <path d="M2 9h2"/>
      <path d="M20 15h2"/>
      <path d="M20 9h2"/>
      <path d="M9 2v2"/>
      <path d="M9 20v2"/>
    </svg>`,
    category: "Technology",
    tags: ["cpu", "processor", "chip", "computing", "hardware"],
    description: "Central Processing Unit (CPU) chip",
  },
  {
    name: "memory-stick",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 19v-3"/>
      <path d="M10 19v-3"/>
      <path d="M14 19v-3"/>
      <path d="M18 19v-3"/>
      <path d="M8 11V9"/>
      <path d="M16 11V9"/>
      <path d="M12 11V9"/>
      <path d="M2 15h20"/>
      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>
    </svg>`,
    category: "Technology",
    tags: ["memory", "ram", "storage", "hardware", "component"],
    description: "Computer memory or RAM module",
  },
  {
    name: "monitor",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2"/>
      <line x1="8" x2="16" y1="21" y2="21"/>
      <line x1="12" x2="12" y1="17" y2="21"/>
    </svg>`,
    category: "Technology",
    tags: ["monitor", "display", "screen", "computer", "output"],
    description: "Computer monitor or display screen",
  },
  {
    name: "keyboard",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="M6 8h.01"/>
      <path d="M10 8h.01"/>
      <path d="M14 8h.01"/>
      <path d="M18 8h.01"/>
      <path d="M8 12h.01"/>
      <path d="M12 12h.01"/>
      <path d="M16 12h.01"/>
      <path d="M7 16h10"/>
    </svg>`,
    category: "Technology",
    tags: ["keyboard", "input", "typing", "computer", "peripheral"],
    description: "Computer keyboard input device",
  },
  {
    name: "mouse",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="12" height="18" x="6" y="3" rx="6"/>
      <line x1="12" x2="12" y1="7" y2="11"/>
    </svg>`,
    category: "Technology",
    tags: ["mouse", "input", "cursor", "computer", "peripheral"],
    description: "Computer mouse input device",
  },
  {
    name: "printer",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9V2h12v7"/>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
      <rect width="12" height="8" x="6" y="14"/>
    </svg>`,
    category: "Technology",
    tags: ["printer", "printing", "output", "device", "paper"],
    description: "Computer printer output device",
  },
  {
    name: "scanner",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
      <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
      <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
      <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
      <path d="M8 12h8"/>
    </svg>`,
    category: "Technology",
    tags: ["scanner", "scanning", "input", "document", "digitize"],
    description: "Document scanner input device",
  },
  {
    name: "router",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="8" x="2" y="14" rx="2"/>
      <path d="M6.01 18H6"/>
      <path d="M10.01 18H10"/>
      <path d="M15 10v4"/>
      <path d="M17 8v6"/>
      <path d="M19 6v8"/>
    </svg>`,
    category: "Technology",
    tags: ["router", "network", "internet", "connectivity", "wifi"],
    description: "Network router or modem device",
  },

  {
    name: "circuit-board",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2"/>
      <path d="M11 9h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2z"/>
      <path d="M7 21v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/>
      <path d="M7 8V7"/>
      <path d="M7 16v-1"/>
    </svg>`,
    category: "Technology",
    tags: ["circuit", "board", "electronics", "hardware", "components"],
    description: "Electronic circuit board or PCB",
  },
  {
    name: "network",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="16" height="6" x="4" y="2" rx="2"/>
      <rect width="6" height="6" x="9" y="16" rx="1"/>
      <path d="M15 2v6.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
      <path d="M4 2v6.5a1 1 0 0 0 1 1H8"/>
      <path d="M12 12v4"/>
      <path d="M12 18h.01"/>
    </svg>`,
    category: "Technology",
    tags: [
      "network",
      "connection",
      "topology",
      "infrastructure",
      "communication",
    ],
    description: "Computer network or network topology",
  },
  {
    name: "webcam",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="10" r="8"/>
      <circle cx="12" cy="10" r="3"/>
      <path d="M7 22h10"/>
      <path d="M12 22v-4"/>
    </svg>`,
    category: "Technology",
    tags: ["webcam", "camera", "video", "streaming", "recording"],
    description: "Webcam or video camera device",
  },
  {
    name: "gamepad",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 11.5a2.5 2.5 0 0 1 5 0v1a2.5 2.5 0 0 1-5 0Z"/>
      <path d="M13 11.5a2.5 2.5 0 0 1 5 0v1a2.5 2.5 0 0 1-5 0Z"/>
      <path d="M3 3h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>
      <path d="M5 21a2 2 0 0 1-2-2v-2h18v2a2 2 0 0 1-2 2"/>
    </svg>`,
    category: "Technology",
    tags: ["gamepad", "controller", "gaming", "joystick", "console"],
    description: "Gaming controller or gamepad",
  },
  {
    name: "external-link",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 3h6v6"/>
      <path d="M10 14 21 3"/>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    </svg>`,
    category: "Technology",
    tags: ["external-link", "link", "url", "web", "navigation"],
    description: "External link or web navigation",
  },
  {
    name: "code",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>`,
    category: "Technology",
    tags: ["code", "programming", "development", "software", "coding"],
    description: "Programming code or software development",
  },
  {
    name: "terminal",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="4,17 10,11 4,5"/>
      <line x1="12" x2="20" y1="19" y2="19"/>
    </svg>`,
    category: "Technology",
    tags: ["terminal", "command", "cli", "console", "shell"],
    description: "Terminal or command line interface",
  },
  {
    name: "api",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <polyline points="16,6 12,2 8,6"/>
      <line x1="12" x2="12" y1="2" y2="15"/>
    </svg>`,
    category: "Technology",
    tags: ["api", "interface", "programming", "development", "integration"],
    description: "Application Programming Interface (API)",
  },
  {
    name: "bug",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 2h8"/>
      <path d="M8 6h8"/>
      <path d="M6 10h4"/>
      <path d="M14 10h4"/>
      <path d="M6 14h4"/>
      <path d="M14 14h4"/>
      <path d="M6 18h4"/>
      <path d="M14 18h4"/>
      <path d="M21 12c.5 0 .9-.4.9-1s-.4-1-.9-1"/>
      <path d="M3 12c-.5 0-.9-.4-.9-1s.4-1 .9-1"/>
    </svg>`,
    category: "Technology",
    tags: ["bug", "error", "debugging", "issue", "problem"],
    description: "Software bug or error debugging",
  },
  {
    name: "shield",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    </svg>`,
    category: "Technology",
    tags: ["shield", "security", "protection", "defense", "safety"],
    description: "Security shield or protection system",
  },
  {
    name: "lock",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>`,
    category: "Technology",
    tags: ["lock", "security", "password", "protection", "secure"],
    description: "Security lock or password protection",
  },
  {
    name: "unlock",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
    </svg>`,
    category: "Technology",
    tags: ["unlock", "open", "access", "unlocked", "unsecure"],
    description: "Unlocked or open access",
  },
  {
    name: "key",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5"/>
      <path d="m21 2-9.6 9.6"/>
      <path d="m15.5 7.5 3 3L22 7l-3-3"/>
    </svg>`,
    category: "Technology",
    tags: ["key", "password", "access", "authentication", "unlock"],
    description: "Access key or authentication token",
  },
  {
    name: "eye",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>`,
    category: "Technology",
    tags: ["eye", "view", "visibility", "watch", "see"],
    description: "View or visibility control",
  },
  {
    name: "eye-off",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>`,
    category: "Technology",
    tags: ["eye-off", "hidden", "invisible", "hide", "privacy"],
    description: "Hidden or invisible content",
  },

  // ===== BUSINESS ICONS (30) =====
  {
    name: "briefcase",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 20h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"/>
      <path d="M8 18V7a4 4 0 0 1 8 0v11"/>
      <path d="M10 20h4"/>
      <circle cx="16" cy="20" r="2"/>
      <circle cx="8" cy="20" r="2"/>
    </svg>`,
    category: "Business",
    tags: ["briefcase", "work", "business", "professional", "office"],
    description: "Business briefcase or professional work",
  },
  {
    name: "trending-up",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
      <polyline points="16,7 22,7 22,13"/>
    </svg>`,
    category: "Business",
    tags: ["trending", "up", "growth", "increase", "success"],
    description: "Trending up or growth indicator",
  },
  {
    name: "trending-down",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="22,17 13.5,8.5 8.5,13.5 2,7"/>
      <polyline points="16,17 22,17 22,11"/>
    </svg>`,
    category: "Business",
    tags: ["trending", "down", "decline", "decrease", "loss"],
    description: "Trending down or decline indicator",
  },
  {
    name: "dollar-sign",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>`,
    category: "Business",
    tags: ["dollar", "money", "currency", "finance", "payment"],
    description: "Dollar sign or money symbol",
  },
  {
    name: "bar-chart",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"/>
      <line x1="18" y1="20" x2="18" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="16"/>
    </svg>`,
    category: "Business",
    tags: ["chart", "bar", "statistics", "data", "analytics"],
    description: "Bar chart for data visualization",
  },
  {
    name: "pie-chart",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
      <path d="M22 12A10 10 0 0 0 12 2v10z"/>
    </svg>`,
    category: "Business",
    tags: ["pie", "chart", "statistics", "data", "analytics"],
    description: "Pie chart for data visualization",
  },
  {
    name: "calendar",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>`,
    category: "Business",
    tags: ["calendar", "date", "schedule", "time", "appointment"],
    description: "Calendar for scheduling and dates",
  },
  {
    name: "clock",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>`,
    category: "Business",
    tags: ["clock", "time", "schedule", "hour", "minute"],
    description: "Clock for time management",
  },
  {
    name: "target",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>`,
    category: "Business",
    tags: ["target", "goal", "objective", "aim", "focus"],
    description: "Target or goal setting",
  },

  {
    name: "user",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`,
    category: "Business",
    tags: ["user", "person", "profile", "account", "individual"],
    description: "Single user or person",
  },
  {
    name: "presentation",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 3h20v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3Z"/>
      <path d="M8 21l4-4 4 4"/>
    </svg>`,
    category: "Business",
    tags: ["presentation", "screen", "display", "meeting", "demo"],
    description: "Presentation or demo screen",
  },
  {
    name: "handshake",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/>
      <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/>
      <path d="M 7 17h0.01"/>
      <path d="M 21 17h0.01"/>
      <path d="M11 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4"/>
    </svg>`,
    category: "Business",
    tags: ["handshake", "deal", "agreement", "partnership", "cooperation"],
    description: "Handshake or business agreement",
  },
  {
    name: "building",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01"/>
      <path d="M16 6h.01"/>
      <path d="M12 6h.01"/>
      <path d="M12 10h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 10h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 10h.01"/>
      <path d="M8 14h.01"/>
    </svg>`,
    category: "Business",
    tags: ["building", "office", "corporate", "company", "business"],
    description: "Office building or corporate headquarters",
  },
  {
    name: "credit-card",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/>
      <line x1="2" y1="10" x2="22" y2="10"/>
    </svg>`,
    category: "Business",
    tags: ["credit", "card", "payment", "finance", "transaction"],
    description: "Credit card or payment method",
  },
  {
    name: "wallet",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
    </svg>`,
    category: "Business",
    tags: ["wallet", "money", "finance", "payment", "cash"],
    description: "Wallet or money storage",
  },
  {
    name: "coins",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8" cy="8" r="6"/>
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
      <path d="M7 6h1v4"/>
      <path d="M16.71 13.88.2.2"/>
    </svg>`,
    category: "Business",
    tags: ["coins", "money", "currency", "finance", "payment"],
    description: "Coins or currency",
  },
  {
    name: "bank",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="21" x2="21" y2="21"/>
      <line x1="5" y1="21" x2="5" y2="10"/>
      <line x1="9" y1="21" x2="9" y2="10"/>
      <line x1="15" y1="21" x2="15" y2="10"/>
      <line x1="19" y1="21" x2="19" y2="10"/>
      <path d="M2 10 12 2l10 8"/>
    </svg>`,
    category: "Business",
    tags: ["bank", "financial", "institution", "money", "finance"],
    description: "Bank or financial institution",
  },
  {
    name: "receipt",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/>
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
      <path d="M12 6v12"/>
    </svg>`,
    category: "Business",
    tags: ["receipt", "invoice", "payment", "transaction", "bill"],
    description: "Receipt or invoice document",
  },
  {
    name: "shopping-cart",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8" cy="21" r="1"/>
      <circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>`,
    category: "Business",
    tags: ["shopping", "cart", "purchase", "buy", "commerce"],
    description: "Shopping cart for e-commerce",
  },
  {
    name: "package",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="M3.3 7 12 12l8.7-5"/>
      <path d="M12 22V12"/>
    </svg>`,
    category: "Business",
    tags: ["package", "delivery", "shipping", "box", "product"],
    description: "Package or product delivery",
  },
  {
    name: "truck",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
      <path d="M15 18H9"/>
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
      <circle cx="17" cy="18" r="2"/>
      <circle cx="7" cy="18" r="2"/>
    </svg>`,
    category: "Business",
    tags: ["truck", "delivery", "shipping", "transport", "logistics"],
    description: "Delivery truck or transportation",
  },
  {
    name: "office",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"/>
      <path d="M10 6h.01"/>
      <path d="M14 6h.01"/>
      <path d="M10 10h.01"/>
      <path d="M14 10h.01"/>
      <path d="M10 14h.01"/>
      <path d="M14 14h.01"/>
      <path d="M10 18h.01"/>
      <path d="M14 18h.01"/>
    </svg>`,
    category: "Business",
    tags: ["office", "building", "workplace", "business", "corporate"],
    description: "Office building or workplace",
  },
  {
    name: "meeting",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 21h8"/>
      <path d="M12 17v4"/>
      <path d="M4 13a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"/>
      <path d="M8 7h8"/>
      <path d="M8 11h4"/>
    </svg>`,
    category: "Business",
    tags: ["meeting", "conference", "presentation", "screen", "business"],
    description: "Business meeting or conference",
  },
  {
    name: "analytics",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 3v18h18"/>
      <path d="M18.7 8 12 13.3 7.7 9 3 13.7"/>
      <path d="M13 7.5h5.5V13"/>
    </svg>`,
    category: "Business",
    tags: ["analytics", "data", "chart", "statistics", "insights"],
    description: "Analytics or data insights",
  },
  {
    name: "calculator",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2"/>
      <line x1="8" y1="6" x2="16" y2="6"/>
      <line x1="16" y1="14" x2="16" y2="14"/>
      <path d="M16 10h.01"/>
      <path d="M12 10h.01"/>
      <path d="M8 10h.01"/>
      <path d="M12 14h.01"/>
      <path d="M8 14h.01"/>
      <path d="M12 18h.01"/>
      <path d="M8 18h.01"/>
    </svg>`,
    category: "Business",
    tags: ["calculator", "math", "finance", "calculation", "accounting"],
    description: "Calculator for financial calculations",
  },
  {
    name: "growth",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 17 17 7"/>
      <path d="M17 17V7h-10"/>
    </svg>`,
    category: "Business",
    tags: ["growth", "increase", "arrow", "up", "progress"],
    description: "Growth or increase indicator",
  },
  {
    name: "contract",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10,9 9,9 8,9"/>
    </svg>`,
    category: "Business",
    tags: ["contract", "document", "agreement", "legal", "business"],
    description: "Business contract or legal document",
  },
  {
    name: "profit",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
      <path d="M12 18V6"/>
      <path d="M8 5h8"/>
      <path d="M8 19h8"/>
    </svg>`,
    category: "Business",
    tags: ["profit", "money", "earnings", "revenue", "income"],
    description: "Profit or financial earnings",
  },

  // ===== NAVIGATION ICONS (32) =====
  {
    name: "home",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>`,
    category: "Navigation",
    tags: ["home", "house", "main", "start", "homepage"],
    description: "Home page or main navigation",
  },
  {
    name: "arrow-left",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12,19 5,12 12,5"/>
    </svg>`,
    category: "Navigation",
    tags: ["arrow", "left", "back", "previous", "return"],
    description: "Navigate left or go back",
  },
  {
    name: "arrow-right",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12,5 19,12 12,19"/>
    </svg>`,
    category: "Navigation",
    tags: ["arrow", "right", "next", "forward", "continue"],
    description: "Navigate right or go forward",
  },
  {
    name: "arrow-up",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"/>
      <polyline points="5,12 12,5 19,12"/>
    </svg>`,
    category: "Navigation",
    tags: ["arrow", "up", "top", "ascend", "increase"],
    description: "Navigate up or go to top",
  },
  {
    name: "arrow-down",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <polyline points="19,12 12,19 5,12"/>
    </svg>`,
    category: "Navigation",
    tags: ["arrow", "down", "bottom", "descend", "decrease"],
    description: "Navigate down or go to bottom",
  },
  {
    name: "menu",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>`,
    category: "Navigation",
    tags: ["menu", "hamburger", "navigation", "list", "options"],
    description: "Menu or navigation options",
  },
  {
    name: "x",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>`,
    category: "Navigation",
    tags: ["close", "cancel", "x", "dismiss", "exit"],
    description: "Close or cancel action",
  },
  {
    name: "chevron-left",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15,18 9,12 15,6"/>
    </svg>`,
    category: "Navigation",
    tags: ["chevron", "left", "back", "previous", "arrow"],
    description: "Chevron pointing left",
  },
  {
    name: "chevron-right",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9,18 15,12 9,6"/>
    </svg>`,
    category: "Navigation",
    tags: ["chevron", "right", "next", "forward", "arrow"],
    description: "Chevron pointing right",
  },
  {
    name: "chevron-up",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18,15 12,9 6,15"/>
    </svg>`,
    category: "Navigation",
    tags: ["chevron", "up", "top", "collapse", "arrow"],
    description: "Chevron pointing up",
  },
  {
    name: "chevron-down",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6,9 12,15 18,9"/>
    </svg>`,
    category: "Navigation",
    tags: ["chevron", "down", "expand", "dropdown", "arrow"],
    description: "Chevron pointing down",
  },
  {
    name: "compass",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
    </svg>`,
    category: "Navigation",
    tags: ["compass", "direction", "navigation", "north", "orientation"],
    description: "Compass for navigation",
  },
  {
    name: "map-pin",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>`,
    category: "Navigation",
    tags: ["map", "pin", "location", "marker", "place"],
    description: "Map pin or location marker",
  },
  {
    name: "navigation",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="3,11 22,2 13,21 11,13 3,11"/>
    </svg>`,
    category: "Navigation",
    tags: ["navigation", "direction", "pointer", "arrow", "guide"],
    description: "Navigation pointer or direction",
  },
  {
    name: "route",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="19" r="3"/>
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
      <circle cx="18" cy="5" r="3"/>
    </svg>`,
    category: "Navigation",
    tags: ["route", "path", "journey", "direction", "way"],
    description: "Route or path navigation",
  },
  {
    name: "crosshair",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="22" y1="12" x2="18" y2="12"/>
      <line x1="6" y1="12" x2="2" y2="12"/>
      <line x1="12" y1="6" x2="12" y2="2"/>
      <line x1="12" y1="22" x2="12" y2="18"/>
    </svg>`,
    category: "Navigation",
    tags: ["crosshair", "target", "center", "focus", "aim"],
    description: "Crosshair or targeting system",
  },
  {
    name: "more-horizontal",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="19" cy="12" r="1"/>
      <circle cx="5" cy="12" r="1"/>
    </svg>`,
    category: "Navigation",
    tags: ["more", "horizontal", "options", "menu", "ellipsis"],
    description: "More options horizontal menu",
  },
  {
    name: "more-vertical",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>`,
    category: "Navigation",
    tags: ["more", "vertical", "options", "menu", "ellipsis"],
    description: "More options vertical menu",
  },
  {
    name: "maximize",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
    </svg>`,
    category: "Navigation",
    tags: ["maximize", "expand", "fullscreen", "enlarge", "zoom"],
    description: "Maximize or expand to fullscreen",
  },
  {
    name: "minimize",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
    </svg>`,
    category: "Navigation",
    tags: ["minimize", "collapse", "reduce", "shrink", "exit"],
    description: "Minimize or exit fullscreen",
  },
  {
    name: "sidebar",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
      <line x1="9" y1="9" x2="15" y2="9"/>
      <line x1="9" y1="12" x2="15" y2="12"/>
      <line x1="9" y1="15" x2="15" y2="15"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
    </svg>`,
    category: "Navigation",
    tags: ["sidebar", "panel", "navigation", "menu", "layout"],
    description: "Sidebar or navigation panel",
  },
  {
    name: "toggle-left",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="12" x="2" y="6" rx="6" ry="6"/>
      <circle cx="8" cy="12" r="2"/>
    </svg>`,
    category: "Navigation",
    tags: ["toggle", "left", "switch", "off", "control"],
    description: "Toggle switch in left position",
  },
  {
    name: "toggle-right",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="12" x="2" y="6" rx="6" ry="6"/>
      <circle cx="16" cy="12" r="2"/>
    </svg>`,
    category: "Navigation",
    tags: ["toggle", "right", "switch", "on", "control"],
    description: "Toggle switch in right position",
  },
  {
    name: "skip-back",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="19,20 9,12 19,4 19,20"/>
      <line x1="5" y1="19" x2="5" y2="5"/>
    </svg>`,
    category: "Navigation",
    tags: ["skip", "back", "previous", "rewind", "media"],
    description: "Skip back or previous track",
  },
  {
    name: "skip-forward",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="5,4 15,12 5,20 5,4"/>
      <line x1="19" y1="5" x2="19" y2="19"/>
    </svg>`,
    category: "Navigation",
    tags: ["skip", "forward", "next", "fast-forward", "media"],
    description: "Skip forward or next track",
  },
  {
    name: "fast-forward",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13,19 22,12 13,5 13,19"/>
      <polygon points="2,19 11,12 2,5 2,19"/>
    </svg>`,
    category: "Navigation",
    tags: ["fast-forward", "speed", "quick", "advance", "media"],
    description: "Fast forward media control",
  },
  {
    name: "rewind",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11,19 2,12 11,5 11,19"/>
      <polygon points="22,19 13,12 22,5 22,19"/>
    </svg>`,
    category: "Navigation",
    tags: ["rewind", "back", "reverse", "backward", "media"],
    description: "Rewind media control",
  },
  {
    name: "first-page",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="17,18 11,12 17,6"/>
      <path d="M6 6v12"/>
    </svg>`,
  },

  // E-commerce Icons
  {
    name: "shopping-cart",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 25H85L80 65H30L20 25Z" stroke="currentColor" stroke-width="2" fill="none"/>
          <circle cx="35" cy="80" r="4" fill="currentColor"/>
          <circle cx="70" cy="80" r="4" fill="currentColor"/>
          <path d="M15 15H25L30 25" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>`,
    category: "E-commerce",
    tags: ["shopping", "cart", "buy", "purchase", "store"],
  },
  {
    name: "credit-card",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="30" width="70" height="40" rx="4" stroke="currentColor" stroke-width="2" fill="none"/>
          <rect x="15" y="40" width="70" height="8" fill="currentColor"/>
          <rect x="20" y="55" width="20" height="4" fill="currentColor"/>
          <rect x="45" y="55" width="15" height="4" fill="currentColor"/>
        </svg>`,
    category: "E-commerce",
    tags: ["payment", "card", "credit", "finance", "money"],
  },

  {
    name: "wishlist-heart",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 75L25 50C20 45 20 35 25 30C30 25 40 25 45 30L50 35L55 30C60 25 70 25 75 30C80 35 80 45 75 50L50 75Z" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>`,
    category: "E-commerce",
    tags: ["wishlist", "favorite", "heart", "like", "save"],
  },

  {
    name: "mobile-shopping",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="15" width="40" height="70" rx="5" stroke="currentColor" stroke-width="2" fill="none"/>
          <circle cx="50" cy="25" r="2" fill="currentColor"/>
          <rect x="35" y="35" width="30" height="20" rx="2" fill="currentColor"/>
          <rect x="35" y="60" width="15" height="3" fill="currentColor"/>
          <rect x="35" y="67" width="20" height="3" fill="currentColor"/>
          <rect x="35" y="74" width="12" height="3" fill="currentColor"/>
        </svg>`,
    category: "E-commerce",
    tags: ["mobile", "shopping", "phone", "app", "online"],
  },

  {
    name: "inventory-stock",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="40" width="60" height="40" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
          <rect x="25" y="35" width="50" height="40" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
          <rect x="30" y="30" width="40" height="40" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
          <rect x="40" y="45" width="20" height="3" fill="currentColor"/>
          <rect x="40" y="52" width="15" height="3" fill="currentColor"/>
        </svg>`,
    category: "E-commerce",
    tags: ["inventory", "stock", "warehouse", "storage", "boxes"],
  },

  {
    name: "shopping-bag",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 35H75L70 80H30L25 35Z" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M35 35V25C35 20 40 15 50 15C60 15 65 20 65 25V35" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M25 35H75" stroke="currentColor" stroke-width="2"/>
        </svg>`,
    category: "E-commerce",
    tags: ["shopping", "bag", "purchase", "carry", "retail"],
  },

  // EDUCATION

  {
    name: "pencil-write",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 80L25 65L65 25L75 35L35 75L20 80Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M60 30L70 40" stroke="currentColor" stroke-width="2"/>
      <path d="M75 35L80 30C82 28 82 22 80 20C78 18 72 18 70 20L65 25" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M20 80L30 75" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Education",
    tags: ["pencil", "write", "edit", "compose", "education"],
  },
  {
    name: "calculator",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="20" width="40" height="60" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="35" y="27" width="30" height="8" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="40" cy="45" r="3" fill="currentColor"/>
      <circle cx="50" cy="45" r="3" fill="currentColor"/>
      <circle cx="60" cy="45" r="3" fill="currentColor"/>
      <circle cx="40" cy="55" r="3" fill="currentColor"/>
      <circle cx="50" cy="55" r="3" fill="currentColor"/>
      <circle cx="60" cy="55" r="3" fill="currentColor"/>
      <circle cx="40" cy="65" r="3" fill="currentColor"/>
      <circle cx="50" cy="65" r="3" fill="currentColor"/>
      <circle cx="60" cy="65" r="3" fill="currentColor"/>
    </svg>`,
    category: "Education",
    tags: ["calculator", "math", "calculation", "numbers", "education"],
  },
  {
    name: "school-building",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="40" width="60" height="40" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M15 40L50 20L85 40" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="45" y="60" width="10" height="20" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="30" y="50" width="8" height="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="62" y="50" width="8" height="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="50" cy="35" r="3" fill="currentColor"/>
    </svg>`,
    category: "Education",
    tags: ["school", "building", "education", "institution", "learning"],
  },

  {
    name: "teacher",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="30" r="12" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 70C30 58 38 50 50 50C62 50 70 58 70 70V80H30V70Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M70 60L85 50V70L70 60Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="45" cy="25" r="2" fill="currentColor"/>
      <circle cx="55" cy="25" r="2" fill="currentColor"/>
      <path d="M45 35C45 40 50 40 55 35" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Education",
    tags: ["teacher", "educator", "instructor", "education", "teaching"],
  },
  {
    name: "student",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="30" r="12" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 70C30 58 38 50 50 50C62 50 70 58 70 70V80H30V70Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="35" y="55" width="30" height="20" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M40 60H60" stroke="currentColor" stroke-width="2"/>
      <path d="M40 65H55" stroke="currentColor" stroke-width="2"/>
      <path d="M40 70H50" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Education",
    tags: ["student", "learner", "pupil", "education", "studying"],
  },
  {
    name: "backpack",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="35" width="40" height="45" rx="5" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M38 35V25C38 20 42 15 50 15C58 15 62 20 62 25V35" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="35" y="50" width="30" height="15" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 40L25 45V75L30 80" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M70 40L75 45V75L70 80" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="50" cy="57" r="2" fill="currentColor"/>
    </svg>`,
    category: "Education",
    tags: ["backpack", "school", "bag", "student", "education"],
  },

  // WEATHER (6 iconos)
  {
    name: "sun",
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
    category: "weather",
    tags: ["weather", "sunny", "day", "light"],
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
  // EDUCATION

  // MEDICAL
  {
    name: "heart-health",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 75L25 50C20 45 20 35 25 30C30 25 40 25 45 30L50 35L55 30C60 25 70 25 75 30C80 35 80 45 75 50L50 75Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 40L35 45L42 38" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Medical",
    tags: ["heart", "health", "cardiology", "medical", "care"],
  },
  {
    name: "stethoscope",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 25C25 20 30 15 35 15C40 15 45 20 45 25V45C45 55 40 60 35 60C30 60 25 55 25 45V25Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M55 25C55 20 60 15 65 15C70 15 75 20 75 25V45C75 55 70 60 65 60C60 60 55 55 55 45V25Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M35 60C35 70 45 80 55 80H65C75 80 85 70 85 60" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="85" cy="60" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Medical",
    tags: ["stethoscope", "doctor", "examination", "medical", "diagnosis"],
  },

  {
    name: "thermometer",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="45" y="20" width="10" height="50" rx="5" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="50" cy="80" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="50" cy="80" r="4" fill="currentColor"/>
      <rect x="47" y="25" width="6" height="40" fill="currentColor"/>
      <path d="M40 30H35" stroke="currentColor" stroke-width="2"/>
      <path d="M40 40H35" stroke="currentColor" stroke-width="2"/>
      <path d="M40 50H35" stroke="currentColor" stroke-width="2"/>
      <path d="M40 60H35" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Medical",
    tags: ["thermometer", "temperature", "fever", "health", "measurement"],
  },
  {
    name: "medical-cross",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 35V65" stroke="currentColor" stroke-width="3"/>
      <path d="M35 50H65" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    category: "Medical",
    tags: ["medical", "cross", "hospital", "first-aid", "health"],
  },

  {
    name: "syringe-injection",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="45" width="50" height="10" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M70 45V55L80 50L70 45Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="25" y="47" width="40" height="6" fill="currentColor"/>
      <path d="M15 40L25 45L25 55L15 60" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 40L30 60" stroke="currentColor" stroke-width="2"/>
      <path d="M40 40L40 60" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Medical",
    tags: ["syringe", "injection", "vaccine", "medical", "needle"],
  },
  {
    name: "medical-bag",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="35" width="50" height="35" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="35" y="30" width="30" height="10" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 45V60" stroke="currentColor" stroke-width="2"/>
      <path d="M42.5 52.5H57.5" stroke="currentColor" stroke-width="2"/>
      <circle cx="70" cy="40" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="30" cy="40" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Medical",
    tags: ["medical", "bag", "first-aid", "emergency", "kit"],
  },

  {
    name: "medical-mask",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 40C20 35 25 30 30 30H70C75 30 80 35 80 40V55C80 65 70 70 50 70C30 70 20 65 20 55V40Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M15 35L20 40" stroke="currentColor" stroke-width="2"/>
      <path d="M80 40L85 35" stroke="currentColor" stroke-width="2"/>
      <path d="M30 45H70" stroke="currentColor" stroke-width="2"/>
      <path d="M35 52H65" stroke="currentColor" stroke-width="2"/>
      <path d="M40 59H60" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Medical",
    tags: ["mask", "medical", "protection", "safety", "health"],
  },
  // SOCIAL MEDIA

  {
    name: "comment-bubble",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 25C20 20 25 15 30 15H70C75 15 80 20 80 25V55C80 60 75 65 70 65H40L25 75V65H30C25 65 20 60 20 55V25Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="40" cy="35" r="2" fill="currentColor"/>
      <circle cx="50" cy="35" r="2" fill="currentColor"/>
      <circle cx="60" cy="35" r="2" fill="currentColor"/>
    </svg>`,
    category: "Social Media",
    tags: ["comment", "message", "chat", "discussion", "talk"],
  },
  {
    name: "follow-user",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="35" r="15" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M25 75C25 60 35 50 50 50C65 50 75 60 75 75" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M70 25H85" stroke="currentColor" stroke-width="2"/>
      <path d="M77.5 17.5V32.5" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Social Media",
    tags: ["follow", "user", "add", "friend", "connect"],
  },
  {
    name: "hashtag-trending",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 20L25 80" stroke="currentColor" stroke-width="2"/>
      <path d="M70 20L65 80" stroke="currentColor" stroke-width="2"/>
      <path d="M15 35L85 35" stroke="currentColor" stroke-width="2"/>
      <path d="M15 65L85 65" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Social Media",
    tags: ["hashtag", "trending", "topic", "tag", "social"],
  },

  {
    name: "profile-verified",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="35" r="15" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M25 75C25 60 35 50 50 50C65 50 75 60 75 75" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="70" cy="25" r="10" fill="currentColor"/>
      <path d="M66 25L69 28L74 23" stroke="white" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Social Media",
    tags: ["profile", "verified", "check", "authentic", "user"],
  },

  // SPORTS & FITNESS (15 iconos)

  {
    name: "soccer-ball",
    category: "Sports & Fitness",
    tags: ["soccer", "football", "ball", "sport", "game"],
    description: "Icono de balón de fútbol",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
  <path d="M2 12h20"/>
</svg>`,
  },

  {
    name: "medal",
    category: "Sports & Fitness",
    tags: ["medal", "award", "prize", "achievement", "winner"],
    description: "Icono de medalla",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="15" r="6"/>
  <circle cx="12" cy="15" r="3"/>
  <path d="M12 9l-2-6 2-1 2 1z"/>
  <path d="M12 9l2-6-2-1-2 1z"/>
</svg>`,
  },

  {
    name: "stopwatch",
    category: "Sports & Fitness",
    tags: ["stopwatch", "timer", "time", "training", "performance"],
    description: "Icono de cronómetro",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="13" r="8"/>
  <path d="M12 9v4"/>
  <path d="M12 5V3"/>
  <path d="M15 3h-6"/>
  <path d="M18.36 6.64L19.78 5.22"/>
</svg>`,
  },

  // FOOD & DINING (15 iconos)
  {
    name: "pizza",
    category: "Food & Dining",
    tags: ["pizza", "food", "restaurant", "dining", "italian"],
    description: "Icono de pizza",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2l8 20-8-4-8 4z"/>
  <circle cx="10" cy="8" r="1"/>
  <circle cx="14" cy="10" r="1"/>
  <circle cx="12" cy="14" r="1"/>
</svg>`,
  },
  {
    name: "coffee",
    category: "Food & Dining",
    tags: ["coffee", "drink", "cafe", "beverage", "morning"],
    description: "Icono de café",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
  <line x1="6" y1="1" x2="6" y2="4"/>
  <line x1="10" y1="1" x2="10" y2="4"/>
  <line x1="14" y1="1" x2="14" y2="4"/>
</svg>`,
  },
  {
    name: "wine-glass",
    category: "Food & Dining",
    tags: ["wine", "glass", "drink", "alcohol", "restaurant"],
    description: "Icono de copa de vino",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 22h8"/>
  <path d="M12 15v7"/>
  <path d="M5 2h14l-2 6-5 7-5-7z"/>
</svg>`,
  },
  {
    name: "chef-hat",
    category: "Food & Dining",
    tags: ["chef", "hat", "cooking", "restaurant", "professional"],
    description: "Icono de gorro de chef",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
  <line x1="6" y1="17" x2="18" y2="17"/>
</svg>`,
  },

  {
    name: "cake",
    category: "Food & Dining",
    tags: ["cake", "dessert", "birthday", "celebration", "sweet"],
    description: "Icono de pastel",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
  <path d="M2 21h20"/>
  <path d="M7 8v2"/>
  <path d="M12 8v2"/>
  <path d="M17 8v2"/>
</svg>`,
  },

  {
    name: "apple",
    category: "Food & Dining",
    tags: ["apple", "fruit", "healthy", "food", "organic"],
    description: "Icono de manzana",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
  <path d="M10 2c1 .5 2 2 2 5"/>
</svg>`,
  },

  {
    name: "fish",
    category: "Food & Dining",
    tags: ["fish", "seafood", "protein", "healthy", "ocean"],
    description: "Icono de pescado",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/>
  <path d="M18 12v.5"/>
  <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/>
  <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/>
  <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"/>
  <path d="M16.01 17.93c-.2 1.38-1.24 2.97-2.41 4.03a2 2 0 0 1-1.98-1.67l-.23-1.4"/>
</svg>`,
  },
  {
    name: "egg",
    category: "Food & Dining",
    tags: ["egg", "protein", "breakfast", "food", "cooking"],
    description: "Icono de huevo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"/>
</svg>`,
  },
  {
    name: "salad",
    category: "Food & Dining",
    tags: ["salad", "healthy", "vegetables", "diet", "fresh"],
    description: "Icono de ensalada",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7 21h10"/>
  <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/>
  <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"/>
  <path d="M11 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"/>
</svg>`,
  },

  // TRAVEL & TRANSPORTATION (15 iconos)

  {
    name: "car",
    category: "Travel & Transportation",
    tags: ["car", "vehicle", "transport", "automotive", "drive"],
    description: "Icono de automóvil",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 10c-.4-.8-1.2-1.3-2.1-1.3H7.7c-.9 0-1.7.5-2.1 1.3l-2.1 1.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2"/>
  <circle cx="7" cy="17" r="2"/>
  <path d="M9 17h6"/>
  <circle cx="17" cy="17" r="2"/>
</svg>`,
  },

  {
    name: "ship",
    category: "Travel & Transportation",
    tags: ["ship", "boat", "ocean", "water", "travel"],
    description: "Icono de barco",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/>
  <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/>
  <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>
  <path d="M12 10v4"/>
  <path d="M12 2v3"/>
</svg>`,
  },

  {
    name: "taxi",
    category: "Travel & Transportation",
    tags: ["taxi", "cab", "ride", "transport", "city"],
    description: "Icono de taxi",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 2h4"/>
  <path d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/>
  <path d="M7 10h10"/>
  <path d="M3 10v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8"/>
  <circle cx="7" cy="18" r="2"/>
  <circle cx="17" cy="18" r="2"/>
</svg>`,
  },

  {
    name: "subway",
    category: "Travel & Transportation",
    tags: ["subway", "metro", "underground", "public", "transport"],
    description: "Icono de metro",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="4" width="12" height="16" rx="2"/>
  <path d="M6 8h12"/>
  <path d="M18 8v8"/>
  <path d="M6 8v8"/>
  <circle cx="9" cy="17" r="1"/>
  <circle cx="15" cy="17" r="1"/>
  <path d="M9 4V2"/>
  <path d="M15 4V2"/>
</svg>`,
  },
  {
    name: "compass",
    category: "Travel & Transportation",
    tags: ["compass", "navigation", "direction", "travel", "explore"],
    description: "Icono de brújula",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
</svg>`,
  },
  {
    name: "map",
    category: "Travel & Transportation",
    tags: ["map", "navigation", "location", "travel", "route"],
    description: "Icono de mapa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/>
  <path d="M9 3v15"/>
  <path d="M15 6v15"/>
</svg>`,
  },
  {
    name: "luggage",
    category: "Travel & Transportation",
    tags: ["luggage", "suitcase", "travel", "vacation", "trip"],
    description: "Icono de equipaje",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z"/>
  <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/>
  <path d="M10 20h4"/>
  <circle cx="16" cy="20" r="2"/>
  <circle cx="8" cy="20" r="2"/>
</svg>`,
  },
  // SECURITY (10 iconos)
  {
    name: "lock",
    category: "Security",
    tags: ["lock", "security", "protect", "private", "secure"],
    description: "Icono de candado",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
</svg>`,
  },
  {
    name: "unlock",
    category: "Security",
    tags: ["unlock", "open", "access", "security", "unsecure"],
    description: "Icono de candado abierto",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
  <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
</svg>`,
  },
  {
    name: "key",
    category: "Security",
    tags: ["key", "password", "access", "security", "unlock"],
    description: "Icono de llave",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="7.5" cy="15.5" r="5.5"/>
  <path d="M21 2l-9.6 9.6"/>
  <path d="M15.5 7.5l3 3L22 7l-3-3"/>
</svg>`,
  },
  {
    name: "shield",
    category: "Security",
    tags: ["shield", "protection", "security", "defense", "safe"],
    description: "Icono de escudo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
</svg>`,
  },

  {
    name: "eye",
    category: "Security",
    tags: ["eye", "view", "visibility", "watch", "monitor"],
    description: "Icono de ojo para visibilidad",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
  <circle cx="12" cy="12" r="3"/>
</svg>`,
  },
  {
    name: "eye-off",
    category: "Security",
    tags: ["eye", "hidden", "invisible", "privacy", "hide"],
    description: "Icono de ojo tachado para ocultar",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
  <line x1="1" y1="1" x2="23" y2="23"/>
</svg>`,
  },
  {
    name: "security-camera",
    category: "Security",
    tags: ["camera", "security", "surveillance", "monitor", "watch"],
    description: "Icono de cámara de seguridad",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 4h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/>
  <rect x="2" y="2" width="14" height="12" rx="2"/>
  <circle cx="8" cy="8" r="2"/>
  <path d="M9 22V12"/>
  <path d="M7 22h4"/>
</svg>`,
  },
  {
    name: "two-factor-auth",
    category: "Security",
    tags: ["2fa", "authentication", "security", "two-factor", "verify"],
    description: "Icono de autenticación de dos factores",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
  <path d="M12 18h.01"/>
  <path d="M8 6h8"/>
  <path d="M8 10h8"/>
  <path d="M8 14h5"/>
</svg>`,
  },
  {
    name: "gamepad",
    category: "Entertainment",
    tags: ["gamepad", "gaming", "controller", "play", "entertainment"],
    description: "Icono de gamepad para videojuegos",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="6" y1="11" x2="10" y2="11"/>
  <line x1="8" y1="9" x2="8" y2="13"/>
  <line x1="15" y1="12" x2="15.01" y2="12"/>
  <line x1="18" y1="10" x2="18.01" y2="10"/>
  <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.152A4 4 0 0 0 17.32 5z"/>
</svg>`,
  },
  {
    name: "music",
    category: "Entertainment",
    tags: ["music", "audio", "sound", "entertainment", "media"],
    description: "Icono de música",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18V5l12-2v13"/>
  <circle cx="6" cy="18" r="3"/>
  <circle cx="18" cy="16" r="3"/>
</svg>`,
  },
  {
    name: "headphones",
    category: "Entertainment",
    tags: ["headphones", "audio", "music", "sound", "entertainment"],
    description: "Icono de auriculares",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
</svg>`,
  },
  {
    name: "tv",
    category: "Entertainment",
    tags: ["tv", "television", "screen", "entertainment", "media"],
    description: "Icono de televisión",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
  <polyline points="17,2 12,7 7,2"/>
</svg>`,
  },

  {
    name: "camera",
    category: "Entertainment",
    tags: ["camera", "photo", "picture", "media", "entertainment"],
    description: "Icono de cámara",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
  <circle cx="12" cy="13" r="4"/>
</svg>`,
  },
  {
    name: "radio",
    category: "Entertainment",
    tags: ["radio", "audio", "broadcast", "entertainment", "music"],
    description: "Icono de radio",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="2"/>
  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
</svg>`,
  },
  {
    name: "microphone",
    category: "Entertainment",
    tags: ["microphone", "audio", "recording", "entertainment", "voice"],
    description: "Icono de micrófono",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
  <line x1="12" y1="19" x2="12" y2="23"/>
  <line x1="8" y1="23" x2="16" y2="23"/>
</svg>`,
  },
  {
    name: "play-button",
    category: "Entertainment",
    tags: ["play", "button", "media", "entertainment", "start"],
    description: "Icono de botón play",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <polygon points="10,8 16,12 10,16"/>
</svg>`,
  },
  {
    name: "pause",
    category: "Entertainment",
    tags: ["pause", "stop", "media", "entertainment", "control"],
    description: "Icono de pausa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="10" y1="15" x2="10" y2="9"/>
  <line x1="14" y1="15" x2="14" y2="9"/>
</svg>`,
  },
  {
    name: "speaker",
    category: "Entertainment",
    tags: ["speaker", "audio", "sound", "entertainment", "volume"],
    description: "Icono de altavoz",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
</svg>`,
  },
  {
    name: "gaming-dice",
    category: "Entertainment",
    tags: ["dice", "gaming", "game", "entertainment", "luck"],
    description: "Icono de dado para juegos",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  <circle cx="7" cy="7" r="1"/>
  <circle cx="17" cy="7" r="1"/>
  <circle cx="7" cy="17" r="1"/>
  <circle cx="17" cy="17" r="1"/>
  <circle cx="12" cy="12" r="1"/>
</svg>`,
  },

  // TOOLS & UTILITIES (10 iconos)
  {
    name: "screwdriver",
    category: "Tools & Utilities",
    tags: ["screwdriver", "tool", "repair", "fix", "maintenance"],
    description: "Icono de destornillador",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 13l4 4"/>
  <path d="M16 16l3-3"/>
  <path d="M20 2l2 2-3 3"/>
  <path d="M15 6l3 3"/>
  <path d="M8 12l-2-2"/>
  <path d="M2 22l2-2"/>
</svg>`,
  },
  {
    name: "toolbox",
    category: "Tools & Utilities",
    tags: ["toolbox", "tools", "repair", "maintenance", "kit"],
    description: "Icono de caja de herramientas",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  <rect x="2" y="8" width="20" height="13" rx="2"/>
  <path d="M8 12h8"/>
  <path d="M10 16h4"/>
</svg>`,
  },
  {
    name: "scissors",
    category: "Tools & Utilities",
    tags: ["scissors", "cut", "tool", "utility", "edit"],
    description: "Icono de tijeras",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <line x1="20" y1="4" x2="8.12" y2="15.88"/>
  <line x1="14.47" y1="14.48" x2="20" y2="20"/>
  <line x1="8.12" y1="8.12" x2="12" y2="12"/>
</svg>`,
  },

  {
    name: "flashlight",
    category: "Tools & Utilities",
    tags: ["flashlight", "light", "tool", "utility", "illuminate"],
    description: "Icono de linterna",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 2v3h8V2"/>
  <path d="M16 7H8l1 12h6z"/>
  <circle cx="12" cy="11" r="1"/>
</svg>`,
  },

  {
    name: "trash",
    category: "Tools & Utilities",
    tags: ["trash", "delete", "remove", "utility", "bin"],
    description: "Icono de papelera",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="3,6 5,6 21,6"/>
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  <line x1="10" y1="11" x2="10" y2="17"/>
  <line x1="14" y1="11" x2="14" y2="17"/>
</svg>`,
  },

  // NATURE & ENVIRONMENT (10 iconos)
  {
    name: "tree",
    category: "Nature & Environment",
    tags: ["tree", "nature", "environment", "forest", "plant"],
    description: "Icono de árbol",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 10v.2A3 3 0 0 0 8.9 16v0H5v0h0a3 3 0 0 0-1-5.8V10a3 3 0 0 0 6 0z"/>
  <path d="M7 16v6"/>
  <path d="M13 19v3"/>
  <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3"/>
</svg>`,
  },
  {
    name: "leaf",
    category: "Nature & Environment",
    tags: ["leaf", "nature", "environment", "plant", "eco"],
    description: "Icono de hoja",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
</svg>`,
  },
  {
    name: "flower",
    category: "Nature & Environment",
    tags: ["flower", "nature", "environment", "bloom", "plant"],
    description: "Icono de flor",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9a3 3 0 0 0 3 3h1.5M12 7.5V9a3 3 0 0 1-3 3H7.5"/>
  <path d="M12 12v6"/>
  <path d="M8 18h8"/>
</svg>`,
  },

  {
    name: "water-drop",
    category: "Nature & Environment",
    tags: ["water", "drop", "nature", "environment", "liquid"],
    description: "Icono de gota de agua",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
</svg>`,
  },

  {
    name: "earth",
    category: "Nature & Environment",
    tags: ["earth", "globe", "world", "environment", "planet"],
    description: "Icono de la Tierra",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="2" y1="12" x2="22" y2="12"/>
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
</svg>`,
  },
  {
    name: "breeze",
    category: "Nature & Environment",
    tags: ["breeze", "air", "nature", "environment", "weather"],
    description: "Icono de brisa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
  <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
  <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
</svg>`,
  },
  {
    name: "fire",
    category: "Nature & Environment",
    tags: ["fire", "flame", "heat", "nature", "element"],
    description: "Icono de fuego",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
</svg>`,
  },

  // FINANCE & BANKING (12 iconos)
  {
    name: "currency-dollar",
    category: "Finance & Banking",
    tags: ["dollar", "money", "finance", "banking", "currency"],
    description: "Icono de moneda dólar",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="1" x2="12" y2="23"/>
  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
</svg>`,
  },

  {
    name: "wallet",
    category: "Finance & Banking",
    tags: ["wallet", "money", "finance", "banking", "payment"],
    description: "Icono de billetera",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
  <line x1="1" y1="10" x2="23" y2="10"/>
</svg>`,
  },
  {
    name: "piggy-bank",
    category: "Finance & Banking",
    tags: ["piggy", "bank", "savings", "finance", "money"],
    description: "Icono de alcancía",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 5c-1.5 0-2.8 1.4-3 2.5l-1.2-1.2c-.8-.8-2-.8-2.8 0L10 8.3l-4.8-4.8c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l4.8 4.8L5.2 13c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0L10 13.8l2-2c.8-.8.8-2 0-2.8l-1.2-1.2c1.1-.2 2.5-1.5 2.5-3 0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3z"/>
  <line x1="16" y1="5" x2="16" y2="5"/>
</svg>`,
  },
  {
    name: "chart-line",
    category: "Finance & Banking",
    tags: ["chart", "line", "finance", "banking", "graph"],
    description: "Icono de gráfico lineal",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="21" x2="21" y2="21"/>
  <line x1="3" y1="21" x2="3" y2="3"/>
  <polyline points="7,17 12,12 16,16 21,11"/>
</svg>`,
  },

  {
    name: "receipt",
    category: "Finance & Banking",
    tags: ["receipt", "invoice", "finance", "banking", "payment"],
    description: "Icono de recibo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/>
  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
  <path d="M12 6v12"/>
</svg>`,
  },
  {
    name: "financial-calculator",
    category: "Finance & Banking",
    tags: ["calculator", "math", "finance", "banking", "accounting"],
    description: "Icono de calculadora financiera",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="2" width="16" height="20" rx="2"/>
  <line x1="8" y1="6" x2="16" y2="6"/>
  <line x1="16" y1="10" x2="16" y2="10"/>
  <line x1="12" y1="10" x2="12" y2="10"/>
  <line x1="8" y1="10" x2="8" y2="10"/>
  <line x1="16" y1="14" x2="16" y2="14"/>
  <line x1="12" y1="14" x2="12" y2="14"/>
  <line x1="8" y1="14" x2="8" y2="14"/>
  <line x1="16" y1="18" x2="16" y2="18"/>
  <line x1="12" y1="18" x2="12" y2="18"/>
  <line x1="8" y1="18" x2="8" y2="18"/>
</svg>`,
  },
  {
    name: "growth-chart",
    category: "Finance & Banking",
    tags: ["growth", "chart", "finance", "banking", "increase"],
    description: "Icono de gráfico de crecimiento",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
  <polyline points="17,6 23,6 23,12"/>
</svg>`,
  },
  {
    name: "credit-card-alt",
    category: "Finance & Banking",
    tags: ["credit", "card", "payment", "finance", "banking"],
    description: "Icono de tarjeta de crédito alternativa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="4" width="20" height="16" rx="2"/>
  <line x1="2" y1="10" x2="22" y2="10"/>
  <line x1="7" y1="15" x2="7.01" y2="15"/>
  <line x1="11" y1="15" x2="13" y2="15"/>
</svg>`,
  },

  // HOME & REAL ESTATE (12 iconos)
  {
    name: "house",
    category: "Home & Real Estate",
    tags: ["house", "home", "real estate", "property", "building"],
    description: "Icono de casa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9,22 9,12 15,12 15,22"/>
</svg>`,
  },
  {
    name: "apartment",
    category: "Home & Real Estate",
    tags: ["apartment", "building", "real estate", "property", "home"],
    description: "Icono de apartamento",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="2" width="16" height="20" rx="2"/>
  <line x1="8" y1="6" x2="8" y2="6"/>
  <line x1="12" y1="6" x2="12" y2="6"/>
  <line x1="16" y1="6" x2="16" y2="6"/>
  <line x1="8" y1="10" x2="8" y2="10"/>
  <line x1="12" y1="10" x2="12" y2="10"/>
  <line x1="16" y1="10" x2="16" y2="10"/>
  <line x1="8" y1="14" x2="8" y2="14"/>
  <line x1="12" y1="14" x2="12" y2="14"/>
  <line x1="16" y1="14" x2="16" y2="14"/>
  <rect x="10" y="18" width="4" height="4"/>
</svg>`,
  },

  {
    name: "fence",
    category: "Home & Real Estate",
    tags: ["fence", "home", "real estate", "property", "boundary"],
    description: "Icono de cerca",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 3v18"/>
  <path d="M8 3v18"/>
  <path d="M12 3v18"/>
  <path d="M16 3v18"/>
  <path d="M20 3v18"/>
  <path d="M2 9h20"/>
  <path d="M2 15h20"/>
</svg>`,
  },
  {
    name: "swimming-pool",
    category: "Home & Real Estate",
    tags: ["pool", "swimming", "home", "real estate", "luxury"],
    description: "Icono de piscina",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 20c1.5-1 3.5-1 5 0s3.5 1 5 0 3.5-1 5 0 3.5 1 5 0"/>
  <path d="M2 16c1.5-1 3.5-1 5 0s3.5 1 5 0 3.5-1 5 0 3.5 1 5 0"/>
  <path d="M22 12H2"/>
  <path d="M7 12V8a5 5 0 0 1 10 0v4"/>
</svg>`,
  },

  // HOBBIES & LEISURE (10 iconos)

  {
    name: "book-reading",
    category: "Hobbies & Leisure",
    tags: ["book", "reading", "hobby", "leisure", "literature"],
    description: "Icono de libro para lectura",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  <path d="M6 8h2"/>
  <path d="M6 12h2"/>
  <path d="M16 8h2"/>
  <path d="M16 12h2"/>
</svg>`,
  },

  {
    name: "photography-camera",
    category: "Hobbies & Leisure",
    tags: ["photography", "camera", "hobby", "photo", "lens"],
    description: "Icono de cámara fotográfica",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
  <circle cx="12" cy="13" r="4"/>
  <circle cx="12" cy="13" r="1"/>
</svg>`,
  },

  {
    name: "crafting",
    category: "Hobbies & Leisure",
    tags: ["crafting", "hobby", "diy", "creative", "handmade"],
    description: "Icono de manualidades",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <line x1="20" y1="4" x2="8.12" y2="15.88"/>
  <line x1="14.47" y1="14.48" x2="20" y2="20"/>
  <line x1="8.12" y1="8.12" x2="12" y2="12"/>
</svg>`,
  },

  // SCIENCE & RESEARCH (10 iconos)
  {
    name: "microscope-lab",
    category: "Science & Research",
    tags: ["microscope", "lab", "science", "research", "biology"],
    description: "Icono de microscopio de laboratorio",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 18h8"/>
  <path d="M3 22h18"/>
  <path d="M14 22a7 7 0 1 0 0-14h-1"/>
  <path d="M9 14h2"/>
  <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2"/>
  <path d="M12 6V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2"/>
</svg>`,
  },

  {
    name: "ring",
    category: "education",
    tags: ["alarm", "ring", "siren", "sound", "alert"],
    description: "Icono de instrumento de alarma",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="2"/>
  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
  <circle cx="12" cy="12" r="10"/>
</svg>`,
  },
  {
    name: "beaker-flask",
    category: "Science & Research",
    tags: ["beaker", "flask", "chemistry", "lab", "science"],
    description: "Icono de matraz de laboratorio",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 2v6.5L4 15a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-6.5V2"/>
  <path d="M9 2h6"/>
  <path d="M7 16h10"/>
  <path d="M8 19h8"/>
</svg>`,
  },

  {
    name: "formula-equation",
    category: "Science & Research",
    tags: ["formula", "equation", "math", "science", "research"],
    description: "Icono de fórmula matemática",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="5" width="18" height="14" rx="2"/>
  <path d="M8 10l2 2-2 2"/>
  <path d="M16 10l-2 2 2 2"/>
  <path d="M12 8v8"/>
</svg>`,
  },

  // NUMBERS (10 iconos)
  {
    name: "number-0",
    category: "Numbers",
    tags: ["number", "zero", "0", "digit", "numeral"],
    description: "Número 0 en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">0</text>
</svg>`,
  },
  {
    name: "number-1",
    category: "Numbers",
    tags: ["number", "one", "1", "digit", "numeral"],
    description: "Número 1 en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">1</text>
</svg>`,
  },
  {
    name: "number-2",
    category: "Numbers",
    tags: ["number", "two", "2", "digit", "numeral"],
    description: "Número 2 en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">2</text>
</svg>`,
  },
  {
    name: "number-3",
    category: "Numbers",
    tags: ["number", "three", "3", "digit", "numeral"],
    description: "Número 3 en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">3</text>
</svg>`,
  },
  {
    name: "number-4",
    category: "Numbers",
    tags: ["number", "four", "4", "digit", "numeral"],
    description: "Número 4 en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">4</text>
</svg>`,
  },
  {
    name: "number-5",
    category: "Numbers",
    tags: ["number", "five", "5", "digit", "numeral"],
    description: "Número 5 en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">5</text>
</svg>`,
  },
  {
    name: "number-6",
    category: "Numbers",
    tags: ["number", "six", "6", "digit", "numeral"],
    description: "Número 6 en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">6</text>
</svg>`,
  },
  {
    name: "number-7",
    category: "Numbers",
    tags: ["number", "seven", "7", "digit", "numeral"],
    description: "Número 7 en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">7</text>
</svg>`,
  },
  {
    name: "number-8",
    category: "Numbers",
    tags: ["number", "eight", "8", "digit", "numeral"],
    description: "Número 8 en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">8</text>
</svg>`,
  },
  {
    name: "number-9",
    category: "Numbers",
    tags: ["number", "nine", "9", "digit", "numeral"],
    description: "Número 9 en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">9</text>
</svg>`,
  },

  // LETTERS (26 iconos)
  {
    name: "letter-a",
    category: "Letters",
    tags: ["letter", "alphabet", "a", "character", "text"],
    description: "Letra A en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">A</text>
</svg>`,
  },
  {
    name: "letter-b",
    category: "Letters",
    tags: ["letter", "alphabet", "b", "character", "text"],
    description: "Letra B en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">B</text>
</svg>`,
  },
  {
    name: "letter-c",
    category: "Letters",
    tags: ["letter", "alphabet", "c", "character", "text"],
    description: "Letra C en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">C</text>
</svg>`,
  },
  {
    name: "letter-d",
    category: "Letters",
    tags: ["letter", "alphabet", "d", "character", "text"],
    description: "Letra D en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">D</text>
</svg>`,
  },
  {
    name: "letter-e",
    category: "Letters",
    tags: ["letter", "alphabet", "e", "character", "text"],
    description: "Letra E en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">E</text>
</svg>`,
  },
  {
    name: "letter-f",
    category: "Letters",
    tags: ["letter", "alphabet", "f", "character", "text"],
    description: "Letra F en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">F</text>
</svg>`,
  },
  {
    name: "letter-g",
    category: "Letters",
    tags: ["letter", "alphabet", "g", "character", "text"],
    description: "Letra G en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">G</text>
</svg>`,
  },
  {
    name: "letter-h",
    category: "Letters",
    tags: ["letter", "alphabet", "h", "character", "text"],
    description: "Letra H en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">H</text>
</svg>`,
  },
  {
    name: "letter-i",
    category: "Letters",
    tags: ["letter", "alphabet", "i", "character", "text"],
    description: "Letra I en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">I</text>
</svg>`,
  },
  {
    name: "letter-j",
    category: "Letters",
    tags: ["letter", "alphabet", "j", "character", "text"],
    description: "Letra J en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">J</text>
</svg>`,
  },
  {
    name: "letter-k",
    category: "Letters",
    tags: ["letter", "alphabet", "k", "character", "text"],
    description: "Letra K en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">K</text>
</svg>`,
  },
  {
    name: "letter-l",
    category: "Letters",
    tags: ["letter", "alphabet", "l", "character", "text"],
    description: "Letra L en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">L</text>
</svg>`,
  },
  {
    name: "letter-m",
    category: "Letters",
    tags: ["letter", "alphabet", "m", "character", "text"],
    description: "Letra M en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">M</text>
</svg>`,
  },
  {
    name: "letter-n",
    category: "Letters",
    tags: ["letter", "alphabet", "n", "character", "text"],
    description: "Letra N en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">N</text>
</svg>`,
  },
  {
    name: "letter-o",
    category: "Letters",
    tags: ["letter", "alphabet", "o", "character", "text"],
    description: "Letra O en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">O</text>
</svg>`,
  },
  {
    name: "letter-p",
    category: "Letters",
    tags: ["letter", "alphabet", "p", "character", "text"],
    description: "Letra P en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">P</text>
</svg>`,
  },
  {
    name: "letter-q",
    category: "Letters",
    tags: ["letter", "alphabet", "q", "character", "text"],
    description: "Letra Q en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">Q</text>
</svg>`,
  },
  {
    name: "letter-r",
    category: "Letters",
    tags: ["letter", "alphabet", "r", "character", "text"],
    description: "Letra R en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">R</text>
</svg>`,
  },
  {
    name: "letter-s",
    category: "Letters",
    tags: ["letter", "alphabet", "s", "character", "text"],
    description: "Letra S en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">S</text>
</svg>`,
  },
  {
    name: "letter-t",
    category: "Letters",
    tags: ["letter", "alphabet", "t", "character", "text"],
    description: "Letra T en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">T</text>
</svg>`,
  },
  {
    name: "letter-u",
    category: "Letters",
    tags: ["letter", "alphabet", "u", "character", "text"],
    description: "Letra U en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">U</text>
</svg>`,
  },
  {
    name: "letter-v",
    category: "Letters",
    tags: ["letter", "alphabet", "v", "character", "text"],
    description: "Letra V en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">V</text>
</svg>`,
  },
  {
    name: "letter-w",
    category: "Letters",
    tags: ["letter", "alphabet", "w", "character", "text"],
    description: "Letra W en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">W</text>
</svg>`,
  },
  {
    name: "letter-x",
    category: "Letters",
    tags: ["letter", "alphabet", "x", "character", "text"],
    description: "Letra X en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">X</text>
</svg>`,
  },
  {
    name: "letter-y",
    category: "Letters",
    tags: ["letter", "alphabet", "y", "character", "text"],
    description: "Letra Y en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">Y</text>
</svg>`,
  },
  {
    name: "letter-z",
    category: "Letters",
    tags: ["letter", "alphabet", "z", "character", "text"],
    description: "Letra Z en círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor" stroke="none">Z</text>
</svg>`,
  },

  // SPORTS & FITNESS (12 iconos)
  {
    name: "basketball",
    category: "Sports & Fitness",
    tags: ["basketball", "ball", "sport", "game", "hoop"],
    description: "Pelota de baloncesto",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Círculo base -->
  <circle cx="12" cy="12" r="10"/>
  
  <!-- Eje vertical -->
  <path d="M12 2v20"/>
  
  <!-- Eje horizontal -->
  <path d="M2 12h20"/>
  
  <!-- Paralelo superior (arco controlado) -->
  <path d="M4 8a16 16 0 0 0 16 0"/>
  
  <!-- Paralelo inferior (arco controlado) -->
  <path d="M4 16a16 16 0 0 1 16 0"/>
</svg>
`,
  },

  {
    name: "trophy",
    category: "Sports & Fitness",
    tags: ["trophy", "award", "winner", "champion", "prize"],
    description: "Trofeo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
  <path d="M4 22h16"/>
  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
</svg>`,
  },

  {
    name: "stopwatch",
    category: "Sports & Fitness",
    tags: ["stopwatch", "timer", "time", "fitness", "race"],
    description: "Cronómetro",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="13" r="8"/>
  <path d="M12 9v4"/>
  <path d="M12 5V3"/>
  <path d="M15 3h-6"/>
  <path d="M18.5 6.5L17 8"/>
</svg>`,
  },

  {
    name: "target",
    category: "Sports & Fitness",
    tags: ["target", "aim", "goal", "sport", "archery"],
    description: "Diana de tiro",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="6"/>
  <circle cx="12" cy="12" r="2"/>
</svg>`,
  },

  // TRAVEL & TRANSPORTATION (10 iconos)

  {
    name: "train",
    category: "Travel & Transportation",
    tags: ["train", "railway", "transport", "travel", "locomotive"],
    description: "Tren",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <path d="M4 11h16"/>
  <path d="M12 4v7"/>
  <circle cx="8.5" cy="15.5" r="1.5"/>
  <circle cx="15.5" cy="15.5" r="1.5"/>
  <path d="M8.5 21L12 17.5L15.5 21"/>
</svg>`,
  },

  {
    name: "bicycle",
    category: "Travel & Transportation",
    tags: ["bicycle", "bike", "cycle", "transport", "exercise"],
    description: "Bicicleta",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18.5" cy="17.5" r="3.5"/>
  <circle cx="5.5" cy="17.5" r="3.5"/>
  <circle cx="15" cy="5" r="1"/>
  <path d="M12 17.5L14 15.5 10.5 12 14 8.5 16 9.5"/>
  <path d="M17.5 17.5L19 16"/>
</svg>`,
  },
  {
    name: "luggage",
    category: "Travel & Transportation",
    tags: ["luggage", "suitcase", "travel", "baggage", "vacation"],
    description: "Equipaje",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
  <path d="M10 7V6a2 2 0 0 1 4 0v1"/>
  <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"/>
</svg>`,
  },

  // INTERFACE & UI ESSENTIALS - Iconos necesarios para documentación
  {
    name: "plus",
    category: "interface",
    tags: ["plus", "add", "create", "new", "addition"],
    description: "Icono de más/agregar",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 5v14"/>
  <path d="M5 12h14"/>
</svg>`,
  },
  {
    name: "check",
    category: "interface",
    tags: ["check", "success", "done", "complete", "confirm"],
    description: "Icono de verificación/éxito",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20,6 9,17 4,12"/>
</svg>`,
  },
  {
    name: "refresh",
    category: "interface",
    tags: ["refresh", "reload", "sync", "update", "loading"],
    description: "Icono de recargar/actualizar",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
  <path d="M21 3v5h-5"/>
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
  <path d="M3 21v-5h5"/>
</svg>`,
  },
  {
    name: "shield-check",
    category: "Security",
    tags: ["shield", "check", "security", "verified", "protected"],
    description: "Icono de escudo con verificación",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
  <path d="M9 12l2 2 4-4"/>
</svg>`,
  },
  {
    name: "users",
    category: "people",
    tags: ["users", "people", "group", "team", "multiple"],
    description: "Icono de múltiples usuarios",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
  <circle cx="9" cy="7" r="4"/>
  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
</svg>`,
  },
  {
    name: "alert-triangle",
    category: "interface",
    tags: ["alert", "warning", "caution", "error", "triangle"],
    description: "Icono de alerta/advertencia triangular",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
  <line x1="12" y1="9" x2="12" y2="13"/>
  <line x1="12" y1="17" x2="12.01" y2="17"/>
</svg>`,
  },
  {
    name: "save",
    category: "interface",
    tags: ["save", "disk", "store", "file", "backup"],
    description: "Icono de guardar/disco",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
  <polyline points="17,21 17,13 7,13 7,21"/>
  <polyline points="7,3 7,8 15,8"/>
</svg>`,
  },
  {
    name: "email",
    category: "Communication",
    tags: ["email", "mail", "envelope", "message", "contact"],
    description: "Icono de email/correo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>`,
  },
  {
    name: "password",
    category: "Security",
    tags: ["password", "lock", "security", "key", "protection"],
    description: "Icono de contraseña/candado",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
  <circle cx="12" cy="16" r="1"/>
  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
</svg>`,
  },
  {
    name: "sales",
    category: "Business",
    tags: ["sales", "money", "dollar", "revenue", "business"],
    description: "Icono de ventas/dinero",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="1" x2="12" y2="23"/>
  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
</svg>`,
  },
  {
    name: "loader",
    category: "interface",
    tags: ["loader", "loading", "spinner", "wait", "progress"],
    description: "Icono de loading/spinner",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="2" x2="12" y2="6"/>
  <line x1="12" y1="18" x2="12" y2="22"/>
  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
  <line x1="2" y1="12" x2="6" y2="12"/>
  <line x1="18" y1="12" x2="22" y2="12"/>
  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
</svg>`,
  },

  // ICONOS ESPECÍFICOS PARA LA APLICACIÓN SVGSTORM
  {
    name: "lightning",
    category: "Weather",
    tags: ["lightning", "storm", "electricity", "power", "energy"],
    description: "Icono de rayo/tormenta para logo SVGStorm",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
</svg>`,
  },
  {
    name: "palette",
    category: "Art & Design",
    tags: ["palette", "colors", "art", "design", "paint"],
    description: "Paleta de colores para diseño",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="13.5" cy="6.5" r=".5"/>
  <circle cx="17.5" cy="10.5" r=".5"/>
  <circle cx="8.5" cy="7.5" r=".5"/>
  <circle cx="6.5" cy="12.5" r=".5"/>
  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
</svg>`,
  },
  {
    name: "search",
    category: "Interface",
    tags: ["search", "find", "magnifying", "glass", "look"],
    description: "Icono de búsqueda/lupa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"/>
  <path d="m21 21-4.35-4.35"/>
</svg>`,
  },
  {
    name: "documentation",
    category: "Education",
    tags: ["documentation", "docs", "book", "guide", "manual"],
    description: "Icono de documentación",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  <path d="M8 7h8"/>
  <path d="M8 11h8"/>
</svg>`,
  },
  {
    name: "demo",
    category: "Interface",
    tags: ["demo", "play", "example", "showcase", "preview"],
    description: "Icono de demo/presentación",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="5,3 19,12 5,21 5,3"/>
</svg>`,
  },

  // ICONOS ADICIONALES PARA REEMPLAZAR EMOJIS Y SVGs HARDCODEADOS
  {
    name: "folder",
    category: "Interface",
    tags: ["folder", "directory", "storage", "organize", "files"],
    description: "Icono de carpeta para categorías",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z"/>
</svg>`,
  },
  {
    name: "tag",
    category: "Interface",
    tags: ["tag", "label", "category", "mark", "badge"],
    description: "Icono de etiqueta para tags",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>`,
  },

  {
    name: "lightning-bolt",
    category: "Weather",
    tags: ["lightning", "bolt", "energy", "fast", "quick"],
    description: "Icono de rayo pequeño para velocidad",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="11,5 6,14 10,14 7,23 18,12 14,12 17,5"/>
</svg>`,
  },
  {
    name: "wrench",
    category: "Tools",
    tags: ["wrench", "tools", "settings", "configuration", "repair"],
    description: "Icono de llave inglesa para configuración",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
</svg>`,
  },
  {
    name: "image",
    category: "Interface",
    tags: ["image", "picture", "photo", "placeholder", "media"],
    description: "Icono de imagen placeholder",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  <circle cx="8.5" cy="8.5" r="1.5"/>
  <path d="M21 15l-5-5L5 21"/>
</svg>`,
  },

  {
    name: "copy",
    category: "Interface",
    tags: ["copy", "clipboard", "duplicate", "clone", "paste"],
    description: "Icono de copiar al portapapeles",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
</svg>`,
  },
  {
    name: "close",
    category: "Interface",
    tags: ["close", "x", "cancel", "exit", "dismiss"],
    description: "Icono de cerrar/X",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"/>
  <line x1="6" y1="6" x2="18" y2="18"/>
</svg>`,
  },
  {
    name: "check-circle",
    category: "Interface",
    tags: ["check", "success", "done", "complete", "verified"],
    description: "Icono de verificación exitosa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
  <polyline points="22,4 12,14.01 9,11.01"/>
</svg>`,
  },
  {
    name: "code-brackets",
    category: "Technology",
    tags: ["code", "brackets", "programming", "development", "syntax"],
    description: "Icono de código con brackets",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="16,18 22,12 16,6"/>
  <polyline points="8,6 2,12 8,18"/>
</svg>`,
  },

  // ICONOS ADICIONALES PARA DOCUMENTACIÓN
  {
    name: "package",
    category: "Objects",
    tags: ["package", "box", "delivery", "shipping", "installation"],
    description: "Icono de paquete/instalación",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="m7.5 4.27 9 5.15"/>
  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
  <path d="m3.3 7 8.7 5 8.7-5"/>
  <path d="M12 22V12"/>
</svg>`,
  },
  {
    name: "clipboard",
    category: "Office",
    tags: ["clipboard", "copy", "paste", "list", "notes"],
    description: "Icono de portapapeles/lista",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
</svg>`,
  },
  {
    name: "circle",
    category: "Shapes",
    tags: ["circle", "round", "shape", "dot", "point"],
    description: "Icono de círculo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
</svg>`,
  },
  {
    name: "edit",
    category: "Actions",
    tags: ["edit", "pencil", "write", "modify", "change"],
    description: "Icono de editar/escribir",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
  <path d="m15 5 4 4"/>
</svg>`,
  },
  {
    name: "float",
    category: "Travel & Transportation",
    tags: ["globe", "world", "swimming", "global", "pool"],
    description: "Icono de esfera rodando horizontalmente",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="m4.93 4.93 4.24 4.24"/>
  <path d="m14.83 9.17 4.24-4.24"/>
  <path d="m14.83 14.83 4.24 4.24"/>
  <path d="m9.17 14.83-4.24 4.24"/>
  <circle cx="12" cy="12" r="4"/>
</svg>`,
  },
  {
    name: "sparkles",
    category: "Effects",
    tags: ["sparkles", "magic", "stars", "shine", "special"],
    description: "Icono de destellos/magia",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  <path d="M5 3v4"/>
  <path d="M19 17v4"/>
  <path d="M3 5h4"/>
  <path d="M17 19h4"/>
</svg>`,
  },
  {
    name: "info",
    category: "Interface",
    tags: ["info", "information", "help", "about", "details"],
    description: "Icono de información",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="m9 12 2 2 4-4"/>
</svg>`,
  },

  // REDES SOCIALES Y COMUNICACIÓN
  {
    name: "github",
    category: "Social",
    tags: ["github", "git", "repository", "code", "development"],
    description: "Icono de GitHub para repositorios y código",
    svg_code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  },
  {
    name: "linkedin",
    category: "Social",
    tags: ["linkedin", "professional", "network", "career", "business"],
    description: "Icono de LinkedIn para networking profesional",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.67 33.33a25 25 0 0 1 25 25v29.17h-16.67v-29.17a8.33 8.33 0 0 0-8.33-8.33 8.33 8.33 0 0 0-8.33 8.33v29.17H41.67v-29.17a25 25 0 0 1 25-25z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect width="16.67" height="50" x="8.33" y="37.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="16.67" cy="16.67" r="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "briefcase-business",
    category: "Business",
    tags: ["briefcase", "business", "portfolio", "work", "professional"],
    description: "Icono de maletín para negocios y portafolio",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 50h.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M66.67 25V16.67a8.33 8.33 0 0 0-8.33-8.33h-16.67a8.33 8.33 0 0 0-8.33 8.33V25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M91.67 54.17a75.63 75.63 0 0 1-83.33 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect width="83.33" height="58.33" x="8.33" y="25" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "send",
    category: "Communication",
    tags: ["send", "message", "email", "arrow", "submit"],
    description: "Icono de enviar mensaje o email",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60.57 90.36a2.08 2.08 0 0 0 3.9-.1l27.08-79.17a2.07 2.07 0 0 0-2.64-2.64l-79.17 27.08a2.08 2.08 0 0 0-.1 3.9l33.04 13.25a8.33 8.33 0 0 1 4.63 4.63z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m91.06 8.94-45.58 45.58" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "mail",
    category: "Communication",
    tags: ["mail", "email", "message", "envelope", "contact"],
    description: "Icono de correo electrónico",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m91.67 29.17-37.46 23.86a8.33 8.33 0 0 1-8.37 0L8.33 29.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="8.33" y="16.67" width="83.33" height="66.67" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // OFFICE & STORAGE
  {
    name: "archive",
    category: "Office",
    tags: ["archive", "storage", "box", "file", "organize"],
    description: "Icono de archivo para almacenamiento",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="83.33" height="20.83" x="8.33" y="12.5" rx="4.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.67 33.33v45.83c0 4.17 4.17 8.33 8.33 8.33h50c4.17 0 8.33-4.17 8.33-8.33V33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M41.67 50h16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "paperclip",
    category: "Office",
    tags: ["paperclip", "attachment", "clip", "attach", "file"],
    description: "Icono de clip para adjuntar archivos",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m66.67 25-35.06 35.83a8.33 8.33 0 0 0 11.79 11.79l35.06-35.83a16.67 16.67 0 1 0-23.58-23.58l-34.91 35.63a25 25 0 1 0 35.35 35.35l34.91-35.63" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // COMMUNICATION EXTENDED
  {
    name: "mail-plus",
    category: "Communication",
    tags: ["mail", "email", "add", "new", "create"],
    description: "Icono de correo con opción de agregar",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M91.67 54.17V25c0-4.17-4.17-8.33-8.33-8.33H16.67c-4.17 0-8.33 4.17-8.33 8.33v50c0 4.58 3.75 8.33 8.33 8.33h33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m91.67 29.17-37.38 23.75a8.08 8.08 0 0 1-8.58 0L8.33 29.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M79.17 66.67v25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M66.67 79.17h25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "forward",
    category: "Communication",
    tags: ["forward", "arrow", "next", "send", "redirect"],
    description: "Icono de reenvío o siguiente",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m62.5 70.83 20.83-20.83-20.83-20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.67 75v-8.33c0-9.17 7.5-16.67 16.67-16.67h50" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // SOCIAL MEDIA EXTENDED
  {
    name: "instagram",
    category: "Social",
    tags: ["instagram", "social", "photo", "camera", "media"],
    description: "Icono de Instagram para redes sociales",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="83.33" height="83.33" x="8.33" y="8.33" rx="20.83" ry="20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M66.67 47.38A16.67 16.67 0 1 1 52.63 33.33 16.67 16.67 0 0 1 66.67 47.38z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="72.92" x2="72.96" y1="27.08" y2="27.08" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "twitch",
    category: "Social",
    tags: ["twitch", "streaming", "live", "video", "gaming"],
    description: "Icono de Twitch para streaming",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.5 8.33H12.5v66.67h20.83v16.67l16.67-16.67h20.83l16.67-16.67V8.33zm-41.67 37.5V29.17m20.83 16.67V29.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "twitter",
    category: "Social",
    tags: ["twitter", "social", "tweet", "bird", "microblog"],
    description: "Icono de Twitter para microblogging",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M91.67 16.67s-2.92 8.75-8.33 14.17c6.67 41.67-39.17 72.08-75 48.33 9.17.42 18.33-2.5 25-8.33-12.5-2.08-20.83-12.5-16.67-35.42 9.17 10.83 23.33 17.08 37.5 16.67-3.75-17.5 16.67-27.5 29.17-15.83 4.58 0 12.5-5 12.5-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // MUSIC INSTRUMENTS
  {
    name: "drum",
    category: "Music",
    tags: ["drum", "music", "percussion", "instrument", "beat"],
    description: "Icono de tambor para música",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m8.33 8.33 33.33 33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m91.67 8.33-33.33 33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <ellipse cx="50" cy="37.5" rx="41.67" ry="20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29.17 55.83v32.92" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 58.33v33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M70.83 55.83v32.92" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33 37.5v33.33a41.67 20.83 0 0 0 83.33 0V37.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "guitar",
    category: "Music",
    tags: ["guitar", "music", "string", "instrument", "rock"],
    description: "Icono de guitarra para música",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m49.58 50.42 18.81-18.81" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M83.75 9.58a4.17 4.17 0 0 0-5.83 0l-4.64 4.64a8.33 8.33 0 0 0-2.45 5.89v5.6a8.33 8.33 0 0 1-2.44 5.89 8.33 8.33 0 0 1 5.89-2.44h5.6a8.33 8.33 0 0 0 5.89-2.44l2.81-2.81a4.17 4.17 0 0 0 0-5.83z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m25 66.67 8.33 8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M34.29 41.04A12.5 12.5 0 0 1 45.83 33.33a20.83 20.83 0 0 1 20.83 20.83 12.5 12.5 0 0 1-7.71 11.54l-3.83 1.58A8.33 8.33 0 0 0 50 75a16.67 16.67 0 0 1-16.67 16.67 25 25 0 0 1-25-25 16.67 16.67 0 0 1 16.67-16.67 8.33 8.33 0 0 0 7.71-5.13z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "keyboard-music",
    category: "Music",
    tags: ["keyboard", "music", "piano", "keys", "instrument"],
    description: "Icono de teclado musical",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="83.33" height="66.67" x="8.33" y="16.67" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 33.33h16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.33 33.33h.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M75 33.33h.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33 50h83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 50v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M41.67 50v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.33 50v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M75 50v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "piano",
    category: "Music",
    tags: ["piano", "music", "keys", "instrument", "classical"],
    description: "Icono de piano",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M77.08 33.33c-5.83 0-10.83-3.33-13.33-8.33A28.63 28.63 0 0 0 8.33 37.5v45.83c0 4.17 4.17 8.33 8.33 8.33h66.67c4.17 0 8.33-4.17 8.33-8.33V48.96c0-8.54-7.08-15.63-15.63-15.63" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33 58.33h83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 58.33v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M41.67 58.33v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.33 58.33v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M75 58.33v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // TECHNOLOGY & POWER
  {
    name: "power",
    category: "Technology",
    tags: ["power", "on", "start", "button", "energy"],
    description: "Icono de encendido",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 8.33v41.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M76.67 27.5a37.5 37.5 0 1 1-53.21.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "power-off",
    category: "Technology",
    tags: ["power", "off", "shutdown", "disable", "stop"],
    description: "Icono de apagado",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M76.5 27.67A37.5 37.5 0 0 1 86.54 62.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25.67 25.67a37.5 37.5 0 1 0 52.83 52.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 8.33v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m8.33 8.33 83.33 83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // BATTERY COLLECTION
  {
    name: "battery",
    category: "Technology",
    tags: ["battery", "power", "energy", "charge", "device"],
    description: "Icono de batería",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 91.67 58.33 L 91.67 41.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="8.33" y="25" width="66.67" height="50" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "battery-full",
    category: "Technology",
    tags: ["battery", "full", "charged", "power", "energy"],
    description: "Icono de batería llena",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.67 41.67v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.33 41.67v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M91.67 58.33v-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 41.67v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="8.33" y="25" width="66.67" height="50" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "battery-charging",
    category: "Technology",
    tags: ["battery", "charging", "power", "energy", "plug"],
    description: "Icono de batería cargando",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m45.83 29.17-12.5 20.83h16.67l-12.5 20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M61.9 25H66.67a8.33 8.33 0 0 1 8.33 8.33v33.33a8.33 8.33 0 0 1-8.33 8.33h-12.23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M91.67 58.33v-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21.42 75H16.67a8.33 8.33 0 0 1-8.33-8.33V33.33a8.33 8.33 0 0 1 8.33-8.33h12.23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "battery-low",
    category: "Technology",
    tags: ["battery", "low", "power", "energy", "warning"],
    description: "Icono de batería baja",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M91.67 58.33v-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 58.33v-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="8.33" y="25" width="66.67" height="50" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "battery-medium",
    category: "Technology",
    tags: ["battery", "medium", "power", "energy", "half"],
    description: "Icono de batería media",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.67 58.33v-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M91.67 58.33v-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 58.33v-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="8.33" y="25" width="66.67" height="50" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // DEVICES & HARDWARE
  {
    name: "monitor-smartphone",
    category: "Technology",
    tags: ["monitor", "smartphone", "device", "responsive", "screen"],
    description: "Icono de monitor y smartphone",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M75 33.33V25c0-4.17-4.17-8.33-8.33-8.33H16.67c-4.17 0-8.33 4.17-8.33 8.33v29.17c0 4.58 3.75 8.33 8.33 8.33h33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M41.67 79.17v-16.5 13.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29.17 79.17h20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect width="25" height="41.67" x="66.67" y="50" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "mouse",
    category: "Technology",
    tags: ["mouse", "computer", "click", "cursor", "device"],
    description: "Icono de ratón de computadora",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20.83" y="8.33" width="58.33" height="83.33" rx="29.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 25v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // INFRASTRUCTURE
  {
    name: "server",
    category: "Infrastructure",
    tags: ["server", "database", "hosting", "cloud", "data"],
    description: "Icono de servidor",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="83.33" height="33.33" x="8.33" y="8.33" rx="8.33" ry="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect width="83.33" height="33.33" x="8.33" y="58.33" rx="8.33" ry="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="25" x2="25.04" y1="25" y2="25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="25" x2="25.04" y1="75" y2="75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "router",
    category: "Infrastructure",
    tags: ["router", "network", "wifi", "connection", "internet"],
    description: "Icono de router de red",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="83.33" height="33.33" x="8.33" y="58.33" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25.04 75H25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M41.71 75H41.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M62.5 41.67v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M74.33 29.86a16.67 16.67 0 0 0-23.58 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M86.08 18.06a33.33 33.33 0 0 0-47.13 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "hard-drive",
    category: "Infrastructure",
    tags: ["hard-drive", "storage", "disk", "data", "memory"],
    description: "Icono de disco duro",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="91.67" x2="8.33" y1="50" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22.71 21.29 8.33 50v25c0 4.17 4.17 8.33 8.33 8.33h66.67c4.17 0 8.33-4.17 8.33-8.33V50l-14.38-28.71A8.33 8.33 0 0 0 69.83 16.67H30.17a8.33 8.33 0 0 0-7.46 4.62z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="25" x2="25.04" y1="66.67" y2="66.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="41.67" x2="41.71" y1="66.67" y2="66.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // AI & BOTS
  {
    name: "bot",
    category: "AI",
    tags: ["bot", "robot", "ai", "artificial", "intelligence"],
    description: "Icono de robot o bot",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 33.33V16.67H33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect width="66.67" height="50" x="16.67" y="33.33" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33 58.33h8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M83.33 58.33h8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M62.5 54.17v8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M37.5 54.17v8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "bot-message-square",
    category: "AI",
    tags: ["bot", "message", "chat", "ai", "conversation"],
    description: "Icono de bot con mensaje",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 25V8.33H33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m33.33 75-16.67 16.67V33.33c0-4.17 4.17-8.33 8.33-8.33h50c4.17 0 8.33 4.17 8.33 8.33v33.33c0 4.17-4.17 8.33-8.33 8.33Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33 50h8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M37.5 45.83v8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M62.5 45.83v8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M83.33 50h8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "bot-off",
    category: "AI",
    tags: ["bot", "off", "disabled", "ai", "inactive"],
    description: "Icono de bot desactivado",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M56.96 33.33H75c4.17 0 8.33 4.17 8.33 8.33v18.06" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33 58.33h8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M83.33 58.33h8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M91.67 91.67 8.33 8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33.33 33.33H25c-4.17 0-8.33 4.17-8.33 8.33v33.33c0 4.17 4.17 8.33 8.33 8.33h50c4.17 0 8.33-4.17 8.33-8.33v-8.33c0-3.54-2.44-6.54-5.89-7.44" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M37.5 54.17v8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M40.28 16.67H50v9.72" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // FINANCE
  {
    name: "bank",
    category: "Finance",
    tags: ["bank", "finance", "building", "money", "institution"],
    description: "Icono de banco o institución financiera",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.67 75v-29.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M46.33 9.16a8.33 8.33 0 0 1 7.33.03l32.78 16.03c1.98.97 1.29 3.95-.92 3.95H14.48c-2.21 0-2.9-2.99-.92-3.95z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.33 75v-29.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M75 75v-29.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 91.67h75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 75v-29.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // PHOTOGRAPHY & MEDIA
  {
    name: "camera",
    category: "Media",
    tags: ["camera", "photo", "picture", "capture", "photography"],
    description: "Icono de cámara para fotografía",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60.42 16.67h-20.83L29.17 29.17H16.67c-4.17 0-8.33 4.17-8.33 8.33v37.5c0 4.17 4.17 8.33 8.33 8.33h66.67c4.17 0 8.33-4.17 8.33-8.33V37.5c0-4.17-4.17-8.33-8.33-8.33h-12.5l-10.42-12.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="50" cy="54.17" r="12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "camera-off",
    category: "Media",
    tags: ["camera", "off", "disabled", "photo", "photography"],
    description: "Icono de cámara desactivada",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8.33" x2="91.67" y1="8.33" y2="91.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29.17 29.17H16.67c-4.17 0-8.33 4.17-8.33 8.33v37.5c0 4.17 4.17 8.33 8.33 8.33h66.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M39.58 16.67h20.83L70.83 29.17h12.5c4.17 0 8.33 4.17 8.33 8.33v31.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.84 63.17A12.5 12.5 0 1 1 41.17 45.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "disc",
    category: "Media",
    tags: ["disc", "cd", "dvd", "music", "media"],
    description: "Icono de disco CD/DVD",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="41.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 50c0-7.08 2.92-13.33 7.5-17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="50" cy="50" r="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M75 50c0 7.08-2.92 13.33-7.5 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // TOOLS & CONSTRUCTION
  {
    name: "drill",
    category: "Tools",
    tags: ["drill", "tool", "construction", "hole", "building"],
    description: "Icono de taladro para construcción",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.67 75a4.17 4.17 0 0 1 4.17 4.17v8.33a4.17 4.17 0 0 1-4.17 4.17H20.83a12.5 12.5 0 0 1-12.5-12.5 4.17 4.17 0 0 1 4.17-4.17z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M56.25 41.67H16.67c-4.17 0-8.33-4.17-8.33-8.33V16.67c0-4.17 4.17-8.33 8.33-8.33h37.5a4.17 4.17 0 0 1 4.17 4.17v25a4.17 4.17 0 0 1-4.17 4.17l-3.38 13.51a4.17 4.17 0 0 1-4.04 3.16H33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.33 16.67h12.5a4.17 4.17 0 0 1 4.17 4.17v8.33a4.17 4.17 0 0 1-4.17 4.17h-12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M75 25h16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m20.83 41.67-8.33 33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m29.17 75 8.33-33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // STORAGE & SHIPPING
  {
    name: "box",
    category: "Storage",
    tags: ["box", "package", "container", "shipping", "storage"],
    description: "Icono de caja para almacenamiento",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.5 33.33c0-4.17-4.17-8.33-4.17-7.21l-29.17-16.67c-4.17-2.08-8.33 0-8.33 0l-29.17 16.67A8.33 8.33 0 0 0 12.5 33.33v33.33c0 4.17 4.17 8.33 4.17 7.21l29.17 16.67c4.17 2.08 8.33 0 8.33 0l29.17-16.67A8.33 8.33 0 0 0 87.5 66.67Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m13.75 29.17 36.25 20.83 36.25-20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 91.67V50" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // BOOKS & EDUCATION
  {
    name: "book-marked",
    category: "Education",
    tags: ["book", "bookmark", "read", "education", "saved"],
    description: "Icono de libro con marcador",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.67 8.33v33.33l12.5-12.5 12.5 12.5V8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.67 81.25v-62.5A10.42 10.42 0 0 1 27.08 8.33H79.17a4.17 4.17 0 0 1 4.17 4.17v75a4.17 4.17 0 0 1-4.17 4.17H27.08a4.17 4.17 0 0 1 0-20.83H83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "book-check",
    category: "Education",
    tags: ["book", "check", "complete", "education", "verified"],
    description: "Icono de libro con verificación",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.67 81.25v-62.5A10.42 10.42 0 0 1 27.08 8.33H79.17a4.17 4.17 0 0 1 4.17 4.17v75a4.17 4.17 0 0 1-4.17 4.17H27.08a4.17 4.17 0 0 1 0-20.83H83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m37.5 39.58 8.33 8.33 16.67-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "book-alert",
    category: "Education",
    tags: ["book", "alert", "warning", "education", "attention"],
    description: "Icono de libro con alerta",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 54.17h.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 25v12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.67 81.25v-62.5A10.42 10.42 0 0 1 27.08 8.33H79.17a4.17 4.17 0 0 1 4.17 4.17v75a4.17 4.17 0 0 1-4.17 4.17H27.08a4.17 4.17 0 0 1 0-20.83H83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // CLOUD & WEATHER
  {
    name: "cloud-check",
    category: "Infrastructure",
    tags: ["cloud", "check", "verified", "success", "complete"],
    description: "Icono de nube con verificación",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m70.83 62.5-22.92 22.92L37.5 75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.83 72.64A29.17 29.17 0 1 1 65.46 41.67h7.46a18.75 18.75 0 0 1 6.25 36.43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "cloud-alert",
    category: "Infrastructure",
    tags: ["cloud", "alert", "warning", "error", "problem"],
    description: "Icono de nube con alerta",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 50v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 83.33h.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M70.83 75h2.08a4.17 4.17 0 0 0 0-37.5h-7.46A29.17 29.17 0 1 0 29.17 73.78" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // DEVELOPMENT & CODE
  {
    name: "code-xml",
    category: "Technology",
    tags: ["code", "xml", "programming", "development", "markup"],
    description: "Icono de código XML",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m75 66.67 16.67-16.67L75 33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m25 33.33-16.67 16.67L25 66.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m60.42 16.67-20.83 66.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // CONNECTIVITY
  {
    name: "bluetooth-off",
    category: "Technology",
    tags: ["bluetooth", "off", "disabled", "wireless", "connection"],
    description: "Icono de Bluetooth desactivado",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m70.83 70.83-20.83 20.83V50l-20.83 20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m8.33 8.33 83.33 83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M60.42 39.58 70.83 29.17l-20.83-20.83v18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // DATABASE EXTENDED
  {
    name: "database-backup",
    category: "Infrastructure",
    tags: ["database", "backup", "restore", "data", "recovery"],
    description: "Icono de respaldo de base de datos",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="20.83" rx="37.5" ry="12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 50a37.5 12.5 0 0 0 20.83 11.21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M87.5 38.75V20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 20.83v58.33a37.5 12.5 0 0 0 26.96 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 50v16.67h16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M54.17 83.33a20.83 20.83 0 0 0 37.5-12.5 18.75 18.75 0 0 0-18.75-18.75c-5.54 0-10.58 2.25-14.21 5.88L50 66.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "database-zap",
    category: "Infrastructure",
    tags: ["database", "zap", "fast", "power", "performance"],
    description: "Icono de base de datos con energía",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="20.83" rx="37.5" ry="12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 20.83V79.17A37.5 12.5 0 0 0 62.5 91" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M87.5 20.83V33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M87.5 50L75 70.83H91.67L79.17 91.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 50A37.5 12.5 0 0 0 60.79 61.96" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // HARD DRIVE VARIANTS
  {
    name: "hard-drive-download",
    category: "Infrastructure",
    tags: ["hard-drive", "download", "storage", "data", "transfer"],
    description: "Icono de disco duro con descarga",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 8.33v33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m66.67 25-16.67 16.67L33.33 25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect width="83.33" height="33.33" x="8.33" y="58.33" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 75h.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M41.67 75h.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "hard-drive-upload",
    category: "Infrastructure",
    tags: ["hard-drive", "upload", "storage", "data", "transfer"],
    description: "Icono de disco duro con subida",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m66.67 25-16.67-16.67L33.33 25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 8.33v33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect width="83.33" height="33.33" x="8.33" y="58.33" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 75h.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M41.67 75h.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // POWER VARIANTS
  {
    name: "circle-power",
    category: "Technology",
    tags: ["power", "circle", "on", "button", "start"],
    description: "Icono de encendido circular",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 29.17v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33.32 37.51a20.83 20.83 0 1 0 33.33-.02" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="50" cy="50" r="41.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // PRINTING
  {
    name: "printer",
    category: "Technology",
    tags: ["printer", "print", "document", "paper", "office"],
    description: "Icono de impresora",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 75H16.67c-4.17 0-8.33-4.17-8.33-8.33v-20.83c0-4.17 4.17-8.33 8.33-8.33h66.67c4.17 0 8.33 4.17 8.33 8.33v20.83c0 4.17-4.17 8.33-8.33 8.33H75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 37.5V12.5a4.17 4.17 0 0 1 4.17-4.17h41.67a4.17 4.17 0 0 1 4.17 4.17v25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="25" y="58.33" width="50" height="33.33" rx="4.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "printer-check",
    category: "Technology",
    tags: ["printer", "check", "verified", "print", "success"],
    description: "Icono de impresora con verificación",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M56.25 91.67H29.17a4.17 4.17 0 0 1-4.17-4.17v-25a4.17 4.17 0 0 1 4.17-4.17h41.67a4.17 4.17 0 0 1 4.17 4.17v2.08" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m66.67 79.17 8.33 8.33 16.67-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 75H16.67c-4.17 0-8.33-4.17-8.33-8.33v-20.83c0-4.17 4.17-8.33 8.33-8.33h66.67c4.17 0 8.33 4.17 8.33 8.33v8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 37.5V12.5a4.17 4.17 0 0 1 4.17-4.17h41.67a4.17 4.17 0 0 1 4.17 4.17v25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // CRYPTOCURRENCY
  {
    name: "bitcoin",
    category: "Finance",
    tags: ["bitcoin", "cryptocurrency", "crypto", "money", "digital"],
    description: "Icono de Bitcoin",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M49.03 79.54c20.52 3.61 25.58-25.1 5.07-28.72m-5.07 28.72L23.58 75.2m24.58 4.34-1.45 8.21m6.51-36.94c20.52 3.62 25.58-25.1 5.06-28.72m-5.06 28.72-16.42-2.89m21.48-25.83L31.21 17.75m24.58 4.34 1.45-8.21M31.17 84.85l13.02-73.86" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // TIME & ALARMS
  {
    name: "alarm-clock",
    category: "Time",
    tags: ["alarm", "clock", "time", "wake", "schedule"],
    description: "Icono de reloj despertador",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="54.17" r="33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 37.5v16.67l8.33 8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.83 12.5 8.33 25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m91.67 25-12.5-12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.58 77.92 16.67 87.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M73.5 77.78 83.33 87.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "alarm-clock-off",
    category: "Time",
    tags: ["alarm", "clock", "off", "disabled", "time"],
    description: "Icono de reloj despertador desactivado",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.63 28.63a33.33 33.33 0 1 0 46.92 46.92" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M82.92 59.38a33.33 33.33 0 0 0-38.13-38.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m91.67 25-12.5-12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.08 77.78 16.67 87.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m8.33 8.33 83.33 83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.67 16.67 8.33 25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // BUG & DEBUGGING
  {
    name: "bug",
    category: "Development",
    tags: ["bug", "error", "debug", "insect", "problem"],
    description: "Icono de bug para debugging",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m33.33 8.33 7.83 7.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.83 16.17 66.67 8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M37.5 29.71v-4.17a12.51 12.51 0 1 1 25 0v4.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 83.33c-13.75 0-25-11.25-25-25v-12.5a16.67 16.67 0 0 1 16.67-16.67h16.67A16.67 16.67 0 0 1 75 45.83v12.5c0 13.75-11.25 25-25 25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 83.33v-37.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M27.21 37.5C19.17 36.67 12.5 29.58 12.5 20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 54.17H8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 87.5c0-8.75 7.08-16.25 15.83-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M87.4 20.83c0 8.75-6.67 15.83-14.58 16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M91.67 54.17H75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M71.67 70.83c8.75.42 15.83 7.92 15.83 16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // SURVEILLANCE
  {
    name: "cctv",
    category: "Security",
    tags: ["cctv", "camera", "security", "surveillance", "monitor"],
    description: "Icono de cámara de seguridad CCTV",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M69.79 50h15.13a4.17 4.17 0 0 1 3.73 6.04l-8.48 16.96a4.17 4.17 0 0 1-7.12.56l-8.85-12.38" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M71.27 37.72a4.17 4.17 0 0 1 1.86 5.59l-12.94 25.88a4.17 4.17 0 0 1-5.59 1.86L15.04 51.25c-6.04-2.71-8.71-10.21-5.42-16.29L15.38 23.33c2.71-6.04 10.21-8.71 16.33-5.42z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33 79.17h15.67a8.33 8.33 0 0 0 7.5-4.58L37.5 62.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33 87.5v-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29.17 37.5h.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // VERSION CONTROL
  {
    name: "gitlab",
    category: "Development",
    tags: ["gitlab", "git", "repository", "version", "control"],
    description: "Icono de GitLab",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m91.67 55.38-13.88-41.67a1.75 1.75 0 0 0-.58-.75 1.58 1.58 0 0 0-.92-.46 1.63 1.63 0 0 0-.96.29 1.75 1.75 0 0 0-.58.75l-9.42 27.79H34.67L25.25 13.54a1.75 1.75 0 0 0-.42-.75 1.58 1.58 0 0 0-1.08-.33 1.63 1.63 0 0 0-.96.29 1.75 1.75 0 0 0-.58.75L8.33 55.38a3.08 3.08 0 0 0 1.13 3.46L50 87.5l40.42-28.67a2.96 2.96 0 0 0 1.29-3.46Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // AUDIO
  {
    name: "headphones",
    category: "Audio",
    tags: ["headphones", "audio", "music", "sound", "listen"],
    description: "Icono de auriculares",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 58.33h12.5c4.17 0 8.33 4.17 8.33 8.33v12.5c0 4.17-4.17 8.33-8.33 8.33H20.83c-4.17 0-8.33-4.17-8.33-8.33v-29.17a37.5 37.5 0 0 1 75 0v29.17c0 4.17-4.17 8.33-8.33 8.33h-4.17c-4.17 0-8.33-4.17-8.33-8.33v-12.5c0-4.17 4.17-8.33 8.33-8.33h12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // LIBRARY
  {
    name: "library",
    category: "Education",
    tags: ["library", "books", "education", "knowledge", "collection"],
    description: "Icono de biblioteca",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m66.67 25 16.67 58.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 25v58.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33.33 33.33v50" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.67 16.67v66.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // MICROPHONE
  {
    name: "mic",
    category: "Audio",
    tags: ["microphone", "audio", "record", "voice", "sound"],
    description: "Icono de micrófono",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 79.17v12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M79.17 41.67v8.33a29.17 29.17 0 0 1-58.33 0v-8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="37.5" y="8.33" width="25" height="54.17" rx="12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // MONITORS
  {
    name: "monitor",
    category: "Technology",
    tags: ["monitor", "screen", "display", "computer", "desktop"],
    description: "Icono de monitor",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="83.33" height="58.33" x="8.33" y="12.5" rx="8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="33.33" x2="66.67" y1="87.5" y2="87.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="50" x2="50" y1="70.83" y2="87.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // NETWORK
  {
    name: "network",
    category: "Infrastructure",
    tags: ["network", "connection", "topology", "nodes", "infrastructure"],
    description: "Icono de red de conexiones",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="66.67" y="66.67" width="25" height="25" rx="4.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="8.33" y="66.67" width="25" height="25" rx="4.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="37.5" y="8.33" width="25" height="25" rx="4.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.83 66.67v-12.5c0-2.08 2.08-4.17 4.17-4.17h50c2.08 0 4.17 2.08 4.17 4.17v12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 50V33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // ROCKET
  {
    name: "rocket",
    category: "Travel",
    tags: ["rocket", "launch", "space", "fast", "startup"],
    description: "Icono de cohete",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.75 68.75c-6.25 5.25-8.33 20.83-8.33 20.83s15.58-2.08 20.83-8.33c2.96-3.5 2.92-8.88-.37-12.13a9.08 9.08 0 0 0-12.13-.37z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m50 62.5-12.5-12.5a91.67 91.67 0 0 1 8.33-16.46A53.67 53.67 0 0 1 91.67 8.33c0 11.33-3.25 31.25-25 45.83a93.13 93.13 0 0 1-16.67 8.33z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M37.5 50H16.67s2.29-12.63 8.33-16.67c6.75-4.5 20.83 0 20.83 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 62.5v20.83s12.63-2.29 16.67-8.33c4.5-6.75 0-20.83 0-20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // BUG VARIANTS
  {
    name: "bug-off",
    category: "Development",
    tags: ["bug", "off", "disabled", "debug", "error"],
    description: "Icono de bug desactivado",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M62.5 29.71V25a12.5 12.5 0 0 0-21.42-8.75L33.33 8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.83 16.17 66.67 8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M91.67 54.17h-16.67v-8.33a16.67 16.67 0 0 0-16.67-16.67H53.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M87.4 20.83c0 8.75-6.67 15.83-14.58 16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m8.33 8.33 83.33 83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M32.08 32.08A16.67 16.67 0 0 0 25 45.83v12.5a25 25 0 0 0 46.38 13.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 83.33v-33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 54.17H8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 87.5c0-8.75 7.08-16.25 15.83-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "bug-play",
    category: "Development",
    tags: ["bug", "play", "debug", "run", "test"],
    description: "Icono de bug con play para debugging",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M53.19 89.68a2.08 2.08 0 0 1-3.19-1.77V53.73a2.08 2.08 0 0 1 3.19-1.77L77.66 67.3a4.17 4.17 0 0 1 0 7.07z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.83 16.17 66.67 8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M75 45.83a16.67 16.67 0 0 0-16.67-16.67h-16.67A16.67 16.67 0 0 0 25 45.83v12.5a25.42 25.42 0 0 0 8.33 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M87.4 20.83c0 8.75-6.67 15.83-14.58 16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 87.5c0-8.75 7.08-16.25 15.83-16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 54.17H8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M27.21 37.5C19.17 33.33 12.5 29.58 12.5 20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m33.33 8.33 7.83 7.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M37.5 29.71v-4.17a12.51 12.51 0 1 1 25 0v4.17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // AUDIO VARIANTS
  {
    name: "headphone-off",
    category: "Audio",
    tags: ["headphones", "off", "disabled", "audio", "music"],
    description: "Icono de auriculares desactivados",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.5 58.33h-5.6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M38.03 14.46A37.5 37.5 0 0 1 87.5 50v13.93" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m8.33 8.33 83.33 83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M85.06 85.06A8.33 8.33 0 0 1 79.17 87.5h-4.17c-4.17 0-8.33-4.17-8.33-8.33v-12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 58.33h12.5c4.17 0 8.33 4.17 8.33 8.33v12.5c0 4.17-4.17 8.33-8.33 8.33H20.83c-4.17 0-8.33-4.17-8.33-8.33v-29.17a37.5 37.5 0 0 1 10.98-26.52" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "mic-off",
    category: "Audio",
    tags: ["microphone", "off", "disabled", "audio", "mute"],
    description: "Icono de micrófono desactivado",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8.33" x2="91.67" y1="8.33" y2="91.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M78.71 55.13A29.67 29.67 0 0 0 79.17 50v-8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.83 41.67v8.33a29.17 29.17 0 0 0 50 20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M62.5 39.02V20.83a12.5 12.5 0 0 0-23.67-5.54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M37.5 37.5v12.5a12.5 12.5 0 0 0 21.33 8.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="50" x2="50" y1="79.17" y2="91.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // MONITOR VARIANTS
  {
    name: "monitor-off",
    category: "Technology",
    tags: ["monitor", "off", "disabled", "screen", "display"],
    description: "Icono de monitor desactivado",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M70.83 70.83H16.67c-4.17 0-8.33-4.17-8.33-8.33V20.83c0-6.25 4.17-8.33 4.17-8.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M91.67 62.5V20.83c0-4.17-4.17-8.33-8.33-8.33H37.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33.33 87.5h33.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 70.83v16.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m8.33 8.33 83.33 83.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // MESSAGING VARIANTS
  {
    name: "message-square-code",
    category: "Communication",
    tags: ["message", "code", "programming", "chat", "development"],
    description: "Icono de mensaje con código",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.67 31.25 33.33 41.67l8.33 10.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m58.33 31.25 8.33 10.42-8.33 10.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M87.5 62.5c0 4.17-4.17 8.33-8.33 8.33H29.17l-16.67 16.67V20.83c0-4.17 4.17-8.33 8.33-8.33h58.33c4.17 0 8.33 4.17 8.33 8.33z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "message-circle-code",
    category: "Communication",
    tags: ["message", "code", "programming", "chat", "development"],
    description: "Icono de mensaje circular con código",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.67 39.58 33.33 50l8.33 10.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m58.33 39.58 8.33 10.42-8.33 10.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M32.92 83.33A37.5 37.5 0 1 0 16.67 67.13L8.33 91.67z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },

  // PHONE VARIANTS
  {
    name: "phone-call",
    category: "Communication",
    tags: ["phone", "call", "contact", "communication", "ring"],
    description: "Icono de llamada telefónica",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M54.17 8.33a37.5 37.5 0 0 1 37.5 37.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M54.17 25a20.83 20.83 0 0 1 20.83 20.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M57.65 69.03a4.17 4.17 0 0 0 5.05-1.26l1.48-1.94A8.33 8.33 0 0 1 70.83 62.5h12.5c4.17 0 8.33 4.17 8.33 8.33v12.5c0 4.17-4.17 8.33-8.33 8.33A75 75 0 0 1 8.33 16.67c0-4.17 4.17-8.33 8.33-8.33h12.5c4.17 0 8.33 4.17 8.33 8.33v12.5c0 4.17-4.17 8.33-8.33 8.33l-1.95 1.46a4.17 4.17 0 0 0-1.22 5.13 58.33 58.33 0 0 0 26.63 26.6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "phone-off",
    category: "Communication",
    tags: ["phone", "off", "disabled", "hang-up", "end"],
    description: "Icono de teléfono desactivado",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.08 57.92a58.33 58.33 0 0 0 15.55 11.11 4.17 4.17 0 0 0 5.05-1.26l1.48-1.94A8.33 8.33 0 0 1 70.83 62.5h12.5c4.17 0 8.33 4.17 8.33 8.33v12.5c0 4.17-4.17 8.33-8.33 8.33A75 75 0 0 1 30.17 68.47" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M91.67 8.33 8.33 91.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.83 56.59A75 75 0 0 1 8.33 16.67c0-4.17 4.17-8.33 8.33-8.33h12.5c4.17 0 8.33 4.17 8.33 8.33v12.5c0 4.17-4.17 8.33-8.33 8.33l-1.95 1.46a4.17 4.17 0 0 0-1.22 5.13 58.33 58.33 0 0 0 1.02 1.97" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
];

async function main() {
  console.log("🌱 Comenzando seed EXPANDIDO de la base de datos...");

  // Limpiar datos existentes
  await prisma.icon.deleteMany({});
  console.log("🗑️  Datos existentes eliminados");

  // Detectar y filtrar duplicados (solo conservar el primero)
  const seenNames = new Set<string>();
  const iconsReady = expandedIcons.filter((icon) => {
    if (seenNames.has(icon.name)) {
      console.log(
        `⚠️ Icono duplicado ignorado: "${icon.name}" (${icon.category})`
      );
      return false; // Filtrar este icono duplicado
    } else {
      seenNames.add(icon.name);
      return true; // Conservar este icono (es el primero con este nombre)
    }
  });

  // Contar por categorías
  const categories = {} as Record<string, number>;

  // Insertar iconos expandidos
  for (const icon of iconsReady) {
    await prisma.icon.create({
      data: icon,
    });

    if (icon.category) {
      categories[icon.category] = (categories[icon.category] || 0) + 1;
    }
    console.log(`✅ Icono "${icon.name}" (${icon.category}) creado`);
  }

  console.log(`\n🎉 Seed EXPANDIDO completado!`);
  console.log(`📊 Total: ${iconsReady.length} iconos creados`);
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
