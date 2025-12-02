# 🚀 Quick Reference Card

## Start Development
```bash
npm run dev
```
Opens: http://localhost:5000

## Project Ports
- 5000 → Host (Shell)
- 5001 → Auth MFE
- 5002 → Dashboard MFE  
- 5003 → Settings MFE

## Nx Commands
```bash
nx graph                    # Visualize dependencies
nx affected --target=build  # Build only changed
nx reset                    # Clear cache
```

## File Locations
- **Apps**: `apps/host`, `apps/auth`, `apps/dashboard`, `apps/settings`
- **Shared UI**: `libs/shared-ui/src/`
- **Components**: `libs/shared-ui/src/components/ui/`

## Import Shared Components
```tsx
import { Button, Card, Input } from '@mfe-workspace/shared-ui';
import '@mfe-workspace/shared-ui/styles';
```

## Add New MFE
1. Copy `apps/auth/` structure
2. Update port in `vite.config.ts`
3. Add to `apps/host/vite.config.ts` remotes
4. Add route in `apps/host/src/App.tsx`
5. Update `package.json` scripts

## Build & Deploy
```bash
npm run build               # All apps
npm run build:host          # Host only
```

## Documentation
- `QUICK-START.md` - Get started fast
- `MFE-README.md` - Complete guide
- `ARCHITECTURE.md` - Technical details
- `MIGRATION-COMPLETE.md` - What changed
- `VISUAL-OVERVIEW.txt` - ASCII diagrams

## Troubleshooting
```bash
# Clear everything
rm -rf node_modules package-lock.json .nx
npm install

# Kill port processes
lsof -ti:5000 | xargs kill
```

## Key Features
✅ Micro Frontend Architecture
✅ Module Federation
✅ Nx Build Caching
✅ Shared Component Library
✅ Independent Deployment
✅ Hot Module Replacement

---
**Main Command**: `npm run dev` → http://localhost:5000
