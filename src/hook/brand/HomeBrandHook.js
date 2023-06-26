import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBrand } from '../../redux/actions/brandAction';

const HomeBrandHook = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(getAllBrand())
  },[]);
  const brands = useSelector(state=> state.allBrand.brand);
  const loading = useSelector(state=> state.allBrand.loading);

  return [brands,loading]
}

export default HomeBrandHook