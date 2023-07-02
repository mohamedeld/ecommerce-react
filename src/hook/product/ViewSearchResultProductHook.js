import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts, getAllProductsWithPage } from "../../redux/actions/productAction";
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
  let pagination = [];
  if (products.paginationResult) {
    pagination = products.paginationResult;
  } else {
    pagination = [];
  }

  // calculate page count
  let pageCount = 0;
  if (pagination) {
    pageCount = pagination.numberOfPages;
  } else {
    pageCount = 0;
  }

  const onPress = async (page) => {
    await dispatch(getAllProductsWithPage(page, 10));
  };
  return [items, pageCount, onPress];
};
