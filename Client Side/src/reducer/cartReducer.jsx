
const cartReducer = (state, action) => {
  
    switch(action.type){
        case "ADD_TO_CART": {
            const {id, color, amount, singleProduct} = action.payload
            console.log(color, amount);
            return{
                ...state
            }
        }





        default: return state;
    }

}

export default cartReducer