import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [tips, setTips] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [user, setUser] = useState(null); // new state for user authentication

    const fetchUser = useCallback(async () => {
        try {
            const response = await axios.get("https://eco-home-guide-app-backend.onrender.com/protected-route");
            setUser(response.data.user);
        } catch (error) {
            console.error("Session verification failed", error);
            handleLogout(); // If token invalid, log out
        }
    }, []);

    // Automatically attach token to axios requests if logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            fetchUser(); // Load user data on app start if token exists
        }
    }, [fetchUser]);

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

    const toggleFavorite = (id) => {
        setTips((prevTips) =>
            prevTips.map((tip) =>
                tip.id === id ? { ...tip, isFavorite: !tip.isFavorite } : tip
            )
        );
    };

    // Filtered tips based on selected category
    const filteredTips = selectedCategory
        ? tips.filter(tip => tip.category === selectedCategory)
        : tips;

    const toggleCompleted = (id) => {
        setTips((prevTips) =>
            prevTips.map((tip) =>
                tip.id === id ? { ...tip, isCompleted: !tip.isCompleted } : tip
            )
        );
    };

    // Login function
    const handleLogin = async (username, password) => {
        try {
            const response = await axios.post("https://eco-home-guide-app-backend.onrender.com/login", { username, password });
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
            const response = await axios.post("https://eco-home-guide-app-backend.onrender.com/signup", { username, password });
            console.log("Signup response:", response.data);
            setUser(response.data.user);
            localStorage.setItem("token", response.data.token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        } catch (error) {
            console.error("Signup failed", error);
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
                toggleFavorite,
                toggleCompleted,
                selectCategory,
                user,
                handleLogin,
                handleSignup,
                handleLogout,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
