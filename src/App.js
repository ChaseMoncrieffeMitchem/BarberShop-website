import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Product from "./pages/Product";
import "./index.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
