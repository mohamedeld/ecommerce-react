import {Container ,Row,Col} from "react-bootstrap";
import UserSidebar from "../../components/User/UserSidebar";
import UserAllOrder from "../../components/User/UserAllOrder";
const UserAllOrderPage = () => {
  return (
    <>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <UserSidebar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <UserAllOrder />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserAllOrderPage