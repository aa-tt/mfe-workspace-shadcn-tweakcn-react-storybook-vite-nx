#!/bin/bash

# MFE Platform Startup Script
# This ensures NVM is loaded and Node 22 is used

echo "🚀 Starting Nx Micro Frontend Platform with Node 22..."
echo ""

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Check if NVM is available
if ! command -v nvm &> /dev/null; then
    echo "❌ NVM not found. Please ensure NVM is installed and configured."
    echo "Run: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    exit 1
fi

# Use Node 22
echo "Switching to Node 22..."
nvm use 22

# Verify Node version
NODE_VERSION=$(node --version)
echo "✅ Using Node version: $NODE_VERSION"

if [[ ! "$NODE_VERSION" =~ ^v22\. ]]; then
    echo "❌ ERROR: Node version must be 22.x, but found $NODE_VERSION"
    echo "Please run: nvm install 22 && nvm use 22"
    exit 1
fi

# Clear any cached Vite dependencies
echo "Cleaning Vite cache..."
rm -rf node_modules/.vite

# Reinstall dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install --legacy-peer-deps
fi

echo ""
echo "Building all MFE applications..."
echo ""

# Build all MFE apps first (required for Module Federation)
npm run build:mfe

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo ""
echo "✅ Build complete!"
echo ""
echo "Starting all applications in preview mode:"
echo "  📦 Host (Shell)    -> http://localhost:5000"
echo "  🔐 Auth MFE        -> http://localhost:5001"
echo "  📊 Dashboard MFE   -> http://localhost:5002"
echo "  ⚙️  Settings MFE    -> http://localhost:5003"
echo ""
echo "⚠️  NOTE: Module Federation requires preview mode (built assets)"
echo "    Changes to code will NOT hot-reload. Rebuild to see changes."
echo ""
echo "Wait for all apps to start, then open: http://localhost:5000"
echo ""

# Start all apps in preview mode
npm run preview:mfe
