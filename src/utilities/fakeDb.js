const setWatchTimeInDb = (time) => {
    localStorage.setItem('watchTime', time);
}

const getWatchTimeFromDb = () => {
    let watchTime = 0;
    const previousWatchTime = localStorage.getItem('watchTime');
    if(previousWatchTime){
        watchTime = JSON.parse(previousWatchTime);
    }
    return watchTime;
}

export {setWatchTimeInDb, getWatchTimeFromDb};