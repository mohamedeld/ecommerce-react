import { useCreateDataWithImage } from "../../hooks/useCreateData"
import useDeleteData from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_ONE_PRODUCT, GET_PRODUCTS_LIKE } from "../type"


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

export const getAllProducts = (limit)=> async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/products?limit=${limit}`);
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
export const getAllProductsWithPage = (page,limit)=> async(dispatch)=>{
  try{
    const response = await useGetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );
    dispatch({
      type:GET_ALL_PRODUCT,
      payload:response,
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
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

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
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
