import { useCreateData } from "../../hooks/useCreateData"
import { useGetDataWithToken } from "../../hooks/useGetData";
import { CREATE_USER, FORGET_PASSWORD, GET_CURRENT_USER, GET_ERROR, LOGIN_USER } from "../type"


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

export const getLoggedUser = () => async (dispatch)=>{
    try{
        const response = await useGetDataWithToken('/api/v1/users/getMe');
        dispatch({
            type:GET_CURRENT_USER,
            payload:response
        })
    }catch(e){
        dispatch({
          type: GET_CURRENT_USER,
          payload: e.response,
        });
    }
}

export const userForgetPassword = (data)=> async (dispatch)=>{
    try{
        const response = await useCreateData(
          "/api/v1/auth/forgotPasswords",
          data
        );
        dispatch({
            type:FORGET_PASSWORD,
            payload:response
        })
    }catch(e){
        dispatch({
            type:FORGET_PASSWORD,
            payload:e.response
        })
    }
}