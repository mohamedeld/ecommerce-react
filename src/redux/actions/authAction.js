import { useCreateData } from "../../hooks/useCreateData"
import { CREATE_USER, GET_ERROR } from "../type"


export const createUser = (data) => async (dispatch)=>{
    try{
        const response = await useCreateData(`/api/v1/auth/signup`, data);
        dispatch({
            type:CREATE_USER,
            payload: response,
            loading:true
        })
    }catch(err){
        dispatch({
          type: CREATE_USER,
          payload: "Error" + err.response,
        });
    }
}