import React from "react";
import { Link } from "react-router-dom";
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

export default function Movies({ props }) {
  return (
    <div className="card">
      <Link to="/details" className="card-lnk-to" {...props}>
        <img src={IMGS + props.poster_path} alt={props.title} />
        <div className="card-info">
          <h3>{props.title}</h3>
          <span className={`tag ${setColor(props.vote_average)}`}>
            {props.vote_average}
          </span>
        </div>
      </Link>
    </div>
  );
}
