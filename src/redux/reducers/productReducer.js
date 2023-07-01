import { CREATE_PRODUCT, GET_ERROR } from "../type"


const initialState = {
    products:[],
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
        case GET_ERROR:
            return {
              loading: true,
              products: action.payload,
            };
        default:
            return state;
    }
}