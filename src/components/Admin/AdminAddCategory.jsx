
import {Row,Col} from "react-bootstrap";
import AddCategoryHook from "../../hook/Category/AddCategoryHook";
import { ToastContainer  } from "react-toastify";

const AdminAddCategory = () => {
  const [img, name, handleSave, onImageChange, onChangeName] =
    AddCategoryHook();
  return (
    <>
      <ToastContainer />
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New Category</div>
        <Col sm="8">
          <div className="text-form pb-2">Category Image</div>
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
            onChange={onChangeName}
            value={name}
            className="input-form d-block mt-3 px-3"
            placeholder="Category Name"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSave} className="btn-save d-inline mt-2 ">
            Save Changes
          </button>
        </Col>
      </Row>
    </>
  );
}

export default AdminAddCategory