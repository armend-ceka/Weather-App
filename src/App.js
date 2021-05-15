import React, { useState, useEffect } from "react"
import './App.css';
import Navbar from './navbar'
import axios from 'axios';
import Content from './content';
import Error from './Error.js'

function App() {
  const [error, setError] = useState(false)
  const [displayCity, setDisplayCity] = useState("Tetovo")
  const [city, setCity] = useState("Tetovo")
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true)

  function handleCityChange(event) {
    setCity(event.target.value);
  };

  const fetchData = async (city) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=af373823802b420383a125035211405&q=${city}&days=10&aqi=no&alerts=no`);
      setData(response.data);
      setLoading(false)
    }
    catch (err) {
      setError(true)
    }
  };

  useEffect(() => {
    fetchData(city);
  }, []);

  function handleSearch() {
    setError(false)
    setDisplayCity(city)
    fetchData(city)
  }
  return (
      <div className="App">
        <Navbar city={displayCity} onCityChange={handleCityChange} onSearch={handleSearch} />
        {error? <Error/> : !isLoading ? <Content data={data} /> : <h1>Loading</h1>}
      </div>
  );
}

export default App;
