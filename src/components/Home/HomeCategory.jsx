import { useEffect } from "react";
import { Container,Row, Spinner } from "react-bootstrap"
import SubTitle from "../Common/SubTitle"
import CategoryCard from "../Category/CategoryCard"
import { useDispatch, useSelector } from "react-redux";

import { getAllCategory } from "../../redux/actions/categoryAction";

const HomeCategory = () => {
    const colors = [
      "#f4dba4",
      "#0034ff",
      "#ff6262",
      "#FFD3E8",
      "#F4DBA5",
      "#55CFDF",
    ];
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getAllCategory())
    },[])
    const categories = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
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