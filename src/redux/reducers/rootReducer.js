import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import { subCategoryReducer } from "./subCategoryReducer";
import { ProductReducer } from "./productReducer";
export default combineReducers({
    allCategory:categoryReducer,
    allBrand:brandReducer,
    subCategory:subCategoryReducer,
    allProduct:ProductReducer
})