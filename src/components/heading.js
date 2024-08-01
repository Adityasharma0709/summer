import "../css/button.css"
import { useNavigate } from "react-router-dom";
function Heading() {
  const history=useNavigate();
  return (
    <>
    <h1 className="heading" onClick={() =>history("/")}>B.Planet</h1>
    </>
  );
}
export default Heading;
