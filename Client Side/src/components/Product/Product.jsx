import { NavLink } from "react-router-dom";
import ProductPrice from "../ProductPrice/ProductPrice";

import "./product.css";

const Product = (props) => {
  const { id, image, name, price, category, bg } = props;

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div
        className="card"
        style={
          bg === "gray"
            ? { background: "white" }
            : { background: "rgba(0, 0, 0, 0.08)" }
        }
      >
        <div className="card__image">
          <img src={image} alt={name} />
          <span className="card__price">{category}</span>
        </div>

        <div className="card__data">
          <div>
            <span>{name}</span>
            <ProductPrice price={price} />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
