import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

import mobile1 from "../../assets/images/mobile1.png";
import mobile2 from "../../assets/images/mobile2.png";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";
import ViewProductDetailsHook from "../../hook/product/ViewProductDetailsHook";
const ProductGallery = ({id}) => {
  const [item,images] = ViewProductDetailsHook(id);
  
  return (
    <div className="product-gallary-card  d-flex justfy-content-center align-items-center mt-2">
      <ImageGallery
        items={images}
        defaultImage={mobile1}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
