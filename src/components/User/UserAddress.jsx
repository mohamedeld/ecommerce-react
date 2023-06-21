import UserAddressCard from "./UserAddressCard";
import {Row,Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const UserAddress = () => {
  return (
    <>
      <div className="admin-content-text pb-4">Address Books</div>
      <UserAddressCard />
      <UserAddressCard />
      <UserAddressCard />

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <NavLink to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">Add New Address</button>
          </NavLink>
        </Col>
      </Row>
    </>
  );
}

export default UserAddress