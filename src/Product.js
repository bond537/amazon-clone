import React from "react";
import "./Product.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function getUnfilled(rating) {
  if (rating) {
    let x = 5 - rating;
    return x;
  } else {
    return 5;
  }
}

function Product({ id, title, image, price, rating, alt }) {
  if (!rating) {
    rating = 0;
  }
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch action to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast(title + " Added to Cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
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
      </div>
      <img src={image} alt={alt} />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
