require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT ||5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// JWT Secret Key and Token Expiration
const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key';
const TOKEN_EXPIRATION = '1h';  // Token valid for 1 hour

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); // No token provided

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // Token is invalid
        req.user = user;
        next();
    });
}

// Signup route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await axios.get(`http://localhost:5001/users?username=${username}`);
        if (existingUser.data.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash password and create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { username, password: hashedPassword };

        // Save new user to database
        await axios.post('http://localhost:5001/users', newUser);

        // Generate JWT token
        const token = jwt.sign({ username: newUser.username }, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });
        res.json({ user: { username: newUser.username }, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Signup failed' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const response = await axios.get(`http://localhost:5001/users?username=${username}`);
        const user = response.data[0];
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Compare provided password with stored hashed password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });
        res.json({ user: { username: user.username }, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
});

// Protected route example
app.get('/protected-route', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
