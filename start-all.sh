#!/bin/bash

echo "🚀 Starting Nx Micro Frontend Platform..."
echo ""
echo "Starting all applications in parallel:"
echo "  📦 Host (Shell)    -> http://localhost:5000"
echo "  🔐 Auth MFE        -> http://localhost:5001"
echo "  📊 Dashboard MFE   -> http://localhost:5002"
echo "  ⚙️  Settings MFE    -> http://localhost:5003"
echo ""
echo "Wait for all apps to start, then open: http://localhost:5000"
echo ""

npm run dev
