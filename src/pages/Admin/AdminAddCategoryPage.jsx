import {Container,Row,Col} from "react-bootstrap";
import AdminSidebar from "../../components/Admin/AdminSidebar";

import AdminAddCategory from "../../components/Admin/AdminAddCategory";
const AdminAddCategoryPage = () => {
  return (
    <>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <AdminSidebar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <AdminAddCategory />
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminAddCategoryPage;