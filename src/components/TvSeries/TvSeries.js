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

const upScroller = () => {
  window.scrollTo(0, 0);
};

export default function TvSeries({ props }) {
  return (
    <div className="card">
      <Link
        to={`/details/${props.id}`}
        state={props}
        onClick={upScroller}
        className="card-lnk-to"
      >
        <img src={IMGS + props.poster_path} alt={props.name} />
        <div className="card-info">
          <h3>{props.name}</h3>
          <span className={`tag ${setColor(props.vote_average)}`}>
            {props.vote_average}
          </span>
        </div>
      </Link>
    </div>
  );
}
