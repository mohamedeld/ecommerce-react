

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'

import NavBarLogin from './components/Common/NavBarLogin';
import Footer from "./components/Common/Footer";
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import AllCategory from './pages/Category/AllCategory';
import AllBrand from './pages/Brand/AllBrand';
import ShopProductPage from './pages/Products/ShopProductPage';
import ProductDetailsPage from './pages/Products/ProductDetailsPage';
import CartPage from './pages/Cart/CartPage';
import { ChoosepaymentMethodPage } from "./pages/CheckOut/ChoosepaymentMethodPAge";
import AllProductPage from './pages/Admin/AllProductPage';
import AdminAllOrdersPage from './pages/Admin/AdminAllOrdersPage';
import AdminAddBrandPage from './pages/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './pages/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './pages/Admin/AdminAddSubCategoryPage';
import AdminAddProductPage from './pages/Admin/AdminAddProductPage';
import AdminOrderDetailPage from './pages/Admin/AdminOrderDetailPage';
import UserAllOrderPage from './pages/User/UserAllOrderPage';
import UserFavoritePage from './pages/User/UserFavoritePage';
import UserAddressPage from './pages/User/UserAddressPage';
import UserEditAddressPage from './pages/User/UserEditAddressPage';
import UserAddAddressPage from './pages/User/UserAddAddressPage';
import UserProfilePage from './pages/User/UserProfilePage';
import AdminEditProductPage from './pages/Admin/AdminEditProductPage';
import ForgetPasswordPage from './pages/Auth/ForgetPasswordPage';
function App() {

  return (
    <>
      <BrowserRouter>
        <NavBarLogin />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/all-categories" element={<AllCategory />} />
          <Route path="/all-brands" element={<AllBrand />} />
          <Route path="/products" element={<ShopProductPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/order/paymethod"
            element={<ChoosepaymentMethodPage />}
          />
          <Route path="/admin/products" element={<AllProductPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route
            path="/admin/editproduct/:id"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path="/user/allorders" element={<UserAllOrderPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoritePage />} />
          <Route path="/user/addresses" element={<UserAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/forget-password" element={<ForgetPasswordPage/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
