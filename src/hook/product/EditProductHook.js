import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import { getOneCategory } from "../../redux/actions/subCategoryAction";

import notify from "../useNotification";
import { getOneProducts, updateProduct } from "../../redux/actions/productAction";
const EditProductHook = (id) => {
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState(0);
  const [priceAfter, setPriceAfter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState([]);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState([]);
  const [selectColorPicker, setSelectColorPicker] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const onChangeProdName = (e) => {
    e.persist();
    setProdName(e.target.value);
  };
  const onChangeProdDescription = (e) => {
    e.persist();
    setProdDescription(e.target.value);
  };
  const onChangePriceBefore = (e) => {
    e.persist();
    setPriceBefore(e.target.value);
  };
  const onChangePriceAfter = (e) => {
    e.persist();
    setPriceAfter(e.target.value);
  };
  const onChangeQuantity = (e) => {
    e.persist();
    setQuantity(e.target.value);
  };
  const onChangeSelectedColorPicker = (e) => {
    e.persist();
    setSelectColorPicker(!selectColorPicker);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const run = async()=>{
        await dispatch(getOneProducts(id));
        await dispatch(getAllCategory());
        await dispatch(getAllBrand());
    }
    run();
  }, []);


  const categories = useSelector((state) => state.allCategory.category);
  const brands = useSelector((state) => state.allBrand.brand);
  const subCategories = useSelector((state) => state.subCategory.subcategory);
  // get one product details
  const productOne = useSelector((state) => state.allProduct.oneProduct);

  useEffect(()=>{
    if(productOne.data){
        setImages(productOne.data.images);
        setProdName(productOne.data.title);
        setProdDescription(productOne.data.description);
        setPriceBefore(productOne.data.price);
        setQuantity(productOne.data.quantity);
        setCategoryId(productOne.data.category);
        setBrandId(productOne.data.brand);
        setSelectedColors(productOne.data.availableColors);
    }
  },[productOne])


  const onSelect = (selectedList) => {
    setSelectedSubCategoryId(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubCategoryId(selectedList);
  };
  const onSelectCategory = async (event) => {
    try {
      if (event.target.value === 0) {
        return;
      }
      setCategoryId(event.target.value);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (categoryId != 0) {
        const run = async()=>{
            await dispatch(getOneCategory(categoryId));
        }
        run();
      
    }
  }, [categoryId]);

  useEffect(() => {
    if(subCategories && subCategories.data){
        setOptions(subCategories.data);
    }
  },[subCategories])

  const onSelectBrand = (event) => {
    setBrandId(event.target.value);
  };
  const handleChangeComplete = (color) => {
    setSelectedColors([...selectedColors, color.hex]);
    setSelectColorPicker(!selectColorPicker);
    
  };
  const removeColor = (color) => {
    const newColors = selectedColors.filter((e) => e !== color);
    setSelectedColors(newColors);
  };
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0 ||
      categoryId === 0
    ) {
      notify("please enter data", "warn");
      return;
    }
    if (priceBefore > priceAfter) {
      notify("price before should be less than price after", "warn");
      return;
    }
    const convertURLToFile = async(url)=>{
        const response = await fetch(url,{mode:"cors"});
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = {type:`image/${ext}`}
        return new File([data],Math.random(),metadata);
    }
    let imgCover;
    if(images[0].length <= 1000){
        convertURLToFile(images[0]).then(val=> console.log(val)).catch(err=>console.log(err));
    }
    imgCover = dataURLtoFile(images[0], Math.random() + ".png");

    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", quantity);
    formData.append("price", priceBefore);
    formData.append("imageCover", imgCover);
    formData.append("category", categoryId);
    formData.append("brand", brandId);
    selectedColors.map((color) => formData.append("availableColors", color));
    selectedSubCategoryId.map((subId) =>
      formData.append("subcategory", subId._id)
    );
    itemImages.map((item) => formData.append("images", item));
    setLoading(true);
    await dispatch(updateProduct(id,formData));
    setLoading(false);
    
  };
  const products = useSelector((state) => state.allProduct.products);
  useEffect(() => {
    if (loading === false) {
      setProdName("");
      setProdDescription("");
      setSelectedColors([]);
      setCategoryId(0);
      setImages([]);
      setPriceAfter(0);
      setPriceBefore(0);
      setQuantity(0);
      setBrandId(0);
      setSelectedSubCategoryId([]);
      setTimeout(() => setLoading(true), 1500);
      if (products) {
        if (products.status === 201) {
          notify("your data was Edited", "success");
        } else {
          notify("there is an error", "error");
        }
      }
    }
  }, [loading]);

  return [
    prodName,
    prodDescription,
    priceBefore,
    priceAfter,
    images,
    selectedColors,
    selectColorPicker,
    handleSubmit,
    onRemove,
    onSelectBrand,
    handleChangeComplete,
    removeColor,
    categories,
    brands,
    onSelect,
    onSelectCategory,
    options,
    quantity,
    crop,
    onChangeProdName,
    onChangeProdDescription,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQuantity,
    onChangeSelectedColorPicker,
    setImages,
    categoryId
  ];
};

export default EditProductHook;

