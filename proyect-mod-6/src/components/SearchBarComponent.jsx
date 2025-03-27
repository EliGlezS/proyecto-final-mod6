import '../styles/searchBar.css'
import { useState } from "react";

const SearchBarComponent = ({ onSearch, onStockChange }) => {
    const [query, setQuery] = useState('');
    const [inStock, setInStock] = useState(false);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value); 
    };

    const handleInStockChange = (e) => {
        setInStock(e.target.checked);
        onStockChange(e.target.checked); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='searchbar-container'>
            <form className='searchbar-form' onSubmit={handleSubmit}>
                <div className='searchbar-search'>
                    <input 
                        className='searchbar-input' 
                        type="search" 
                        placeholder="Encuentra tu libro..." 
                        value={query} 
                        onChange={handleSearchChange}
                    />
                    <button className='searchbar-button' type="submit" aria-label="Search">Buscar</button>
                </div>
                <div className='searchbar-check'>
                    <label className='searchbar-label'>
                        <input 
                            className='searchbar-checkbox' 
                            type="checkbox" 
                            checked={inStock} 
                            onChange={handleInStockChange}
                        />
                        En stock
                    </label>
                </div>
            </form>
        </div>
    );
}

export default SearchBarComponent;