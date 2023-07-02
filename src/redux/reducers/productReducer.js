import { CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_ONE_PRODUCT, GET_PRODUCTS_LIKE } from "../type"


const initialState = {
    products:[],
    allProducts:[],
    oneProduct:[],
    productLike:[],
    loading:true
}

export const ProductReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_PRODUCT:
            return{
                ...state,
                products:action.payload,
                loading:false
            }
        case GET_ALL_PRODUCT:
            return{
                ...state,
                allProducts:action.payload,
                loading:false
            }
        case GET_ONE_PRODUCT:
            return{
                oneProduct:action.payload,
                loading:false
            }
        case GET_PRODUCTS_LIKE:
            return {
                ...state,
              productLike:action.payload,
              loading:false
            };
        case GET_ERROR:
            return {
              loading: true,
              products: action.payload,
            };
        default:
            return state;
    }
}