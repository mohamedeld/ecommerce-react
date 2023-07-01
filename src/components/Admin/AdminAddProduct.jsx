import MultiImageInput from "react-multiple-image-input";
import { Row, Col,Spinner } from "react-bootstrap";

import "babel-polyfill";
import { CompactPicker } from "react-color";
import Multiselect from "multiselect-react-dropdown";
import avatar from "../../assets/images/avatar.png";
import add from "../../assets/images/add.png";

import { ToastContainer } from "react-toastify";
import AddProductHook from "../../hook/product/AddProductHook";
const AdminAddProduct = () => {
  const [
    prodName,
    prodDescription,
    priceBefore,
    priceAfter,
    images,
    selectedColors,
    selectColorPicker,
    handleSubmit,
    onRemove,
    onSelectBrand,
    handleChangeComplete,
    removeColor,
    categories,
    brands,
    onSelect,
    onSelectCategory,
    options,
    quantity,
    crop,
    onChangeProdName,
    onChangeProdDescription,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQuantity,
    onChangeSelectedColorPicker,
    setImages,
  ] = AddProductHook();
  // const options = [
  //   { name: "First Category", id: 1 },
  //   { name: "Second Category", id: 2 },
  // ];
  return (
    <>
      <ToastContainer />
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New Product</div>
        <Col sm="8">
          <div className="text-form pb-2"> Product Images </div>

          <MultiImageInput
            images={images}
            setImages={setImages}
            cropConfig={{ crop, ruleOfThirds: true }}
            theme={"light"}
            max={5}
          />

          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Name"
            value={prodName}
            onChange={onChangeProdName}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product Description"
            value={prodDescription}
            onChange={onChangeProdDescription}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price Before Discount"
            value={priceBefore}
            onChange={onChangePriceBefore}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Price"
            value={priceAfter}
            onChange={onChangePriceAfter}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Quantity"
            value={quantity}
            onChange={onChangeQuantity}
          />
          <select
            name="categories"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectCategory}
          >
            <option value="val">Choose Main Category</option>
            {categories.data ? (
              categories.data.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))
            ) : (
              <Spinner animation="border" variant="primary" />
            )}
          </select>

          <Multiselect
            className="mt-2"
            placeholder="SubCategory"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red", textAlign: "left" }}
          />
          <select
            name="brand"
            id="brand"
            onChange={onSelectBrand}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">Brand</option>
            {brands.data ? (
              brands.data.map((brand) => (
                <option value={brand._id} key={brand._id}>
                  {brand.name}
                </option>
              ))
            ) : (
              <Spinner animation="border" variant="primary" />
            )}
          </select>
          <div className="text-form mt-3 ">Available colors of the product</div>
          <div className="mt-1 d-flex">
            {selectedColors.length >= 1
              ? selectedColors.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => removeColor(color)}
                    className="color ms-2 border  mt-1"
                    style={{ backgroundColor: color }}
                  ></div>
                ))
              : null}

            <img
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
              onClick={onChangeSelectedColorPicker}
            />
            {selectColorPicker === true ? (
              <CompactPicker onChangeComplete={handleChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            Save Changes
          </button>
        </Col>
      </Row>
    </>
  );
};

export default AdminAddProduct;
