import { FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import login from "../../assets/images/login.png";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
const NavBarLogin = () => {
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
            />
            <Nav className="me-auto">
              <NavLink
                to="/login"
                className="nav-text d-flex mt-3 justify-content-center"
                style={{ textDecoration: "none" }}
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white", textDecoration: "none" }}>Login</p>
              </NavLink>
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