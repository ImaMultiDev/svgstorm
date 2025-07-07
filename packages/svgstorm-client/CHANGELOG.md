# 📦 Changelog - svgstorm-client

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2024-07-05

### Added

- **SVGStormProvider** component for global configuration management.
- **useSVGStormContext** hook to access provider context.
- **Advanced configuration options**: `cacheTime`, `retryAttempts`, `retryDelay`.
- **Automatic retry mechanism** with exponential backoff for failed icon requests.
- **Context integration** - `useIcon` now automatically uses provider settings as fallback.
- **Enhanced TypeScript support** with new interfaces for provider configuration.

### Enhanced

- `useIcon` hook now supports context-based configuration and retry logic.
- Improved error handling with configurable retry attempts.
- Better fallback hierarchy: explicit props → context → defaults.

---

## [1.0.0] - 2024-07-05

### Added

- Initial release of svgstorm-client.
- React component `<Icon />` to dynamically fetch and render SVG icons from the SVGStorm API.
- `useIcon` custom hook with in-memory caching.
- Full TypeScript support.
- Props: `name`, `size`, `color`, `className`, `apiBaseUrl`.
- Supports React 18 and React 19.

---

## 📄 Future versions

Future changes will be listed here with version numbers and dates.

---

## 📌 Notes

This library is part of the SVGStorm ecosystem:

- API: https://api-svgstorm-production.up.railway.app
- Catalog: [svgstorm-web-catalog](https://github.com/imamultidev/svgstorm-web-catalog)
