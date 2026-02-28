FROM node:20-alpine AS frontend

WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY src ./src
COPY index.html vite.config.js eslint.config.js ./
RUN npm run build

FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt gunicorn

COPY app.py .

COPY --from=frontend /build/dist ./dist

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD python -c "import requests; requests.get('http://localhost:5000/health')" || exit 1

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
