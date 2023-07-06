import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts, getAllProductsWithPage, getAllProductsWithSearch } from "../../redux/actions/productAction";
export const ViewSearchResultProductHook = () => {
  let limit = 6;
  const dispatch = useDispatch();
  let priceFromString = "",
    priceToString = "";
  const getProducts = async () => {
    let word = "",queryCategory="",queryBrand = "",priceFrom="",priceTo="";
    if(priceFrom === "" || priceFrom <= 0){
      priceFromString = "";
    }else{
      priceFromString = `price[gt]=${priceFrom}`;
    }
    if(priceTo === "" || priceTo <= 0){
      priceToString = "";
    }else{
      priceToString = `price[lte]=${priceTo}`;
    }
    if(localStorage.getItem("search")!= null) {
      word = localStorage.getItem("search");
    }
    if (localStorage.getItem("categoryChecked") != null) {
      queryCategory = localStorage.getItem("categoryChecked");
    } 
    if (localStorage.getItem("brandChecked") != null){
      queryBrand = localStorage.getItem("brandChecked");
    } 
    if(localStorage.getItem("priceFrom") != null){
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo") != null) {
      priceTo = localStorage.getItem("priceTo");
    }
    sortData();
    await dispatch(
      getAllProductsWithSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCategory}&${queryBrand}&${priceFromString}&${priceToString}`
      )
    );
  };
  useEffect(() => {
    getProducts('');

  }, []);
  const products = useSelector((state) => state.allProduct.allProducts);
  let items = [];
  try{
    if (products.data) {
        items = products.data;
      } else {
        items = [];
      }
  }catch(err){
    console.log(err);
  }
  let results = [];
  try{
    if(products.results){
      results = products.results;
    }else{
      results = [];
    }
  }catch(err){
    console.log(err);
  }
  let pagination = [];
  try{
    if (products.paginationResult) {
        pagination = products.paginationResult;
      } else {
        pagination = [];
      }
  }catch(err){
    console.log(err);
  }
  

  // calculate page count
  let pageCount = 0;
  try{
    if (pagination) {
        pageCount = pagination.numberOfPages;
      } else {
        pageCount = 0;
      }
  }catch(err){
    console.log(err);
  }
  

  const onPress = async (page) => {
    let word = "",
      queryCategory = "",
      queryBrand="",priceFrom="",priceTo="";
      
      if (priceFrom === "" || priceFrom <= 0) {
        priceFromString = "";
      } else {
        priceFromString = `price[gt]=${priceFrom}`;
      }
      if (priceTo === "" || priceTo <= 0) {
        priceToString = "";
      } else {
        priceToString = `price[lte]=${priceTo}`;
      }

    if(localStorage.getItem("search")!=null){
      word = localStorage.getItem("search");
    }
    if (localStorage.getItem("categoryChecked") != null) {
      queryCategory = localStorage.getItem("categoryChecked");
    }
    if (localStorage.getItem("brandChecked") != null) {
      queryBrand = localStorage.getItem("brandChecked");
    }
    if (localStorage.getItem("priceFrom") != null) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo") != null) {
      priceTo = localStorage.getItem("priceTo");
    }  
    sortData();
    await dispatch(
      getAllProductsWithSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCategory}&${queryBrand}&${priceFromString}&${priceToString}`
      )
    );
  };


  // sort in filter
  let sortType= '',sort = '';
  const sortData = ()=>{
    if(localStorage.getItem("sortType") != null){
      sortType = localStorage.getItem("sortType");
    }else{
      sortType = "";
    }
    if(sortType === "Price from older to newest"){
      sort = "+price";
    }else if(sortType === "Price from newest to order"){
      sort = "-price";
    }else if(sortType === "Best Seller"){
      sort = "-sold";
    }else if(sortType === "Most Rating"){
      sort = "-quantity";
    }
  }

  return [items, pageCount, onPress, getProducts, results];
};
