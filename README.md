# Eco Home Guide

Eco Home Guide is a web application dedicated to helping users incorporate eco-friendly practices in their daily lives. This app provides tips on sustainable habits, allows users to mark tips as favorites or completed, and offers a categorized search for easy navigation. The app also includes login and signup functionality for personalized experiences.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies](#technologies)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and signup with JWT token management.
- **Eco Tips**: Browse and search eco-friendly tips by category.
- **Favorites and Completion**: Mark tips as favorites or completed, track progress.
- **Categorized Search**: Filter eco tips by category for focused guidance.
- **Responsive Design**: Mobile and desktop friendly with a minimal, clean layout.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/eco-home-guide.git
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

## Usage

1. **User Signup/Login**: Users can create an account or log in to save their favorite tips and track completed ones.
2. **Search Tips**: Use the search bar or category filter to find eco tips.
3. **Favorite and Complete Tips**: Mark tips as favorites or mark them as completed to track progress.
4. **Profile Management**: The app provides personalized options based on the user's account.

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
```

## Technologies

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, JWT Authentication
- **Database**: JSON server (mock backend for development)

## API Reference

| Method | Endpoint         | Description             |
|--------|-------------------|-------------------------|
| GET    | /api/tips        | Retrieve all eco tips   |
| POST   | /api/auth/login  | Log in a user           |
| POST   | /api/auth/signup | Register a new user     |
| PATCH  | /api/tips/:id    | Update a tip (favorite/completed) |

## Contributing

1. **Fork the Project**
2. **Create a Branch**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit Changes**
   ```bash
   git commit -m 'Add your message here'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a Pull Request**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details