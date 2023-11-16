import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css'
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Cart from './components/Cart/Cart';
import { getWatchTimeFromDb, setWatchTimeInDb } from './utilities/fakeDb';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchTimes, setWatchTimes] = useState(0);

  const handleWatchTime = (time) => {
    const newWatchtime = watchTimes + time;
    setWatchTimeInDb(newWatchtime);
    setWatchTimes(newWatchtime);
  }

  const handleBreakTime = (time) => {
    const newWatchTime = watchTimes - time;
    setWatchTimeInDb(newWatchTime);
    setWatchTimes(newWatchTime);
  }

  const handleSearch = (name) => {
    // console.log(name);
    const searchedMovie = movies.filter(movie => movie.movieName.toLowerCase().includes(name.toLowerCase()));
    setMovies(searchedMovie);
  }

  useEffect(() => {
    const savedWatchTime = getWatchTimeFromDb();
    setWatchTimes(savedWatchTime);
  }, []);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [])
  return (
    <>
      <Header handleSearch={handleSearch}></Header>
      <section className='moves-cart-container container'>
        <div className='row'>
          <div className='movies col-md-8 row row-cols-1 row-cols-md-2 g-4'>
            {
              movies.map((movie, index) =>
                <Movie
                  movie={movie}
                  key={index}
                  handleWatchTime={handleWatchTime}>
                </Movie>)
            }
          </div>
          <div className='col-md-4 mt-5'>
            <Cart watchTimes={watchTimes} handleBreakTime={handleBreakTime}></Cart>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}

export default App
