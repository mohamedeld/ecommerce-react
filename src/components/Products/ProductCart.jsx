import { Card, Col } from "react-bootstrap";
import {NavLink} from "react-router-dom"; 
import favoff from "../../assets/images/fav_off.png";
import rate from "../../assets/images/rate.png";
import prod1 from "../../assets/images/prod1.png";

const ProductCart = ({product}) => {
  
  return (
    <>
      <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
        <Card
          className="my-2"
          style={{
            width: "100%",
            height: "345px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          }}
        >
          <NavLink
            to={`/products/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <Card.Img
              style={{ height: "228px", width: "100%" }}
              src={product.imageCover}
            />
          </NavLink>
          <div className="d-flex justify-content-end mx-2">
            <img
              src={favoff}
              alt=""
              className="text-center"
              style={{
                height: "24px",
                width: "26px",
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <div className="card-title">{product.title}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between ">
                <div className="d-flex">
                  <img
                    className=""
                    src={rate}
                    alt=""
                    height="16px"
                    width="16px"
                  />
                  <div className="card-rate mx-2">
                    {product.ratingsQuantity}
                  </div>
                </div>
                <div className="d-flex">
                  <div className="card-price">{product.price}</div>
                  <div className="card-currency mx-1">Pound</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductCart;
