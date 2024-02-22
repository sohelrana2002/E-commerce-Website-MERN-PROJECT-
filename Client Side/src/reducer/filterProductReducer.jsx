const filterProductReducer = (state, action) =>{

    switch(action?.type){  

        case "IS_SINGLE_FILTERLOADING":{
            return{
                ...state,
                isFilterLoading: true,
            }
        };

        case "FILTER_PRODUCTS_DATA":
            // ================GET PRICE ARRAY THOUGH MAP=============
            let priceArray = action?.payload?.map((curIndex) => curIndex?.price);

            // ==================1ST WAY (MAX VALUE)=============
            //==========apply method works for convert array to integer value======
            // console.log(Math.max.apply(null, priceArray));

            // =================2ND WAY (MAX VALUE) (VERY USEFULL)=================
            let maxPrice = priceArray?.reduce((initialValue, curIndex) => Math?.max(initialValue, curIndex), 0)
            // console.log(maxPrice);

            // ==================3RD WAY (MAX VALUE)==================
            // let maxPrice = Math.max(...priceArray);
            // console.log(maxPrice);




            return {
              ...state,
              //products values cpy in filterProducts variable
              filterProducts: [...action?.payload],
              allFilterProducts: [...action?.payload],
              isFilterLoading: false,
              filters:  {
                ...state.filters,
                maxPrice: maxPrice,
                price: maxPrice,
            }
            
            };

            case "SET_GRIDVIEW":
                return{
                    ...state,
                    gridView: true,
                }

            case "SET_LISTVIEW":
                return{
                    ...state,
                    gridView:false,
                }

            case "GET_SORTING_VALUE":
                return{
                    ...state,
                    sortingValue: action?.payload,
                }

            case "GET_SORTING_PRODUCTS":
                let newSortData;
                const { filterProducts, sortingValue } = state;
                let tempSortProduct = [...filterProducts];//copy of filterProducts in tempSortProduct

                // ============SORTING FUNCTION ARGUMENT IN sort();===========
                const sortingProducts = (a, b) =>{
                    if(sortingValue === "lowest"){
                        return a?.price - b?.price;
                    }

                    if(sortingValue === "hig?hest"){
                        return b?.price - a?.price;
                    }

                    if(sortingValue === "a-z"){
                        return a?.name?.localeCompare(b?.name);
                    }

                    if(sortingValue === "z-a"){
                        return b?.name?.localeCompare(a?.name);
                    }
                }

                newSortData = tempSortProduct?.sort(sortingProducts);

                return{
                    ...state,
                    filterProducts: newSortData,
                    isFilterLoading: false,
                }


            case "UPDATE_FILTER_VALUE":
                const { name, value } = action?.payload;

                return{
                    ...state,
                    filters: {
                        ...state?.filters,
                        [name]: value,
                    }
                }

            case "FILTER_PRODUCTS":
                let { allFilterProducts } = state;
                let tempFilterProducts = [...allFilterProducts];
                let getTempFilterProducts = [...allFilterProducts];

                const { text , category, company, colors, price } = state?.filters;
                if(text){
                    tempFilterProducts = tempFilterProducts?.filter((curIndex) => curIndex?.name?.toLowerCase()?.includes(text));
                }
               
                // ==========VALUE FOR CATEGORY===========
                if (category !== "all") {
                  tempFilterProducts = tempFilterProducts.filter(
                    (curIndex) => curIndex.category === category
                  );
                }
                //  ==========VALUE FOR COMPANY===========
                if (company !== "all") {
                  tempFilterProducts = tempFilterProducts?.filter(
                    (curIndex) => curIndex?.company?.toLowerCase() ===
                        company?.toLowerCase()
                  );
                }

                //  ==========VALUE FOR COLORS===========
                 if (colors !== "all") {
                   tempFilterProducts = tempFilterProducts?.filter(
                     (curIndex) => curIndex?.colors?.includes?.(
                         colors?.toLowerCase()
                       )
                   );
                 }

                if(price === 0){
                    tempFilterProducts = tempFilterProducts?.filter((curIndex) => curIndex?.price == price);
                }else{
                    tempFilterProducts = tempFilterProducts?.filter((curIndex) => curIndex?.price <= price);
                }
                
                
                return{
                    ...state,
                    filterProducts: tempFilterProducts,
                    isFilterLoading: false,
                }

            case "CLEAR_FILTERS":
                return({
                    ...state,
                    filters: {
                        ...state.filters,
                        text: undefined,
                        category: "all",
                        company: "all",
                        colors: "all",
                        maxPrice: state?.filters?.maxPrice,
                        price: state?.filters?.maxPrice,
                        minPrice: state?.filters?.minPrice,
                      }
                })




        default: return state;
    }
}

export default filterProductReducer;