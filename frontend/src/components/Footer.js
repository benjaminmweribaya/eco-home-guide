import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-green-700 text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
                <div className="flex justify-center items-center gap-2">
                    <Leaf size={20} />
                    <span className="font-semibold text-lg">Eco Home Guide</span>
                </div>

                <nav className="space-x-4 text-sm">
                    <Link to="/" className="hover:text-green-200">Home</Link>
                    <Link to="/tips" className="hover:text-green-200">Tips</Link>
                    <Link to="/favorites" className="hover:text-green-200">Favorites</Link>
                    <Link to="/login" className="hover:text-green-200">Login</Link>
                </nav>

                <p className="text-xs text-green-200">
                    © {new Date().getFullYear()} Eco Home Guide. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
