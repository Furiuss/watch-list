import React from 'react'

import './ResultCard.css'

const imgURL = import.meta.env.VITE_IMG;

export const ResultCard = ({movie}) => {
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={imgURL + movie.poster_path} alt={movie.title} />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-data">
            {movie.release_date 
              ? movie.release_date.substring(0, 4)
              : "-"
            }
          </h4>
        </div>
      </div>
    </div>
  )
}
