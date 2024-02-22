import { useProductContext } from "../../context/productContext";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";

import "./featureProducts.css";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  const backgound = "gray";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="featureProducts__bg">
      <div className="container featureProducts__container">
        <h5>CHECK NOW!</h5>
        <h1 className="heading">Our Feature Services</h1>

        <div className="featureProducts__content">
          {featureProducts &&
            featureProducts?.map((curElement) => {
              return (
                <Product key={curElement.id} {...curElement} bg={backgound} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
