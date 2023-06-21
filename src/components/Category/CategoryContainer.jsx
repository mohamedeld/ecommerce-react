import {useState} from 'react'
import {Col, Container,Row} from "react-bootstrap";
import CategoryCard from './CategoryCard';
import sale from "../../assets/images/sale.png";
import clothe from "../../assets/images/clothe.png";
import cat2 from "../../assets/images/cat2.png";
import labtop from "../../assets/images/labtop.png";
import pic from "../../assets/images/pic.png";
const CategoryContainer = () => {
    const [categories, setCategories] = useState([
    { img: labtop, background: "#f4dba4", title: "PC" },
    { img: sale, background: "#f4dba4", title: "SALE" },
    { img: clothe, background: "#0034ff", title: "Clothes" },
    { img: cat2, background: "#f4dba4", title: "PC" },
    { img: pic, background: "#ff6262", title: "PC" },
    { img: labtop, background: "#f4dba4", title: "PC" },
    { img: sale, background: "#f4dba4", title: "SALE" },
    { img: clothe, background: "#0034ff", title: "Clothes" },
    { img: cat2, background: "#f4dba4", title: "PC" },
    { img: pic, background: "#ff6262", title: "PC" },
    { img: labtop, background: "#f4dba4", title: "PC" },
    { img: pic, background: "#ff6262", title: "PC" },
    ]);

  return (
    <>
      <Container>
      <div className='py-5 fs-4'>All Categories</div>
        <Row className="my-2 d-flex justify-content-center align-items-center">
          {categories.map((category, index) => (
            <Col xs= "12" sm="6" md="4" lg="3" key={index} className="d-flex justify-content-center">
              <CategoryCard
                img={category.img}
                background={category.background}
                title={category.title}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CategoryContainer