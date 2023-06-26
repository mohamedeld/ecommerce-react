import { CREATE_SUB_CATEGORY, GET_ERROR } from "../type";

const initialState={
    subCategory:[],
    loading:false
}

export const subCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SUB_CATEGORY:
            return {
              subcategory:action.payload,
              loading:false
            };
        case GET_ERROR:
            return {
              loading: true,
              subcategory:action.payload,
            };
        default:
            return state;
    }
};