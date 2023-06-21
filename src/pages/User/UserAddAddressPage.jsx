import {Container,Col,Row} from "react-bootstrap";
import UserSidebar from "../../components/User/UserSidebar";
import UserAddAddress from "../../components/User/UserAddAddress";
const UserAddAddressPage = () => {
  return (
    <>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <UserSidebar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <UserAddAddress />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserAddAddressPage