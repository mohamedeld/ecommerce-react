import { useEffect } from "react";

import CategoryContainer from "../../components/Category/CategoryContainer"
import Paginate from "../../components/Common/Paginate"
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getAllCategoryPage } from "../../redux/actions/categoryAction";


const AllCategory = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCategory(6))
    },[])
    const categories = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
    let pageCount = 0;
    if(categories.paginationResult){
      pageCount= categories.paginationResult.numberOfPages;
    }
    const getPage = (page) => {
      dispatch(getAllCategoryPage(page));
      console.log(page);
    };
  return (
    <>
      <CategoryContainer data={categories.data} loading={loading} />
      {
        pageCount > 1 ? (
        <Paginate pageCount={pageCount} onPress={getPage}/>
        ):null
      }
    </>
  );
}

export default AllCategory