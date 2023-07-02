import {Row,Spinner} from "react-bootstrap";
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProduct = ({products}) => {
  return (
    <>
      <div className="admin-content-text">All Product Management</div>
      <Row className="justify-content-start">
        {products.data ? (
          products.data.map((product) => <AdminAllProductsCard product={product} key = {product._id}/>)
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </>
  );
}

export default AdminAllProduct