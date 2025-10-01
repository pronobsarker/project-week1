// src/components/TruckCard.jsx

import React from "react";

const TruckCard = ({
  name, location, gmap, price, description, image, resource, category
}) => (
  <div className="dish-card" aria-label={name} tabIndex={0}>
    <img
      src={image}
      alt={name}
      className="dish-img"
      loading="lazy"
      onError={e => e.target.style.display='none'}
    />
    <h3>{name}</h3>
    <div className="location">{location}</div>
    <div className="desc"><em>{description}</em></div>
    {price && <div className="price">Price: {price}</div>}
    <div className="actions">
      <a href={gmap} target="_blank" rel="noopener noreferrer">
        <button aria-label={`View ${name} location on Google Maps`}>
          View Location
        </button>
      </a>
      {resource &&
      <a
        href={resource}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "10px" }}
      >
        <button aria-label={`Learn more about ${name}`}>Learn More</button>
      </a>
      }
    </div>
  </div>
);

export default TruckCard;
