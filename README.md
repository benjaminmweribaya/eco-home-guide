# Eco Home Guide APP

Eco Home Guide is a web application dedicated to helping users incorporate eco-friendly practices in their daily lives. This app provides tips on sustainable habits, allows users to mark tips as favorites or completed, and offers a categorized search for easy navigation. The app also includes login and signup functionality for personalized experiences.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Live Demo](#live-demo)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Features

- **User Authentication**:
  - Secure login and signup with JWT-based token management.
  - Personalized user experiences for tracking progress.

- **Eco Tips**:
  - Access a curated collection of eco-friendly tips to make sustainable choices easier.
  - Search and filter tips by categories for focused guidance.

- **Favorites and Completion**:
  - Mark tips as favorites or completed.
  - Save progress for quick access and motivation.

- **Responsive Design**:
  - Mobile-first design with a modern, clean user interface.

- **Dark Mode (Coming Soon)**:
  - Improve usability during nighttime browsing.

  ---

## Technologies

- **Frontend**: React, Tailwind CSS, React Router.
- **Backend**: Node.js, Express.js, JWT Authentication.
- **Database**: JSON Server (mock backend for development).

---

## Live Demo

- **Frontend**: [Eco Home Guide on Vercel](https://eco-home-guide.vercel.app)
- **Backend**: [Eco Home Guide API on Render](https://eco-home-guide-app-backend.onrender.com/)

---

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone git@github.com:benjaminmweribaya/eco-home-guide.git
   cd eco-home-guide
   ```

2. **Install Dependencies**

   - Frontend dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Backend dependencies:
     ```bash
     cd ../backend
     npm install
     ```

3. **Run the Application**

   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend app:
     ```bash
     cd ../frontend
     npm start
     ```

4. **Access the Application**
   - Open your browser and visit `http://localhost:3000` to view the app.

---

## Usage

### Main Features:
1. **Signup/Login**:
   - Create an account to save your favorite tips and track completed ones.

2. **Search Tips**:
   - Use the search bar or category filters to find specific eco tips.

3. **Favorite and Complete Tips**:
   - Mark tips as favorites or mark them as completed to track progress.

4. **Profile Management**:
   - Manage your profile for a tailored experience.

5. **Authentication Modal**:
   - Unauthenticated users are prompted with a modal to log in or sign up when accessing restricted features.

---

## Folder Structure

```
eco-home-guide
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
├── frontend
│   ├── public
│   └── src
│       ├── components
│       ├── Pages
│       ├── Auth
│       ├── App.js
│       ├── AppContext.js
│       └── index.js
└── README.md
|__ LICENSE

```

## API Reference

| Method | Endpoint         | Description                       |
| ------ | ---------------- | --------------------------------- |
| GET    | /api/tips        | Retrieve all eco tips             |
| POST   | /api/auth/login  | Log in a user                     |
| POST   | /api/auth/signup | Register a new user               |
| PATCH  | /api/tips/:id    | Update a tip (favorite/completed) |

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your descriptive commit message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details

---

## Author

- **Name**: Mr. Benjamin Mweri Baya
- **GitHub**: [benjaminmweribaya](https://github.com/benjaminmweribaya)
- **Contact**: b3njaminbaya@gmail.com

---
