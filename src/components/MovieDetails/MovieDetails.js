import React from "react";
import { Link } from "react-router-dom";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Avatar } from "@mui/material";

export default function MovieDetails(props) {
  return (
    <div className="details-main">
      <div className="details-back">
        <Link to="/">
          <Avatar style={{ backgroundColor: "#032541" }}>
            <ChevronLeftIcon />
          </Avatar>
        </Link>
      </div>
      <div className="details-headings">
        <div className="details-image">
          <img src={props.poster_path} alt={props.title} />
        </div>
        <div className="details-overview">
          <div className="details-title">
            {/* <h1>{props.title}</h1> */}
            <h1>TITLE</h1>
          </div>
          <div className="details-fill">
            {/* <h1 className="tag + green">{props.vote_average}</h1>
            <h1 style={{ color: "red" }}>{props.original_language}</h1>
            <h1>{props.release_date}</h1> */}
            <h1 className="tag + green">9.1</h1>
            <h1 style={{ color: "red" }}>Eng</h1>
            <h1>2020</h1>
          </div>
          <div className="details-description">
            {/* <p className="details-text">{props.overview}</p> */}
            <p className="details-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
