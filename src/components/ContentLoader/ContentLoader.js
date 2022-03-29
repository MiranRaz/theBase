import React from "react";
import { CircularProgress } from "@mui/material";

export default function ContentLoader() {
  return (
    <div className="loader-cont">
      <div className="loader">
        <CircularProgress />
      </div>
    </div>
  );
}
