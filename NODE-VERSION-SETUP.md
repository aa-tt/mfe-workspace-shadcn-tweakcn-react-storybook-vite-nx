# Node.js Version Setup

## Issue
This project uses **Vite 7** which requires **Node.js 22+**. Your current version is Node 18.20.8.

## Solution Options

### Option A: Install NVM and Switch to Node 22 (Recommended)

1. **Install NVM** (Node Version Manager):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

2. **Reload your shell**:
```bash
source ~/.zshrc
```

3. **Install and use Node 22**:
```bash
nvm install 22
nvm use 22
```

4. **The project has `.nvmrc` file**, so in the future just run:
```bash
nvm use
npm run dev
```

---

### Option B: Use Conda to Install Node 22

Since you're using conda (base environment):

```bash
conda install -c conda-forge nodejs=22
```

Then:
```bash
npm run dev
```

---

### Option C: Install fnm (Fast Node Manager) - Simpler Alternative

1. **Install fnm**:
```bash
brew install fnm
```

2. **Add to your shell** (add to `~/.zshrc`):
```bash
eval "$(fnm env --use-on-cd)"
```

3. **Reload and use**:
```bash
source ~/.zshrc
fnm install 22
fnm use 22
npm run dev
```

---

### Option D: Downgrade Vite to v5 (Keep Node 18)

If you prefer to stay on Node 18:

```bash
npm install vite@^5.4.11 @vitejs/plugin-react@^4.3.1 --legacy-peer-deps
npm run dev
```

---

## Quick Start After Node 22 is Installed

```bash
cd /Users/ananindy/aa/sampleshadcn
npm run dev
```

Visit: **http://localhost:5000** 🚀

---

## Recommended: Option A (NVM) or Option B (Conda)

Choose whichever fits your workflow better!
