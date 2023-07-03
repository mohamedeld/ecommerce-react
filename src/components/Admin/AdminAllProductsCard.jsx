import { useState } from "react";
import {Card,Col,Row,Modal,Button} from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import prod1 from "../../assets/images/prod1.png";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/productAction";
const AdminAllProductsCard = ({product}) => {
 
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async()=>{
    await dispatch(deleteProduct(product._id));
    setShow(false);
    window.location.reload();
  }
  return (
    <>
      <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

        <Card
          className="my-2"
          style={{
            width: "100%",
            height: "350px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Row className="d-flex justify-content-center px-2">
            <Col className=" d-flex justify-content-between">
              <div onClick={handleShow} className="d-inline item-delete-edit">
                Delete
              </div>
              <NavLink to={`/admin/editproduct/${product._id}`}>
              <div className="d-inline item-delete-edit">Edit</div>
              </NavLink>
            </Col>
          </Row>
          <NavLink
            to={`/products/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <Card.Img
              style={{ height: "228px", width: "100%" }}
              src={product.imageCover}
            />
            <Card.Body>
              <Card.Title>
                <div className="card-title">{product.title} </div>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-between">
                  <div className="card-rate">{product.ratingsQuantity}</div>
                  <div className="d-flex">
                    <div className="card-currency mx-1">Pound</div>
                    <div className="card-price">{product.price}</div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </NavLink>
        </Card>
      </Col>
    </>
  );
}

export default AdminAllProductsCard