import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [tips, setTips] = useState([]);
    const [categories, setCategories] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchCategoriesAndTips = async () => {
            try {
                const response = await axios.get('http://localhost:5000/categories');
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
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
