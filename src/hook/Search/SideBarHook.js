
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { useEffect, useState } from 'react';
import { getAllBrand } from '../../redux/actions/brandAction';
import { ViewSearchResultProductHook } from '../product/ViewSearchResultProductHook';

const SideBarHook = () => {
    const [items, pageCount, onPress, getProducts, results]= ViewSearchResultProductHook();
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async()=>{
        await dispatch(getAllCategory());
        await dispatch(getAllBrand());
    }
    get();
  }, []);
  const categories = useSelector((state) => state.allCategory.category);
  const brands = useSelector((state) => state.allBrand.brand);

  let allCategoires = [];
  if(categories.data){
    allCategoires = categories.data;
  }else{
    allCategoires = []
  }
  let allBrands = [];
  if(brands.data){
    allBrands = brands.data;
  }else{
    allBrands=[];
  }
  const [categoriesChecked, setCategoriesChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  let queryCategory ="";
  
  const clickCategory = (e)=>{
    let value = e.target.value;
    if(value === "0"){
        
        setCategoriesChecked([]);
    }else{
        if(e.target.checked === true){
            
            setCategoriesChecked([...categoriesChecked,value]);
        }else if(e.target.checked === false){
            
            const categoriesArray = categoriesChecked.filter(e=> e !== value);
            setCategoriesChecked(categoriesArray);
        }
    }
    
  }
  useEffect(() => {
    queryCategory = categoriesChecked
      .map((val) => "category[in][]=" + val)
      .join("&");
    localStorage.setItem("categoryChecked", queryCategory);
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [categoriesChecked]);
  let queryBrand = "";
  const clickBrand = (e)=>{
    let value = e.target.value;
    if(value === "0"){
        setBrandChecked([]);
    }else{
        if(e.target.checked === true){
            setBrandChecked([...brandChecked,value]);
        }else if(e.target.checked === false){
            const brandArray = brandChecked.filter(e=> e !== value);
            setBrandChecked(brandArray);
        }
    }
  }
  useEffect(() => {
    queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandChecked", queryBrand);
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [brandChecked]);

  const [pFrom , setPriceFrom ] = useState(0);
  const [pTo,setPriceTo] = useState(0);

  const priceFrom = (e)=>{
    localStorage.setItem("priceFrom",e.target.value);
    setPriceFrom(e.target.value);
  }

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [pFrom, pTo]);

  const priceTo= (e)=>{
    localStorage.setItem("priceTo",e.target.value);
    setPriceTo(e.target.value);
  }
  return [
    allCategoires,
    allBrands,
    clickCategory,
    clickBrand,priceFrom,
    priceTo,
  ];
}

export default SideBarHook