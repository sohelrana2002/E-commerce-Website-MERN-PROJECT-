import { useState } from "react";
import "./productImage.css";

const ProductImage = ({ setImage = [{ url: "" }] }) => {
  const [imageShow, setImageShow] = useState(setImage[0]);

  return (
    <div className="product__image">
      {/* ========IMAGE MAPPING============ */}
      <div>
        {setImage &&
          setImage?.map((curElement, index) => {
            return (
              <img
                key={index}
                src={curElement.url}
                alt="{curElement.filename}"
                onClick={() => setImageShow(curElement)}
              />
            );
          })}
      </div>

      {/* ================BIG IMAGE=============== */}
      <div>
        <img src={imageShow.url} alt="" />
      </div>
    </div>
  );
};

export default ProductImage;
