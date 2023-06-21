
import next from "../../assets/images/next.png";
const LeftButton = ( onClick, onDisable ) => {
 

  return (
    <>
      <img
        src={next}
        alt=""
        width="36px"
        onClick={onClick}
        onDisable={onDisable}
        height="35px"
        style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
      />
    </>
  );
};

export default LeftButton