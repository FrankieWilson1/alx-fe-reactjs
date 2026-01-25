import React from 'react'
import useRecipeStore from './recipeStore';

export default function SearchBar() {
    const { searchTerm, setSearchTerm, maxTime, setMaxTim } = useRecipeStore();

    return (
        <div className='search-bar'>
            <input
                type='text'
                placeholder='Search recipes...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="time-filter">
                <label>Max Cooking Time: {maxTime} </label>
                <input
                    type='range'
                    min='0'
                    max='120'
                    value={maxTime}
                    onChange={(e) => setMaxTim(Number(e.target.value))}
                />
            </div>
        </div>
    );
};
