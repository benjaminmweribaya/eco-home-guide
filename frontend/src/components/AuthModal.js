import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

const AuthModal = () => {
    const navigate = useNavigate();
    const { isAuthModalOpen, closeAuthModal } = useContext(AppContext);

    if (!isAuthModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-bold text-green-700 mb-4">Save Favorites</h3>
                <p className="text-gray-600 mb-4">
                    Please sign up or log in to save your favorite tips.
                </p>
                <div className="flex justify-between">
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Log In
                    </button>
                    <button
                        onClick={() => navigate("/signup")}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Sign Up
                    </button>
                </div>
                <button
                    onClick={closeAuthModal}
                    className="text-gray-500 text-sm mt-4 hover:underline"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AuthModal;
