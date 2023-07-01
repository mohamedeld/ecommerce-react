import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/actions/productAction";
export const ViewSearchResultProductHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.allProduct.allProducts);
  let items = [];
  if (products.data) {
    items = products.data;
  } else {
    items = [];
  }
  return [items];
};
