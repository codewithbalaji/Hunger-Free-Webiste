import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import "./App.css";
import Contact from "./Pages/Contact";
import Reviews from "./Pages/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
