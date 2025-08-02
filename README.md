

---

# EduHive Frontend

EduHive is a collaborative, gamified learning platform for tech enthusiasts. This is the frontend of the application, built with React, Tailwind CSS, and Socket.IO for real-time updates.

## Features

* User registration and login (email & Google OAuth)
* Real-time community forums
* Learning paths with modules and quizzes
* Gamification via badges and leaderboards
* Contributor and admin dashboards
* Subscription and testimonial system

## Tech Stack

* **Frontend:** React, Tailwind CSS, Axios, Socket.IO-client
* **Backend (separate repo):** Flask (RESTful API & Socket.IO)
* **Authentication:** JWT, Google OAuth
* **Deployment:** Vercel (Frontend), Render (Backend)
* **Other Tools:** Supabase (Storage), Figma (Design)

## Project Structure

```
src/
├── api/               # API functions (REST & WebSocket)
├── components/        # Reusable UI components
├── pages/             # Page views for routes
├── assets/            # Images and icons
└── App.jsx            # Main app with routing
```

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Mitche-44/EduHive-Frontend.git
cd EduHive-Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file (see Vercel for actual values)

Environment variables are managed via Vercel. The `.env` file is excluded from version control.

```env
VITE_API_BASE_URL=<your-backend-url>/api
VITE_SOCKET_URL=<your-backend-url>
VITE_GOOGLE_CLIENT_ID=<your-client-id>
```

> Note: Never commit secrets or credentials to the repository.

### 4. Run locally

```bash
npm run dev
```

App will be served at: `http://localhost:5173`

## Deployment

* **Frontend:** [Vercel](https://edu-hive-frontend.vercel.app/)
* **Backend:** [Render](https://eduhive-backend-l6vz.onrender.com )

## Contributing

If you'd like to contribute:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

