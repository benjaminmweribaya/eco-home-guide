import React, { useContext } from 'react';
import { AppContext } from "../AppContext";

const Home = () => {
    const { categories } = useContext(AppContext);

    return (
        <div className="home-container">
            <h1>Welcome to the Eco Home Guide</h1>
            <p>Explore eco-friendly practices to make your home more sustainable.</p>
            <h3>Categories:</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;