
import {Row} from "react-bootstrap";
import {Spinner} from "react-bootstrap";
import SideBarHook from "../../hook/Search/SideBarHook";
const SideFilter = () => {
  const [allCategoires, allBrands, clickCategory, clickBrand, priceFrom,priceTo] =
    SideBarHook();
  let localFrom = localStorage.getItem("priceFrom");
  let localTo = localStorage.getItem("priceTo");
  return (
    <>
      <div className="mt-3">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">Category</div>
            <div className="d-flex mt-3">
              <input onChange={clickCategory} type="checkbox" value="0" />
              <div className="filter-sub ms-2 ">All</div>
            </div>
            {allCategoires ? (
              allCategoires.map((category) => (
                <div className="d-flex mt-2" key={category._id}>
                  <input
                    onChange={clickCategory}
                    type="checkbox"
                    value={category._id}
                  />
                  <div className="filter-sub ms-2 ">{category.name}</div>
                </div>
              ))
            ) : (
              <Spinner animation="border" variant="primary" />
            )}
          </div>

          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">Brand</div>
            <div className="d-flex mt-3">
              <input onChange={clickBrand} type="checkbox" value="0" />
              <div className="filter-sub ms-2">All</div>
            </div>
            {allBrands ? (
              allBrands.map((brand) => (
                <div className="d-flex mt-2" key={brand._id}>
                  <input
                    onChange={clickBrand}
                    type="checkbox"
                    value={brand._id}
                  />
                  <div className="filter-sub ms-2 ">{brand.name}</div>
                </div>
              ))
            ) : (
              <Spinner animation="border" variant="primary" />
            )}
          </div>

          <div className="filter-title my-3">Price</div>
          <div className="d-flex">
            <p className="filter-sub my-2">From:</p>
            <input
              className="m-2 text-center"
              type="number"
              value={localFrom}
              onChange={priceFrom}
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">To:</p>
            <input
              className="m-2 text-center"
              type="number"
              onChange={priceTo}
              value={localTo}
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
    </>
  );
}

export default SideFilter