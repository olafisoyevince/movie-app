import { useState, useEffect } from "react";
import CardList from "./components/CardList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const URL = `http://www.omdbapi.com/?s=${searchField}&apikey=2c71b095`;

    const fetchData = setTimeout(() => {
      axios.get(URL).then((response) => {
        setMovies(response.data.Search);
      });
    }, 1000);
    return () => clearTimeout(fetchData);
  }, [searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SearchBox onChangeHandler={onSearchChange} />
      <div className="pb-12">
        <CardList movies={movies} searchField={searchField} />
      </div>
    </div>
  );
};

export default App;
