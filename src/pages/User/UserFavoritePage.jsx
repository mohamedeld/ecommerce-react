
import { Container, Row, Col } from "react-bootstrap";
import UserSidebar from "../../components/User/UserSidebar";
import UserFavorite from "../../components/User/UserFavorite";
const UserFavoritePage = () => {
  return (
    <>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <UserSidebar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <UserFavorite />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserFavoritePage