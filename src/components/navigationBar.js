import "../css/button.css";
import Heading from "../components/heading";
import Contact from "../components/contact";
import Propico from "../components/propico"
function NavigationBar() {
  return (
    <nav className="navigationBar">
      <Heading />
      <div className="cont">
        <Contact />
        <Propico/>
      </div>
    </nav>
  );
}

export default NavigationBar;
