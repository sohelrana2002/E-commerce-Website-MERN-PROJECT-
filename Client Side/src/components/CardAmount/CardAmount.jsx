import { FaPlus, FaMinus } from "react-icons/fa";
import "./CardAmount.css";

const CardAmount = ({ setDecrement, setIncrement, amount }) => {
  return (
    <>
      <div className="card__amount">
        <button onClick={setDecrement}>
          <FaMinus className="card__amount-icon" />
        </button>
        <p>{amount}</p>
        <button onClick={setIncrement}>
          <FaPlus className="card__amount-icon" />
        </button>
      </div>
    </>
  );
};

export default CardAmount;
