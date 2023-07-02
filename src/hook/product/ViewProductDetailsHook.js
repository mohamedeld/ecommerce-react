import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProducts, getProductLike } from '../../redux/actions/productAction';
import mobile1 from "../../assets/images/mobile.png";
import { getOneCategory } from '../../redux/actions/categoryAction';
import { getOneBrands } from '../../redux/actions/brandAction';
const ViewProductDetailsHook = (id) => {
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProducts(id));
  },[]);
  const productOne = useSelector(state=> state.allProduct.oneProduct);
  const categoryOne = useSelector((state) => state.allCategory.oneCategory);
  const brandOne = useSelector((state)=> state.allBrand.oneBrand);
  const productsLiked = useSelector((state) => state.allProduct.productLike || {});

  // get product one
  let item = [];
  if (productOne.data) {
    item = productOne.data;
  } else {
    item = [];
  }
  useEffect(()=>{
        if (item.category) {
          dispatch(getOneCategory(item.category));
        }
        if(item.brand){
            dispatch(getOneBrands(item.brand));
        }
        if (item.category) {
          dispatch(getProductLike(item.category));
        }
  },[item])
  // get images
  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    });
  } else {
    images = [{ original: `${mobile1}` }];
  }
  
  // get category
  let categories = [];
  if(categoryOne.data){
    categories = categoryOne.data;
  }else{
    categories = [];
  }

  let brands = [];
  if(brandOne.data){
    brands = brandOne.data;
  }else{
    brands = [];
  }
  let products = [];
  if (productsLiked.data) {
    products = productsLiked.data.slice(0, 4);
  } else {
    products = [];
  }
    return [item, images, categories, brands,products];
}

export default ViewProductDetailsHook