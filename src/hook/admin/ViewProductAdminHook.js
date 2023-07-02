import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsWithPage } from '../../redux/actions/productAction';

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(10));
  },[]);

  const products = useSelector((state) => state.allProduct.allProducts || {});

  let items = [];
  if(products.data){
    items = products;
  }else{
    items = [];
  }
  let pagination = [];
  if(products.paginationResult){
    pagination = products.paginationResult;
  }else{
    pagination = [];
  }

  // calculate page count
  let pageCount = 0;
  if (pagination) {
    pageCount = pagination.numberOfPages;
  } else {
    pageCount = 0;
  }

  const onPress = async (page)=>{
    await dispatch(getAllProductsWithPage(page,10));
  }
  return [items, pageCount,onPress];
}

export default ViewProductAdminHook