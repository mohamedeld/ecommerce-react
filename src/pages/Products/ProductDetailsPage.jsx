
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import ProductDetails from '../../components/Products/ProductDetails'
const ProductDetailsPage = () => {
  return (
    <div style={{minHeight:"680px"}}>
        <CategoryHeader/>
        <Container>
            <ProductDetails/>
        </Container>
    </div>
  )
}

export default ProductDetailsPage