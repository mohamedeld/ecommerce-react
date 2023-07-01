import { Container,Row, Spinner } from "react-bootstrap"
import SubTitle from "../Common/SubTitle"
import ProductCart from "./ProductCart"

const ProductCartContainer = ({ title, btntitle, pathText,products }) => {
  return (
    <>
      <Container>
        <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
        <Row className="my-2 d-flex justify-content-between align-items-center">
          {products ? (
            products.map(product => (
              <ProductCart key = {product._id} product={product}/>
              ))
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </Row>
      </Container>
    </>
  );
};

export default ProductCartContainer