import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProducts } from '../../redux/actions/productAction';
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
  return [item, images, categories, brands];
}

export default ViewProductDetailsHook