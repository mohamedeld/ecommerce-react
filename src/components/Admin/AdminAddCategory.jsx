import { useState } from "react";
import {Row,Col} from "react-bootstrap";
import avatar from "../../assets/images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/actions/categoryAction";
import { useEffect } from "react";
import { toast,ToastContainer  } from "react-toastify";


const AdminAddCategory = () => {
  const dispatch = useDispatch();

  const [img, setImg] = useState(avatar);
  const [name,setName] = useState("");
  const [selectedFile,setSelectedFile] = useState(null);
  const [loading,setLoading] = useState(true);
  const [isPress,setIsPress] = useState(false);

  const response = useSelector(state=> state.allCategory.category);

  const onImageChange = (event)=>{
    if(event.target.files && event.target.files[0]){
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  }
  const handleSave = async(event)=>{
    event.preventDefault();
    if(name === null || selectedFile === null){
      toast.error("Please enter data");
      return;
    }
    const formData = new FormData();
    formData.append("name",name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(createCategory(formData));
    
    setLoading(false);
  }
  useEffect(()=>{
    if(loading === false){
      setName("");
      setImg(avatar);
      setSelectedFile(null);
      console.log("not loading");
      setLoading(true);
      setIsPress(false);
      if (response.status=== 201){
        toast.success("Data Added");
      } else{
        toast.error("not added")
      }
    }
  },[loading])
  return (
    <>
    <ToastContainer/>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New Category</div>
        <Col sm="8">
          <div className="text-form pb-2">Category Image</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="img"
                height={"100px"}
                width={"120px"}
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            type="text"
            onChange={(e)=> setName(e.target.value)}
            value={name}
            className="input-form d-block mt-3 px-3"
            placeholder="Category Name"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSave} className="btn-save d-inline mt-2 ">Save Changes</button>
        </Col>
      </Row>
    </>
  );
}

export default AdminAddCategory