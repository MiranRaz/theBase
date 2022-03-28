import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Intro() {
  return (
    <div className="frame">
      <div className="intro">
        <h1 className="heading">Top 30</h1>
        <a href="#search" className="arrow">
          <div className="cont">
            <KeyboardArrowDownIcon
              sx={{
                fontSize: 140,
              }}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
