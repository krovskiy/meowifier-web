```bash
docker build -t meowifier:latest .

docker run -p 5000:5000 \
  -e FLASK_ENV=production \
  -e PORT=5000 \
  meowifier:latest

# or
docker-compose up -d
```