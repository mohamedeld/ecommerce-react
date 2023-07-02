import { Col, Container, Row } from "react-bootstrap"
import CategoryHeader from "../../components/Category/CategoryHeader"
import SearchCountResult from "../../components/Common/SearchCountResult"

import sort from "../../assets/images/sort.png";
import SideFilter from "../../components/Common/SideFilter";
import ProductCartContainer from "../../components/Products/ProductCartContainer";
import Paginate from "../../components/Common/Paginate";
import { ViewSearchResultProductHook } from "../../hook/product/ViewSearchResultProductHook";

const ShopProductPage = () => {
  const [items, pageCount, onPress] = ViewSearchResultProductHook();
  
  return (
    <div style={{ minHeight: "680px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult
          title={`There are ${items.length} products`}
          sort={sort}
        />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <ProductCartContainer title={""} btntitle={""} products={items} />
          </Col>
        </Row>
        <Paginate pageCount={pageCount} onPress={onPress} />
      </Container>
    </div>
  );
}

export default ShopProductPage