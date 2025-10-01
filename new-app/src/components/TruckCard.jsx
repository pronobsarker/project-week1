export default function TruckCard({ dish, place, description, image, mapsUrl, price = "Price not listed" }) {
  return (
    <article className="card" role="listitem">
      {image && <img className="card__img" src={image} alt={`${dish} at ${place}`} />}
      <div className="card__body">
        <h3 className="card__title">{dish}</h3>
        <p className="card__meta">{place}</p>
        <p className="card__price">{price}</p>
        {description && <p className="card__desc">{description}</p>}
        {mapsUrl && (
          <a className="btn" href={mapsUrl} target="_blank" rel="noreferrer">
            View Location
          </a>
        )}
      </div>
    </article>
  );
}