import { Col, Container,Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center">
          <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto title-login">Login</label>
            <input
              placeholder="email"
              type="email"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="password"
              type="password"
              className="user-input my-3 text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4">Login</button>
            <label className="mx-auto my-4 d-flex">
              Don't have an account? {"  "}
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                <span
                  style={{ cursor: "pointer", textDecoration: "none" }}
                  className="text-danger"
                >
                  Click Here
                </span>
              </NavLink>
            </label>
          </Col>
          <label className="mx-auto my-4 d-flex">
            <NavLink to="/admin/products" style={{ textDecoration: "none" }}>
              <span
                style={{ cursor: "pointer", textDecoration: "none" }}
                className="text-danger"
              >
                Admin
              </span>
            </NavLink>
          </label>
          <label className="mx-auto my-4 d-flex">
            <NavLink to="/user/allorders" style={{ textDecoration: "none" }}>
              <span
                style={{ cursor: "pointer", textDecoration: "none" }}
                className="text-danger"
              >
                user
              </span>
            </NavLink>
          </label>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage