import React, { useContext } from 'react';
import { AppContext } from "../AppContext";

const Home = () => {
    const { categories } = useContext(AppContext);

    return (
        <div className="home-container text-center py-6 max-w-screen-md mx-auto">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to the Eco Home Guide</h1>
            <p className="text-gray-700 mb-6">Explore eco-friendly practices to make your home more sustainable.</p>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Categories</h3>
            <ul className="list-disc list-inside text-gray-800">
                {categories.map((category, index) => (
                    <li key={category.id}>{index + 1}. {category.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;