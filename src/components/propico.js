import { useNavigate } from "react-router-dom";
import Logo from "../assests/1722788385688.jpg"
function Pro() {
  const history = useNavigate();
  return (
    <>
      <button
        className="prop"
        style={{ height: "40px", width: "40px" }} 
        onClick={() => history("/account")}
      >
        <img src={Logo} alt="profile"/>
      </button>
    </>
  );
}
export default Pro;
