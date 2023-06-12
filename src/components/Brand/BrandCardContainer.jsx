import React from 'react'
import SubTitle from '../Common/SubTitle'
import BrandCard from './BrandCard'
import { Container, Row } from 'react-bootstrap'
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
const BrandCardContainer = ({title,btntitle}) => {
  return (
    <>
        <Container>
        <SubTitle title={title} btntitle={btntitle}/>
        <Row className="my-1 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        </Row>
        </Container>
    </>
  )
}

export default BrandCardContainer