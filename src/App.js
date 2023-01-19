import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ImgDes from "./ImgDes";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<Home setSelectedImg={setSelectedImg} />} />
      <Route path="/:id" element={<ImgDes image={selectedImg} />} />
    </Routes>
  );
}

export default App;
