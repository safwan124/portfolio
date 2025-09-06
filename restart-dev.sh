#!/bin/bash
echo "Stopping any running Vite servers..."
pkill -f "vite" || true
sleep 2
echo "Starting development server on port 5173..."
npm run dev
