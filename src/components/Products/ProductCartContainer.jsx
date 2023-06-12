import { Container,Row } from "react-bootstrap"
import SubTitle from "../Common/SubTitle"
import ProductCart from "./ProductCart"

const ProductCartContainer = ({title,btntitle}) => {
  return (
    <>
       <Container>
       <SubTitle title={title} btntitle={btntitle} />
       <Row className="my-2 d-flex justify-content-between align-items-center">
       <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
       </Row>
        
       </Container>
    </>
  )
}

export default ProductCartContainer