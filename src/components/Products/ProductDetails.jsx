import { Col, Row } from "react-bootstrap"
import ProductGallery from "./ProductGallery"
import ProductDescription from "./ProductDescription";
import RateContainer from "../Rate/RateContainer";
import ProductCartContainer from "./ProductCartContainer";


const ProductDetails = () => {
  return (
    <>
      <Row className="py-5">
        <Col lg="4">
          <ProductGallery />
        </Col>
        <Col lg="8">
          <ProductDescription />
        </Col>
      </Row>
      <Row>
        <Col>
          <RateContainer />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProductCartContainer title={"Products you may like"} btntitle={"more"} pathText={"/products"}  />
        </Col>
      </Row>
    </>
  );
}

export default ProductDetails;