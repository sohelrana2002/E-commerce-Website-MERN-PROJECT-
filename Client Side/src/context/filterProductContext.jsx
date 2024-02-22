import { createContext, useContext, useEffect, useReducer } from "react";
import filterProductReducer from "../reducer/filterProductReducer";
import { useProductContext } from "./productContext";

const FilterProductContext = createContext();

const initialState = {
  isFilterLoading: false,
  filterProducts: [],
  allFilterProducts: [],
  gridView: true,
  sortingValue: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const FilterProductProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(filterProductReducer, initialState);

  // ================FOR GRID VIEW===============
  const setGridView = () => {
    dispatch({
      type: "SET_GRIDVIEW",
    });
  };

  // =================FOR LIST VIEW====================
  const setListView = () => {
    dispatch({
      type: "SET_LISTVIEW",
    });
  };

  // ==============FOR SORTING LIST==============
  const handleSorting = (event) => {
    const getSortValue = event?.target?.value;
    // console.log(getSortValue);
    dispatch({
      type: "GET_SORTING_VALUE",
      payload: getSortValue,
    });
  };

  // =============FOR UPDATE FILTER PRODUCTS============
  const updateFilterValue = (event) => {
    const name = event?.target?.name;
    const value = event?.target?.value;
    dispatch({
      type: "UPDATE_FILTER_VALUE",
      payload: { name, value },
    });
  };

  // ===================FOR CLEAR FILTERS==================
  const clearFilter = () => {
    dispatch({
      type: "CLEAR_FILTERS",
    });
  };

  // ==============FOR SORTING PRODUCTS==============
  useEffect(() => {
    dispatch({
      type: "IS_SINGLE_FILTERLOADING",
    });

    dispatch({
      type: "FILTER_PRODUCTS",
    });

    dispatch({
      type: "GET_SORTING_PRODUCTS",
    });
  }, [products, state?.sortingValue, state?.filters]);

  
  // ===============FOR FILTER PRODUCTS===============
  useEffect(() => {
    dispatch({
      type: "FILTER_PRODUCTS_DATA",
      payload: products,
    });
  }, [products]);

  return (
    <FilterProductContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        handleSorting,
        updateFilterValue,
        clearFilter,
      }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};

const useFilterProductsContext = () => {
  return useContext(FilterProductContext);
};

export {
  FilterProductProvider,
  FilterProductContext,
  useFilterProductsContext,
};
