import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [ipAddress, setIpAddress] = useState({});

  const handleTrack = (ip) => {
    fetch(`https:ipinfo.io/${ip}?token=2dc5afbfbc1337`)
      .then(res => res.json())
      .then(data => setIpAddress(data))
  }

  useEffect(() => {
    const getIpAddress = async () => {
      const res = await fetch('https://api.ipify.org/?format=json');
      const data = await res.json();
      handleTrack(data.ip);
    }
    getIpAddress();
    
  }, [])

  return (
    <>
      <h1>hello , how are you</h1>
      {
        ipAddress.country && <div>
          <h3>Country : {ipAddress.country}</h3>
          <h3>City : {ipAddress.city}</h3>
          <h3>Region : {ipAddress.region}</h3>
          <h3>Address : {ipAddress.abuse.address}</h3>
        </div>
      }
    </>
  )
}

export default App
