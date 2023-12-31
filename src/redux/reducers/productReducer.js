import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_ONE_PRODUCT, GET_PRODUCTS_LIKE, UPDATE_PRODUCT } from "../type"


const initialState = {
    products:[],
    allProducts:[],
    oneProduct:[],
    productLike:[],
    deleteProduct:[],
    updateProduct:[],
    loading:true
}

export const ProductReducer = (state = initialState, action)=>{
    switch (action.type) {
      case CREATE_PRODUCT:
        return {
          ...state,
          products: action.payload,
          loading: false,
        };
      case GET_ALL_PRODUCT:
        return {
          ...state,
          allProducts: action.payload,
          loading: false,
        };
      case GET_ONE_PRODUCT:
        return {
          oneProduct: action.payload,
          loading: false,
        };
      case GET_PRODUCTS_LIKE:
        return {
          ...state,
          productLike: action.payload,
          loading: false,
        };
      case UPDATE_PRODUCT:
        return {
          ...state,
          updateProduct: action.payload,
          loading:false
        }
      case DELETE_PRODUCT:
        return {
          ...state,
          deleteProduct: action.payload,
          loading: false,
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