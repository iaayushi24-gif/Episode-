#!/usr/bin/env bash

# ==============================================================================
# Script: Push EPISODE to GitHub for iaayushi24-gif
# ==============================================================================

set -e

cd "$(dirname "$0")"

echo "=========================================================="
echo "⚡ Pushing EPISODE to GitHub (iaayushi24-gif/today-in-episode)..."
echo "=========================================================="

# Ensure remote is set
if ! git remote | grep -q "origin"; then
  git remote add origin https://github.com/iaayushi24-gif/today-in-episode.git
fi

# Ensure all latest files are staged and committed
git add .
if ! git diff --staged --quiet; then
  git commit -m "feat: complete EPISODE brand platform and mobile app"
fi

# Push to main
git branch -M main
git push -u origin main

echo ""
echo "=========================================================="
echo "🎉 Successfully Pushed to GitHub!"
echo "Repository: https://github.com/iaayushi24-gif/today-in-episode"
echo "=========================================================="
