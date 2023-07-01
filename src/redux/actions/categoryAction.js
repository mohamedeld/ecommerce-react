
import {  useCreateDataWithImage } from "../../hooks/useCreateData";
import { useGetData } from "../../hooks/useGetData";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from "../type";
export const getAllCategory =(limit)=> async(dispatch)=>{
    try{
        //const response = await baseURL.get("/api/v1/categories");
        const response = await useGetData(`/api/v1/categories?limit=${limit}`);
        dispatch( {
            type:GET_ALL_CATEGORY,
            payload:response
        })
    }catch(err){
        dispatch({
          type: GET_ERROR,
          payload: err,
        });
    }
};

export const getOneCategory = (id) => async (dispatch) => {
  try {
    //const response = await baseURL.get("/api/v1/categories");
    const response = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};


export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    //const response = await baseURL.get("/api/v1/categories");
    const response = await useGetData(`/api/v1/categories?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};


export const createCategory = (formData)=> async (dispatch)=>{
    try{
        const response = await useCreateDataWithImage(`/api/v1/categories`,formData);
        dispatch({
            type:CREATE_CATEGORY,
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