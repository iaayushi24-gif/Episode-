#!/usr/bin/env bash

# ==============================================================================
# Script: Deploy EPISODE Brand & Mobile App to Vercel
# Project: today-in-episode
# ==============================================================================

set -e

# Move to the script's directory (today-in-episode)
cd "$(dirname "$0")"

PROJECT_NAME="${PROJECT_NAME:-today-in-episode}"

echo "=========================================================="
echo "⚡ Deploying EPISODE Atelier to Vercel Production"
echo "Project Name: $PROJECT_NAME"
echo "=========================================================="

# Ensure node & npx are on PATH if installed in user paths
if [ -d "$HOME/.local/bin" ]; then
  export PATH="$HOME/.local/bin:$HOME/.local/node-v20.18.0-darwin-arm64/bin:$PATH"
fi
if [ -d "../.bin/bin" ]; then
  export PATH="$(pwd)/../.bin/bin:$PATH"
fi

# Check for vercel.json
if [ ! -f "vercel.json" ]; then
  echo "❌ Error: vercel.json not found in $(pwd)"
  exit 1
fi

echo "✓ Verified vercel.json and assets..."
echo "🚀 Running Vercel deployment..."
echo ""

# Deploy directly using npx vercel with production flag
npx vercel --prod --yes --name "$PROJECT_NAME"

echo ""
echo "=========================================================="
echo "🎉 EPISODE is LIVE on Vercel!"
echo "Main Website:   https://$PROJECT_NAME.vercel.app"
echo "Mobile App:     https://$PROJECT_NAME.vercel.app/app"
echo "=========================================================="
