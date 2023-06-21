import {Container,Row,Col} from "react-bootstrap";
import rate from "../../assets/images/rate.png"
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Paginate from "../Common/Paginate";
const RateContainer = () => {
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-title d-inline p-1">Rating</div>
          <img className="mt-2" src={rate} width="16px" height="16px" />
          <div className="cat-rate d-inline p-1 pt-2">4.3</div>
          <div className="rate-count d-inline p-1 pt-2">(160 Rate)</div>
        </Col>
      </Row>
      <RatePost/>
      <RateItem />
      <RateItem />
      <Paginate/>
    </Container>
  );
}

export default RateContainer