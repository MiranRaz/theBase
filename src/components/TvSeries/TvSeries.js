import React from "react";

const IMGS = "https://image.tmdb.org/t/p/w500";

export default function TvSeries({ name, poster_path, vote_average }) {
  return (
    <div className="card">
      <img src={IMGS + poster_path} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}
