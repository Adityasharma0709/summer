import "../css/button.css";
import Heading from "../components/heading";
import Contact from "../components/contact";
import Propico from "../components/propico"
import LogOut from "../components/Logout"
function NavigationBar() {
  return (
    <nav className="navigationBar">
      <Heading />
      <div className="cont">
        <Contact />
        <Propico/>
        <LogOut/>
      </div>
    </nav>
  );
}

export default NavigationBar;
