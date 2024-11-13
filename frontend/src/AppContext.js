import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tips, setTips] = useState([]);
  const [categories, setCategories] = useState([]);
  const [favorites, setFavorites] = useState([]);

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

  return (
    <AppContext.Provider value={{ tips, categories, favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </AppContext.Provider>
  );
};
