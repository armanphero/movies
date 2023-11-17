import React from 'react';
import './Header.css'
import { useState } from 'react';

const Header = ({handleSearch}) => {
    const [input, setInput] = useState('');
    const handleKeyUp = (key) => {
        if(key === 'Enter'){
            handleSearch(input);
        }
    }
    return (
        <div className='bg-primary'>
            <nav className="navbar px-5 container">
                <div className="container-fluid">
                    <a className="navbar-brand text-white">Movies</a>
                    <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={input} onInput={e => setInput(e.target.value)} onKeyUp={(e) => handleKeyUp(e.key)} />
                        <button className="btn btn-danger" type="submit" onClick={() => handleSearch(input)}>Search</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;