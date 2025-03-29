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

    const handleClick = (e) => {
        e.preventDefault();
        setQuery("");
        handleSearch("");
    };

    return (
        <section className='searchbar-container'>
            <form className='searchbar-form' onSubmit={handleSubmit}>
                <div className='searchbar-search'>
                    <div className='searchbar-icon'>Buscar</div>
                    <input 
                        className='searchbar-input' 
                        type="search" 
                        placeholder="Encuentra tu libro..." 
                        value={query} 
                        onChange={handleSearchChange}
                    />
                    <button className='searchbar-clear' onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
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
        </section>
    );
}

export default SearchBarComponent;