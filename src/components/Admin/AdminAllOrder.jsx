import {Row} from "react-bootstrap";
import AdminAllOrdersItem from './AdminAllOrdersItem';

const AdminAllOrder = () => {
  return (
    <>
      <div className="admin-content-text">All Orders Management</div>
      <Row className="justify-content-start">
        <AdminAllOrdersItem/>
      </Row>
    </>
  );
}

export default AdminAllOrder