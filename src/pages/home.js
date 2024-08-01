import Logo1 from "../assests/Hero image 1.jpg";
import Logo2 from "../assests/hero image 2.png";
import "../css/universal.css";
import "../css/button.css"
import "../css/homePage.css"
import Navigation from "../components/navigationBar";
function Home() {
  return (
    <div className="top">
      <Navigation />
      <div className="content">
        <div className="heading2"><p>‘As interesting as a plant’</p></div>
        <div className="logo">
        <img src={Logo2} alt="hero2"></img>
        <img src={Logo1} alt="hero1"></img>
        </div>

      </div>
    </div>
  );
}
export default Home;
