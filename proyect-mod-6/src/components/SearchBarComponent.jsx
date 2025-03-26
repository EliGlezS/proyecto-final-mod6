import '../styles/searchBar.css'
// import { useState, useContext } from "react";
// import { BooksContext } from '../context/BooksContext';


const SearchBar = () => {


    return (
        <div className='searchbar-container'>
            <form className='searchbar-form'>
                <div className='searchbar-search'>
                    <input className='searchbar-input' type="search" placeholder="Encuentra tu libro..."/>
                    <button className='searchbar-button' type="submit" aria-label="Search">Buscar</button>
                </div>
                <label className='searchbar-label'>
                    <input className='searchbar-checkbox' type="checkbox"/>
                    En stock
                </label>
            </form>
        </div>
    )
}

export default SearchBar