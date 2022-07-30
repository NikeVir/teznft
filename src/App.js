import React from "react";
import {Routes,Route} from 'react-router-dom'
import Mint from "./components/Mint";
import Homemint from "./pages/Homemint";
import Profilepage from "./pages/Profilepage";
function App() {
  return (
    <>
    <Routes>
      <Route path="/mint" element={<Mint/>} />
      <Route path="/" element={<Homemint/>} />
      <Route path="/profile" element={<Profilepage/>} />
    </Routes>
    
    </>
  );
}

export default App;
