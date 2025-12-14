function Content({ RestaurantName, Ratings, DeliveryTime, Items, Location }) {
  return (
    <div>
      <h2>{RestaurantName}</h2>
      <div className="info-section">
        <p>
          <i>
            <img
              src="/star-green-circle-round-27421.png"
              alt="star"
              className="fav-icon"
            />
          </i>
          {Ratings}
        </p>
        <ul>
          <li>{DeliveryTime}</li>
        </ul>
      </div>

      <p>{Items}</p>
      <p>{Location}</p>
    </div>
  );
}

export default Content;
