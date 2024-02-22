import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import Loading from "../../components/Loading/Loading";
import { PageNavigation } from "../../components/PageNavigation/PageNavigation";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductPrice from "../../components/ProductPrice/ProductPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaTachometerAlt } from "react-icons/fa";
import Stars from "../../components/Stars/Stars";
import AddToCard from "../../components/AddToCard/AddToCard";

import "./singleProduct.css";

const API = "https://api.pujakaitem.com/api/products";
// ===================CHECKING API FOR ID ================
// const API = "https://api.pujakaitem.com/api/products?id=thapaserialnoa";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  // console.log("idd",id)
  const { company, description, name, reviews, price, stars, stock, image } =
    singleProduct;

  // =============SINGLE PRODUCT API CALLING===============
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <Loading />;
  }

  return (
    <section>
      <PageNavigation title={name} />

      <div className="container singleProduct__container">
        <div className="image">
          <ProductImage setImage={image} />
        </div>

        {/* ===============SINGLE PRODUCT CONTENT DETAILS========== */}
        <div className="singleProduct__content">
          <h2 className="product__name">{name}</h2>
          <div className="star">
            <Stars stars={stars} reviews={reviews} />
          </div>

          <p className="product__data__price">
            MRP:{" "}
            <del>
              <ProductPrice price={price + 250000} />
            </del>
          </p>

          <p className="product__data__price new_data">
            Deal of the day: <ProductPrice price={price} />
          </p>

          <p className="des">{description}</p>

          <div className="delivary">
            <div>
              <span>
                <TbTruckDelivery />
              </span>
              <p>Free Delivery</p>
            </div>

            <div>
              <span>
                <FaTachometerAlt />
              </span>
              <p>30 Days Replacement</p>
            </div>

            <div>
              <span>
                <RiSecurePaymentLine />
              </span>
              <p>Secure Payment System</p>
            </div>

            <div>
              <span>
                <VscWorkspaceTrusted />
              </span>
              <p>2 Year Warranty</p>
            </div>
          </div>

          <p className="available">
            Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
          </p>

          <p className="id">
            ID: <span>{id}</span>
          </p>
          <p className="brand">
            Brand: <span>{company}</span>
          </p>
          <hr />

          <AddToCard singleProduct={singleProduct} />
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
