import {Container,Row,Col} from "react-bootstrap";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminAllProduct from "../../components/Admin/AdminAllProduct";
import Paginate from "../../components/Common/Paginate";

const AllProductPage = () => {
  return (
    <Container>
        <Row className="py-3">
            <Col sm="3" xs="2" md="2">
                <AdminSidebar/>
            </Col>
            <Col sm="9" xs="10" md="10">
                <AdminAllProduct/>
                <Paginate/>
            </Col>
        </Row>
    </Container>
  )
}

export default AllProductPage