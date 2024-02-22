import FilterProducts from "../../components/FilterProducts/FilterProducts";
import ProductsSort from "../../components/ProductsSort/ProductsSort";
import ProductsList from "../../components/ProductsList/ProductsList";


import "./Products.css";

const Products = () => {

  return (
    <section>
      <div className="container productsPage__container">
        <div className="filterSection">
          <FilterProducts />
        </div>

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
