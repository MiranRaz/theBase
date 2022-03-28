import React from "react";

const IMGS = "https://image.tmdb.org/t/p/w500";

const setColor = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

export default function TvSeries({ name, poster_path, vote_average }) {
  return (
    <div className="card">
      <img src={IMGS + poster_path} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <span className={`tag ${setColor(vote_average)}`}>{vote_average}</span>
      </div>
    </div>
  );
}
