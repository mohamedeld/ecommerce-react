import {Container,Col,Row} from "react-bootstrap";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminEditProduct from "../../components/Admin/AdminEditProduct";

const AdminEditProductPage = () => {
  return (
    <>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <AdminSidebar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <AdminEditProduct />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminEditProductPage