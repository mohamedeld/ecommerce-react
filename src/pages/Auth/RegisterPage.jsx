
import { Container,Row,Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import RegisterHook from '../../hook/Auth/RegisterHook';

import { ToastContainer } from 'react-toastify';
const RegisterPage = () => {
  const [
    name,
    email,
    phone,
    password,
    passwordConfirm,
    changeName,
    changeEmail,
    changePhone,
    changePassword,
    changeConfirmPassword,
    loading,
    handleSubmit,
  ] = RegisterHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <ToastContainer />
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center">
          <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto title-login">Register</label>
            <input
              placeholder="user name"
              type="text"
              value={name}
              onChange={changeName}
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="Phone"
              type="number"
              value={phone}
              onChange={changePhone}
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="email"
              type="email"
              value={email}
              onChange={changeEmail}
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={changePassword}
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="confirm Password"
              type="password"
              value={passwordConfirm}
              onChange={changeConfirmPassword}
              className="user-input my-3 text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4" onClick={handleSubmit}>
              Register
            </button>
            <label className="mx-auto my-4 d-flex">
              you have an account? {"  "}
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <span
                  style={{ cursor: "pointer", textDecoration: "none" }}
                  className="text-danger"
                >
                  Click Here
                </span>
              </NavLink>
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegisterPage