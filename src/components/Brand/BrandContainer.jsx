
import {Container,Row, Spinner} from "react-bootstrap";

import BrandCard from './BrandCard';
import Paginate from "../Common/Paginate";
import AllBrandHook from "../../hook/brand/AllBrandHook";

const BrandContainer = () => {
    const [brands, loading, pageCount, getPage] = AllBrandHook;
  return (
    <>
      <Container>
        <Row className="my-1 d-flex justify-content-between">
          {loading === false ? (
            brands.data ? (
              brands.data.map((brand, index) => (
                <BrandCard img={brand.img} key={index} />
              ))
            ) : (
              <h4>there are no data</h4>
            )
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </Row>
        <Paginate onPress={getPage} pageCount={pageCount} />
      </Container>
    </>
  );
}

export default BrandContainer