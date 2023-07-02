import {Container,Row,Col} from "react-bootstrap";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminAllProduct from "../../components/Admin/AdminAllProduct";
import Paginate from "../../components/Common/Paginate";
import ViewProductAdminHook from "../../hook/admin/ViewProductAdminHook";

const AllProductPage = () => {
  const [items, pageCount, onPress] = ViewProductAdminHook();
  
  
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSidebar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllProduct products={items} />
          {pageCount > 1 ? (
            <Paginate pageCount={pageCount} onPress={onPress} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}

export default AllProductPage