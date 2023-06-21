
import UnopDropdown from "unop-react-dropdown";

const SearchCountResult = ({title,sort}) => {
    const handler = () => {}
  return (
    <>
      <div className="d-flex justify-content-between pt-3 px-2">
        <div className="sub-tile">{title}</div>
        <div className="search-count-text d-flex ">
          <UnopDropdown
            onAppear={handler}
            onDisappearStart={handler}
            trigger={
              <p className="mx-1">
                <img
                  width="20px"
                  height="20px"
                  className="ms-1"
                  src={sort}
                  alt=""
                />
                Filter By
              </p>
            }
            delay={0}
            align="CENTER"
            hover
          >
            <div className="card-filter">
              <div className="border-bottom card-filter-item">Best Seller</div>
              <div className="border-bottom card-filter-item">
                Most Rating
              </div>
              <div className="border-bottom card-filter-item">
                Price from older to newest
              </div>
              <div className=" card-filter-item">Price from newest to order</div>
            </div>
          </UnopDropdown>
        </div>
      </div>
    </>
  );
}

export default SearchCountResult