import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import ContactPage from "../pages/contact";
import Signin from "../pages/Signin";
function Routecomponents() {
  return (
    <Routes>
      <Route extact={true} path="/" element={<HomePage />} />
      <Route extact={true} path="/Contact" element={<ContactPage/>} />
      {/* <Route extact={true} path="/Contact" element={<Signin/>}/> */}
    </Routes>
  );
}
export default Routecomponents;
