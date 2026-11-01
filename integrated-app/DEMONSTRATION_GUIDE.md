# ITUE301 Practical Feature Demonstration

This integrated application contains only the functionality defined in the
13 supplied practical PDFs. The practical folders remain preserved separately;
this app combines their actual requirements into one portfolio and task
management application.

## Application areas

- **Home:** P1 reusable `Header`, `About`, `Skills`, `Footer`, props and theme.
- **Projects:** P3 live GitHub repository API with loading, error, retry, search,
  repository URLs and star counts.
- **Contact:** P2 React Router, controlled input, help toggle, live preview,
  character count and dark/light mode.
- **Tasks:** P4–P10 and P13 full-stack task management.
- **Login:** P7 registration, bcrypt password hashing, JWT login/logout and
  protected task routes.

## PDF requirement mapping

| PDF | Implemented behavior |
|---|---|
| P1 | Vite React app, reusable Header/About/Skills/Footer components, props, dynamic skills and theme color. |
| P2 | React Router routes, NavBar, controlled Contact form, help toggle, live preview, character count, dark mode and 404 route. |
| P3 | GitHub REST API fetch with `useEffect`, loading spinner, error state, retry, search, repository name/URL and stars. |
| P4 | Express task CRUD, request logger, JSON middleware, status codes, structured 404/error handling, JSON content validation and ID validation. |
| P5 | Mongoose Task schema with required title, description, completed default, createdAt default, priority enum, trim hook and `GET /tasks/:id`. |
| P6 | React → Express → MongoDB CRUD, CORS, loading/error handling, optimistic creation, confirmation dialog and toast feedback. |
| P7 | bcrypt registration, JWT login, protected task routes, server validation, `/auth/me`, expiry handling and logout. |
| P8 | Lazy route imports, Suspense fallback, lazy TaskChart chunk and delayed loading UI. |
| P9 | Node Cache 60-second task caching, per-user keys, single-task cache, write invalidation and `/debug/cache` hit/miss metrics. |
| P10 | Native EventEmitter `task-created`, `task-deleted` and `error` listeners. The response is logged before the delayed notification handler. |
| P11 | Dockerfiles and Compose services for frontend, backend and MongoDB with network, healthcheck and named volume. |
| P12 | GitHub Actions workflow for install, lint, MongoDB-backed tests and frontend build on push/PR to `main`. |
| P13 | Backend-only OpenAI key, `/api/ai/generate-description`, fallback, timeout, rate limit, loading state and AI review disclaimer. |

## Run

```powershell
cd integrated-app\backend
copy .env.example .env
npm install
$env:PORT=5191
npm start
```

In another terminal:

```powershell
cd integrated-app\frontend
npm install
Set-Content .env 'VITE_API_URL=http://127.0.0.1:5191'
npm run dev -- --host 127.0.0.1 --port 5186
```

Open `http://127.0.0.1:5186`.

## Demonstration order

1. Home: explain component tree and props.
2. Projects: show GitHub loading, search, stars and links.
3. Contact: type a message, toggle help, show preview/count and theme.
4. Register/login, then open Tasks.
5. Create, edit, complete and delete a task; refresh to prove MongoDB
   persistence.
6. Click **Suggest with AI**; with no key, show graceful fallback.
7. Open the chart and show the lazy chunk in DevTools.
8. Open `/debug/cache` after repeated task requests to show HIT/MISS.
9. Watch backend logs while creating a task to show EventEmitter timing.
10. Run `docker compose up --build` for P11.
11. Push to `main` and show the P12 GitHub Actions result in
    `MansiJogani12/AWDF-24IT033`.

## Verification

```powershell
cd integrated-app\backend
npm run lint
npm test

cd ..\frontend
npm run lint
npm run build
```
