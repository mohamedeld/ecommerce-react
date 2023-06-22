
import {Col, Container,Row,Spinner} from "react-bootstrap";
import CategoryCard from './CategoryCard';

const CategoryContainer = ({data,loading}) => {
  const colors = [
    "#f4dba4",
    "#0034ff",
    "#ff6262",
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
   
  ];
    

    
  return (
    <>
      <Container>
      <div className='py-5 fs-4'>All Categories</div>
        <Row className="my-2 d-flex justify-content-center align-items-center">
          {
            loading === false ?(
              data ? (
            data.map(category => (
            <Col xs= "12" sm="6" md="4" lg="3" key={category._id} className="d-flex justify-content-center">
              <CategoryCard
                img={category.image}
                background={colors[Math.floor(Math.random() * 5) + 1]}
                title={category.name}

              />
            </Col>
          ))
              ):<h4>There are not any categories</h4>
            
            ):<Spinner animation="border" variant="primary"></Spinner>
            }
        </Row>
      </Container>
    </>
  );
}

export default CategoryContainer