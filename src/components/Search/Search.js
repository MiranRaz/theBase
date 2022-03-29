import React from "react";

export default function Search(query) {
  const getSearchTerm = (e) => {
    query.onChange(e.target.value);
  };
  return (
    <div className="container">
      <div className="searcher">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter at least 3 characters..."
            value={query.query}
            onChange={getSearchTerm}
          />
        </div>
      </div>
    </div>
  );
}
