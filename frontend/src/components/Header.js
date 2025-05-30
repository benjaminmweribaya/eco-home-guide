import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, UserCircle } from 'lucide-react';
import { AppContext } from '../AppContext';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, handleLogout } = useContext(AppContext);

    return (
        <header className="bg-green-700 text-white shadow-md w-full">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-wide">
                    Eco Home Guide
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="hover:text-green-200 transition">Home</Link>
                    <Link to="/tips" className="hover:text-green-200 transition">Tips</Link>
                    <Link to="/favorites" className="hover:text-green-200 transition">Favorites</Link>
                    {user ? (
                        <div className="flex items-center space-x-2">
                            <UserCircle size={20} />
                            <span className="text-sm">{user.username}</span>
                            <button
                                onClick={handleLogout}
                                className="ml-3 bg-white text-green-700 px-3 py-1 rounded hover:bg-green-100 transition text-sm"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-green-200 transition">Login</Link>
                            <Link to="/signup" className="hover:text-green-200 transition">Signup</Link>
                        </>
                    )}
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-green-200">Home</Link>
                    <Link to="/tips" onClick={() => setIsOpen(false)} className="block hover:text-green-200">Tips</Link>
                    <Link to="/favorites" onClick={() => setIsOpen(false)} className="block hover:text-green-200">Favorites</Link>
                    {user ? (
                        <>
                            <div className="flex items-center space-x-2">
                                <UserCircle size={20} />
                                <span>{user.username}</span>
                            </div>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsOpen(false);
                                }}
                                className="w-full text-left mt-2 bg-white text-green-700 px-3 py-1 rounded hover:bg-green-100"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-green-200">Login</Link>
                            <Link to="/signup" onClick={() => setIsOpen(false)} className="block hover:text-green-200">Signup</Link>
                        </>
                    )}
                </div>
            )}
        </header>
    );
}

export default Header;
