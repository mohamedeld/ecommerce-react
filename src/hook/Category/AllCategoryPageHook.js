import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";

const AllCategoryPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory(6));
  }, []);
  const categories = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  let pageCount = 0;
  if (categories.paginationResult) {
    pageCount = categories.paginationResult.numberOfPages;
  }
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
    console.log(page);
  };
  return [categories, loading, getPage, pageCount];
}

export default AllCategoryPageHook