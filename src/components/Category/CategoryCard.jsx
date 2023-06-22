import { Col } from "react-bootstrap"

const CategoryCard = ({img,background,title}) => {
  return (
    <>
        <Col xs="6" sm="6" md="4" lg="2" className="my-4 d-flex justify-content-around align-items-center">
            <div className="allCard mb-3">
                <div className="category-card" style={{backgroundColor:`${background}`}}>{" "}
                </div>
                <img src={img} alt="category" style={{width:"100px", objectFit:"cover"}}/>
                <p className="category-card-text my-2">{title}</p>
            </div>
        </Col>
    </>
  )
}

export default CategoryCard