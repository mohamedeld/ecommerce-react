import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import createSubCategory from '../../redux/actions/subCategoryAction';
import notify from '../useNotification';
const AddSubCategoryHook = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.allCategory.category);

  const subcategories = useSelector((state) => state.subCategory.subcategory);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const handleChange = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (id === "0" || name === "") {
      notify("please enter your data", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createSubCategory({
        name,
        category: id,
      })
    );
    setLoading(false);
  };
  const onChangeName=(e)=>{
    e.persist();
    setName(e.target.value);
  }
  useEffect(() => {
    if (loading === false) {
      setName("");
      setId("0");
      if (subcategories.status === 201) {
        notify("your data is added", "success");
      } else {
        notify("your data is not added", "error");
      }
      setLoading(true);
    }
  }, [loading]);
  return [name, onChangeName, categories, handleChange, handleSubmit];
}

export default AddSubCategoryHook