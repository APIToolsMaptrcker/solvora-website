#!/bin/bash
set -e

echo "🔧 Installing dependencies..."
yarn install

echo "🔨 Building Next.js application..."
yarn build

echo "✅ Build completed successfully!"
