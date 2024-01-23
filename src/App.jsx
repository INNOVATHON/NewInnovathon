
import "./app.scss";
import Landing from "./pages/Landing/Landing";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Cursor from "./components/cursor/Cursor";


const App = () => {
  const [preLoader,setPreLoader] = useState(true);
  return (
    <div class="bg-animation">
      <Router>
        <Cursor/>
      
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<Registration/>}/>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
