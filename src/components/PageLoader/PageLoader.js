import React from "react";
import MovieIcon from "@mui/icons-material/Movie";

export default function PageLoader() {
  return (
    <div className="loader-cont">
      <div className="main-loader">
        <MovieIcon style={{ color: "#ac2826", fontSize: "200px" }} />
      </div>
    </div>
  );
}
