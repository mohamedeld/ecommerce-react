import { NavLink } from "react-router-dom";
const UserSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="d-flex flex-column">
          <NavLink to="/user/allorders" style={{ textDecoration: "none" }}>
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
              Orders Management 
            </div>
          </NavLink>
          <NavLink to="/user/favoriteproducts" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
              Favorite Products  
            </div>
          </NavLink>
          <NavLink to="/user/addresses" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
              Personal Info 
            </div>
          </NavLink>

          <NavLink to="/user/profile" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
              Profile 
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default UserSidebar;