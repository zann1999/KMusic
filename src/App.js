import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.js";
import Profile from "./pages/Profile/index.js";
import Kmchart from "./pages/kmchart";
import NavBar from "./navbar";
import { memo } from "react";
import Header from "./component/header";
import PlayMusic from "./PlayMusic";
import Radio from "./pages/radio";
import Newmusic from "./pages/Newmusic";
import Follow from "./pages/Follow";
import Typemusic from "./pages/Typemusic";
import Top100 from "./pages/Top100";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <PlayMusic />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/kmchart" element={<Kmchart />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/newmusic" element={<Newmusic />} />
          <Route path="/typemusic" element={<Typemusic />} />
          <Route path="/top100" element={<Top100 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default memo(App);
