FROM node:20-slim
WORKDIR /app
COPY package.json server.js ./
COPY form.html poster.html ./
COPY ai-startup-poster.png ./
RUN npm install --omit=dev
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
