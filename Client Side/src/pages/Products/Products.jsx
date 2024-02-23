import { useEffect, useState, useRef } from "react";
import FilterProducts from "../../components/FilterProducts/FilterProducts";
import ProductsSort from "../../components/ProductsSort/ProductsSort";
import ProductsList from "../../components/ProductsList/ProductsList";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

import "./Products.css";

const Products = () => {
  const menuRef = useRef();
  const [isProductMenuShowing, setIsProductMenuShowing] = useState(false);

  useEffect(() => {
    const handleOutSideNav = (e) => {
      if(!menuRef.current.contains(e.target)){
        setIsProductMenuShowing(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideNav);
  }, []);

  const handleProductMenu = () => {
    setIsProductMenuShowing((prev) => !prev);
  };

  return (
    <section>
      <div className="container productsPage__container">
        {/* =======product menu bar========= */}
        <div className="small__device-product">
          <div className="productsPage-menubar"
           onClick={handleProductMenu}>
            {isProductMenuShowing ? <IoMdClose /> : <TfiMenuAlt />}
          </div>
        </div>

        {/* =======filter section====== */}
        <div ref={menuRef} className={`filterSection ${isProductMenuShowing && "active"}`}>
          <FilterProducts />
        </div>

        {/* =====product section======== */}
        <div className="products__section">
          <div className="sort__section">
            <ProductsSort />
          </div>

          <div className="productsLis__section">
            <ProductsList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
