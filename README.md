# meowifier-web

`meowifier-web` is a project that demonstrates the use of [`React`](https://react.dev/) for the frontend and [`Flask`](https://flask.palletsprojects.com/en/stable/) for the backend

![example](https://github.com/krovskiy/meowifier-web/blob/main/docs/example.gif)

## features

enter any text => stretch vowels and add occasional `meows`

## installation

### prerequisites

- Node.js and npm
- Python and pip

### development

(port 5173)
```bash
cd frontend
npm install
npm run dev
```

(port 5000)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

frontend proxies API calls to backend automatically

### production

```bash

cd frontend
npm install
npm run build

# serves port 5000
cd backend
pip install -r requirements.txt
python app.py
```

### docker
```bash
docker-compose -f deploy/docker-compose.yml up
```

### systemd

```bash
sudo useradd -m -s /bin/bash meowifier
sudo cp deploy/meowifier.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable meowifier
sudo systemctl start meowifier
```