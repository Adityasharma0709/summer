import Logo1 from "../assests/Hero image 1.jpg";
import Logo2 from "../assests/hero image 2.png";
import "../css/universal.css";
import "../css/button.css";
import "../css/homePage.css";
import Navigation from "../components/navigationBar";
import Table from "../components/Table";
function Home() {
  return (
    <>
      <div className="content">
        <div className="top">
          <Navigation />
        </div>
        <div className="main">
          <div className="heading2">
            <p>‘As interesting as a plant’</p>
          </div>
          <div className="logo">
            <img src={Logo2} alt="hero2"></img>
            <img src={Logo1} alt="hero1"></img>
          </div>
        </div>
      </div>
      <div className="TableContent">
        <div style={{ padding: "10px;" }}>
          <h1
            style={{
              color: "rgb(31, 57, 35);",
              fontSize: "35px",
              fontWeight: "lighter",
            }}
          >
            FEATURED PRODUCT
          </h1>
        </div>
        <div  style={{display:'flex', alignItems:"center", justifyContent:"center", height:"100vh"}}>
          <div style={{backgroundColor:"rgb(201, 192, 177)", height:"70%", width:"65%" }}>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
