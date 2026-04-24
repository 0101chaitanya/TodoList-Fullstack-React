# Fullstack Todo Application

Check out: https://todo-list-fullstack-react.vercel.app/

A modern, responsive, and vibrant fullstack Todo application built with the MERN stack (MongoDB, Express, React, Node.js). 

## Features
- **Create, Read, Update, Delete (CRUD):** Complete task management functionality.
- **Modern UI:** Built with React 19, TailwindCSS 4, and DaisyUI 5 for a clean and attractive interface.
- **Responsive Design:** Fully responsive layout that looks great on mobile devices, tablets, and desktops.
- **Interactive Modals:** Includes a custom "Edit Todo Wizard" modal with built-in status toggling and target date scheduling.
- **Theme Support:** Integrates a theme switcher to enhance user experience.
- **Timestamps:** Tracks task target dates using `dayjs` for formatting and manipulation.

## Tech Stack
### Frontend
- **React 19:** Building the UI and components.
- **Vite 8:** Lightning-fast build tool and development server.
- **TailwindCSS 4:** Utility-first CSS framework for rapid and flexible styling.
- **DaisyUI 5:** Component library tailored for Tailwind for beautiful default styles.
- **Axios:** Managing HTTP requests to the backend.
- **Dayjs:** Managing and formatting target dates.
- **React Router DOM 7:** Handling application routing.

### Backend
- **Node.js & Express (v5.x):** Fast, unopinionated, minimalist web framework.
- **MongoDB & Mongoose (v9.x):** NoSQL database and object modeling tool for storing tasks.
- **Cors:** Middleware for enabling Cross-Origin Resource Sharing.
- **Dotenv:** Loading environment variables.

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### Installation

1. **Clone the repository** (if not already done).

2. **Setup Backend:**
   Navigate to the `backend` directory and install the dependencies:
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the backend directory and set your MongoDB connection string and server port:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
   Start the backend server:
   ```bash
   npm run start
   # or 'npx nodemon' if you have nodemon installed globally or locally
   ```

3. **Setup Frontend:**
   Open a new terminal window, navigate to the `frontend` directory, and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
   Start the Vite development server:
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and visit `https://todo-list-fullstack-react.vercel.app/` (or the port Vite provides).

## Project Structure
- `backend/` - Contains the Express server, Mongoose models, and API routes.
- `frontend/` - Contains the Vite/React application. 
   - `src/components/` - Holds all the reusable React components (like `Home.jsx`, `EditModal.jsx`, `ThemeSwitcher.jsx`).
   - `src/api/` - Handles Axios configurations and requests.

## License
ISC
