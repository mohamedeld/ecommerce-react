import AdminAllOrder from "../../components/Admin/AdminAllOrder"
import {Container,Row,Col } from "react-bootstrap";
import AdminSidebar from "../../components/Admin/AdminSidebar";
const AdminAllOrdersPage = () => {
  return (
    <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <AdminSidebar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <AdminAllOrder/>
          </Col>
          </Row>
    </Container>
  )
}

export default AdminAllOrdersPage