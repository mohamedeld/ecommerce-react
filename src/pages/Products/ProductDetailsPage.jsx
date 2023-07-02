
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import ProductDetails from '../../components/Products/ProductDetails'
import { useParams } from 'react-router-dom'
const ProductDetailsPage = () => {
  const {id} = useParams();
  return (
    <div style={{minHeight:"680px"}}>
        <CategoryHeader/>
        <Container>
            <ProductDetails id={id}/>
            
        </Container>
    </div>
  )
}

export default ProductDetailsPage