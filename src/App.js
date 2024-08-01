
import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from '../src/pages/home'
import ContactPage from '../src/pages/contact'
function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact={true} path="" element={<Home />} />
    <Route exact={true} path="/contact" element={<ContactPage />} />
  </Routes>
    </div>
  );
}

export default App;
