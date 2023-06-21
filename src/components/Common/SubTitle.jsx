import { NavLink } from "react-router-dom";

const SubTitle = ({title,btntitle,pathText}) => {
  return (
    <>
        <div className="d-flex justify-content-between pt-4">
            <div className="sub-title">{title}</div>
            {btntitle?(
              <NavLink to={`${pathText}`} style={{textDecoration:"none"}}>
                <div className="shopping-now">{btntitle}</div>
              </NavLink>
            ):null}
        </div>
    </>
  )
}

export default SubTitle