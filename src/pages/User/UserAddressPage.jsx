import {Container,Row,Col} from "react-bootstrap";
import UserSidebar from "../../components/User/UserSidebar";
import UserAddress from "../../components/User/UserAddress";
const UserAddressPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <UserSidebar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserAddress />
        </Col>
      </Row>
    </Container>
  );
}

export default UserAddressPage