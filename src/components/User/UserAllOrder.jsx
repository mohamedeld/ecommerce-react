import {Row} from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";

const UserAllOrder = () => {
  return (
    <>
      <div className="admin-content-text pb-4">Welcome Mohamed</div>
      <Row className="justify-content-between">
        <UserAllOrderItem />
        <UserAllOrderItem />
        <UserAllOrderItem />
      </Row>
    </>
  );
}

export default UserAllOrder