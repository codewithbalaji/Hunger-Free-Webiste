import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import "./App.css";
import Logins from "./Pages/Logins";
import Registers from "./Pages/Registers";
import Contact from "./Pages/Contact";
import Reviews from "./Pages/Reviews";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/logins" element={<Logins/>} />
        <Route path="/registers" element={<Registers/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/reviews" element={<Reviews/>} />
       
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
