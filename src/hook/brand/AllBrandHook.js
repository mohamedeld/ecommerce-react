import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getAllBrandsWithPage } from "../../redux/actions/brandAction";

const AllBrandHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand());
  }, []);
  const brands = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);
  let pageCount = 0;
  if (brands.paginationResult){
    pageCount = brands.paginationResult.numberOfPages;
  }
  const getPage = (page)=>{
    dispatch(getAllBrandsWithPage(page))
  }
   return [brands, loading, pageCount, getPage];
};

export default AllBrandHook;
