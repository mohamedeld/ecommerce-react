import { FormControl,NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import login from "../../assets/images/login.png";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import NavbarSearchHook from '../../hook/Search/NavbarSearchHook';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedUser } from '../../redux/actions/authAction';
const NavBarLogin = () => {
  const [search, handleChange] = NavbarSearchHook();
  const dispatch = useDispatch();
  let word = "";
  if(localStorage.getItem("search") != null){
    word = localStorage.getItem("search");
  }
  const [user,setUser] = useState('');
  
  
  const logout = ()=>{
    localStorage.removeItem("user");
    setUser('')
  }
  // const response = useSelector((state) => state.authReducer.currentuser);
  useEffect(()=>{
    if (localStorage.getItem("user") != null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    // dispatch(getLoggedUser())
  },[])
  return (
    <>
      <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} className="logo" alt="logo" />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
              type="search"
              placeholder="search"
              className="me-2 w-100 text-center"
              aria-label="Search"
              value={word}
              onChange={handleChange}
            />
            <Nav className="me-auto">
              {user != '' ? (
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                    <NavDropdown.Item style={{ textDecoration: "none" }}>
                  <NavLink to={"/user/profile"} style={{ textDecoration: "none" }}>
                      Profile
                  </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item style={{ textDecoration: "none" }} onClick={logout}>
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                      Logout
                  </NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink
                  to="/login"
                  className="nav-text d-flex mt-3 justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <img src={login} className="login-img" alt="sfvs" />
                  <p style={{ color: "white", textDecoration: "none" }}>
                    Login
                  </p>
                </NavLink>
              )}
            </Nav>
            <Nav>
              <NavLink
                to="/cart"
                className="nav-text d-flex mt-3 justify-content-center"
                style={{ color: "white", textDecoration: "none" }}
              >
                <img src={cart} className="login-img" alt="sfvs" />
                <p style={{ color: "white", textDecoration: "none" }}>Cart</p>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarLogin