<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======

# 🧡 SheCan Intern Dashboard

A responsive and dynamic dashboard built for SheCan Interns to track their referrals, rewards, and leaderboard ranking — with modern UI/UX and smooth animations.

## Features

-  **Login Page** with no authentication
-  **Intern Dashboard**:
   Displays intern name, referral code, amount raised
   Dynamic reward progress bar
   Manual logout and session timeout support
   Dark/Light mode toggle
-  **Copy Referral Code** button with clipboard functionality
-  **Animated Leaderboard** (with Framer Motion)
-  **Intern Profile Section**:
   Profile photo, email, join date (from dummy backend or Firebase)
-  **Raise Donations CTA**:
   Eye-catching call-to-action to share referral link
-  Fully themed in **Orange, Black, and White**

---

## 📁 Project Structure 

```bash
intern-portal/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

## Tech Stack

| Frontend | State | Backend | Database |
|----------|-------|------------|---------------------|
| React | useState/useEffect | Express.js | MongoDB |

---


---

## Installation

```bash
git clone https://github.com/LetitiaGilbert/SheCan-intern-dashboard.git
cd SheCan-intern-dashboard
npm install
npm run dev
```


