# Nx Micro Frontend Workspace

This is an Nx-powered monorepo with Module Federation for Micro Frontends (MFE).

## 🏗️ Architecture

```
┌─────────────────────────────────────────────┐
│         HOST APP (Port 5000)                │
│       Main Shell / Container                │
│   - Navigation & Routing                    │
│   - Loads Remote MFEs                       │
└─────────────────────────────────────────────┘
         │           │           │
   ┌─────┘           │           └─────┐
   │                 │                 │
┌──▼──────┐    ┌────▼────┐    ┌──────▼──┐
│  AUTH   │    │DASHBOARD│    │SETTINGS │
│ Port    │    │ Port    │    │ Port    │
│ 5001    │    │ 5002    │    │ 5003    │
└─────────┘    └─────────┘    └─────────┘
   │                 │                 │
   └─────────────────┼─────────────────┘
                     │
          ┌──────────▼──────────┐
          │   SHARED-UI LIB     │
          │  ShadCN Components  │
          │  Tailwind Theme     │
          │  Utilities          │
          └─────────────────────┘
```

## 📁 Project Structure

```
sampleshadcn/
├── apps/
│   ├── host/              # Shell application (Port 5000)
│   ├── auth/              # Authentication MFE (Port 5001)
│   ├── dashboard/         # Dashboard MFE (Port 5002)
│   └── settings/          # Settings MFE (Port 5003)
├── libs/
│   └── shared-ui/         # Shared ShadCN UI components
├── nx.json                # Nx workspace configuration
└── package.json           # Root dependencies
```

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run All Apps in Development

```bash
npm run dev
```

This starts all 4 applications in parallel:
- **Host**: http://localhost:5000
- **Auth**: http://localhost:5001
- **Dashboard**: http://localhost:5002
- **Settings**: http://localhost:5003

### Run Individual Apps

```bash
npm run dev:host       # Shell only
npm run dev:auth       # Auth MFE only
npm run dev:dashboard  # Dashboard MFE only
npm run dev:settings   # Settings MFE only
```

## 🔧 Key Technologies

- **Nx**: Monorepo management & build orchestration
- **Vite**: Fast build tool & dev server
- **Module Federation**: Runtime code sharing between MFEs
- **React 19**: UI library
- **TypeScript**: Type safety
- **ShadCN UI**: Component library
- **Tailwind CSS**: Styling
- **React Router**: Navigation in host

## 📦 Build & Deploy

### Build All Apps

```bash
npm run build
```

### Build Individual Apps

```bash
npm run build:host
npm run build:auth
npm run build:dashboard
npm run build:settings
```

Build outputs go to `dist/apps/{app-name}/`

## 🔍 Nx Features

### View Dependency Graph

```bash
npm run graph
```

### Run Tasks in Parallel

```bash
nx run-many --target=build --all --parallel=4
```

### Affected Commands (CI/CD)

```bash
nx affected --target=build    # Build only changed apps
nx affected --target=test     # Test only affected apps
```

### Cache Management

Nx automatically caches build outputs. Clear cache with:

```bash
nx reset
```

## 🧩 Module Federation

Each MFE exposes its main `App` component via Module Federation:

- **auth** exposes `./App`
- **dashboard** exposes `./App`
- **settings** exposes `./App`

The **host** app consumes these remote modules and lazy loads them on demand.

### Port Configuration

| App       | Port | Role   |
|-----------|------|--------|
| host      | 5000 | Shell  |
| auth      | 5001 | Remote |
| dashboard | 5002 | Remote |
| settings  | 5003 | Remote |

## 🎨 Shared UI Library

All apps consume the `@mfe-workspace/shared-ui` library which includes:

- ShadCN UI components (Button, Card, Input, etc.)
- Tailwind CSS theme
- Utility functions
- Shared types

Import components:

```tsx
import { Button, Card } from '@mfe-workspace/shared-ui';
import '@mfe-workspace/shared-ui/styles';
```

## 📊 Benefits of This Architecture

✅ **Independent Development**: Each MFE can be developed in isolation
✅ **Independent Deployment**: Deploy MFEs separately without redeploying the host
✅ **Technology Flexibility**: Different teams can use different React versions (with care)
✅ **Code Sharing**: Shared UI components via npm workspace
✅ **Build Caching**: Nx caches builds for faster CI/CD
✅ **Scalability**: Easy to add new MFEs
✅ **Team Autonomy**: Different teams own different MFEs

## 🛠️ Development Workflow

1. **Make changes** to any app or library
2. **Nx watches** and rebuilds only affected projects
3. **Module Federation** hot-reloads the changes
4. **Test** in the host app at http://localhost:5000

## 📚 Learn More

- [Nx Documentation](https://nx.dev)
- [Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Vite Plugin Federation](https://github.com/originjs/vite-plugin-federation)
- [ShadCN UI](https://ui.shadcn.com/)

## 🎯 Next Steps

- [ ] Add authentication state management
- [ ] Implement shared routing context
- [ ] Add E2E tests with Cypress/Playwright
- [ ] Set up CI/CD pipeline
- [ ] Add Storybook for shared-ui
- [ ] Implement error boundaries
- [ ] Add performance monitoring
