import {Row} from "react-bootstrap";
import ProductCart from '../Products/ProductCart'
import Paginate from '../Common/Paginate'

const UserFavorite = () => {
  return (
    <>
      <div className="admin-content-text pb-4">Favorites Menu</div>
      <Row className="justify-content-start">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </Row>
      <Paginate />
    </>
  );
}

export default UserFavorite