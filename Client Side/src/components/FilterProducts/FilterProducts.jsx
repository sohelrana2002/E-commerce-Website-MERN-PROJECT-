import { AiOutlineCheck } from "react-icons/ai";
import { useFilterProductsContext } from "../../context/filterProductContext";
import "./FilterProducts.css";
import ProductPrice from "../ProductPrice/ProductPrice";
import Loading from '../../components/Loading/Loading'

const FilterProducts = () => {
  const {
    filters: { text , category, company, colors, maxPrice, price, minPrice },
    updateFilterValue,
    allFilterProducts,
    clearFilter,
    isFilterLoading,
  } = useFilterProductsContext();
  // console.log("colors",colors, "company",company, "category",category);

  // =========COMMON FUNCTION FOR FILTER SECTION=============
  const getUniqueData = (data, type) =>{
    let newValue = data?.map((curIndex) =>{
      return curIndex?.[type];
    })
    if(type === "colors"){
      //marge two array and delete duplicat data
      return (newValue = ["all", ...new Set([]?.concat?.(...newValue))]);
    }else{
      // =======FOR UNIQUE DATA==============
      return (newValue = ["all", ...new Set(newValue)]);
      // console.log(newValue);
    }

  }


  // ================FOR CATEGORY DATA=============
  const categoryData = getUniqueData?.(allFilterProducts, "category");
  // console.log(categoryData);

  // ================FOR COMPANY DATA=============
  const companyData = getUniqueData?.(allFilterProducts, "company");
  // console.log(companyData);

  // ================FOR COLOR DATA=============
  const colorsData = getUniqueData?.(allFilterProducts, "colors");
  // console.log("down",colorsData);


  if(isFilterLoading){
    return <Loading />
  }

  return (
    <div className="filterProducts__container">
      <div className="filter__search">
        <form onSubmit={(e) => e?.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
      </div>

      {/* ==============FILTER CATEGORY============= */}
      <div className="filter__category">
        <p className="filter__heading">Category</p>
        <div className="filter__category-name">
          {categoryData &&
            categoryData?.map((curIndex, index) => {
              return (
                <button
                  type="button"
                  name="category"
                  value={curIndex}
                  key={index}
                  onClick={updateFilterValue}
                >
                  {curIndex}
                </button>
              );
            })}
        </div>
      </div>

      {/* ============FILTER COMPANY=========== */}
      <div className="filter__company">
        <p className="filter__heading">Company</p>
        <div className="filter__company-name">
          <form
            onSubmit={(e) => e.preventDefault()}
            onClick={updateFilterValue}
          >
            <select name="company" id="company">
              {companyData &&
                companyData?.map((curIndex, index) => {
                  return (
                    <option key={index} name="company" value={curIndex}>
                      {curIndex}
                    </option>
                  );
                })}
            </select>
          </form>
        </div>
      </div>

      {/* ===============FILTER COLORS============== */}
      <div className="filter__colors">
        <p className="filter__heading">Colors</p>

        <div className="filter__colors-name">
          {colorsData &&
            colorsData?.map((curIndex, index) => {
              return (
                <button
                  type="button"
                  onClick={updateFilterValue}
                  key={index}
                  className={
                    curIndex === colors ? "span__color active" : "span__color"
                  }
                  name="colors"
                  value={curIndex}
                  style={{ background: `${curIndex}` }}
                >
                  {curIndex === "all" ? "All" : null}
                  <span className="color__tik">
                    {curIndex !== "all" && curIndex === colors ? (
                      <AiOutlineCheck />
                    ) : null}
                  </span>
                </button>
              );
            })}
        </div>
      </div>

      {/* ===================FILTER PRICE============ */}
      <div className="filter_price">
        <p className="filter__heading">Price</p>
        <p>
          <ProductPrice price={price} />
        </p>
        <div className="filter_input-range">
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>
      </div>

      {/* ================FILTER CLEAR================= */}
      <div className="filter_clear">
        <button className="btn" onClick={clearFilter}>Clear Filter</button>
      </div>
    </div>
  );
};

export default FilterProducts;
