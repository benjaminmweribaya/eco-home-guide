import React, { useContext } from 'react';
import { AppContext } from "../AppContext";

const Home = () => {
    const { categories } = useContext(AppContext);

    return (
        <div className="home-container text-center py-6 max-w-screen-lg mx-auto">
            <h1 className="text-3xl font-bold text-green-700 mb-4">
                Welcome to the Eco Home Guide
            </h1>
            <p className="text-gray-700 mb-6">
                Explore eco-friendly practices to make your home more sustainable.
            </p>
            <h3 className="text-xl font-semibold text-green-600 mb-4">Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div
                        key={category.id}
                        className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
                    >
                        <h4 className="text-lg font-medium text-green-700 mb-2">
                            {index + 1}. {category.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Explore tips on {category.name.toLowerCase()}.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;