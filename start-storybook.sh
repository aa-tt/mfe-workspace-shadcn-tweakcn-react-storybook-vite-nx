#!/bin/bash

# Storybook Startup Script
# This ensures NVM is loaded and Node 22 is used

echo "📚 Starting Storybook for Shared UI Components..."
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

# Reinstall dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install --legacy-peer-deps
fi

echo ""
echo "Starting Storybook for shared-ui library..."
echo ""
echo "📚 Storybook will open at: http://localhost:6006"
echo ""
echo "Available component stories:"
echo "  🔘 Button (variants, sizes, icons)"
echo "  🎴 Card (layouts, features, pricing)"
echo "  📝 Input (types, labels, icons)"
echo ""

# Start Storybook
npm run storybook
