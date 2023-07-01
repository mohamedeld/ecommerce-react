import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/actions/productAction";
const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.allProduct.allProducts);
  let items = [];
  if(products.data){
    items = products.data.slice(0,4)
  }else{
    items = [];
  }
  return [items];
};

export default ViewHomeProductsHook;
