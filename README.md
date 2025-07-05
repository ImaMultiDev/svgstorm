# 🌩️ SVGStorm Monorepo

<div align="center">
  <img src="https://img.shields.io/badge/Railway-Deployed-success?style=for-the-badge&logo=railway&color=0B0D0E" alt="Railway Deployment" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-success?style=for-the-badge&logo=vercel&color=000000" alt="Vercel Deployment" />
  <img src="https://img.shields.io/npm/v/svgstorm-client?style=for-the-badge&logo=npm&color=CB0000" alt="NPM Package" />
  <img src="https://img.shields.io/github/license/imamultidev/svgstorm?style=for-the-badge&color=8b5cf6" alt="License" />
</div>

<div align="center">
  <h3>🚀 Ecosistema completo y profesional para gestionar iconos SVG</h3>
  <p>API REST • Librería React • Catálogo Web Interactivo</p>
</div>

<div align="center">
  <a href="https://svgstorm-api.railway.app">🔗 API Live</a> • 
  <a href="https://svgstorm-web-catalog.vercel.app">🌐 Catálogo Web</a> • 
  <a href="https://www.npmjs.com/package/svgstorm-client">📦 NPM Package</a> • 
  <a href="https://svgstorm-web-catalog.vercel.app/docs">📚 Documentación</a>
</div>

---

## 🎯 **Estado del Proyecto**

### ✅ **Completamente Desplegado**

- **API REST**: 🚀 Railway - `https://svgstorm-api.railway.app`
- **Catálogo Web**: 🌐 Vercel - `https://svgstorm-web-catalog.vercel.app`
- **Librería NPM**: 📦 Publicado - `npm install svgstorm-client`

### 🔄 **Auto-Deploy Configurado**

- **Push to Deploy**: Cada commit despliega automáticamente
- **Preview Deployments**: Cada PR genera preview
- **NPM Releases**: Versionado automático de la librería

**SVGStorm** es un proyecto estructurado en monorepo que incluye:

- Una **API REST** para servir SVGs personalizados desde PostgreSQL
- Un **catálogo web** interactivo para visualizar y documentar los iconos
- Una **librería NPM cliente** para consumir iconos fácilmente en proyectos React

---

## 📁 Estructura del Monorepo

```text
svgstorm/
├── .github/
│   └── workflows/              # CI/CD pipelines automáticos
│       ├── deploy-api.yml      # Railway deployment
│       ├── deploy-web.yml      # Vercel deployment
│       └── publish-client.yml  # NPM publishing
├── apps/
│   ├── api-svgstorm/           # API REST - Next.js (Pages Router)
│   └── svgstorm-web-catalog/   # Catálogo web - Next.js (App Router)
├── packages/
│   └── svgstorm-client/        # Librería NPM cliente (React + TypeScript)
├── package.json                # Configuración global del monorepo
├── turbo.json                  # Configuración Turborepo optimizada
├── DEPLOYMENT.md               # Guía completa de deployment
└── README.md                   # Documentación del proyecto
```

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js 18+** y **pnpm**
- **PostgreSQL** (local con PgAdmin o Railway)

### 1. Clonar el repositorio

```bash
git clone https://github.com/imamultidev/svgstorm.git
cd svgstorm
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Configurar base de datos

#### Entorno Local (recomendado para desarrollo)

Crea `.env.local` en `apps/api-svgstorm/`:

```bash
DATABASE_URL="postgresql://postgres:123456@localhost:5433/svgstorm_db?schema=public"
```

#### Entorno Producción (Railway)

Crea `.env.production` en `apps/api-svgstorm/`:

```bash
DATABASE_URL="postgresql://postgres:mNmEqdXWnFcpnbMEdbtiptAWTYvvEjRQ@postgres.railway.internal:5432/railway"
```

### 4. Configurar Prisma y base de datos

```bash
# Generar cliente Prisma
pnpm db:generate

# Sincronizar esquema con base de datos
pnpm db:push

# Poblar con iconos de ejemplo (opcional)
pnpm --filter api-svgstorm db:seed
```

### 5. Iniciar desarrollo

```bash
# Opción 1: Todos los servicios en paralelo
pnpm dev

