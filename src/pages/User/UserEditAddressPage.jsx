import {Container,Col,Row} from "react-bootstrap";
import UserSidebar from "../../components/User/UserSidebar";
import UserEditAddress from "../../components/User/UserEditAddress";
const UserEditAddressPage = () => {
  return (
    <>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <UserSidebar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <UserEditAddress />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserEditAddressPage