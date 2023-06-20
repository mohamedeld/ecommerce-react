import BrandCardContainer from "../../components/Brand/BrandCardContainer"

import Discount from "../../components/Home/Discount"
import HomeCategory from "../../components/Home/HomeCategory"
import Slider from "../../components/Home/Slider"
import ProductCartContainer from "../../components/Products/ProductCartContainer"

const HomePage = () => {
  return (
    <>
        
        <Slider/>
        <HomeCategory/>
        <ProductCartContainer title={"Best Seller"} btntitle={"More"}/>
        <Discount title={"Up to 30% discount on laptops"}/>
        <ProductCartContainer title={"High Rating"} btntitle={"More"}/>
        <BrandCardContainer title={"Brands"} btntitle={"More"}/>
        
    </>
  )
}

export default HomePage