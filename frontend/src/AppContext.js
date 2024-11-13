import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [tips, setTips] = useState([]);
    const [categories, setCategories] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchTips = async () => {
            const response = await axios.get('/tips');
            setTips(response.data);
        };

        const fetchCategories = async () => {
            const response = await axios.get('/categories');
            setCategories(response.data);
        };

        fetchTips();
        fetchCategories();
    }, []);

    const selectCategory = (category) => {
        setSelectedCategory(category);
    };

    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Toggles the isFavorite property of the tip with the given id in the app state.
     * @param {number} id - The id of the tip to toggle.
     */
    /******  fb0d03df-58aa-424d-a9b7-106b5e9681b0  *******/
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

    return (
        <AppContext.Provider
            value={{
                tips: filteredTips,
                favorites: tips.filter((tip) => tip.isFavorite),
                categories,
                selectedCategory,
                toggleFavorite,
                selectCategory,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
