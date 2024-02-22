//create context
//provider
//useContext hook

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import productReducer from "../reducer/productReducer";
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  isSingleError: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);


  const getProducts = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);
      dispatch({
        type: "GET_DATA_FROM_API",
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: "API_ERROR",
      });
    }
  };

  //FOR SINGLE PRODUCT API CALLING
  const getSingleProduct = async (url) => {
    dispatch({
      type: "SET_SINGLE_LOADING",
    });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
    //   console.log("single product",singleProduct);
      dispatch({
        type: "GET_DATA_FROM_SINGLEPRODUCT_API",
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({
        type: "GET_SINGLE_ERROR",
      });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
