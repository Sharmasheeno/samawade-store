# SamwadeStore – Gaming Top-Up & Digital Credits Platform

A modern, high-performance web platform for digital gaming top-ups, game coins, gaming credits, and digital subscriptions tailored for Somali and global gamers.

## Features

- **High-Definition Visuals**: 512x512 official game artwork, 8K 3D gaming hero showcase, and infinite-resolution SVG payment provider logos.
- **Top Games Catalog**: PUBG Mobile, Garena Free Fire, Mobile Legends, eFootball PES, Blood Strike, and Telegram Premium.
- **Local Somali Payment Providers**: EVC Plus (Hormuud), Jeeb, Dahabshiil, Somtel, Sahal (Golis), and eDahab.
- **Dedicated eFootball Portal**: Real-time coin selection, starter player packs, interactive payment drawer, and Konami account verification.
- **Responsive & Animated**: Smooth framer-like micro-interactions, responsive drawer navigation, and light/dark themed modals.
- **Container Ready**: Production multi-stage `Dockerfile` and `nginx.conf` included for 1-click cloud deployment.

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React + Custom SVGs
- **Build / Tooling**: Vite + Oxlint

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Northflank

1. Connect your GitHub repository to [Northflank](https://app.northflank.com/).
2. Create a new **Deployment Service**:
   - **Source**: Select this repository and the `main` branch.
   - **Build Type**: `Dockerfile` (automatically detects the root `Dockerfile`).
   - **Port**: Expose port `80` (HTTP).
3. Click **Deploy Service** — Northflank will build and host the static SPA with Nginx.
