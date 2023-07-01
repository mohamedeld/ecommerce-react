
import { CREATE_BRAND, GET_ALL_BRANDS, GET_ERROR, GET_ONE_BRAND } from "../type"

const initialState = {
    brand :[],
    oneBrand:[],
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
        case GET_ONE_BRAND:
          return {
            oneBrand:action.payload,
            loading:false
          }
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