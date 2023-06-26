import {Row,Col} from "react-bootstrap";
import avatar from "../../assets/images/avatar.png";
import AddBrandHook from "../../hook/brand/AddBrandHook";
const AdminAddBrand = () => {
  const [name, img,handleSave, onImageChange, onChangeName] = AddBrandHook();
  return (
    <>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New Brand</div>
        <Col sm="8">
          <div className="text-form pb-2">Brand Image</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="img"
                height={"100px"}
                width={"120px"}
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Brand Name"
            onChange={onChangeName}
            value={name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSave}>
            Save Changes
          </button>
        </Col>
      </Row>
    </>
  );
}

export default AdminAddBrand;