import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const { handleSignup, user } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("Signup form submitted");
        await handleSignup(username, password);
    };

    useEffect(() => {
        if (user) {
            navigate('/login'); // Redirect to home on successful signup
        }
    }, [user, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={onSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Sign Up</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
                >
                    Sign Up
                </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
                Already have an account? <Link to="/login" className="text-green-500 hover:underline">Log in here</Link>.
            </p>
        </div>
    );
}

export default Signup;
