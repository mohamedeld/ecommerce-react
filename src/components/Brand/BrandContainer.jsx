import {useState} from 'react';
import {Container,Row} from "react-bootstrap";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand1.png";
import BrandCard from './BrandCard';

const BrandContainer = () => {
    const [brands, setBrands] = useState([
      { img: brand1 },
      { img: brand2 },
      { img: brand3 },
      { img: brand4 },
      { img: brand1 },
      { img: brand2 },
      { img: brand3 },
      { img: brand4 },
      { img: brand1 },
      { img: brand2 },
      { img: brand3 },
      { img: brand4 },
    ]);
  return (
    <>
      <Container>
        
        <Row className="my-1 d-flex justify-content-between">
          {brands.map((brand, index) => (
            <BrandCard img={brand.img} key={index} />
          ))}
          <BrandCard img={brand1} />
        </Row>
      </Container>
    </>
  );
}

export default BrandContainer