
import { Container, Row,Col, Spinner } from 'react-bootstrap'
import SubTitle from '../Common/SubTitle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../../hook/brand/HomeBrandHook'
const BrandCardContainer = ({title,btntitle}) => {
  const [brands, loading] = HomeBrandHook();
  return (
    <>
      <Container>
        <SubTitle title={title} btntitle={btntitle} pathText={"/all-brands"} />
        <Row className="my-1 d-flex justify-content-between">
          {
            loading ===false?(
              brands.data ?(
                brands.data.slice(0,6).map((brand) => (
                            <BrandCard img={brand.image} key={brand._id} />
                          ))
              ):<h4>There are no brands</h4>
            ):<Spinner animation="border" variant="primary"/>
            
          }
        </Row>
      </Container>
    </>
  );
}

export default BrandCardContainer