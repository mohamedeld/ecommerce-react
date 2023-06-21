import {Row} from "react-bootstrap";
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProduct = () => {
  return (
    <>
        <div className='admin-content-text'>All Product Management</div>
            <Row className='justify-content-start'>
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
            </Row>
    </>
  )
}

export default AdminAllProduct