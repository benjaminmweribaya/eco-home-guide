import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const { handleSignup, user } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        handleSignup(username, password);
    };

    useEffect(() => {
        if (user) {
            navigate('/login'); // Redirect to home on successful signup
        }
    }, [user, navigate]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Sign Up</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Log in here</Link>.
            </p>
        </div>
    );
}

export default Signup;
