import BrandCardContainer from "../../components/Brand/BrandCardContainer"

import Discount from "../../components/Home/Discount"
import HomeCategory from "../../components/Home/HomeCategory"
import Slider from "../../components/Home/Slider"
import ProductCartContainer from "../../components/Products/ProductCartContainer"
import ViewHomeProductsHook from "../../hook/product/ViewHomeProductsHook"

const HomePage = () => {
  const [items] = ViewHomeProductsHook();
  return (
    <>
      <Slider />
      <HomeCategory />
      <ProductCartContainer
        products={items}
        title={"Best Seller"}
        btntitle={"More"}
        pathText={"/products"}
      />
      <Discount title={"Up to 30% discount on laptops"} />
      <ProductCartContainer
        products={items}
        title={"High Rating"}
        btntitle={"More"}
      />
      <BrandCardContainer title={"Brands"} btntitle={"More"} />
    </>
  );
}

export default HomePage