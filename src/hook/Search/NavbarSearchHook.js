import React, { useState } from 'react'
import { ViewSearchResultProductHook } from '../product/ViewSearchResultProductHook';
import { useEffect } from 'react';

const NavbarSearchHook = () => {
  const [search,setSearch] = useState('');
  const [items, pageCount, onPress, getProducts] = ViewSearchResultProductHook();

  const handleChange = (e)=>{
    localStorage.setItem("search",e.target.value);
    setSearch(e.target.value);
    
  }
  useEffect(()=>{
    setTimeout(()=>{
        getProducts();
    },1000);
  },[search])
  return [search,handleChange];

}

export default NavbarSearchHook