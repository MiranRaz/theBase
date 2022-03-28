import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Intro() {
  return (
    <div className="frame">
      <div className="intro">
        <h1 className="heading">Top 30</h1>
        <a href="#search" className="arrow">
          <KeyboardArrowDownIcon
            sx={{
              alignItems: "center",
              justifyContent: "center",
              fontSize: 140,
            }}
          />
        </a>
      </div>
    </div>
  );
}
