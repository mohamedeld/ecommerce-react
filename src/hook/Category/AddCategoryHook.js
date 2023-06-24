import {useState,useEffect} from 'react'
import avatar from "../../assets/images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/actions/categoryAction";
import notify from "../../hook/useNotification";

const AddCategoryHook = () => {
  const dispatch = useDispatch();

  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const response = useSelector((state) => state.allCategory.category);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleSave = async (event) => {
    event.preventDefault();
    if (name === null || selectedFile === null) {
      notify("Please enter data", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(createCategory(formData));

    setLoading(false);
  };
  const onChangeName=(event)=>{
    setName(event.target.value);
  }
  useEffect(() => {
    if (loading === false) {
      setName("");
      setImg(avatar);
      setSelectedFile(null);
      console.log("not loading");
      setLoading(true);
      setIsPress(false);
      if (response.status === 201) {
        notify("Data Added", "success");
      } else {
        notify("not added", "error");
      }
    }
  }, [loading]);
  return [img,name, handleSave, onImageChange, onChangeName];
}

export default AddCategoryHook