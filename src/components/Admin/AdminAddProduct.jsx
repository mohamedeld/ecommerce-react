import MultiImageInput from "react-multiple-image-input";
import { Row, Col,Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import "babel-polyfill";
import { CompactPicker } from "react-color";
import Multiselect from "multiselect-react-dropdown";
import avatar from "../../assets/images/avatar.png";
import add from "../../assets/images/add.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import { getOneCategory } from "../../redux/actions/subCategoryAction";
import { CreateProduct } from "../../redux/actions/productAction";
import notify from "../../hook/useNotification";
import { ToastContainer } from "react-toastify";
const AdminAddProduct = () => {
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  const [images, setImages] = useState([]);
  const [prodName,setProdName] = useState('');
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState(0);
  const [priceAfter, setPriceAfter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [categoryId, setCategoryId] = useState('');
  const [brandId,setBrandId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState([]);
  const [selectedSubCategoryId,setSelectedSubCategoryId] = useState([]);
  const [selectColorPicker,setSelectColorPicker] = useState(false);
  const [selectedColors , setSelectedColors] = useState([]);
  const [options,setOptions]= useState([]);
  const [loading,setLoading]= useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  },[])
  const categories = useSelector((state) => state.allCategory.category);
  const brands = useSelector((state) => state.allBrand.brand);
  const subCategories = useSelector((state) => state.subCategory.subcategory);
  const onSelect = (selectedList) => {
    setSelectedSubCategoryId(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubCategoryId(selectedList);
  };
  const onSelectCategory =async (event)=>{
    try{
      if (event.target.value === 0) {
        return;
      }
      await dispatch(getOneCategory(event.target.value));
      setCategoryId(event.target.value);
    }catch(err){
      console.log(err);
    }
    
  }
  useEffect(() => {
    if (categoryId != 0 && subCategories && subCategories.data) {
        setOptions(subCategories.data);
    }
  }, [categoryId]);
  const onSelectBrand = (event)=>{
    setBrandId(event.target.value);
  }
  const handleChangeComplete = (color)=>{
    setSelectedColors([...selectedColors, color.hex]);
    setSelectColorPicker(!selectColorPicker)
  }
  const removeColor = (color)=>{
    const newColors = selectedColors.filter((e)=> e !== color);
    setSelectedColors(newColors);
  }
  //to convert base 64 image to file 
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }


  // handle submit button

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(prodName === "" || prodDescription === "" || images.length<=0 || priceBefore <=0 || categoryId === 0){
      notify("please enter data","warn");
      return;
    }
    const imgCover = dataURLtoFile(images[0],Math.random()+".png");

    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>{
      return dataURLtoFile(images[index], Math.random() + ".png");
    })

    const formData= new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity",quantity);
    formData.append("price",priceBefore);
    formData.append("imageCover", imgCover);
    formData.append("category",categoryId);
    formData.append("brand", brandId);
    selectedColors.map(color=> formData.append("availableColors",color));
    selectedSubCategoryId.map((subId) => formData.append("subcategory", subId._id));
    itemImages.map(item=> formData.append("images",item));
    setLoading(true);
    await dispatch(CreateProduct(formData));
    setLoading(false);
  };
  const products = useSelector(state=>state.allProduct.products);
  useEffect(()=>{
    if(loading === false){
      setProdName("");
      setProdDescription("");
      setSelectedColors([]);
      setCategoryId(0);
      setImages([]);
      setPriceAfter(0);
      setPriceBefore(0);
      setQuantity(0);
      setBrandId('');
      setSelectedSubCategoryId([]);
      setTimeout(() => setLoading(true), 1500);
      if(products){
        if(products.status === 201){
          notify("your data was added","success")
        }else{
          notify("there is an error","error");
        }
      }
    }
  },[loading])
  // const options = [
  //   { name: "First Category", id: 1 },
  //   { name: "Second Category", id: 2 },
  // ];
  return (
    <>
    <ToastContainer/>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New Product</div>
        <Col sm="8">
          <div className="text-form pb-2"> Product Images </div>

          <MultiImageInput
            images={images}
            setImages={setImages}
            cropConfig={{ crop, ruleOfThirds: true }}
            theme={"light"}
            max={5}
          />

          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Name"
            value={prodName}
            onChange={(e) => setProdName(e.target.value)}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product Description"
            value={prodDescription}
            onChange={(e) => setProdDescription(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price Before Discount"
            value={priceBefore}
            onChange={(e) => setPriceBefore(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Price"
            value={priceAfter}
            onChange={(e) => setPriceAfter(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <select
            name="categories"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectCategory}
          >
            <option value="val">Choose Main Category</option>
            {categories.data ? (
              categories.data.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))
            ) : (
              <Spinner animation="border" variant="primary" />
            )}
          </select>

          <Multiselect
            className="mt-2"
            placeholder="SubCategory"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red", textAlign: "left" }}
          />
          <select
            name="brand"
            id="brand"
            onChange={onSelectBrand}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">Brand</option>
            {brands.data ? (
              brands.data.map((brand) => (
                <option value={brand._id} key={brand._id}>
                  {brand.name}
                </option>
              ))
            ) : (
              <Spinner animation="border" variant="primary" />
            )}
          </select>
          <div className="text-form mt-3 ">Available colors of the product</div>
          <div className="mt-1 d-flex">
          {
            selectedColors.length >=1 ? (
              selectedColors.map((color,index)=>(
                <div
                  key={index}
                  onClick={()=> removeColor(color)}
                  className="color ms-2 border  mt-1"
                  style={{ backgroundColor: color }}
                ></div>
              ))
            ):null
          }
            
            
            <img src={add} alt="" width="30px" height="35px" style={{cursor:"pointer"}} onClick={()=> setSelectColorPicker(!selectColorPicker)}/>
            {
              selectColorPicker === true ? (<CompactPicker onChangeComplete={handleChangeComplete}/>):null
            }
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">Save Changes</button>
        </Col>
      </Row>
    </>
  );
};

export default AdminAddProduct;
