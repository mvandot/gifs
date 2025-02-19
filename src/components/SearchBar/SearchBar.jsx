import React from "react";
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm, handleSubmit, handleClick }) => {
    
    return (
        <div className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <input 
                    className="search__input"
                    id="search"
                    name="search-input"
                    type="text"
                    value={searchTerm}
                    placeholder='Search for gif'
                    onChange={(e) => setSearchTerm(e.target.value)}     
                />

                <button className="search__button-container" onClick={handleClick}>
                    <img 
                        className="search__search-icon"
                        src='https://giphy.com/static/img/search-icon.svg'
                        width='30'
                        alt="search button"
                    />
                </button>
            </form>

        </div>
    );
};

export default SearchBar;
