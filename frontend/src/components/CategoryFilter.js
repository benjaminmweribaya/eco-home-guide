import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

function CategoryFilter() {
    const { categories, selectedCategory, selectCategory } = useContext(AppContext);

    return (
        <div className="mb-4">
            <label htmlFor="categoryFilter" className="text-gray-700 font-medium">
                Filter by Category:
            </label>
            <select
                id="categoryFilter"
                value={selectedCategory}
                onChange={(e) => selectCategory(e.target.value)}
                className="ml-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
                <option value="">All</option>
                {categories.map(category => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategoryFilter;
