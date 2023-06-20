import { Container,Row } from "react-bootstrap"
import SubTitle from "../Common/SubTitle"
import CategoryCard from "../Category/CategoryCard"
import sale from '../../assets/images/sale.png';
import clothe from '../../assets/images/clothe.png';
import cat2 from '../../assets/images/cat2.png';
import labtop from '../../assets/images/labtop.png';
import pic from '../../assets/images/pic.png';
import { useState } from "react";

const HomeCategory = () => {
    const [categories,setCategories] = useState([
        {img:labtop,background:"#f4dba4",title:"PC"},
        {img:sale,background:"#f4dba4",title:"SALE"},
        {img:clothe,background:"#0034ff",title:"Clothes"},
        {img:cat2,background:"#f4dba4",title:"PC"},
        {img:pic,background:"#ff6262",title:"PC"},
    ])
  return (
    <>
        <Container>
            <SubTitle title={"Categories"} btntitle={"more"}/>
            <Row className="my-2 d-flex justify-content-between align-items-center">
            {
                categories.map((category,index)=>(
                    <CategoryCard img={category.img} background={category.background} title={category.title} key={index}/>
                ))
            }
            </Row>
        </Container>
    </>
  )
}

export default HomeCategory