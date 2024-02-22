const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_DATA_FROM_API":
      const featureProductsData = action.payload.filter((curElement) => {
        return curElement.featured === true;
      });
      // console.log(featureProductsData);

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureProductsData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "GET_DATA_FROM_SINGLEPRODUCT_API":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "GET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isSingleError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
