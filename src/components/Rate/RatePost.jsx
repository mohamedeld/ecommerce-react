import ReactStars from "react-rating-stars-component";
import {Row,Col} from "react-bootstrap";
const RatePost = () => {
    const setting = {
      size: 20,
      count: 5,
      color: "#979797",
      activeColor: "#ffc107",
      value: 7.5,
      a11y: true,
      isHalf: true,
      emptyIcon: <i className="far fa-star" />,
      halfIcon: <i className="fa fa-star-half-alt" />,
      filledIcon: <i className="fa fa-star" />,
      onChange: (newValue) => {
        console.log(`Example 2: new value is ${newValue}`);
      },
    };
  return (
    <>
      <Row className="mt-3 ">
        <Col sm="12" className="me-5  d-flex">
          <div className="rate-name  d-inline ms-3 mt-1 ">Ali Mohamed</div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-flex me-4 pb-2">
          <textarea
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="Comment ...."
          />
          <div className=" d-flex justify-content-end al">
            <button className="product-cart-add px-3  py-2 text-center mt-4 ms-2">
              Add Comment
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RatePost;
