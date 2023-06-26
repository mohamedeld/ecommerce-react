
import { CREATE_BRAND, GET_ALL_BRANDS, GET_ERROR } from "../type"

const initialState = {
    brand :[],
    loading:true
}
const brandReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_BRANDS:
            return {
              ...state,
              brand: action.payload,
              loading: false,
            };
        case CREATE_BRAND:
            return {
              brand: action.payload,
              loading: false,
            };
        case GET_ERROR:
            return {
              loading: true,
              brand: action.payload,
            };
        default:
            return state
    }
}
export default brandReducer;