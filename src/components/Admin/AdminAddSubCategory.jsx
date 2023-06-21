import {Row,Col} from "react-bootstrap";
const AdminAddSubCategory = () => {
  return (
    <>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new SubCategory</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="SubCategory Name"
          />
          <select name="languages" id="lang" className="select mt-3 px-2 ">
            <option value="val">First Category </option>
            <option value="val2">Second Category</option>
            <option value="val2">Third Category</option>
            <option value="val2">Fourth Category</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">Save Changes</button>
        </Col>
      </Row>
    </>
  );
}

export default AdminAddSubCategory