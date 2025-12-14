import Header from "./Header";
import Content from "./Content";

function ItemCard({ items }) {
  return (
    <div className="item-card">
      <Header Img={items.Img} Price={items.Price} />
      <Content
        RestaurantName={items.RestaurantName}
        Ratings={items.Ratings}
        DeliveryTime={items.DeliveryTime}
        Items={items.Items}
        Location={items.Location}
      />
    </div>
  );
}

export default ItemCard;
