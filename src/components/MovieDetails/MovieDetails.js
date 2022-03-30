import React from "react";
import { Link, useLocation } from "react-router-dom";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Avatar } from "@mui/material";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

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

export default function MovieDetails(props) {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="details-main">
      <div className="details-back">
        <Link to="/theBase/">
          <Avatar style={{ backgroundColor: "#ac2826" }}>
            <ChevronLeftIcon />
          </Avatar>
        </Link>
      </div>
      <div className="details-headings">
        <div className="details-image">
          <img src={IMGS + data.poster_path} alt={data.title} />
          <div className="details-trailer">
            <VideoPlayer />
          </div>
        </div>

        <div className="details-overview">
          <div className="details-title">
            <h1>{data.title}</h1>
          </div>
          <div className="details-fill">
            <h1 className={`tag ${setColor(data.vote_average)}`}>
              {data.vote_average}
            </h1>
            <h1 style={{ color: "#5D0000" }}>{data.original_language}</h1>
            <h1>{data.release_date}</h1>
          </div>
          <div className="details-description">
            <p className="details-text">{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
