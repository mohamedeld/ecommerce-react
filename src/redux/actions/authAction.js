import { useCreateData } from "../../hooks/useCreateData"
import { CREATE_USER, GET_ERROR, LOGIN_USER } from "../type"


export const createUser = (data) => async (dispatch)=>{
    try{
        const response = await useCreateData("/api/v1/auth/signup", data);
        dispatch({
            type:CREATE_USER,
            payload: response,
            loading:true
        })
    }catch(e){
        dispatch({
            type: CREATE_USER,
            payload: "Error" + e.response,
        });
    }
}

export const loginUser = (data)=>async (dispatch)=>{
    try{
        const response = await useCreateData("/api/v1/auth/login", data);
        dispatch({
            type:LOGIN_USER,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:LOGIN_USER,
            payload:e.response,
        })
    }
}
