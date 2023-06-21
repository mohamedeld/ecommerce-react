import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'

const CategoryHeader = () => {
    const [categoriesHeader, setCategoriesHeader] = useState([
      { name: "All" },
      { name: "Electronics" },
      { name: "Clothes" },
      { name: "Discount" },
      { name: "Discount" },
      { name: "Discount" },
      { name: "Discount" },
      { name: "Discount" },
      { name: "Discount" },
    ]);
  return (
    <>
      <div className="cat-header">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start py-4 flex-wrap">
              {categoriesHeader.map((category,index)=>(
                <div key={index} style={{cursor:"pointer",marginLeft:"10px"}}>{category.name}</div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CategoryHeader