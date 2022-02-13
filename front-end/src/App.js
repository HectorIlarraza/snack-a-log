import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snacks" element={<Index />}/>
        <Route path="/snacks/:id" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
