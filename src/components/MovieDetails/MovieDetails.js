import React from "react";
import MAIN from "../../img/MAIN.jpg";

export default function MovieDetails() {
  return (
    <div className="details-main">
      <div className="details-headings">
        <div className="details-image">
          <img src={MAIN} alt="description" />
        </div>
        <div className="details-overview">
          <div className="details-title">
            <h1>TITLE</h1>
          </div>
          <div className="details-fill">
            <h1 className="tag + green">9.6</h1>
            <h1 style={{ color: "red" }}>HD</h1>
            <h1>MOVIE</h1>
          </div>
          <div className="details-description">
            <p className="details-text">
              Two former Army Rangers are paired against their will on the road
              trip of a lifetime. Army Ranger Briggs (Channing Tatum) and Lulu
              (a Belgian Malinois dog) buckle into a 1984 Ford Bronco and race
              down the Pacific Coast in hopes of making it to a fellow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
