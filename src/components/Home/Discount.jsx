import { Col, Container,Row } from "react-bootstrap"
import labtops from "../../assets/images/laptops.png";
const Discount = ({title}) => {
  return (
    <>
        <Container>
            <Row className="discount-backcolor my-3 mx-2 d-flex text-center align-items-center" >
                <Col sm="6">
                    <div className="discount-title">
                        {title}
                    </div>
                </Col>
                <Col sm="6">
                    <img className="discount-img" src={labtops} alt="labtops" />
                </Col>
            </Row>
        </Container>

    </>
  )
}

export default Discount