# Opción 2: Servicios individuales
pnpm dev:api     # API REST (puerto 3000)
pnpm dev:web     # Catálogo Web (puerto 3001)
pnpm dev:client  # Librería (modo watch)
```

### 6. Explorar el proyecto

- **API REST**: http://localhost:3000/api/icons
- **Catálogo Web**: http://localhost:3001
- **Documentación**: http://localhost:3001/docs

---

## 🌐 **Aplicaciones Live**

### 🔗 **API REST** - Railway

- **URL**: https://svgstorm-api.railway.app
- **Endpoints**:
  - `GET /api/icons` → Lista todos los iconos
  - `GET /api/icons/:name` → Obtiene icono específico
- **Status**: 🟢 Online con auto-deploy

### 🌐 **Catálogo Web** - Vercel

- **URL**: https://svgstorm-web-catalog.vercel.app
- **Características**:
  - Explorador de iconos interactivo
  - Documentación completa
  - Ejemplos de código
- **Status**: 🟢 Online con auto-deploy

### 📦 **Librería NPM** - NPM Registry

- **Package**: `svgstorm-client`
- **Instalación**: `npm install svgstorm-client`
- **Uso**:
  ```tsx
  import { Icon } from "svgstorm-client";
  <Icon name="star" size={24} />;
  ```
- **Status**: 🟢 Publicado y disponible

---

## 📦 Descripción de Proyectos

### 🔧 API SVGStorm (`apps/api-svgstorm`)

API REST profesional construida con Next.js que gestiona iconos SVG usando Prisma y PostgreSQL.

**Endpoints principales:**

- `GET /api/icons` → Lista todos los iconos disponibles
- `GET /api/icons/:name` → Obtiene el SVG de un icono específico

**Características:**

- Modelo de datos optimizado con índices
- Conexión automática por entorno (local/producción)
- Soporte para categorías, tags y descripciones
- API con respuestas estructuradas y manejo de errores

**Tecnologías:**

- Next.js 15 (Pages Router)
- Prisma ORM con PostgreSQL
- TypeScript
- API Routes optimizadas

---

### 📱 Librería Cliente (`packages/svgstorm-client`)

Librería React + TypeScript para integrar iconos SVG de forma sencilla en cualquier aplicación.

**Componente principal:**

```tsx
import { Icon } from "svgstorm-client";

<Icon name="sun" size={24} color="#FFD700" className="rotate-45" />;
```

**Hook avanzado:**

```tsx
import { useIcon } from "svgstorm-client";

const { data, loading, error } = useIcon("moon", {
  apiBaseUrl: "https://svgstorm-api.railway.app",
  cacheTime: 10 * 60 * 1000, // 10 minutos
});
```

**Características:**

- **Caché inteligente** en memoria (5 min por defecto)
- **Soporte completo TypeScript** con interfaces exportadas
- **Props flexibles**: size, color, className, apiBaseUrl
- **Estados de carga** y manejo de errores
- **Sin dependencias pesadas** (solo React)

---

### 🎨 Catálogo Web (`apps/svgstorm-web-catalog`)

Interfaz web moderna para explorar iconos, ver ejemplos y consultar documentación.

**Características principales:**

- 🔍 **Buscador avanzado** por nombre, categoría y tags
- 🖼️ **Grid responsivo** con vista previa de iconos
- 📋 **Modal detallado** con código SVG y ejemplos de uso
- 📚 **Documentación completa** de la librería
- 🎯 **Ejemplos interactivos** con código

**Páginas:**

- `/` → Catálogo principal con buscador
- `/docs` → Documentación completa de la librería

**Tecnologías:**

- Next.js 15 (App Router)
- Tailwind CSS v4 (nueva sintaxis `@import`)
- React con hooks modernos
- TypeScript

---

## 🛠️ Scripts Disponibles

### Scripts principales

```bash
# Desarrollo
pnpm dev              # Inicia todos los proyectos en paralelo
pnpm dev:api          # Solo API REST (puerto 3000)
pnpm dev:web          # Solo catálogo web (puerto 3001)
pnpm dev:client       # Solo librería (modo watch)

# Construcción
pnpm build            # Construye todos los proyectos
pnpm build:api        # Solo API REST
pnpm build:web        # Solo catálogo web
pnpm build:client     # Solo librería cliente

