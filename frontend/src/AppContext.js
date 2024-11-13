import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [tips, setTips] = useState([]);
    const [categories, setCategories] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');  // State for selected category

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tipsResponse = await axios.get("http://localhost:5000/tips");
                const categoriesResponse = await axios.get("http://localhost:5000/categories");
                setTips(tipsResponse.data);
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const addToFavorites = (tip) => {
        if (!favorites.find((favorite) => favorite.id === tip.id)) {
            setFavorites([...favorites, tip]);
        }
    };

    const removeFromFavorites = (tipId) => {
        setFavorites(favorites.filter((favorite) => favorite.id !== tipId));
    };

    // Function to handle category selection
    const selectCategory = (category) => {
        setSelectedCategory(category);
    };

    // Filtered tips based on selected category
    const filteredTips = selectedCategory
        ? tips.filter(tip => tip.category === selectedCategory)
        : tips;

    return (
        <AppContext.Provider value={{
            tips: filteredTips,
            favorites,
            categories,
            selectedCategory,
            selectCategory,
            addToFavorites,
            removeFromFavorites
        }}>
            {children}
        </AppContext.Provider>
    );
};
