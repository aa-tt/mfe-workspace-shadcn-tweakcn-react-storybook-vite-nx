# ShadCN UI Sample Project - Instructions

## Project Overview
This is a sample React TypeScript project showcasing ShadCN UI components with TweakCN theme customization support.

## Technology Stack
- **React** - Frontend framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (v4 with @tailwindcss/postcss)
- **ShadCN UI** - Component library based on Radix UI
- **TweakCN** - Theme customization tool

## Project Structure
- `src/components/` - React components including ShadCN UI components
- `src/components/ui/` - ShadCN UI components (Button, Card, Input)
- `src/lib/` - Utility functions and helpers
- `tailwind.config.js` - Tailwind CSS configuration (TweakCN compatible)
- `components.json` - ShadCN UI configuration

## Development Guidelines
- Use TypeScript for all new files
- Follow ShadCN UI component patterns
- Customize theme via TweakCN and update `tailwind.config.js`
- Run `npm run dev` to start development server (requires Node.js 20.19+ or 22.12+)
- Run `npm run build` to create production build

## Important Notes
- Node.js 20.19+ or 22.12+ is required (use `nvm use 22` if needed)
- Tailwind CSS v4 uses `@import "tailwindcss"` instead of `@tailwind` directives
- PostCSS configuration uses `@tailwindcss/postcss` plugin
- Path aliases configured: `@/*` → `./src/*`

## Project Status
✅ All setup tasks those were completed successfully:
- [x] Created copilot-instructions.md file
- [x] Scaffolded Vite + React + TypeScript project
- [x] Installed and configured Tailwind CSS
- [x] Initialized ShadCN UI
- [x] Added sample ShadCN components
- [x] Integrated TweakCN theme configuration
- [x] Installed dependencies and compiled
- [x] Created and ran dev task
- [x] Created documentation
