import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [tips, setTips] = useState([]);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [user, setUser] = useState(null); // new state for user authentication

    const openAuthModal = () => setIsAuthModalOpen(true);
    const closeAuthModal = () => setIsAuthModalOpen(false);

    useEffect(() => {
        const fetchCategoriesAndTips = async () => {
            try {
                const response = await axios.get('https://eco-home-guide-app-backend.onrender.com/categories');
                const categoryData = response.data;

                // Extract categories and flatten tips into a single array
                setCategories(categoryData);

                const allTips = categoryData.flatMap(category =>
                    category.tips.map(tip => ({
                        ...tip,
                        category: category.name // add category name to each tip
                    }))
                );

                setTips(allTips);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCategoriesAndTips();
    }, []);

    const selectCategory = (category) => {
        setSelectedCategory(category);
    };

    const addToFavorites = async (tipId) => {
        if (!user) {
            alert('You need to log in or sign up to add to favorites.');
            return;
        }

        // Proceed with favorite logic if logged in
        try {
            const updatedTips = tips.map((tip) =>
                tip.id === tipId ? { ...tip, isFavorite: !tip.isFavorite } : tip
            );
            setTips(updatedTips);

            // Optionally, update backend
            await axios.patch(`https://eco-home-guide-app-backend.onrender.com/tips/${tipId}`, { isFavorite: !tips.find(t => t.id === tipId).isFavorite });
        } catch (error) {
            console.error('Error adding to favorites:', error);
        }
    };

    // Filtered tips based on selected category
    const filteredTips = selectedCategory
        ? tips.filter(tip => tip.category === selectedCategory)
        : tips;

    const toggleCompleted = async (tipId) => {
        const updatedTips = tips.map((tip) =>
            tip.id === tipId ? { ...tip, isCompleted: !tip.isCompleted } : tip
        );
        setTips(updatedTips);

        // Optionally, update backend
        await axios.patch(`/api/tips/${tipId}`, { isCompleted: !tips.find(t => t.id === tipId).isCompleted });
    };

    // Login function
    const handleLogin = async (username, password) => {
        try {
            const response = await fetch("https://eco-home-guide-app-backend.onrender.com/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            console.log("Login response:", response.data);
            setUser(response.data.user);
            localStorage.setItem("token", response.data.token); // Store token for session persistence
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`; // Set token in axios
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    // Signup function
    const handleSignup = async (username, password) => {
        try {
            const response = await fetch("https://eco-home-guide-app-backend.onrender.com/signup", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            console.log("Signup response:", response.data);
            setUser(response.data.user);
            localStorage.setItem("token", response.data.token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        } catch (error) {
            console.error(error);
            alert("Signup failed");
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("token"); // Clear token from localStorage
    };

    return (
        <AppContext.Provider
            value={{
                tips: filteredTips,
                favorites: tips.filter((tip) => tip.isFavorite),
                categories,
                selectedCategory,
                addToFavorites,
                toggleCompleted,
                selectCategory,
                user,
                handleLogin,
                handleSignup,
                handleLogout,
                isAuthModalOpen,
                openAuthModal,
                closeAuthModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
