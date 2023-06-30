import { useCreateData } from "../../hooks/useCreateData"
import { useGetData } from "../../hooks/useGetData";
import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";

export const createSubCategory = (data)=> async (dispatch)=>{
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

export const getOneCategory = (id) => async (dispatch)=>{
    try{
        const response = await useGetData(
          `/api/v1/categories/${id}/subcategories`
        );
        dispatch({
          type: GET_SUB_CATEGORY,
          payload:response,
          loading:true
        });
    }catch(err){
        dispatch({
            type:GET_ERROR,
            payload:err
        })
    }
}