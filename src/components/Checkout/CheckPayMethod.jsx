import {Row,Col} from "react-bootstrap";
const CheckPayMethod = () => {
  return (
    <>
      <div>
        <div className="admin-content-text pt-5">Choose Payment Method </div>
        <div className="user-address-card my-3 px-3">
          <Row className="d-flex justify-content-between ">
            <Col xs="12" className="my-4">
              <input
                name="group"
                id="group1"
                type="radio"
                value="Payment by credit card"
                className="mt-2"
              />
              <label className="mx-2" htmlFor="group1">
                Payment by credit card
              </label>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs="12" className="d-flex">
              <input
                name="group"
                id="group1"
                type="radio"
                value="Payment when recieving"
                className="mt-2"
              />
              <label className="mx-2" htmlFor="group1">
                Payment when recieving
              </label>
            </Col>
          </Row>
        </div>

        <Row>
          <Col xs="12" className="d-flex justify-content-end">
            <div className="product-price d-inline   border">34000 Pounds</div>
            <div className="product-cart-add px-3 pt-2 d-inline ms-2">
              {" "}
              Complete Payment
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CheckPayMethod