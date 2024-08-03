// import ProtectedRoute from "../src/components/ProtectedRoute"
import "./App.css";
// import store from "./redux/store"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import ContactPage from "../src/pages/contact";
import Profile from "../src/pages/profile";
// import { store } from "./store";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/contact" element={<ContactPage />} />
        <Route exact={true} path="/account" element={<Profile />} />
      </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
