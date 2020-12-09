import React from "react";
import "./CheckoutProduct.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function getUnfilled(rating) {
  if (rating) {
    let x = 5 - rating;
    return x;
  } else {
    return 5;
  }
}

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue(); //API to get the state of the basket
  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <StarIcon style={{ color: "rgb(240, 193, 75)" }} />;
            })}
          {Array(getUnfilled(rating))
            .fill()
            .map((_, i) => {
              return <StarBorderIcon style={{ color: "rgb(240, 193, 75)" }} />;
            })}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket} className="checkoutProduct-button">
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
