import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./stars.css";

const Stars = ({ stars, reviews }) => {
   
  const ratingStars = Array.from({ length: 5 }, (curElement, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="star__icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="star__icon" />
        ) : (
          <AiOutlineStar className="star__icon" />
        )}
      </span>
    );
  });

  return (
    <div className="rating__stars">
        <span>{ratingStars}</span>
        <span>({reviews} customer reviews)</span>
    </div>
  )
};

export default Stars;
