import { Pagination } from "@mui/material";
import React from "react";

export default function CustomPages({ setPage, pageNum }) {
  const changeHandler = (page) => {
    setPage(page);
    window.scroll(0, document.getElementById("#search"));
  };

  return (
    <div className="page-cont">
      <Pagination
        onChange={(e) => changeHandler(e.target.textContent)}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        variant="outlined"
        count={pageNum}
        color="standard"
      />
    </div>
  );
}
