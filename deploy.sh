#!/bin/bash

# Camelot Website Deployment Script
# This script deploys the site to Vercel production

echo "🏰 Camelot Website - Production Deployment"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project directory?"
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes."
    read -p "Do you want to commit them first? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo ""
        read -p "Enter commit message: " commit_msg
        git add -A
        git commit -m "$commit_msg"
        git push
        echo "✅ Changes committed and pushed"
        echo ""
    fi
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel production..."
echo ""
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
