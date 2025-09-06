#!/bin/bash
echo "🔄 Restarting development server on port 5173..."
echo "⏹️  Stopping any running Vite servers..."
pkill -f "vite" || true
sleep 2
echo "🚀 Starting development server..."
npm run dev
