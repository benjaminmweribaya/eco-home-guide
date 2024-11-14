const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// JWT Secret Key
const SECRET_KEY = 'your_jwt_secret_key';

// Signup route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await axios.get(`http://localhost:5001/users?username=${username}`);
        if (existingUser.data.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { username, password: hashedPassword };

        await axios.post('http://localhost:5001/users', newUser);
        const token = jwt.sign({ username: newUser.username }, SECRET_KEY);
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
        const response = await axios.get(`http://localhost:5001/users?username=${username}`);
        const user = response.data[0];
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ username: user.username }, SECRET_KEY);
        res.json({ user: { username: user.username }, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
