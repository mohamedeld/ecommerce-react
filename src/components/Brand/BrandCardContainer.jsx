import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import SubTitle from '../Common/SubTitle'
import BrandCard from './BrandCard'
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand1.png";
import { useState } from 'react';
const BrandCardContainer = ({title,btntitle}) => {
  const [brands,setBrands] = useState([
    {img:brand1},
    {img:brand2},
    {img:brand3},
    {img:brand4},
  ])
  return (
    <>
        <Container>
        <SubTitle title={title} btntitle={btntitle} pathText={"/all-brands"}/>
        <Row className="my-1 d-flex justify-content-between">
        
        {
          brands.map((brand,index)=>(
              <BrandCard img={brand.img} key={index}/>
          ))
        }
        <BrandCard img={brand1} />
        
        
        </Row>
        </Container>
    </>
  )
}

export default BrandCardContainer