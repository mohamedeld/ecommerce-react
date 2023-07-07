import React, { useState } from 'react'
import notify from "../../hook/useNotification";
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from "../../redux/actions/authAction";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const RegisterHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [loading,setLoading] = useState(true);


    const changeName = (e)=>{
        setName(e.target.value);
    }
    const changeEmail = (e)=>{
        setEmail(e.target.value);
    }
    const changePhone = (e) => {
        setPhone(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    };
    const changeConfirmPassword = (e) => {
        setPasswordConfirm(e.target.value);
    };
    
    const validationError = ()=>{
        if (name === "" || name.length < 6) {
            notify("enter correct name","warn");
            return;
        }
        if(phone === "" || phone.length < 10){
            notify("number should have 11 nums", "warn");
            return;
        }
        if(email === ""){
            notify("email should include @", "warn");
            return;
        }
        if(password === ""){
            notify("enter your password", "warn");
            return;
        }
        if (password !== passwordConfirm) {
          notify("confirm password is not matched password", "warn");
          return;
        }
        if (passwordConfirm === "") {
          notify("enter confirm password", "warn");
          return;
        }
    }
    const response = useSelector(state => state.authReducer.newuser);
   
    const handleSubmit = async () => {
        
        validationError();

        setLoading(true);
        await dispatch(
          createUser({
            name,
            email,
            password,
            passwordConfirm,
            phone,
          })
        );
        setLoading(false);
    };
    
    useEffect(()=>{
        if (loading === false) {
            if(response){
                console.log(response.data);
                
                    // if (response.data.token) {
                    //     console.log(response.data.token);
                    //   localStorage.setItem("token", response.data.token);

                    //   notify("email is created successfully", "success");
                    //   setName("");
                    //   setPhone("");
                    //   setEmail("");
                    //   setPassword("");
                    //   setPasswordConfirm("");
                    //   setTimeout(() => {
                    //     navigate("/login");
                    //   }, 2000);
                    // }
                    // if (response.data.errors) {
                    //   if (
                    //     response.data.errors[0].msg ===
                    //     "E-mail is already in use"
                    //   ) {
                    //     notify("E-mail is already in use", "warn");
                    //   }
                    // }
               
                
            }            
        }
    },[loading])
    return [
      name,
      email,
      phone,
      password,
      passwordConfirm,
      changeName,
      changeEmail,
      changePhone,
      changePassword,
      changeConfirmPassword,
      loading,
      handleSubmit,
    ];
}

export default RegisterHook;