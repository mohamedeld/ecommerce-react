
import { Container,Row, Spinner } from "react-bootstrap"
import SubTitle from "../Common/SubTitle"
import CategoryCard from "../Category/CategoryCard"
import HomeCategoryHook from "../../hook/Category/HomeCategoryHook"

const HomeCategory = () => {
    const [colors, categories, loading] = HomeCategoryHook(); 
  return (
    <>
      <Container>
        <SubTitle
          title={"Categories"}
          btntitle={"more"}
          pathText={"/all-categories"}
        />
        <Row className="my-2 d-flex justify-content-between align-items-center">
          
            {loading === false?(
              categories.data ? (categories.data.slice(0,5).map(category => (
              <CategoryCard
                img={category.image}
                background={colors[Math.floor(Math.random() * 5) + 1]}
                title={category.name}
                key={category._id}
              />
            ))):<h4>No Categories</h4>
            ):<Spinner animation="border" variant="primary"></Spinner>
            }
          
        </Row>
      </Container>
    </>
  );
}

export default HomeCategory