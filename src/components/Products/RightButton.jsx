
import previous from "../../assets/images/prev.png";
const RightButton = (onClick,onDisable) => {
  return (
    <>
      <img
        src={previous}
        alt=""
        width="36px"
        onClick={onClick}
        onDisable={onDisable}
        height="35px"
        style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
      />
    </>
  );
}

export default RightButton