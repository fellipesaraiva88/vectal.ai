#!/bin/bash
export PATH=/opt/plesk/nodejs/24/bin:$PATH

# 1. Instalando dependências
npm ci

# 2. Build (TypeScript)
npm run build

# 3. Inicia o app com PM2
npm install -g pm2
pm2 delete vectal || true
pm2 start build/index.js --name="vectal"
