import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

function CategoryFilter() {
    const { categories, selectedCategory, selectCategory } = useContext(AppContext);

    return (
        <div className="mb-4">
            <label htmlFor="categoryFilter">Filter by Category: </label>
            <select
                id="categoryFilter"
                value={selectedCategory}
                onChange={(e) => selectCategory(e.target.value)}
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
