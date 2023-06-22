import baseURL from "../../Api/baseURL";
import { useGetData } from "../../hooks/useGetData";
import { GET_ALL_CATEGORY, GET_ERROR } from "../type";
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
