import React from 'react';
import './Movie.css';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movie = ({ movie, handleWatchTime }) => {
    const { poster, movieName, watchTime, description, imdbRating, category } = movie;
    const notify = () => toast("Movie added to watch later!");

    return (
        <div className='col movie'>
            <div className="card">
                <div className='text-center'>
                    <img src={movieName === 'The Shawshank Redemption' ? 'https://m.media-amazon.com/images/I/61-vQDr7ecL._AC_UF1000,1000_QL80_.jpg' : poster} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{movieName}</h5>
                    <p className="card-text">{description}</p>
                    <div className='d-flex justify-content-between'>
                        <p>Watch Time: <span className='text-danger'>{watchTime}</span></p>
                        <p>IMDB Rating: <span className='text-danger'>{imdbRating}</span></p>
                    </div>
                    <p>Category : {category}</p>
                    <a href="#" className="btn btn-primary w-100" onClick={() => {
                        notify();
                        handleWatchTime(watchTime)
                    }}>Book Now</a>
                </div>
            </div>
        </div>
    );
};

export default Movie;