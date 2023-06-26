

import CategoryContainer from "../../components/Category/CategoryContainer"
import Paginate from "../../components/Common/Paginate"
import AllCategoryPageHook from "../../hook/Category/AllCategoryPageHook";

const AllCategory = () => {
  const [categories, loading, getPage, pageCount] = AllCategoryPageHook();
    
  return (
    <>
      <CategoryContainer data={categories.data} loading={loading} />
      {
        pageCount > 1 ? (
        <Paginate pageCount={pageCount} onPress={getPage}/>
        ):null
      }
    </>
  );
}

export default AllCategory