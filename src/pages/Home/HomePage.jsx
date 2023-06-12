import BrandCardContainer from "../../components/Brand/BrandCardContainer"
import Footer from "../../components/Common/Footer"
import NavBarLogin from "../../components/Common/NavBarLogin"
import Discount from "../../components/Home/Discount"
import HomeCategory from "../../components/Home/HomeCategory"
import Slider from "../../components/Home/Slider"
import ProductCartContainer from "../../components/Products/ProductCartContainer"

const HomePage = () => {
  return (
    <>
        <NavBarLogin/>
        <Slider/>
        <HomeCategory/>
        <ProductCartContainer title={"Best Seller"} btntitle={"More"}/>
        <Discount title={"Up to 30% discount on laptops"}/>
        <ProductCartContainer title={"High Rating"} btntitle={"More"}/>
        <BrandCardContainer title={"Brands"} btntitle={"More"}/>
        <Footer/>
    </>
  )
}

export default HomePage