import "../css/button.css";
import Heading from "../components/heading";
import Contact from "../components/contact";


function NavigationBar() {

  return (
    <nav className="navigationBar">
      <Heading />
      <Contact />
    </nav>
  );
}

export default NavigationBar;
