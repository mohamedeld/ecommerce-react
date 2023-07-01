import { useCreateDataWithImage } from "../../hooks/useCreateData"
import { CREATE_PRODUCT, GET_ERROR } from "../type"


export const CreateProduct = (data)=> async (dispatch)=>{
    try{
        const response = await useCreateDataWithImage(`/api/v1/products`,data);
        dispatch({
            type:CREATE_PRODUCT,
            payload:response,
            loading:true
        })
    }catch(err){
        dispatch({ type: GET_ERROR, payload:err})
    }
    
}