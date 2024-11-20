#!/bin/bash

# Fetch the latest code from GitHub
git pull origin master

# Install dependencies
npm install

# Build the app
npm run build

# Restart the PM2 process
pm2 stop nextjs
pm2 start nextjs

echo "Deployment complete."
