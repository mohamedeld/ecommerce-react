import {Row,Col} from "react-bootstrap";
import rate from "../../assets/images/rate.png";

const RateItem = () => {
  return (
    <>
      <Row className="mt-3">
        <Col className="d-flex me-5 py-2">
          <div className="rate-name  d-inline mx-2">Mohamed Elsayed</div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline">4.3</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-flex me-4 pb-2">
          <div className="rate-description  d-inline ms-2">
            A suitable product, its price for the time being, a very good face,
            and it comes with an extra shield
          </div>
        </Col>
      </Row>
    </>
  );
}

export default RateItem