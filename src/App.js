import React from "react";
import "./App.css";
import { About } from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Review from "./Pages/Review";
import Customer from "./Pages/Customer";
import Navbar from "./Components/Navbar";
// import Counter from "./counter/Counter";

function App() {

  const name = "muthu";
  console.log("name:", name);
  // html tag if yue want render js variables use curly braces inside html tag like {name};
  return (
    <div className="main_container">

      {/* wrapper renamed */}
      <Router>
        <Navbar />
        {/* url matches ex: /home /contact */}
        <Routes>
          {/* render particular component only */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Review />} />
          <Route path="/customer" element={<Customer />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </div>
  )


}

export default App;