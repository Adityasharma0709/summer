import { useNavigate } from "react-router-dom";

function Pro() {
  const history = useNavigate();
  return (
    <>
      <button
        className="prop"
        style={{ height: "40px", width: "40px" }} 
        onClick={() => history("/account")}
      >
        <img alt="profile"/>
      </button>
    </>
  );
}
export default Pro;
