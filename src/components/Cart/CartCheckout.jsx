import {Row,Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const CartCheckout = () => {
  return (
    <>
      <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
        <Col xs="12" className="d-flex  flex-column  ">
          <div className="d-flex  ">
            <input
              className="copon-input d-inline text-center "
              placeholder="Coupon"
            />
            <button className="copon-btn d-inline ">Check</button>
          </div>
          <div className="product-price d-inline w-100 my-3  border">
            34000 Pounds
          </div>
          <NavLink
            to="/order/paymethoud"
            style={{ textDecoration: "none" }}
            className="product-cart-add  d-inline "
          >
            <button className="product-cart-add w-100 px-2 py-3">
              {" "}
              Complete the payment 
            </button>
          </NavLink>
        </Col>
      </Row>
    </>
  );
}

export default CartCheckout