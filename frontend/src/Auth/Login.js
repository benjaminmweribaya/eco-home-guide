import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const { handleLogin, user } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
    };

    useEffect(() => {
        if (user) {
            navigate('/'); // Redirect to home on successful login
        }
    }, [user, navigate]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Login</h2>
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
                <button type="submit">Login</button>
            </form>
            <p>
                Don’t have an account? <Link to="/signup">Sign up here</Link>.
            </p>
        </div>
    );
}

export default Login;
