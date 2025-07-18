
#  EduHive-Frontend

Welcome to **EduHive**, a crowdsourced learning platform with gamification built to help learners, contributors, and admins collaborate in a fun and interactive learning environment.

This repository contains the **React (Vite)** frontend for the EduHive platform.

---

## Project Overview

**EduHive** is a community-powered learning platform where users can:

* Create and follow structured learning paths
* Earn XP, badges, and rank on leaderboards
* Interact with content and other learners
* Contribute resources and quizzes
* Participate in gamified challenges

---

## Folder Structure

```
EduHive-Frontend/
├── public/            
├── src/
│   ├── assets/          Images, icons, etc.
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (Profile, Dashboard, Leaderboard)
│   ├── routes/        
│   ├── api/    
│   ├── utils/          
│   ├── App.jsx         
│   ├── main.jsx        
├── .env                 
├── index.html
└── README.md
```

---

## Tech Stack

* **Frontend Framework**: [Vite](https://vitejs.dev/) + [Vue 3](https://vuejs.org/) *(or React if using React template)*
* **UI Library**: TailwindCSS + Custom Components
* **Routing**: React Router DOM
* **State Management**: Context API (or Pinia/Vuex for Vue)
* **API Communication**: Axios
* **Charting**: Chart.js or Recharts (for XP graphs)

---

##  Getting Started

### Prerequisites

* Node.js >= 16
* NPM or Yarn
* Backend running locally on port `5000` or specified in `.env`

### Installation

```bash
# clone the frontend repo
git clone https://github.com/Mitche-44/EduHive-Frontend.git
cd EduHive-Frontend

# install dependencies
npm install

# start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root with:

```env
VITE_API_URL=http://localhost:5000
```

---

##  Features

*  **Auth**: Role-based access for Admin, Contributor, Learner
*  **Learning Paths**: View, follow, and complete modules with quizzes
*  **Gamification**: Earn XP, unlock badges, climb leaderboards
* **Community**: Comment, rate, and engage with learning content
*  **Admin Tools**: Moderate submissions, add challenges
*  **Contributor Tools**: Create paths, quizzes, and share resources
*  **Profile**: Track XP, badges, progress, and contributions

---

## 🔗 Related Repos

*  **Backend**: [EduHive-Backend](https://github.com/Mitche-44/EduHive-Backend) — Flask API

---

## Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

---

## License

This project is licensed under the MIT License.

---


