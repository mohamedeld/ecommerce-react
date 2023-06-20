

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'

import NavBarLogin from './components/Common/NavBarLogin';
import Footer from "./components/Common/Footer";
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
function App() {

  return (
    <>
      <BrowserRouter>
      <NavBarLogin />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={ <LoginPage/> }/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
