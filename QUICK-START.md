# 🎯 Quick Start Guide

## Run Everything at Once

```bash
npm run dev
```

OR

```bash
./start-all.sh
```

This starts all 4 apps in parallel. Wait for all to start, then visit:
**http://localhost:5000**

## Individual Apps

```bash
npm run dev:host        # Shell only (5000)
npm run dev:auth        # Auth only (5001)
npm run dev:dashboard   # Dashboard only (5002)
npm run dev:settings    # Settings only (5003)
```

## Build

```bash
npm run build           # Build all
npm run build:host      # Build shell
```

## Nx Commands

```bash
nx graph                # View dependency graph
nx run-many --target=build --all
```

For complete documentation, see **MFE-README.md**
