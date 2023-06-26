
import {Row,Col, Spinner} from "react-bootstrap";


import { ToastContainer } from "react-toastify";
import AddSubCategoryHook from "../../hook/subCategory/AddSubCategoryHook";

const AdminAddSubCategory = () => {
  const [name, onChangeName, categories, handleChange, handleSubmit] =
    AddSubCategoryHook();
  return (
    <>
      <ToastContainer />
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new SubCategory</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="SubCategory Name"
            value={name}
            onChange={onChangeName}
          />
          <select
            name="categories"
            id="cat"
            className="select mt-3 px-2 "
            onChange={handleChange}
          >
            <option value="0">Choose Category </option>
            {categories.data ? (
              categories.data.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))
            ) : (
              <h4>There are no sub categories</h4>
            )}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            Save Changes
          </button>
        </Col>
      </Row>
    </>
  );
}

export default AdminAddSubCategory