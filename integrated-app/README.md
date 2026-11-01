# Mansi Jogani - ITUE301 Integrated Application

This is the single integrated full-stack application for Mansi Jogani's
ITUE301 Advanced Web Development Frameworks term work. It implements the
requirements from Practical 1 to Practical 13 without replacing them with
static screens.

## Technology

- React and React Router
- Node.js and Express REST API
- MongoDB and Mongoose
- bcrypt and JWT authentication
- Node Cache and native EventEmitter
- Docker Compose
- GitHub Actions
- Backend-only AI integration with graceful fallback

## Run locally

Start MongoDB, backend and frontend in separate terminals:

```powershell
cd integrated-app
docker compose up -d mongodb

cd backend
copy .env.example .env
npm install
$env:PORT=5191
npm start
```

```powershell
cd integrated-app\frontend
npm install
Set-Content .env 'VITE_API_URL=http://127.0.0.1:5191'
npm run dev -- --host 127.0.0.1 --port 5186
```

Open `http://127.0.0.1:5186`.

## Run with Docker

From `integrated-app`:

```powershell
docker compose up --build -d
docker compose ps
```

Open `http://localhost:5173`. Stop the services with:

```powershell
docker compose down
```

## Verification

```powershell
cd integrated-app\backend
npm run lint
npm test

cd ..\frontend
npm run lint
npm run build
```

See [DEMONSTRATION_GUIDE.md](./DEMONSTRATION_GUIDE.md) for the mapping from
each practical to its integrated functionality.
