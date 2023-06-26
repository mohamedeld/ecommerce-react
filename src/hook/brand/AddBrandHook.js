import  { useState } from 'react'
import avatar from "../../assets/images/avatar.png";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import notify from '../useNotification';
import { createBrand } from '../../redux/actions/brandAction';
const AddBrandHook = () => {
  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [img, setImg] = useState(avatar);
  const [selectedFile,setSelectedFile] = useState(null);
  const [loading,setLoading] = useState(true);
  const [isPress,setIsPress] = useState(false);

  const response = useSelector((state) => state.allBrand.brand);
  const onImageChange = (event)=>{
    if(event.target.files && event.target.files[0]){
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0])
    }
  }
  const handleSave = async (event)=>{
    event.preventDefault();
    if(name === null || selectedFile === null){
      notify("Please Enter data","warn");
      return;
    }
    const formData = new FormData();
    formData.append("name",name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(createBrand(formData));
    setLoading(false);
    notify("your data is saved","success")
  }
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  useEffect(()=>{
    if(loading === false){
      setName("");
      setImg(avatar);
      setSelectedFile(null);
      setLoading(true);
      setIsPress(false);
      if (response.status === 201) {
        notify("Data Added", "success");
      } else {
        notify("not added", "error");
      }
    }
  },[loading])
  return [name, img,handleSave, onImageChange, onChangeName];
}

export default AddBrandHook