import '../styles/searchBar.css'
import { useState, useContext } from "react";
import { BooksContext } from '../context/BooksContext';

const SearchBarComponent = () => {

    const { handleSearch, handleStockChange } = useContext(BooksContext);

    const [query, setQuery] = useState('');
    const [inStock, setInStock] = useState(false);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
        handleSearch(e.target.value); 
    };

    const handleInStockChange = (e) => {
        setInStock(e.target.checked);
        handleStockChange(e.target.checked); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleClick = () => {
        setQuery("");
    }

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
                    <div className='searchbar-button'>Buscar</div>
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