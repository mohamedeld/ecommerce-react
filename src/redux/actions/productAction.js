import { useCreateDataWithImage } from "../../hooks/useCreateData"
import { useGetData } from "../../hooks/useGetData";
import { CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_ONE_PRODUCT, GET_PRODUCTS_LIKE } from "../type"


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

export const getAllProducts = ()=> async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/products`);
        dispatch({
            type:GET_ALL_PRODUCT,
            payload:response,
            loading:true
        })
    }catch(err){
        dispatch({
            type: GET_ERROR,
            payload:err
        })
    }
}
export const getOneProducts = (id)=> async (dispatch)=>{
    try {
      const response = await useGetData(
        `/api/v1/products/${id}`
      );
      dispatch({
        type: GET_ONE_PRODUCT,
        payload: response,
        loading: true,
      });
    } catch (err) {
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
};

export const getProductLike = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?category=${id}`);
    dispatch({
      type: GET_PRODUCTS_LIKE,
      payload: response,
      loading: true,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};
