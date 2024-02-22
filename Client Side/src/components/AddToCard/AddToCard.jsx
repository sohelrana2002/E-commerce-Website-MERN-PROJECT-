import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import CardAmount from "../CardAmount/CardAmount";
import { useCartContext } from "../../context/cartContext";
import "./addToCard.css";


const AddToCard = ({ singleProduct }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock, } = singleProduct;
  const [color, setColor] = useState(colors?.[0]);
  const [amount, setAmount] = useState(1);

  const setIncrement = () => {
    amount < stock ? setAmount(amount + 1) : amount(stock);
  };

  const setDecrement = () => {
    amount > 1 ? setAmount(amount - 1) : amount(1);
  };

  return (
    <>
      <div className="color">
        <span>Color: </span>
        {colors &&
          colors?.map((curElement, index) => {
            return (
              <button
                key={index}
                style={{ background: curElement }}
                className={
                  stock > 0 && color === curElement
                    ? "color__circle active"
                    : "color__circle"
                }
                onClick={() => setColor(curElement)}
              >
                {stock > 0 && color === curElement ? (
                  <AiOutlineCheck className="color__icon" />
                ) : null}
              </button>
            );
          })}
      </div>
      
      {/*  ===============CARD AMMOUNT============= */}
      <CardAmount
        amount={amount}
        setIncrement={setIncrement}
        setDecrement={setDecrement}
      />

      {/* ===========ADD TO CART SECTION=========== */}
      <NavLink to="/cart" className="card__btn"
        onClick={() =>addToCart(id, color, amount, singleProduct)}
      >
        <button className="btn">Add To Card</button>
      </NavLink>
        

    </>
  );
};

export default AddToCard;
