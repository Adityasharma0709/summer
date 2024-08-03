import { useNavigate } from "react-router-dom";

function Pro() {
  const history = useNavigate();
  return (
    <>
      <button
        className="prop"
        style={{ height: "25px", width: "25px" }} 
        onClick={() => history("/account")}
      >
        <img alt="profile"/>
      </button>
    </>
  );
}
export default Pro;
