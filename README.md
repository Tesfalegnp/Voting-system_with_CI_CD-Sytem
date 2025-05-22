
# Online Voting System with CI/CD

A full-stack voting web application built using React, Node.js, Express, MongoDB Atlas, and deployed via GitHub Actions to GitHub Pages. The backend is hosted on [Render](https://render.com), and the frontend automatically builds and deploys to GitHub Pages.



## 🧰 Technologies Used

| Layer | Technology |
|-------|------------|
| Frontend | React, react-router-dom |
| Styling | Bootstrap 5, Custom CSS |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| Deployment | GitHub Actions (`gh-pages`) |
| Hosting | Render (backend), GitHub Pages (frontend) |

---

## 🛠 Local Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)
- Git installed and configured

---
### 📦 Project Structure

```
Voting-system_with_CI_CD-Sytem/
├── backend/
│   ├── index.js              # Express server
│   ├── package.json          # Server dependencies
│   └── .env                  # Environment variables
├── public/
│   ├── bg.jpg                # Background image
│   └── logo13.jpg            # Logo
├── src/
│   ├── components/
│   │   ├── Welcome.js        # Home page
│   │   ├── VoteForm.js       # Voting form
│   │   ├── Login.js          # Admin login
│   │   └── AdminDashboard.js # View all votes
│   ├── App.js                # Main routing file
│   ├── App.css               # Global styles
│   └── index.js              # Entry point
├── package.json              # Frontend scripts and metadata
├── package-lock.json         # Dependency versions
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline
├── .gitignore
└── README.md
```

---

## 🏃‍♂️ Running Locally

### 🔹 Frontend

```bash
cd Voting-system_with_CI_CD-Sytem
npm install
npm start
```

Open at: http://localhost:3000

### 🔹 Backend

Open new terminal:

```bash
cd backend
npm install
node index.js
```

Backend runs at: http://localhost:5000

Update frontend API URL in `VoteForm.js` and `AdminDashboard.js` if testing locally:

```js
const response = await axios.post('http://localhost:5000/vote', ...)
```

---

## 🌐 Live Demo

- 🖥️ **Frontend:**  
  https://tesfalegnp.github.io/Voting-system_with_CI_CD-Sytem/

- ⚙️ **Backend API:**  
  https://voting-system-with-ci-cd-sytem.onrender.com

- 🗃️ **Database:**  
  MongoDB Atlas – stores all vote records

---

## 🧪 Features

- ✅ Secure admin login system
- ✅ Real-time voting submission
- ✅ View all votes in Admin Dashboard
- ✅ Responsive layout with background animation
- ✅ Automated build, test, and deployment using GitHub Actions

---

## 🔄 CI/CD Workflow

GitHub Actions workflow automates:

- 💡 Linting
- 🧪 Testing (`npm test`)
- 🏗️ Building (`npm run build`)
- 🚀 Deployment to `gh-pages` branch

Workflow file: `.github/workflows/deploy.yml`

---

## 👨‍💻 Admin Panel

To access the admin dashboard:

1. Go to `/login`
2. Use default credentials:
   - **Username:** `admin`
   - **Password:** `123`

You’ll be redirected to `/admin` where you can see all submitted votes from users.

---

## 🧾 License

MIT License – see `LICENSE` for details

---

## 📬 Contact

For questions or contributions, feel free to open an issue or PR!
```