# Producción
pnpm start            # Inicia servicios en modo producción
```

### Scripts de base de datos

```bash
pnpm db:generate      # Genera cliente Prisma
pnpm db:push          # Sincroniza esquema con BD
pnpm db:migrate       # Ejecuta migraciones
pnpm db:studio        # Abre Prisma Studio (GUI)
pnpm --filter api-svgstorm db:seed  # Pobla con datos de ejemplo
```

### Scripts de calidad

```bash
pnpm lint             # ESLint en todos los proyectos
pnpm type-check       # Verificación TypeScript
pnpm clean            # Limpia builds y caches
```

---

## 🗄️ Modelo de Base de Datos

### Esquema Icon

```prisma
model Icon {
  id          Int      @id @default(autoincrement())
  name        String   @unique @db.VarChar(100)      // Nombre único del icono
  category    String?  @db.VarChar(100)              // Categoría opcional
  tags        String[]                               // Array de tags para búsqueda
  svg_code    String   @db.Text                      // Código SVG completo
  description String?  @db.VarChar(255)              // Descripción opcional
  createdAt   DateTime @default(now())               // Fecha de creación
  updatedAt   DateTime @updatedAt                    // Fecha de actualización

  @@index([name])        // Índice para búsquedas por nombre
  @@index([category])    // Índice para filtros por categoría
  @@map("icons")
}
```

### Iconos de Ejemplo Incluidos

El proyecto incluye 10+ iconos de ejemplo en categorías:

- **Weather**: sun, moon
- **Shapes**: star, heart
- **Navigation**: home
- **People**: user
- **Interface**: settings, help
- **Actions**: download, upload

---

## 🌐 Configuración por Entornos

### Desarrollo Local

- **Base de datos**: PostgreSQL local (PgAdmin en puerto 5433)
- **API REST**: http://localhost:3000
- **Catálogo Web**: http://localhost:3001

### Producción

- **Base de datos**: Railway PostgreSQL (conexión privada)
- **API REST**: https://svgstorm-api.railway.app
- **Catálogo Web**: https://svgstorm-web-catalog.vercel.app

---

## 🚀 **Deployment Automático**

### 🔄 **Pipeline CI/CD**

El proyecto tiene **auto-deploy completo** configurado:

#### **API REST** → Railway

- **Trigger**: Push a `main` branch
- **Build**: Automático con Prisma
- **Deploy**: Railway con PostgreSQL
- **URL**: https://svgstorm-api.railway.app

#### **Catálogo Web** → Vercel

- **Trigger**: Push a `main` branch
- **Build**: Next.js optimizado
- **Deploy**: Vercel con CDN global
- **URL**: https://svgstorm-web-catalog.vercel.app

#### **Librería NPM** → NPM Registry

- **Trigger**: Tags de versión
- **Build**: TypeScript compilation
- **Publish**: NPM automático
- **Package**: `svgstorm-client`

### 🎯 **Configuración Completa**

Cada componente está optimizado para producción:

- ✅ **Performance**: Compresión, caching, optimización
- ✅ **Security**: Headers de seguridad, CORS configurado
- ✅ **SEO**: Meta tags, sitemaps, redirects
- ✅ **Monitoring**: Logs, métricas, error tracking

---

## 🧰 Tecnologías y Herramientas

### Arquitectura

- **Monorepo**: Turborepo + pnpm workspaces
- **Package Manager**: pnpm (espacios de trabajo)
- **Build System**: Turborepo con pipelines optimizados

### Frontend

- **Framework**: Next.js 15 (Pages Router + App Router)
- **UI**: React 19 con TypeScript
- **Estilos**: Tailwind CSS v4 (nueva sintaxis)
- **Estado**: React hooks nativos

### Backend

- **API**: Next.js API Routes
- **ORM**: Prisma (con generador de tipos)
- **Base de datos**: PostgreSQL
- **Validación**: TypeScript nativo

### Desarrollo

- **Linting**: ESLint + configuración Next.js
- **Tipos**: TypeScript estricto
- **Git**: Hooks de pre-commit (opcional)

---

## 💡 Casos de Uso

### Para Desarrolladores

```tsx
// Uso básico en cualquier proyecto React
import { Icon } from "svgstorm-client";

function MyComponent() {
  return (
    <button className="flex items-center gap-2">
      <Icon name="download" size={20} />
      Descargar archivo
    </button>
  );
}
```

### Para Equipos de Diseño

- Explorar el catálogo web para ver todos los iconos disponibles
- Buscar por categorías y tags
- Copiar código SVG directo o ejemplos de React
- Documentación visual con ejemplos

### Para Organizaciones

- API centralizada para todos los iconos corporativos
- Versionado y control de cambios con git
- Escalable a miles de iconos
- Cacheo inteligente para rendimiento

---

## 🤝 Contribución

### Flujo de Trabajo

1. **Fork** el proyecto
2. **Crea una rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre un Pull Request**

### Guías de contribución

- Usar **TypeScript** para todo el código
- Seguir convenciones de **nombres de commit**
- Añadir **tests** para nuevas funcionalidades
- Actualizar **documentación** cuando sea necesario

### Automatic Deployment

El sistema automáticamente:

- ✅ Ejecutará tests y linting
- ✅ Creará preview deployments
- ✅ Desplegará en merge a main
- ✅ Actualizará NPM package si hay cambios

---

## 📚 Recursos Adicionales

- [🔗 API Live](https://svgstorm-api.railway.app)
- [🌐 Catálogo Web](https://svgstorm-web-catalog.vercel.app)
- [📦 NPM Package](https://www.npmjs.com/package/svgstorm-client)
- [📚 Documentación](https://svgstorm-web-catalog.vercel.app/docs)
- [🚀 Guía de Deployment](./DEPLOYMENT.md)

### Documentación Técnica

- [Documentación API REST](./apps/api-svgstorm/README.md)
- [Guía Librería Cliente](./packages/svgstorm-client/README.md)
- [Prisma Docs](https://www.prisma.io/docs)
- [Turborepo Docs](https://turbo.build/repo/docs)
- [Next.js 15 Docs](https://nextjs.org/docs)

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** - ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <h3>🌩️ SVGStorm - Ecosistema Completo de Iconos SVG</h3>
  <p><strong>Desarrollado con ❤️ y las mejores prácticas de desarrollo moderno</strong></p>
  <p>Arquitectura profesional • TypeScript • Escalable • Open Source</p>
  
  <div style="margin-top: 20px;">
    <a href="https://github.com/imamultidev/svgstorm">⭐ Star en GitHub</a> • 
    <a href="https://svgstorm-web-catalog.vercel.app">🌐 Demo Live</a> • 
    <a href="https://www.npmjs.com/package/svgstorm-client">📦 NPM Package</a>
  </div>
</div>
