# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.0] - 2026-04-02

### Added
- **VSL Landing Page**: Implemented a high-fidelity Video Sales Letter page (`/vsl`) for the "Para MAMÁS" segment, featuring Wistia video integration and authentic client testimonials.
- **Scroll-to-Top**: Added a global `ScrollToTop` component to ensure consistent navigation behavior across route transitions.
- **Navigation Dropdown**: Implemented a new dropdown menu for the "Sesiones" item, providing direct access to Pergaminos, Astrología, and Human Design sessions.
- **"Para MAMÁS" Entry Point**: Added a dedicated navigation link directly to the new VSL content.

### Changed
- **Header Refinement**: Reordered navigation menu to optimize the visitor journey (Sobre Mí, Sesiones, Para MAMÁS, Preguntas frecuentes) and increased logo branding size by 33%.
- **Architecture Refactoring**: Lifted `Navbar`, `Footer`, and `BookingModal` to the global `App.tsx` level for centralized layout management and consistent UX across all pages.
- **Global UI Logic**: Optimized `AppContent` to handle conditional layout visibility for specialized landing pages.

## [0.6.0] - 2026-03-01

### Added
- **Astrología Hub**: New Linktree-style entry point for Astrology sessions.
- **Biografía Hub**: New central hub summarizing Andi Universo's pillars.
- **Familia Hub**: New entry point consolidating family-oriented services.
- **Diseño Humano Hub**: New dedicated Linktree-style page for Human Design.
- **Diseño Humano Sesión**: Comprehensive sales and information page for Human Design sessions with FAQ and pricing.
- **Global Components**: Implemented a global `Footer`, a standardized `HubLayout` for Linktree-style pages, `ServiceCards`, and an `AboutAndiUniverso` component.

### Changed
- **Styles**: Refactored `index.css` and `variables.css` for better system-wide layout consistency, responsive spacings, and color tokens.
- **Routing**: Updated `App.tsx` routes to integrate the new Hubs and link paths dynamically.
- **Aesthetic enhancements**: Improved visual hierarchy across sections (e.g., `Hero`, `AnimatedSection`, `ValueProps`, `Pricing`).
