import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GifGallery from './pages/Giphy/GifGallery';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';


const API_URL = 'https://api.giphy.com/v1/gifs/';
const API_KEY = import.meta.env.VITE_API_KEY;


const App = () => {
  const [giphyData, setGiphyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchGifs();
  }, [searchTerm]);

  const fetchGifs = async() => {
    try {

      const results = await axios.get(`${API_URL}trending?api_key=${API_KEY}`);
      setGiphyData(results.data.data);
      
    } catch(error) {
      console.log(error);
    }
  }


  const handleSearch = async() => {
    try {

      const results = await axios.get(`${API_URL}search?api_key=${API_KEY}&q=${searchTerm}`);
      setGiphyData(results.data.data);

    } catch(error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleClick = async () => {
    handleSearch();
  };

  return(
    <div className="giphy-container">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        API_KEY={API_KEY}
      /> 

      <GifGallery giphyData={giphyData} />
    </div>
  );

}

export default App;
