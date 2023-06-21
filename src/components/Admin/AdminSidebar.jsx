import { NavLink
 } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="d-flex flex-column">
          <NavLink to="/admin/allorders" style={{ textDecoration: "none" }}>
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
              Order management
            </div>
          </NavLink>
          <NavLink to="/admin/products" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
              Product management
            </div>
          </NavLink>
          <NavLink to="/admin/addbrand" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
              Add Brand
            </div>
          </NavLink>

          <NavLink to="/admin/addcategory" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
              Add Category
            </div>
          </NavLink>

          <NavLink
            to="/admin/addsubcategory"
            style={{ textDecoration: "none" }}
          >
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
              Add a subcategory
            </div>
          </NavLink>
          <NavLink to="/admin/addproduct" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
              Add Product
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar