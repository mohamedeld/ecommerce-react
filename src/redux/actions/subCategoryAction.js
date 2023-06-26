import { useCreateData } from "../../hooks/useCreateData"
import { CREATE_SUB_CATEGORY, GET_ERROR } from "../type";

const createSubCategory = (data)=> async (dispatch)=>{
    try{
        const response = await useCreateData(`/api/v1/subcategories`, data);
        dispatch({
            type:CREATE_SUB_CATEGORY,
            payload:response,
            loading:true
        })
    }catch(err){
        dispatch({
            type:GET_ERROR,
            payload:err
        })
    }
    
    
}
export default createSubCategory;