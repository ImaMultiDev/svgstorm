import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const expandedIcons = [
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
    name: "package-delivery",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="35" width="50" height="40" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M35 35V25C35 23 37 21 39 21H61C63 21 65 23 65 25V35" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M40 55H60" stroke="currentColor" stroke-width="2"/>
          <path d="M50 50V60" stroke="currentColor" stroke-width="2"/>
        </svg>`,
    category: "E-commerce",
    tags: ["delivery", "shipping", "package", "box", "order"],
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
    name: "secure-payment",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20L35 30V50C35 60 42 68 50 70C58 68 65 60 65 50V30L50 20Z" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M45 45L48 48L55 41" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>`,
    category: "E-commerce",
    tags: ["secure", "payment", "shield", "protection", "safe"],
  },
  {
    name: "price-tag",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 30L30 20H70L80 30V70L70 80H30L20 70V30Z" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M35 35L65 65" stroke="currentColor" stroke-width="2"/>
          <path d="M35 65L65 35" stroke="currentColor" stroke-width="2"/>
          <circle cx="60" cy="40" r="3" fill="currentColor"/>
        </svg>`,
    category: "E-commerce",
    tags: ["price", "tag", "discount", "sale", "offer"],
  },
  {
    name: "order-status",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M40 50L47 57L62 42" stroke="currentColor" stroke-width="2" fill="none"/>
          <circle cx="25" cy="25" r="4" fill="currentColor"/>
          <path d="M30 25H40" stroke="currentColor" stroke-width="2"/>
          <circle cx="75" cy="25" r="4" fill="currentColor"/>
          <path d="M60 25H70" stroke="currentColor" stroke-width="2"/>
        </svg>`,
    category: "E-commerce",
    tags: ["order", "status", "tracking", "progress", "delivery"],
  },
  {
    name: "customer-support",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="40" r="15" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M25 75C25 60 35 50 50 50C65 50 75 60 75 75" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M35 35C35 30 40 25 50 25C60 25 65 30 65 35" stroke="currentColor" stroke-width="2" fill="none"/>
          <circle cx="35" cy="45" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
          <circle cx="65" cy="45" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>`,
    category: "E-commerce",
    tags: ["support", "customer", "service", "help", "assistance"],
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
    name: "return-policy",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 30C40 25 50 25 60 30C70 35 75 45 75 55C75 65 65 75 50 75C35 75 25 65 25 50" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M25 40L25 50L35 50" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M45 50L50 45L55 50" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>`,
    category: "E-commerce",
    tags: ["return", "policy", "refund", "exchange", "guarantee"],
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
    name: "gift-card",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="35" width="60" height="35" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M35 35C35 25 45 25 50 30C55 25 65 25 65 35" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M50 30V70" stroke="currentColor" stroke-width="2"/>
          <rect x="25" y="45" width="15" height="3" fill="currentColor"/>
          <rect x="60" y="45" width="15" height="3" fill="currentColor"/>
        </svg>`,
    category: "E-commerce",
    tags: ["gift", "card", "present", "voucher", "coupon"],
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
  {
    name: "digital-wallet",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="60" height="40" rx="5" stroke="currentColor" stroke-width="2" fill="none"/>
          <rect x="65" y="45" width="8" height="10" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
          <rect x="25" y="40" width="30" height="6" rx="1" fill="currentColor"/>
          <rect x="25" y="55" width="20" height="4" rx="1" fill="currentColor"/>
          <circle cx="45" cy="57" r="2" fill="currentColor"/>
        </svg>`,
    category: "E-commerce",
    tags: ["wallet", "digital", "payment", "money", "finance"],
  },
  {
    name: "checkout-process",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="50" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
          <circle cx="50" cy="50" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
          <circle cx="75" cy="50" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M33 50H42" stroke="currentColor" stroke-width="2"/>
          <path d="M58 50H67" stroke="currentColor" stroke-width="2"/>
          <path d="M21 46L25 50L29 46" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M46 46L50 50L54 46" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>`,
    category: "E-commerce",
    tags: ["checkout", "process", "steps", "flow", "progress"],
  },
  // EDUCATION
  {
    name: "graduation-cap",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 40L50 30L80 40L50 50L20 40Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M20 40V55C20 65 35 70 50 70C65 70 80 65 80 55V40" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M75 42V60L80 65V40" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Education",
    tags: ["graduation", "cap", "education", "school", "achievement"],
  },
  {
    name: "book-open",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 30V75C20 75 30 70 50 70C70 70 80 75 80 75V30C80 30 70 25 50 25C30 25 20 30 20 30Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 25V70" stroke="currentColor" stroke-width="2"/>
      <path d="M25 40H45" stroke="currentColor" stroke-width="2"/>
      <path d="M25 50H45" stroke="currentColor" stroke-width="2"/>
      <path d="M55 40H75" stroke="currentColor" stroke-width="2"/>
      <path d="M55 50H75" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Education",
    tags: ["book", "reading", "education", "study", "knowledge"],
  },
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
    name: "blackboard",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="60" height="40" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 40C35 35 40 40 45 35C50 40 55 35 60 40C65 35 70 40 70 40" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="35" cy="50" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 45L60 55" stroke="currentColor" stroke-width="2"/>
      <path d="M50 55L60 45" stroke="currentColor" stroke-width="2"/>
      <path d="M25 75L75 75" stroke="currentColor" stroke-width="2"/>
      <path d="M30 75L30 80" stroke="currentColor" stroke-width="2"/>
      <path d="M70 75L70 80" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Education",
    tags: ["blackboard", "chalkboard", "teaching", "classroom", "education"],
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
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  {
    name: "library",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="30" width="50" height="50" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M20 25L50 15L80 25" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="30" y="40" width="6" height="30" fill="currentColor"/>
      <rect x="38" y="40" width="6" height="30" fill="currentColor"/>
      <rect x="46" y="40" width="6" height="30" fill="currentColor"/>
      <rect x="54" y="40" width="6" height="30" fill="currentColor"/>
      <rect x="62" y="40" width="6" height="30" fill="currentColor"/>
      <path d="M20 80L80 80" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Education",
    tags: ["library", "books", "reading", "education", "knowledge"],
  },
  {
    name: "certificate",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="25" width="60" height="40" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 35H70" stroke="currentColor" stroke-width="2"/>
      <path d="M30 45H60" stroke="currentColor" stroke-width="2"/>
      <path d="M30 55H55" stroke="currentColor" stroke-width="2"/>
      <circle cx="70" cy="70" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M65 70L68 73L75 66" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M65 80L70 85L75 80" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Education",
    tags: ["certificate", "diploma", "achievement", "graduation", "education"],
  },
  {
    name: "quiz-test",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="50" height="60" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="35" cy="35" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="35" cy="50" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="35" cy="65" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="35" cy="35" r="1" fill="currentColor"/>
      <path d="M45 35H65" stroke="currentColor" stroke-width="2"/>
      <path d="M45 50H65" stroke="currentColor" stroke-width="2"/>
      <path d="M45 65H65" stroke="currentColor" stroke-width="2"/>
      <path d="M30 15L40 20L50 15" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Education",
    tags: ["quiz", "test", "exam", "assessment", "education"],
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
  // EDUCATION
  {
    name: "microscope",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35 25L45 35L55 25" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="40" y="35" width="10" height="20" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="30" y="55" width="30" height="8" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M45 63V70" stroke="currentColor" stroke-width="2"/>
      <path d="M25 75L65 75" stroke="currentColor" stroke-width="2"/>
      <circle cx="45" cy="70" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="52" cy="30" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 20L55 25" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Education",
    tags: ["microscope", "science", "research", "laboratory", "education"],
  },
  {
    name: "globe-world",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="25" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M25 50C25 40 35 30 50 30C65 30 75 40 75 50" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M25 50C25 60 35 70 50 70C65 70 75 60 75 50" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 25V75" stroke="currentColor" stroke-width="2"/>
      <path d="M35 35C40 40 45 45 50 50C55 55 60 60 65 65" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M35 65C40 60 45 55 50 50C55 45 60 40 65 35" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Education",
    tags: ["globe", "world", "geography", "earth", "education"],
  },
  {
    name: "ruler-measure",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="45" width="60" height="10" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M25 45V40" stroke="currentColor" stroke-width="2"/>
      <path d="M35 45V42" stroke="currentColor" stroke-width="2"/>
      <path d="M45 45V40" stroke="currentColor" stroke-width="2"/>
      <path d="M55 45V42" stroke="currentColor" stroke-width="2"/>
      <path d="M65 45V40" stroke="currentColor" stroke-width="2"/>
      <path d="M75 45V42" stroke="currentColor" stroke-width="2"/>
      <path d="M30 55V58" stroke="currentColor" stroke-width="2"/>
      <path d="M40 55V60" stroke="currentColor" stroke-width="2"/>
      <path d="M50 55V58" stroke="currentColor" stroke-width="2"/>
      <path d="M60 55V60" stroke="currentColor" stroke-width="2"/>
      <path d="M70 55V58" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Education",
    tags: ["ruler", "measure", "measurement", "tool", "education"],
  },
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
    name: "pill-medication",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="20" ry="30" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 50H70" stroke="currentColor" stroke-width="2"/>
      <circle cx="40" cy="40" r="3" fill="currentColor"/>
      <circle cx="60" cy="40" r="3" fill="currentColor"/>
      <circle cx="40" cy="60" r="3" fill="currentColor"/>
      <circle cx="60" cy="60" r="3" fill="currentColor"/>
    </svg>`,
    category: "Medical",
    tags: ["pill", "medication", "medicine", "pharmacy", "treatment"],
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
    name: "hospital-building",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="60" height="50" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="45" y="65" width="10" height="15" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="30" y="45" width="8" height="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="62" y="45" width="8" height="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 35V25" stroke="currentColor" stroke-width="2"/>
      <path d="M45 30H55" stroke="currentColor" stroke-width="2"/>
      <path d="M50 20C50 18 52 16 55 16H65C68 16 70 18 70 20V30" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Medical",
    tags: ["hospital", "building", "medical", "healthcare", "facility"],
  },
  {
    name: "doctor-stethoscope",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="30" r="12" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 65C30 55 38 47 50 47C62 47 70 55 70 65V80H30V65Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="40" cy="60" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M40 60C40 65 45 70 50 70C55 70 60 65 60 60" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M35 25C35 20 38 15 50 15C62 15 65 20 65 25" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Medical",
    tags: ["doctor", "physician", "medical", "professional", "healthcare"],
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
    name: "ambulance",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="40" width="55" height="30" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M70 50H80L85 60V70H70V50Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="30" cy="75" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="70" cy="75" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M35 50V45L40 40H60L65 45V50" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 30V35" stroke="currentColor" stroke-width="2"/>
      <path d="M47 32.5H53" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Medical",
    tags: ["ambulance", "emergency", "medical", "vehicle", "rescue"],
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
    name: "blood-test",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="25" width="20" height="50" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="42" y="35" width="16" height="25" fill="currentColor"/>
      <circle cx="50" cy="20" r="3" fill="currentColor"/>
      <path d="M35 30L40 35" stroke="currentColor" stroke-width="2"/>
      <path d="M65 30L60 35" stroke="currentColor" stroke-width="2"/>
      <path d="M30 40H40" stroke="currentColor" stroke-width="2"/>
      <path d="M60 40H70" stroke="currentColor" stroke-width="2"/>
      <path d="M30 50H40" stroke="currentColor" stroke-width="2"/>
      <path d="M60 50H70" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Medical",
    tags: ["blood", "test", "lab", "analysis", "medical"],
  },
  {
    name: "medical-chart",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="60" height="60" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 60L40 50L50 55L60 40L70 45" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="30" cy="60" r="2" fill="currentColor"/>
      <circle cx="40" cy="50" r="2" fill="currentColor"/>
      <circle cx="50" cy="55" r="2" fill="currentColor"/>
      <circle cx="60" cy="40" r="2" fill="currentColor"/>
      <circle cx="70" cy="45" r="2" fill="currentColor"/>
      <path d="M25 30H35" stroke="currentColor" stroke-width="2"/>
      <path d="M30 25V35" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Medical",
    tags: ["chart", "medical", "health", "data", "analysis"],
  },
  {
    name: "bandage",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="40" width="60" height="20" rx="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="35" cy="50" r="2" fill="currentColor"/>
      <circle cx="50" cy="50" r="2" fill="currentColor"/>
      <circle cx="65" cy="50" r="2" fill="currentColor"/>
      <path d="M20 45H25" stroke="currentColor" stroke-width="2"/>
      <path d="M20 55H25" stroke="currentColor" stroke-width="2"/>
      <path d="M75 45H80" stroke="currentColor" stroke-width="2"/>
      <path d="M75 55H80" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Medical",
    tags: ["bandage", "first-aid", "wound", "care", "medical"],
  },
  {
    name: "prescription",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="50" height="60" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M35 30H65" stroke="currentColor" stroke-width="2"/>
      <path d="M35 40H55" stroke="currentColor" stroke-width="2"/>
      <path d="M35 50H60" stroke="currentColor" stroke-width="2"/>
      <path d="M35 60H50" stroke="currentColor" stroke-width="2"/>
      <path d="M35 70H65" stroke="currentColor" stroke-width="2"/>
      <circle cx="60" cy="15" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M60 10V20" stroke="currentColor" stroke-width="2"/>
      <path d="M55 15H65" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Medical",
    tags: ["prescription", "medicine", "doctor", "medical", "treatment"],
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
    name: "like-thumbs-up",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 45V75H20V45H30Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 45H45L50 25C52 20 58 20 60 25V30H75C78 30 80 32 80 35V40C80 42 78 45 75 45H65L70 65C70 68 68 70 65 70H35C32 70 30 68 30 65V45Z" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Social Media",
    tags: ["like", "thumbs", "up", "approve", "positive"],
  },
  {
    name: "share-arrow",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="35" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="75" cy="35" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="50" cy="65" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M32 32L43 43" stroke="currentColor" stroke-width="2"/>
      <path d="M68 32L57 43" stroke="currentColor" stroke-width="2"/>
      <path d="M43 57L32 68" stroke="currentColor" stroke-width="2"/>
      <path d="M57 57L68 68" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Social Media",
    tags: ["share", "network", "connect", "social", "spread"],
  },
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
    name: "notification-bell",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20C40 20 35 25 35 35V50C35 55 30 60 25 60H75C70 60 65 55 65 50V35C65 25 60 20 50 20Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M45 70C45 72 47 75 50 75C53 75 55 72 55 70" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 20V15" stroke="currentColor" stroke-width="2"/>
      <circle cx="65" cy="25" r="5" fill="currentColor"/>
    </svg>`,
    category: "Social Media",
    tags: ["notification", "alert", "bell", "update", "activity"],
  },
  {
    name: "direct-message",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 25L50 50L80 25V70C80 75 75 80 70 80H30C25 80 20 75 20 70V25Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M20 25L80 25" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Social Media",
    tags: ["message", "direct", "private", "mail", "communication"],
  },
  {
    name: "video-call",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="35" width="50" height="30" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M65 40L80 30V70L65 60" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="30" cy="45" r="4" fill="currentColor"/>
      <circle cx="50" cy="45" r="4" fill="currentColor"/>
    </svg>`,
    category: "Social Media",
    tags: ["video", "call", "conference", "meeting", "camera"],
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
  {
    name: "social-network",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="70" cy="30" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="50" cy="70" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="20" cy="70" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="80" cy="70" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M37 35L43 65" stroke="currentColor" stroke-width="2"/>
      <path d="M63 35L57 65" stroke="currentColor" stroke-width="2"/>
      <path d="M26 67L44 67" stroke="currentColor" stroke-width="2"/>
      <path d="M56 67L74 67" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Social Media",
    tags: ["network", "social", "connections", "community", "graph"],
  },
  {
    name: "live-streaming",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="60" height="40" rx="5" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M40 42L55 50L40 58V42Z" fill="currentColor"/>
      <circle cx="25" cy="25" r="3" fill="currentColor"/>
      <circle cx="35" cy="20" r="2" fill="currentColor"/>
      <circle cx="45" cy="18" r="2" fill="currentColor"/>
      <circle cx="75" cy="25" r="3" fill="currentColor"/>
      <circle cx="85" cy="20" r="2" fill="currentColor"/>
      <circle cx="95" cy="18" r="2" fill="currentColor"/>
    </svg>`,
    category: "Social Media",
    tags: ["live", "streaming", "broadcast", "video", "real-time"],
  },
  {
    name: "story-circle",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="25" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="5,3"/>
      <circle cx="50" cy="50" r="18" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="50" cy="45" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M45 60C45 55 47 52 50 52C53 52 55 55 55 60" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 22V30" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    category: "Social Media",
    tags: ["story", "status", "temporary", "circle", "social"],
  },
  {
    name: "repost-retweet",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 35H65V25L80 40L65 55V45H25V35Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M75 65H35V75L20 60L35 45V55H75V65Z" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Social Media",
    tags: ["repost", "retweet", "share", "repeat", "circulate"],
  },
  {
    name: "mention-at",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="50" cy="50" r="15" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M65 45V55C65 65 55 75 50 75C35 75 25 65 25 50C25 35 35 25 50 25C65 25 75 35 75 45" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Social Media",
    tags: ["mention", "at", "tag", "reference", "notify"],
  },
  {
    name: "group-chat",
    svg_code: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="30" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="65" cy="30" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M20 65C20 55 25 45 35 45C45 45 50 55 50 65" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M50 65C50 55 55 45 65 45C75 45 80 55 80 65" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M15 75L25 70H75L85 75V85H15V75Z" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,
    category: "Social Media",
    tags: ["group", "chat", "conversation", "team", "multiple"],
  },

  // SPORTS & FITNESS (15 iconos)
  {
    name: "running",
    category: "Sports & Fitness",
    tags: ["running", "exercise", "fitness", "sport", "activity"],
    description: "Icono de persona corriendo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="4" r="2"/>
  <path d="M10 12V8l3-3 2 2v4"/>
  <path d="M10 12l-2 3 2 2"/>
  <path d="M14 12l2 3-2 2"/>
</svg>`,
  },
  {
    name: "dumbbell",
    category: "Sports & Fitness",
    tags: ["dumbbell", "weights", "gym", "fitness", "strength"],
    description: "Icono de pesas para gimnasio",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14.4 14.4L9.6 9.6"/>
  <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/>
  <path d="M9.879 9.879a3 3 0 1 1-4.243-4.242 3 3 0 0 1 4.243 4.242z"/>
  <path d="M18.121 18.121a3 3 0 1 1-4.242-4.242 3 3 0 0 1 4.242 4.242z"/>
</svg>`,
  },
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
    name: "basketball",
    category: "Sports & Fitness",
    tags: ["basketball", "ball", "sport", "game", "court"],
    description: "Icono de balón de básquetbol",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 2v20"/>
  <path d="M2 12h20"/>
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
</svg>`,
  },
  {
    name: "tennis-racket",
    category: "Sports & Fitness",
    tags: ["tennis", "racket", "sport", "game", "court"],
    description: "Icono de raqueta de tenis",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8" r="6"/>
  <path d="M12 14v8"/>
  <path d="M9 8h6"/>
  <path d="M12 5v6"/>
  <path d="M15 8l1.5-1.5"/>
  <path d="M9 8l-1.5-1.5"/>
</svg>`,
  },
  {
    name: "swimming",
    category: "Sports & Fitness",
    tags: ["swimming", "pool", "water", "sport", "exercise"],
    description: "Icono de natación",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 18s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2"/>
  <path d="M2 22s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2"/>
  <circle cx="8" cy="8" r="3"/>
  <path d="M13 8l3-3 2 2-3 3"/>
</svg>`,
  },
  {
    name: "cycling",
    category: "Sports & Fitness",
    tags: ["cycling", "bike", "bicycle", "sport", "exercise"],
    description: "Icono de ciclismo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18.5" cy="17.5" r="3.5"/>
  <circle cx="5.5" cy="17.5" r="3.5"/>
  <circle cx="15" cy="5" r="1"/>
  <path d="M12 17.5L15 5h-3L9 17.5"/>
  <path d="M17 9l-2 8"/>
</svg>`,
  },
  {
    name: "yoga",
    category: "Sports & Fitness",
    tags: ["yoga", "meditation", "fitness", "exercise", "wellness"],
    description: "Icono de yoga y meditación",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="6" r="2"/>
  <path d="M12 8v8"/>
  <path d="M8 12h8"/>
  <path d="M8 16l4-4 4 4"/>
  <path d="M6 20h12"/>
</svg>`,
  },
  {
    name: "boxing-glove",
    category: "Sports & Fitness",
    tags: ["boxing", "glove", "sport", "fight", "combat"],
    description: "Icono de guante de boxeo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 2v4l1.5 1.5L12 6l2.5 1.5L16 6V2"/>
  <path d="M6 8v8c0 2 1 3 3 3h6c2 0 3-1 3-3V8"/>
  <path d="M6 8h12"/>
  <path d="M10 12h4"/>
</svg>`,
  },
  {
    name: "golf",
    category: "Sports & Fitness",
    tags: ["golf", "club", "sport", "game", "course"],
    description: "Icono de golf",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2v20"/>
  <path d="M8 22h8"/>
  <path d="M12 15l-4-4 4-4v8z"/>
  <circle cx="12" cy="19" r="1"/>
</svg>`,
  },
  {
    name: "trophy",
    category: "Sports & Fitness",
    tags: ["trophy", "award", "winner", "champion", "achievement"],
    description: "Icono de trofeo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="8" y1="21" x2="16" y2="21"/>
  <line x1="12" y1="17" x2="12" y2="21"/>
  <path d="M7 4v10a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V4"/>
  <path d="M17 4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/>
  <path d="M7 4H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"/>
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
    name: "fitness-tracker",
    category: "Sports & Fitness",
    tags: ["fitness", "tracker", "watch", "health", "activity"],
    description: "Icono de monitor de fitness",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="6" height="6" rx="2"/>
  <path d="M9 9h6v6H9z"/>
  <path d="M9 1v4"/>
  <path d="M15 1v4"/>
  <path d="M9 19v4"/>
  <path d="M15 19v4"/>
  <path d="M5 9h4"/>
  <path d="M5 15h4"/>
  <path d="M19 9h-4"/>
  <path d="M19 15h-4"/>
</svg>`,
  },
  {
    name: "gym",
    category: "Sports & Fitness",
    tags: ["gym", "fitness", "workout", "exercise", "equipment"],
    description: "Icono de gimnasio",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7.5 7.5L12 12l4.5-4.5"/>
  <path d="M7.5 16.5L12 12l4.5 4.5"/>
  <path d="M2 12h20"/>
  <path d="M12 2v20"/>
  <circle cx="12" cy="12" r="2"/>
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
    name: "hamburger",
    category: "Food & Dining",
    tags: ["hamburger", "burger", "food", "restaurant", "fast-food"],
    description: "Icono de hamburguesa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 12c0-7 4-10 9-10s9 3 9 10"/>
  <path d="M3 12h18"/>
  <path d="M3 12c0 7 4 10 9 10s9-3 9-10"/>
  <circle cx="8" cy="12" r="1"/>
  <circle cx="16" cy="12" r="1"/>
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
    name: "utensils",
    category: "Food & Dining",
    tags: ["utensils", "fork", "knife", "dining", "restaurant"],
    description: "Icono de cubiertos",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
  <path d="M7 2v20"/>
  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z"/>
  <path d="M19 2v20"/>
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
    name: "ice-cream",
    category: "Food & Dining",
    tags: ["ice-cream", "dessert", "sweet", "cold", "summer"],
    description: "Icono de helado",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7 11v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9"/>
  <path d="M12 21V11"/>
  <path d="M8 7a4 4 0 1 1 8 0v4H8V7z"/>
  <circle cx="12" cy="5" r="2"/>
</svg>`,
  },
  {
    name: "bread",
    category: "Food & Dining",
    tags: ["bread", "bakery", "food", "carbs", "breakfast"],
    description: "Icono de pan",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/>
  <path d="M3 12h18"/>
  <path d="M8 8l1 1"/>
  <path d="M15 8l-1 1"/>
  <path d="M12 15v1"/>
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
    name: "carrot",
    category: "Food & Dining",
    tags: ["carrot", "vegetable", "healthy", "food", "organic"],
    description: "Icono de zanahoria",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2.27 21.7s9.87-3.5 12.73-6.36a2 2 0 0 0 0-2.83l-2.49-2.49a2 2 0 0 0-2.83 0C6.82 12.88 2.27 21.7 2.27 21.7z"/>
  <path d="M8.64 14L7.22 12.58"/>
  <path d="M17.5 7.5L22 2"/>
  <path d="M15 2l7 7"/>
  <path d="M16.5 4.5L18 6"/>
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
  {
    name: "restaurant",
    category: "Food & Dining",
    tags: ["restaurant", "dining", "food", "service", "business"],
    description: "Icono de restaurante",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"/>
  <path d="M13 20h-2l-2-6V4"/>
  <path d="M5 4L3 6l2 2"/>
  <path d="M19 4l2 2-2 2"/>
  <path d="M10 9v11"/>
  <path d="M14 9v11"/>
  <path d="M5 19l14 0"/>
</svg>`,
  },

  // TRAVEL & TRANSPORTATION (15 iconos)
  {
    name: "airplane",
    category: "Travel & Transportation",
    tags: ["airplane", "flight", "travel", "aviation", "transport"],
    description: "Icono de avión",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 2-3.5 3.5L11 16l-7.2 1.8c-.5.1-.9.6-.8 1.1s.6.9 1.1.8L12 18z"/>
  <path d="m9 10 2 2 4-4"/>
</svg>`,
  },
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
    name: "train",
    category: "Travel & Transportation",
    tags: ["train", "railway", "transport", "public", "travel"],
    description: "Icono de tren",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <path d="M4 11h16"/>
  <path d="M12 4v16"/>
  <circle cx="8" cy="16" r="1"/>
  <circle cx="16" cy="16" r="1"/>
</svg>`,
  },
  {
    name: "bus",
    category: "Travel & Transportation",
    tags: ["bus", "public", "transport", "travel", "city"],
    description: "Icono de autobús",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 6v6"/>
  <path d="M15 6v6"/>
  <path d="M2 12h19.6"/>
  <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2L21 10"/>
  <path d="M5 18H2s-.5-1.7-.8-2.8c-.1-.4-.2-.8-.2-1.2 0-.4.1-.8.2-1.2L2 10"/>
  <circle cx="7" cy="18" r="2"/>
  <circle cx="17" cy="18" r="2"/>
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
    name: "bicycle",
    category: "Travel & Transportation",
    tags: ["bicycle", "bike", "transport", "eco", "exercise"],
    description: "Icono de bicicleta",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18.5" cy="17.5" r="3.5"/>
  <circle cx="5.5" cy="17.5" r="3.5"/>
  <circle cx="15" cy="5" r="1"/>
  <path d="M12 17.5L15 5h-3L9 17.5"/>
  <path d="M17 9l-2 8"/>
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
    name: "helicopter",
    category: "Travel & Transportation",
    tags: ["helicopter", "aviation", "aircraft", "flight", "emergency"],
    description: "Icono de helicóptero",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 10h12"/>
  <path d="M3 14h9"/>
  <path d="M13 4h8"/>
  <path d="M13 8h5"/>
  <path d="M16 4v4"/>
  <path d="M11 10v6"/>
  <path d="M5 16v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"/>
</svg>`,
  },
  {
    name: "motorcycle",
    category: "Travel & Transportation",
    tags: ["motorcycle", "bike", "transport", "speed", "vehicle"],
    description: "Icono de motocicleta",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="17" cy="18" r="3"/>
  <circle cx="7" cy="18" r="3"/>
  <path d="M5 18H2l1-5 2-2h10"/>
  <path d="M12 8l-2 2h8"/>
  <path d="M16 8h2l1 3"/>
  <path d="M12 8V5l2-2"/>
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
  {
    name: "passport",
    category: "Travel & Transportation",
    tags: ["passport", "travel", "document", "identification", "international"],
    description: "Icono de pasaporte",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
  <circle cx="12" cy="8" r="3"/>
  <path d="M8 14h8"/>
  <path d="M9 18h6"/>
</svg>`,
  },
  {
    name: "hotel",
    category: "Travel & Transportation",
    tags: ["hotel", "accommodation", "travel", "lodging", "building"],
    description: "Icono de hotel",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 22v-6.57a2 2 0 0 1 .76-1.57l6.48-5.18a2 2 0 0 1 2.52 0l1.48 1.18a2 2 0 0 1 .76 1.57V22"/>
  <path d="M9 9a3 3 0 1 1 6 0"/>
  <path d="M12 12v3"/>
  <path d="M9 21v-7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v7"/>
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
    name: "shield-check",
    category: "Security",
    tags: ["shield", "check", "verified", "security", "protected"],
    description: "Icono de escudo con verificación",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
  <path d="M9 12l2 2 4-4"/>
</svg>`,
  },
  {
    name: "fingerprint",
    category: "Security",
    tags: [
      "fingerprint",
      "biometric",
      "security",
      "identity",
      "authentication",
    ],
    description: "Icono de huella digital",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/>
  <path d="M5 19.5C5 17 7 15 9.5 15s4.5 2 4.5 4.5"/>
  <path d="M8 22a4 4 0 0 1 0-8 4 4 0 0 1 0 8"/>
  <path d="M12 22V12"/>
  <path d="M16 22v-4"/>
  <path d="M20 22v-8"/>
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
    name: "film",
    category: "Entertainment",
    tags: ["film", "movie", "cinema", "entertainment", "video"],
    description: "Icono de película",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="3" width="20" height="18" rx="2" ry="2"/>
  <line x1="7" y1="3" x2="7" y2="21"/>
  <line x1="17" y1="3" x2="17" y2="21"/>
  <line x1="2" y1="9" x2="22" y2="9"/>
  <line x1="2" y1="15" x2="7" y2="15"/>
  <line x1="17" y1="15" x2="22" y2="15"/>
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
    name: "wrench",
    category: "Tools & Utilities",
    tags: ["wrench", "tool", "repair", "fix", "maintenance"],
    description: "Icono de llave inglesa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
</svg>`,
  },
  {
    name: "hammer",
    category: "Tools & Utilities",
    tags: ["hammer", "tool", "build", "construction", "repair"],
    description: "Icono de martillo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L12 9"/>
  <path d="M17.64 15L22 10.64"/>
  <path d="M20.91 11.7l-1.25-1.25L22 8l-1-1-2.45 2.45L17.3 8.2"/>
</svg>`,
  },
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
    name: "ruler",
    category: "Tools & Utilities",
    tags: ["ruler", "measure", "tool", "utility", "length"],
    description: "Icono de regla",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 0 2.12l.37.38a1.5 1.5 0 0 0 2.12 0L17 9.5"/>
  <path d="M16 2l6 6"/>
  <path d="M8 8l-2 2"/>
  <path d="M10 6l-2 2"/>
  <path d="M12 4l-2 2"/>
  <path d="M20 12l2 2"/>
  <path d="M18 14l2 2"/>
  <path d="M16 16l2 2"/>
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
    name: "magnifying-glass",
    category: "Tools & Utilities",
    tags: ["search", "magnify", "tool", "utility", "find"],
    description: "Icono de lupa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"/>
  <path d="M21 21l-4.35-4.35"/>
</svg>`,
  },
  {
    name: "clipboard",
    category: "Tools & Utilities",
    tags: ["clipboard", "copy", "paste", "utility", "document"],
    description: "Icono de portapapeles",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
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
    name: "sunshine",
    category: "Nature & Environment",
    tags: ["sunshine", "nature", "environment", "weather", "bright"],
    description: "Icono de sol brillante",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
</svg>`,
  },
  {
    name: "mountain",
    category: "Nature & Environment",
    tags: ["mountain", "nature", "environment", "landscape", "peak"],
    description: "Icono de montaña",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 21l4-7 4 7"/>
  <path d="M2 21h20"/>
  <path d="M15 10l-2-5-2 5"/>
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
    name: "recycle",
    category: "Nature & Environment",
    tags: ["recycle", "environment", "eco", "sustainability", "green"],
    description: "Icono de reciclaje",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/>
  <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/>
  <path d="M14 16l-3 3 3 3"/>
  <path d="M8.293 13.596L7.196 9.5 3.1 10.598"/>
  <path d="M9.344 5.811L11.898 9.5 14.482 8.562"/>
  <path d="M15.707 13.596L14.482 8.562 18.655 7.409"/>
  <path d="M13.188 2.188L14.482 8.562 11.898 9.5"/>
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
    name: "bank",
    category: "Finance & Banking",
    tags: ["bank", "banking", "finance", "building", "money"],
    description: "Icono de banco",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="21" x2="21" y2="21"/>
  <line x1="5" y1="21" x2="5" y2="10"/>
  <line x1="9" y1="21" x2="9" y2="10"/>
  <line x1="15" y1="21" x2="15" y2="10"/>
  <line x1="19" y1="21" x2="19" y2="10"/>
  <polyline points="2,10 12,2 22,10"/>
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
    name: "coins",
    category: "Finance & Banking",
    tags: ["coins", "money", "finance", "banking", "currency"],
    description: "Icono de monedas",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="8" cy="8" r="6"/>
  <path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
  <circle cx="8" cy="8" r="2"/>
  <circle cx="16" cy="16" r="2"/>
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
  {
    name: "safe",
    category: "Finance & Banking",
    tags: ["safe", "security", "finance", "banking", "vault"],
    description: "Icono de caja fuerte",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <circle cx="12" cy="12" r="5"/>
  <circle cx="12" cy="12" r="2"/>
  <path d="M12 7v5l3 3"/>
</svg>`,
  },
  {
    name: "bitcoin",
    category: "Finance & Banking",
    tags: ["bitcoin", "cryptocurrency", "finance", "banking", "crypto"],
    description: "Icono de Bitcoin",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M9.5 8h2.5c1.11 0 2 .89 2 2s-.89 2-2 2h-2.5"/>
  <path d="M9.5 12h3c1.11 0 2 .89 2 2s-.89 2-2 2h-3"/>
  <line x1="12" y1="6" x2="12" y2="8"/>
  <line x1="12" y1="16" x2="12" y2="18"/>
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
    name: "office-building",
    category: "Home & Real Estate",
    tags: ["office", "building", "real estate", "business", "commercial"],
    description: "Icono de edificio de oficinas",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <rect x="7" y="7" width="2" height="2"/>
  <rect x="11" y="7" width="2" height="2"/>
  <rect x="15" y="7" width="2" height="2"/>
  <rect x="7" y="11" width="2" height="2"/>
  <rect x="11" y="11" width="2" height="2"/>
  <rect x="15" y="11" width="2" height="2"/>
  <rect x="7" y="15" width="2" height="2"/>
  <rect x="11" y="15" width="2" height="2"/>
  <rect x="15" y="15" width="2" height="2"/>
</svg>`,
  },
  {
    name: "key-house",
    category: "Home & Real Estate",
    tags: ["key", "house", "real estate", "property", "access"],
    description: "Icono de llave de casa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="7" cy="7" r="3"/>
  <path d="M10 9l11 11"/>
  <path d="M15 15l-2-2"/>
  <path d="M18 18l-2-2"/>
  <path d="M20 20l-2-2"/>
</svg>`,
  },
  {
    name: "garage",
    category: "Home & Real Estate",
    tags: ["garage", "home", "real estate", "property", "storage"],
    description: "Icono de garaje",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 20h20"/>
  <path d="M4 20V10l8-6 8 6v10"/>
  <path d="M6 20v-8h12v8"/>
  <path d="M10 20v-4h4v4"/>
</svg>`,
  },
  {
    name: "garden",
    category: "Home & Real Estate",
    tags: ["garden", "home", "real estate", "outdoor", "landscaping"],
    description: "Icono de jardín",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3z"/>
  <path d="M19 13v-1a7 7 0 0 0-14 0v1"/>
  <path d="M5 13h14"/>
  <path d="M12 8v5"/>
  <path d="M8 18s0 2 4 2 4-2 4-2"/>
  <path d="M2 22h20"/>
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
  {
    name: "balcony",
    category: "Home & Real Estate",
    tags: ["balcony", "home", "real estate", "property", "outdoor"],
    description: "Icono de balcón",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="8" width="18" height="12" rx="2"/>
  <path d="M7 8V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/>
  <line x1="6" y1="12" x2="6" y2="16"/>
  <line x1="10" y1="12" x2="10" y2="16"/>
  <line x1="14" y1="12" x2="14" y2="16"/>
  <line x1="18" y1="12" x2="18" y2="16"/>
</svg>`,
  },
  {
    name: "chimney",
    category: "Home & Real Estate",
    tags: ["chimney", "home", "real estate", "property", "fireplace"],
    description: "Icono de chimenea",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="8" y="2" width="8" height="6" rx="1"/>
  <rect x="6" y="6" width="12" height="16" rx="2"/>
  <path d="M10 14h4"/>
  <path d="M10 18h4"/>
  <path d="M14 10h2"/>
  <path d="M8 10h2"/>
</svg>`,
  },
  {
    name: "elevator",
    category: "Home & Real Estate",
    tags: ["elevator", "lift", "building", "real estate", "accessibility"],
    description: "Icono de ascensor",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="2" width="16" height="20" rx="2"/>
  <path d="M8 6l4-3 4 3"/>
  <path d="M8 14l4 3 4-3"/>
  <line x1="12" y1="10" x2="12" y2="10"/>
</svg>`,
  },
  {
    name: "doorbell",
    category: "Home & Real Estate",
    tags: ["doorbell", "home", "real estate", "property", "entrance"],
    description: "Icono de timbre",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="3"/>
  <path d="M12 1v6"/>
  <path d="M12 17v6"/>
  <path d="M4.22 4.22l1.42 1.42"/>
  <path d="M18.36 18.36l1.42 1.42"/>
  <path d="M1 12h6"/>
  <path d="M17 12h6"/>
  <path d="M4.22 19.78l1.42-1.42"/>
  <path d="M18.36 5.64l1.42-1.42"/>
</svg>`,
  },

  // HOBBIES & LEISURE (10 iconos)
  {
    name: "paintbrush",
    category: "Hobbies & Leisure",
    tags: ["paintbrush", "art", "hobby", "painting", "creative"],
    description: "Icono de pincel",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18.37 2.63l3 3a2.12 2.12 0 0 1 0 3L7.5 22.5a2.12 2.12 0 0 1-3 0l-3-3a2.12 2.12 0 0 1 0-3L15.37 2.63a2.12 2.12 0 0 1 3 0z"/>
  <path d="M9 15L4.5 19.5"/>
  <path d="M14.5 4L20 9.5"/>
</svg>`,
  },
  {
    name: "guitar-acoustic",
    category: "Hobbies & Leisure",
    tags: ["guitar", "music", "hobby", "instrument", "acoustic"],
    description: "Icono de guitarra acústica",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="13" r="4"/>
  <path d="M12 9V2"/>
  <path d="M8 21l1.5-1.5"/>
  <path d="M16 21l-1.5-1.5"/>
  <path d="M9 9h6"/>
  <path d="M10 13h4"/>
  <circle cx="12" cy="13" r="1"/>
</svg>`,
  },
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
    name: "chess-board",
    category: "Hobbies & Leisure",
    tags: ["chess", "board", "game", "hobby", "strategy"],
    description: "Icono de tablero de ajedrez",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <path d="M7 3v18"/>
  <path d="M11 3v18"/>
  <path d="M15 3v18"/>
  <path d="M19 3v18"/>
  <path d="M3 7h18"/>
  <path d="M3 11h18"/>
  <path d="M3 15h18"/>
  <path d="M3 19h18"/>
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
    name: "knitting",
    category: "Hobbies & Leisure",
    tags: ["knitting", "yarn", "hobby", "crafts", "needles"],
    description: "Icono de tejido",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 12h18"/>
  <path d="M3 6h18"/>
  <path d="M3 18h18"/>
  <circle cx="7" cy="12" r="1"/>
  <circle cx="12" cy="12" r="1"/>
  <circle cx="17" cy="12" r="1"/>
  <path d="M2 3l20 18"/>
</svg>`,
  },
  {
    name: "puzzle-piece",
    category: "Hobbies & Leisure",
    tags: ["puzzle", "piece", "hobby", "game", "leisure"],
    description: "Icono de pieza de puzzle",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h6v4c0 1 1 2 2 2s2-1 2-2V4h6v6h-4c-1 0-2 1-2 2s1 2 2 2h4v6h-6v-4c0-1-1-2-2-2s-2 1-2 2v4H4V4z"/>
</svg>`,
  },
  {
    name: "gardening-hobby",
    category: "Hobbies & Leisure",
    tags: ["gardening", "hobby", "plants", "leisure", "outdoor"],
    description: "Icono de jardinería como hobby",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 2v4"/>
  <path d="M16 2v4"/>
  <path d="M21 6H3"/>
  <path d="M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6"/>
  <path d="M12 11v6"/>
  <path d="M8 14l4-3 4 3"/>
</svg>`,
  },
  {
    name: "collectibles",
    category: "Hobbies & Leisure",
    tags: ["collectibles", "hobby", "collection", "antiques", "leisure"],
    description: "Icono de coleccionables",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8" r="6"/>
  <path d="M15.477 12.89l3.515 3.61a2 2 0 0 1 0 2.8l-.751.751a2 2 0 0 1-2.8 0L12 16.51"/>
  <path d="M8.523 12.89l-3.515 3.61a2 2 0 0 0 0 2.8l.751.751a2 2 0 0 0 2.8 0L12 16.51"/>
  <path d="M12 8v8"/>
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
    name: "test-tube",
    category: "Science & Research",
    tags: ["test tube", "lab", "science", "chemistry", "research"],
    description: "Icono de tubo de ensayo",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14.5 2a.5.5 0 0 1 .5.5v6.5"/>
  <path d="M8.5 2a.5.5 0 0 0-.5.5v6.5"/>
  <path d="M8.5 2h6"/>
  <path d="M9 9l6 11a2 2 0 0 1-2 3H11a2 2 0 0 1-2-3l6-11"/>
  <circle cx="12" cy="16" r="1"/>
</svg>`,
  },
  {
    name: "dna-helix",
    category: "Science & Research",
    tags: ["dna", "helix", "genetics", "biology", "science"],
    description: "Icono de hélice de ADN",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 2c3 0 5 2 5 5v10c0 3-2 5-5 5"/>
  <path d="M16 2c-3 0-5 2-5 5v10c0 3 2 5 5 5"/>
  <path d="M8 7h8"/>
  <path d="M8 12h8"/>
  <path d="M8 17h8"/>
</svg>`,
  },
  {
    name: "atom-molecule",
    category: "Science & Research",
    tags: ["atom", "molecule", "chemistry", "physics", "science"],
    description: "Icono de átomo y molécula",
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
    name: "telescope",
    category: "Science & Research",
    tags: ["telescope", "astronomy", "science", "research", "space"],
    description: "Icono de telescopio",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 10l11-11"/>
  <path d="M21 3l-6.5 6.5"/>
  <path d="M12 12l-6.5 6.5"/>
  <path d="M9 7.5l-7 7"/>
  <path d="M2 22l7-7"/>
  <circle cx="12" cy="12" r="2"/>
</svg>`,
  },
  {
    name: "lab-experiment",
    category: "Science & Research",
    tags: ["experiment", "lab", "science", "research", "chemistry"],
    description: "Icono de experimento de laboratorio",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="3" width="20" height="14" rx="2"/>
  <path d="M8 21l1-6"/>
  <path d="M16 21l-1-6"/>
  <path d="M12 17h.01"/>
  <path d="M12 13h.01"/>
  <path d="M12 9h.01"/>
  <path d="M2 9h20"/>
</svg>`,
  },
  {
    name: "petri-dish",
    category: "Science & Research",
    tags: ["petri dish", "biology", "microbiology", "research", "lab"],
    description: "Icono de placa de petri",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="6"/>
  <circle cx="9" cy="9" r="1"/>
  <circle cx="15" cy="9" r="1"/>
  <circle cx="10" cy="15" r="1"/>
  <circle cx="14" cy="15" r="1"/>
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
  {
    name: "research-data",
    category: "Science & Research",
    tags: ["research", "data", "analysis", "science", "statistics"],
    description: "Icono de datos de investigación",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 3v18h18"/>
  <path d="M18 20l-6-6-4 4-4-4"/>
  <circle cx="8" cy="8" r="2"/>
  <circle cx="12" cy="12" r="2"/>
  <circle cx="16" cy="8" r="2"/>
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
    name: "soccer-ball",
    category: "Sports & Fitness",
    tags: ["football", "soccer", "ball", "sport", "game"],
    description: "Pelota de fútbol",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 2l-2 6-6 2 6 2 2 6 2-6 6-2-6-2-2-6z"/>
  <path d="M8 8l8 8"/>
  <path d="M16 8l-8 8"/>
</svg>`,
  },
  {
    name: "basketball",
    category: "Sports & Fitness",
    tags: ["basketball", "ball", "sport", "game", "hoop"],
    description: "Pelota de baloncesto",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 2v20"/>
  <path d="M2 12h20"/>
  <path d="M4.93 4.93c4.24 4.24 11.9 4.24 16.14 0"/>
  <path d="M4.93 19.07c4.24-4.24 11.9-4.24 16.14 0"/>
</svg>`,
  },
  {
    name: "tennis-racket",
    category: "Sports & Fitness",
    tags: ["tennis", "racket", "sport", "game", "equipment"],
    description: "Raqueta de tenis",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <ellipse cx="12" cy="8" rx="6" ry="8"/>
  <path d="M12 16v6"/>
  <path d="M6 8h12"/>
  <path d="M8 6v4"/>
  <path d="M10 6v4"/>
  <path d="M12 6v4"/>
  <path d="M14 6v4"/>
  <path d="M16 6v4"/>
</svg>`,
  },
  {
    name: "dumbbell",
    category: "Sports & Fitness",
    tags: ["dumbbell", "weight", "fitness", "gym", "exercise"],
    description: "Mancuerna",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 12L6 9v6l3-3m6 0l3-3v6l-3-3"/>
  <rect x="6" y="10" width="12" height="4" rx="1"/>
  <rect x="2" y="8" width="4" height="8" rx="1"/>
  <rect x="18" y="8" width="4" height="8" rx="1"/>
</svg>`,
  },
  {
    name: "running-shoe",
    category: "Sports & Fitness",
    tags: ["shoe", "running", "fitness", "sport", "exercise"],
    description: "Zapato de correr",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 18h20l-2-4H8l-2-4H4l-2 8z"/>
  <path d="M6 10V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>
  <path d="M8 18v2"/>
  <path d="M12 18v2"/>
  <path d="M16 18v2"/>
</svg>`,
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
    name: "medal",
    category: "Sports & Fitness",
    tags: ["medal", "award", "winner", "achievement", "gold"],
    description: "Medalla",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="15" r="6"/>
  <circle cx="12" cy="15" r="2"/>
  <path d="M12 9V2"/>
  <path d="M8 3l4 6 4-6"/>
  <path d="M6 8l6 1 6-1"/>
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
    name: "whistle",
    category: "Sports & Fitness",
    tags: ["whistle", "referee", "sport", "game", "coach"],
    description: "Silbato",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <ellipse cx="12" cy="12" rx="8" ry="4"/>
  <path d="M12 8v8"/>
  <path d="M8 12h8"/>
  <path d="M20 12l-2-2v4l2-2z"/>
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
  {
    name: "golf-club",
    category: "Sports & Fitness",
    tags: ["golf", "club", "sport", "game", "equipment"],
    description: "Palo de golf",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 3L6 21"/>
  <path d="M18 3l2 2"/>
  <path d="M6 21l-2-2"/>
  <ellipse cx="5" cy="19" rx="2" ry="1"/>
</svg>`,
  },
  {
    name: "gym",
    category: "Sports & Fitness",
    tags: ["gym", "fitness", "exercise", "workout", "equipment"],
    description: "Gimnasio",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7.01 10.01h10"/>
  <path d="M7.01 14.01h10"/>
  <path d="M21 10.01v4"/>
  <path d="M3 10.01v4"/>
  <path d="M7.01 10.01V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4.01"/>
  <path d="M7.01 14.01V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3.99"/>
</svg>`,
  },

  // TRAVEL & TRANSPORTATION (10 iconos)
  {
    name: "airplane",
    category: "Travel & Transportation",
    tags: ["airplane", "plane", "flight", "travel", "aviation"],
    description: "Avión",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4s-2 2-2 2l-3.5 3.5L2 8l-2 2 6.5 2L8 18l2-2z"/>
  <path d="M15 9h6"/>
  <path d="M19 13v6"/>
</svg>`,
  },
  {
    name: "car",
    category: "Travel & Transportation",
    tags: ["car", "vehicle", "auto", "transport", "drive"],
    description: "Coche",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11H8l-5.16 1.86A1 1 0 0 0 2 13.85V16h3"/>
  <circle cx="6.5" cy="16.5" r="2.5"/>
  <circle cx="17.5" cy="16.5" r="2.5"/>
  <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
</svg>`,
  },
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
    name: "ship",
    category: "Travel & Transportation",
    tags: ["ship", "boat", "ocean", "sea", "travel"],
    description: "Barco",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/>
  <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/>
  <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>
  <path d="M12 10v4"/>
  <path d="M12 2v3"/>
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
  {
    name: "passport",
    category: "Travel & Transportation",
    tags: ["passport", "travel", "document", "id", "international"],
    description: "Pasaporte",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
  <path d="M14 2v6h6"/>
  <path d="M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
  <path d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
</svg>`,
  },
  {
    name: "map",
    category: "Travel & Transportation",
    tags: ["map", "navigation", "location", "travel", "direction"],
    description: "Mapa",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
  <path d="M14 2v6h6"/>
  <path d="M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
  <path d="M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
</svg>`,
  },
  {
    name: "compass",
    category: "Travel & Transportation",
    tags: ["compass", "navigation", "direction", "north", "travel"],
    description: "Brújula",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M16.2 7.8L18 2l-5.8 1.8"/>
  <path d="M7.8 16.2L2 18l5.8-1.8"/>
  <path d="M7.8 7.8L2 6l5.8 1.8"/>
  <path d="M16.2 16.2L18 22l-5.8-1.8"/>
</svg>`,
  },
  {
    name: "hotel",
    category: "Travel & Transportation",
    tags: ["hotel", "accommodation", "lodging", "travel", "stay"],
    description: "Hotel",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 22v-6.57a2 2 0 0 0-1.17-1.83l-3.75-1.85A2 2 0 0 1 4 9.93V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5.93a2 2 0 0 1-1.08 1.78l-3.75 1.85A2 2 0 0 0 14 15.43V22"/>
  <path d="M6 6h.01"/>
  <path d="M10 6h.01"/>
  <path d="M14 6h.01"/>
  <path d="M18 6h.01"/>
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
  {
    name: "api",
    category: "Technology",
    tags: ["api", "connection", "link", "interface", "network"],
    description: "Icono de API/conexión",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 3H5a2 2 0 0 0-2 2v3m18-5h-3m3 18v-3m-3-15h3m-18 0h3"/>
  <circle cx="12" cy="12" r="3"/>
  <path d="M12 1v6m0 6v6"/>
  <path d="m5.3 8.7 4.4 4.4m4.6 0 4.4-4.4"/>
  <path d="m19.7 8.7-4.4 4.4m-4.6 0L6.3 8.7"/>
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
    name: "rocket",
    category: "Interface",
    tags: ["rocket", "launch", "start", "boost", "performance"],
    description: "Icono de cohete para primeros pasos",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4.5 16.5c-1.5 1.25-2 5 2-5 0 0 0 0 0 0l7.5-7.5L22 2l-1.5 7.5L13 17s0 0 0 0c-10-4-11.5-1.5-8.5 4.5"/>
  <path d="M9 12l3 3"/>
  <path d="M12 7l1 1"/>
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
    name: "eye",
    category: "Interface",
    tags: ["eye", "view", "see", "preview", "watch"],
    description: "Icono de ojo para visualizar",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
  <circle cx="12" cy="12" r="3"/>
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
    name: "globe",
    category: "Communication",
    tags: ["globe", "world", "earth", "global", "internet"],
    description: "Icono de globo terráqueo/global",
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
];

async function main() {
  console.log("🌱 Comenzando seed EXPANDIDO de la base de datos...");

  // Limpiar datos existentes
  await prisma.icon.deleteMany({});
  console.log("🗑️  Datos existentes eliminados");

  // Detectar duplicados y renombrarlos
  const nameCount: Record<string, number> = {};

  const iconsReady = expandedIcons.map((icon) => {
    if (nameCount[icon.name]) {
      nameCount[icon.name]++;
      const newName = `${icon.name}-${nameCount[icon.name]}`;
      console.log(
        `⚠️ Nombre duplicado: "${icon.name}" renombrado a "${newName}"`
      );
      return { ...icon, name: newName };
    } else {
      nameCount[icon.name] = 1;
      return icon;
    }
  });

  // Contar por categorías
  const categories = {} as Record<string, number>;

  // Insertar iconos expandidos
  for (const icon of iconsReady) {
    await prisma.icon.create({
      data: icon,
    });

    categories[icon.category] = (categories[icon.category] || 0) + 1;
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
