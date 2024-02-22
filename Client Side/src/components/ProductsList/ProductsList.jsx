import GridViewProducts from "../GridViewProducts/GridViewProducts";
import ListViewProducts from "../ListViewProducts/ListViewProducts";
import { useFilterProductsContext } from "../../context/filterProductContext";
import "./ProductsList.css";

const ProductsList = () => {
  const { filterProducts, gridView  } = useFilterProductsContext?.();

  if(gridView === true){
    return <GridViewProducts filterProducts={filterProducts} />
  }

  if(gridView ===  false){
    return <ListViewProducts filterProducts={filterProducts} />
  }
  
};

export default ProductsList;
