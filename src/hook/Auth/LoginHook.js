import { useState, useEffect } from "react";
import notify from "../../hook/useNotification";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/authAction";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const validationError = ()=>{
    if(email ==="" || !email.includes("@")){
        notify("please enter correct email","warn");
    }
    if(password === ""){
        notify("please enter your password","warn");
    }
  }
  const response = useSelector((state) => state.authReducer.userlogin);
  const handleSubmit = async() => {
    validationError();
    setLoading(true);
    await dispatch(loginUser({
        email,
        password
    }))
    setLoading(false);
  }
  useEffect(()=>{
    if(loading === false){
        if(response){
                if (response.data.token) {
                  localStorage.setItem("token", response.data.token);
                } else {
                  localStorage.removeItem("token");
                }
           
            
            setLoading(true);
        }
    }
  },[loading])
  return [email, password, loading, changeEmail, changePassword, handleSubmit];
};

export default LoginHook;
