# Camelot Website - Deployment Guide

## Quick Deploy

To update the live site, simply run:

```bash
./deploy.sh
```

This script will:

1. Check for uncommitted changes
2. Optionally commit and push changes
3. Deploy to Vercel production

## Manual Deployment

If you prefer to deploy manually:

```bash
vercel --prod
```

## Live Site

Production URL: Check your Vercel dashboard at https://vercel.com/dashboard

## Auto-Deployments

To enable automatic deployments on every push to `main`:

1. Go to https://vercel.com/dashboard
2. Select the `website_camelot` project
3. Go to Settings → Git
4. Connect your GitHub repository
5. Enable automatic deployments for the `main` branch

Once configured, every push to `main` will automatically deploy to production.

## Environment Variables

If you need to add environment variables:

1. Go to Vercel dashboard
2. Select project → Settings → Environment Variables
3. Add variables for Production, Preview, or Development

## Custom Domain

To add a custom domain (e.g., camelotrestaurantandinn.com):

1. Go to Vercel dashboard
2. Select project → Settings → Domains
3. Add your domain
4. Update DNS records as instructed by Vercel

## Rollback

To rollback to a previous deployment:

1. Go to Vercel dashboard
2. Select project → Deployments
3. Find the deployment you want to restore
4. Click "..." → Promote to Production

## Support

- Vercel Docs: https://vercel.com/docs
- Project Dashboard: https://vercel.com/dashboard
