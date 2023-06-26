import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";
const HomeCategoryHook = () => {
  const colors = [
    "#f4dba4",
    "#0034ff",
    "#ff6262",
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const categories = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  return [colors,categories,loading];
};

export default HomeCategoryHook;
