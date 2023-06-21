import {Container,Col,Row} from "react-bootstrap";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminAddProduct from "../../components/Admin/AdminAddProduct";
const AdminAddProductPage = () => {
  return (
    <>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <AdminSidebar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <AdminAddProduct />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminAddProductPage