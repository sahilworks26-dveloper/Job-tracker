# Job Application Tracker

A full-stack MERN app to track job applications — add jobs, update status, and see counts at a glance.

## Tech Stack

- **Frontend:** React (Vite), React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Auth:** JWT (stored in localStorage)

## Project Structure

```
job-tracker/
├── client/          # React frontend
└── server/          # Express API
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB Atlas](https://www.mongodb.com/atlas) (recommended) or local MongoDB

### MongoDB Atlas setup

1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. **Database Access** → add a database user (username + password).
3. **Network Access** → add your IP (or `0.0.0.0/0` for development only).
4. **Connect** → Drivers → copy the connection string.
5. In `server/.env`, set `MONGODB_URI` with your database name **before** the `?`:

```
MONGODB_URI=mongodb+srv://USER:PASS@cluster.mongodb.net/job-tracker?retryWrites=true&w=majority
```

Replace `USER`, `PASS`, and `cluster` with your values. URL-encode special characters in the password.

### Troubleshooting

1. **500 / ECONNREFUSED** — start the backend (`cd server` → `npm run dev`). You should see `MongoDB connected`.
2. **Atlas connection failed** — check IP whitelist, username/password, and that `/job-tracker` is in the URI.
3. Keep **both** `server` and `client` dev processes running.

## Setup

### 1. Backend

```bash
cd server
npm install
```

Copy `.env.example` to `.env` and set your Atlas URI and JWT secret:

```
PORT=5000
MONGODB_URI=mongodb+srv://USER:PASS@CLUSTER.mongodb.net/job-tracker?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
```

Start the server:

```bash
npm run dev
```

### 2. Frontend

In a new terminal:

```bash
cd client
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/jobs` | Get all jobs (auth required) |
| POST | `/api/jobs` | Add job |
| PUT | `/api/jobs/:id` | Update job |
| DELETE | `/api/jobs/:id` | Delete job |

## Features

- Register / Login / Logout (JWT)
- Dashboard with status summary cards
- List all applications with status badges
- Add, edit, and delete jobs (delete with confirmation)
- Filter by status, sort by date applied
- Responsive sidebar layout
