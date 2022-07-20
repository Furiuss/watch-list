import React, { useEffect, useState } from "react";
import {ResultCard} from '../components/ResultCard'

import "./Add.css";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
  };
  
  useEffect(() => {
    if(!query){
      setResults([])
      return;
    };

    const searchWithQuery = `${searchUrl}?${apiKey}&query=${query}&language=en-US&page=1`
    getSearchedMovies(searchWithQuery);
  }, [query])

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setResults(data.results);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results?.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <ResultCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};