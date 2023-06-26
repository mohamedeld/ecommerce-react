
import { useCreateDataWithImage } from "../../hooks/useCreateData";
import { useGetData } from "../../hooks/useGetData"
import { CREATE_BRAND, GET_ALL_BRANDS, GET_ERROR } from "../type";


export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=${limit}`);
    dispatch({
      type: GET_ALL_BRANDS,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: GET_ERROR, payload: err });
  }
};
export const getAllBrandsWithPage = (page)=> async(dispatch) => {
    try{
        const response = await useGetData(`/api/v1/brands?limit=3&page=${page}`);
        dispatch({
            type:GET_ALL_BRANDS,
            payload:response
        })
    }catch(err){
        dispatch({
            type:GET_ERROR,
            payload: err
        })
    }
}

export const createBrand = (formData)=> async(dispatch)=>{
    try{
        const response = await useCreateDataWithImage(
          `/api/v1/brands`,
          formData
        );
    dispatch({
        type:CREATE_BRAND,
        payload:response
    })
    }catch(err){
        dispatch({
          type: GET_ERROR,
          payload: err,
        });
    }

}