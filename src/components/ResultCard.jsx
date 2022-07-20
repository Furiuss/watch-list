import React from 'react'

const imgURL = import.meta.env.VITE_IMG;

export const ResultCard = ({movie}) => {
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={imgURL + movie.poster_path} alt={movie.title} />
        ) : (
          <div className="filler-poster"></div>
        )
      }
      </div>
    </div>
  )
}
