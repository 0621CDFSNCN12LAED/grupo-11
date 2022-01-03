import React from "react";
import ValueCard from "./valueCard/valueCard";

function ContentRowTop() {
  return (
    <div className="row">
      <ValueCard
        title="Total de profesionales"
        icon="fa-film"
        color="primary"
        value="450"
      />
      <ValueCard
        title="Total de usuarios"
        icon="fa-film"
        color="primary"
        value="16.599"
      />
      <ValueCard
        title="Profesiones"
        icon="fa-film"
        color="primary"
        value="21"
      />
    </div>
  );
}

export default ContentRowTop;
