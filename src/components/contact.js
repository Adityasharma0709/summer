import { useNavigate } from "react-router-dom";
import "../css/button.css";
function Contact() {
  const history=useNavigate();
  return (
    <>
     <button className="contact" onClick={() =>history("/Contact")} style={{cursor:"pointer"}}>contact Us</button>
    </>
  );
}
export default Contact;
